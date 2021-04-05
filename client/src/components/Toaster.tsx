import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ToastContext from '../context/ToastContext';
import { useThemeKey, useToast } from '../helpers/hooks';
import { layers, theme } from '../helpers/theme';
import CloseButton from './CloseButton';

type ToastItem = {
  id: number | string;
  content: React.ReactNode;
  position: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
};

type StyledToasterProps = {
  position: ToastItem['position'];
};

type StyledToastContainerProps = {
  id: ToastItem['id'];
  themeKey: ThemeProps['themeKey'];
  position: ToastItem['position'];
};

const StyledToaster = styled.section<StyledToasterProps>`
  position: fixed;
  z-index: ${layers.layer2 + 1};
  top: ${({ position }) =>
    position === 'top-left' || position === 'top-right' ? `2rem` : `initial`};
  bottom: ${({ position }) =>
    position === 'bottom-left' || position === 'bottom-right'
      ? `2rem`
      : `initial`};
  left: ${({ position }) =>
    position === 'top-left' || position === 'bottom-left' ? `2rem` : `initial`};
  right: ${({ position }) =>
    position === 'top-right' || position === 'bottom-right'
      ? `2rem`
      : `initial`};
`;

const StyledToast = styled.div<StyledToastContainerProps>`
  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes toast-in-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  width: 30rem;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${({ themeKey }) => theme[themeKey].toast.background()};
  color: ${({ themeKey }) => theme[themeKey].toast.text()};
  padding: 1rem;
  border-radius: 2rem;
  margin: 1rem;
  transition: transform 0.6s ease-in-out;
  animation: ${({ position }) =>
    position === 'top-left' || position === 'bottom-left'
      ? `toast-in-left .7s`
      : `toast-in-right .7s`};
  box-shadow: ${({ themeKey }) => theme[themeKey].boxShadow};
  .toast {
    &__header {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
    }
    &__content {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 1rem;
      width: 100%;
    }
  }
`;

export default function Toaster() {
  const themeKey = useThemeKey();
  const { deleteToast } = useToast();

  const [toastList] = useContext(ToastContext);
  const [toastItems, setToastItems] = useState<Toast[]>(toastList);

  useEffect(() => {
    setToastItems(toastList);
  }, [toastList]);

  return (
    <StyledToaster position={`bottom-right`}>
      {toastItems.map((toast) => (
        <StyledToast
          key={`toast--${toast.id}`}
          id={toast.id}
          position={toast.position}
          themeKey={themeKey}
        >
          <div className={`toast__header`}>
            <CloseButton onClick={() => deleteToast(toast.id)} />
          </div>
          <div className={`toast__content`}>{toast.content}</div>
        </StyledToast>
      ))}
    </StyledToaster>
  );
}
