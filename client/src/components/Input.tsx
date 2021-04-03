import React from 'react';
import { useThemeKey } from '../helpers/hooks';
import {
  StyledInput,
  StyledLabel,
  StyledRequiredIndicator
} from '../styles/FormStyles';

type InputProps = {
  id: string;
  name: string;
  type?: `text` | `nummber` | `email`;
  label: string;
  hideLabel?: boolean;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
};

export default function Input({
  id,
  type,
  label,
  hideLabel,
  required,
  ...props
}: InputProps) {
  const themeKey = useThemeKey();
  return (
    <div>
      {required && (
        <StyledRequiredIndicator themeKey={themeKey}>*</StyledRequiredIndicator>
      )}
      <StyledLabel htmlFor={id} hideLabel={hideLabel}>
        {label}
      </StyledLabel>
      <StyledInput
        name={id}
        type={type || `text`}
        themeKey={themeKey}
        {...props}
      />
    </div>
  );
}
