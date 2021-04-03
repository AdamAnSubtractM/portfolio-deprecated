import React from 'react';
import { useThemeKey } from '../helpers/hooks';
import { StyledLabel, StyledTextarea } from '../styles/FormStyles';

type TextareaProps = {
  id: string;
  name: string;
  label: string;
  hideLabel?: boolean;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
};

export default function Textarea({
  id,
  label,
  hideLabel,
  placeholder,
  ...props
}: TextareaProps) {
  const themeKey = useThemeKey();
  return (
    <div>
      <StyledLabel htmlFor={id} hideLabel={hideLabel}>
        {label}
      </StyledLabel>
      <StyledTextarea name={id} themeKey={themeKey} placeholder={placeholder} {...props}/>
    </div>
  );
}
