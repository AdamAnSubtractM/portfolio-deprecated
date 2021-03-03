import React from 'react';
import styled from 'styled-components';
import { useThemeKey } from '../helpers/hooks';
import { sizes, theme } from '../helpers/theme';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

type ContactFormProps = {
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl';
};

type StyledFormProps = {
  themeKey: ThemeProps['themeKey'];
  breakpoint?: ContactFormProps['breakpoint'];
};

const StyledForm = styled.form<StyledFormProps>`
  h2 {
    font-size: 2.4rem;
    margin-top: 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid
      ${({ themeKey }) => theme[themeKey].card.alt.text()};
  }
  .button-wrap {
    display: flex;
    justify-content: center;
    @media all and (min-width: ${(props) =>
        sizes[props.breakpoint || `md`]}px) {
      justify-content: flex-end;
    }
  }
`;

export default function ContactForm({ breakpoint }: ContactFormProps) {
  const themeKey = useThemeKey();
  return (
    <StyledForm themeKey={themeKey} breakpoint={breakpoint}>
      <h2>Drop me a line</h2>
      <Input
        id={`contact-name`}
        label={`Your Name: `}
        placeholder={`Enter your name.`}
      />
      <Input
        id={`contact-email`}
        label={`Your Email: `}
        type={`email`}
        placeholder={`Enter your email so I can email you back.`}
      />
      <Input
        id={`contact-subject`}
        label={`Subject: `}
        placeholder={`Enter your reason for contacting me.`}
      />
      <Textarea
        id={`contact-message`}
        label={`Your message: `}
        placeholder={`Enter your message to me.`}
      />
      <div className={`button-wrap`}>
        <Button type={`submit`} buttonStyle={`primary`} swapFocusColor={true}>
          Send Message &#8594;
        </Button>
      </div>
    </StyledForm>
  );
}
