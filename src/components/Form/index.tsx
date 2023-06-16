import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import Label from "./Label";
import Field from './Field';

import * as Styled from './styles';

export {
  Label,
  Input,
  ErrorMessage,
  Field
}

type FormProps = {
  onSubmit: () => void;
  children: JSX.Element;
}

export const Form = ({ onSubmit, children }: FormProps): JSX.Element => {
  return (
    <Styled.Form onSubmit={onSubmit}>
      {children}
    </Styled.Form>
  )
}