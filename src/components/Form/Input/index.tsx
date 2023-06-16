import { InputHTMLAttributes } from "react";
import { useFormContext } from 'react-hook-form'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
}

import * as Styled from './styles';

function Input({ name, ...rest }: InputProps) {
  const { register } = useFormContext()

  return (
    <Styled.Input 
      id={name}
      {...register(name)} 
      {...rest}
    />
  )
}

export default Input;