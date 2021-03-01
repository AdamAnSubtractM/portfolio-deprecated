import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

type FocusEventElement = {
  tabIndex?: number;
  callback: () => any;
};

const StyledFocusEventElement = styled.input`
  position: absolute;
  pointer-events: none;
  cursor: default;
`;

export default function FocusEventElement({
  tabIndex,
  callback,
}: FocusEventElement) {
  const focusElement = useRef(null);

  useEffect(() => {
    const onElementFocus = function () {
      callback?.();
    };
    focusElement?.current?.addEventListener(`focus`, onElementFocus);
    return () =>
      focusElement?.current?.removeEventListener(`focus`, onElementFocus);
  }, [focusElement]);

  return (
    <>
      {/** when the user focuses on this element, it will close the menu so that they arent focus trapped */}
      <StyledFocusEventElement
        type='button'
        ref={focusElement}
        tabIndex={tabIndex || 0}
        aria-label={`Close Menu`}
      />
    </>
  );
}
