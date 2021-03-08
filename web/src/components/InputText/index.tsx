import React from 'react';
import { InputContainer, InputLabel, Input } from './styles';

interface InputProps {
  label: string;
  placeholder: string;
  is_password?: boolean;
  value: string;
  setValue: (value: string) => void;
  color: boolean;
  inLine: boolean;
}

const InputText = (props: InputProps): JSX.Element => {
  return (
    <InputContainer isPrimary={props.color} inLine={props.inLine}>
      <InputLabel>{props.label}</InputLabel>
      <Input
        placeholder={props.placeholder}
        type={props.is_password ? 'password' : 'text'}
        value={props.value}
        onChange={(value: React.ChangeEvent<HTMLInputElement>): void =>
          props.setValue(value.target.value)
        }
      />
    </InputContainer>
  );
};

export default InputText;
