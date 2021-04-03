import React from 'react';
import styled from 'styled-components';
import { StyledRequiredIndicator } from '../styles/FormStyles';
import { useThemeKey, useForm } from '../helpers/hooks';
import { sizes, theme } from '../helpers/theme';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

type ContactFormProps = {
  breakpoint?: Sizes[`keys`];
};

type StyledFormProps = {
  themeKey: ThemeProps['themeKey'];
  breakpoint?: ContactFormProps['breakpoint'];
};

const StyledForm = styled.form<StyledFormProps>`
  h2 {
    font-size: 2.4rem;
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid
      ${({ themeKey }) => theme[themeKey].card.alt.text()};
  }
  .disclaimer {
    display: flex;
   margin-bottom: 2rem;
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

const StyledIndicatorWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function ContactForm({ breakpoint }: ContactFormProps) {
  const themeKey = useThemeKey();

  const { values, updateValue } = useForm({
    name: ``,
    email: ``,
    subject: ``,
    message: ``,
  });

  return (
    <StyledForm themeKey={themeKey} breakpoint={breakpoint}>
      <h2>Drop me a line</h2>
      <StyledIndicatorWrap>
        <span>
          <StyledRequiredIndicator themeKey={themeKey}>
            *
          </StyledRequiredIndicator>{' '}
          Indicates a required field.
        </span>
      </StyledIndicatorWrap>
      <Input
        id={`contact-name`}
        name={`name`}
        label={`Your Name: `}
        placeholder={`Enter your name.`}
        onChange={updateValue}
        value={values.name}
        required
      />
      <Input
        id={`contact-email`}
        name={`email`}
        label={`Your Email: `}
        type={`email`}
        placeholder={`Enter your email so I can email you back.`}
        onChange={updateValue}
        value={values.email}
        required
      />
      <Input
        id={`contact-subject`}
        name={`subject`}
        label={`Subject: `}
        placeholder={`Enter your reason for contacting me.`}
        onChange={updateValue}
        value={values.subject}
      />
      <Textarea
        id={`contact-message`}
        name={`message`}
        label={`Your message: `}
        placeholder={`Enter your message to me.`}
        onChange={updateValue}
        value={values.message}
      />
      <span className={`disclaimer`}>
        <small>
          Your information is not stored/shared unless otherwise directed by you. I only require some of it when contacting me for the purposes of responding to you.
        </small>
      </span>
      <div className={`button-wrap`}>
        <Button type={`submit`} buttonStyle={`primary`} swapFocusColor={true}>
          Send Message &#8594;
        </Button>
      </div>
    </StyledForm>
  );
}
