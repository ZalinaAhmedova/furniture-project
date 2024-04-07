import React from "react";
import styled from "styled-components";

const DeliveryDetails = styled.div`
  margin: 0 auto;
  padding: 20px 15px;
  background-color: var(--bg-gray);
  border-radius: 15px;
`;

const DeliveryDetailsTitle = styled.h2`
  font-size: var(--fs-lg);
  font-weight: var(--medium);
  line-height: var(--lh-lg);
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  margin-top: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const Label = styled.label`
  text-transform: uppercase;
  font-size: var(--fs-xs);
  margin-left: 5px;
  color: var(--mid-gray);
`;

const Input = styled.input`
  border: none;
  border-radius: 6px;
  padding: 10px;
  margin-top: 3px;
  height: 30px;
`;

function Delivery() {
  return (
    <DeliveryDetails>
      <DeliveryDetailsTitle>Delivery Details</DeliveryDetailsTitle>
      <FormContainer>
        <Form>
          <Label>first name</Label>
          <Input type="text" />
        </Form>
        <Form>
          <Label>last name</Label>
          <Input type="text" />
        </Form>
        <Form>
          <Label>email adress</Label>
          <Input type="email" />
        </Form>
        <Form>
          <Label>country</Label>
          <Input type="text" />
        </Form>
        <Form>
          <Label>street address</Label>
          <Input type="text" />
        </Form>
        <Form>
          <Label>city</Label>
          <Input type="text" />
        </Form>
        <Form>
          <Label>phone number</Label>
          <Input type="tel" />
        </Form>
      </FormContainer>
    </DeliveryDetails>
  );
}

export default Delivery;
