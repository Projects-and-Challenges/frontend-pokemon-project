import { LabelHTMLAttributes } from "react";

import * as Styled from './styles';

const Label = (props: LabelHTMLAttributes<HTMLLabelElement>): JSX.Element => {
  return (
    <Styled.Label
      {...props}
    />
  )
};

export default Label;