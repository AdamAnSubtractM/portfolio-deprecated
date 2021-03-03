import React from 'react';
import { useThemeKey } from '../helpers/hooks';
import { StyledInput, StyledLabel } from '../styles/FormStyles';

type InputProps = {
  id: string;
  label: string;
  hideLabel?: boolean;
  type?: `text` | `nummber` | `email`;
  placeholder?: string;
};

export default function Input({
  id,
  label,
  hideLabel,
  type,
  placeholder,
}: InputProps) {
  const themeKey = useThemeKey();
  return (
    <div>
      <StyledLabel htmlFor={id} hideLabel={hideLabel}>
        {label}
      </StyledLabel>
      <StyledInput
        name={id}
        themeKey={themeKey}
        type={type || `text`}
        placeholder={placeholder}
      />
    </div>
  );
}
