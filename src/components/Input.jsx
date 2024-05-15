import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const StyledInput = styled.input`
  border: ${(props) => (props.$isError ? "1px solid red" : "none")};
  border-radius: 6px;
  padding: 10px;
  margin-top: 3px;
  height: 30px;
`;

const Label = styled.label`
  text-transform: uppercase;
  font-size: var(--fs-xs);
  margin-left: 5px;
  color: var(--mid-gray);
`;

const TextField = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 3px;
`;

function Input({ name, labelName, isError, errors }) {
  const methods = useFormContext();

  return (
    <InputContainer>
      <Label>{`${labelName}`}</Label>
      <StyledInput {...methods.register(name)} $isError={isError} type="text" />
      {errors && <TextField>{errors.message}</TextField>}
    </InputContainer>
  );
}

export default Input;
