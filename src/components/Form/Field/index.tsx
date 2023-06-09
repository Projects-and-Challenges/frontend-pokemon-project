import * as Styled from './styles'

type FieldProps = React.HTMLAttributes<HTMLDivElement>;

function Field(props: FieldProps) {
  return <Styled.Field {...props} />
}

export default Field;