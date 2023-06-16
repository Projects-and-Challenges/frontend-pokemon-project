import { useFormContext } from 'react-hook-form'

import * as Styled from './styles';

interface ErrorMessageProps {
  field: string
}

function get(obj: Record<any, any>, path: string) {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  
  return result
};

function ErrorMessage({ field }: ErrorMessageProps) {
  const { formState: { errors } } = useFormContext()

  const fieldError = get(errors, field)
    
  if (!fieldError) {
    return null
  }

  return (
    <Styled.Span>{fieldError.message?.toString()}</Styled.Span>
  )
};

export default ErrorMessage;