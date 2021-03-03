import React from 'react';
import { useThemeKey } from '../helpers/hooks';
import { StyledTextarea, StyledLabel } from '../styles/FormStyles';

type TextareaProps = {
  id: string;
  label: string;
  hideLabel?: boolean;
  placeholder?: string;
};

export default function Textarea({
  id,
  label,
  hideLabel,
  placeholder,
}: TextareaProps) {
  const themeKey = useThemeKey();
  return (
    <div>
      <StyledLabel htmlFor={id} hideLabel={hideLabel}>
        {label}
      </StyledLabel>
      <StyledTextarea name={id} themeKey={themeKey} placeholder={placeholder} />
    </div>
  );
}
