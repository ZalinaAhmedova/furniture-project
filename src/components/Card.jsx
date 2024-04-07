import React from "react";
import styled from "styled-components";
import masterCardImg from "../images/mastercard_img.png";
import visaImg from "../images/visa_img.png";
import rupayImg from "../images/rupay_img.png";

const CardDetails = styled.div`
  margin: 0 auto;
  padding: 20px 15px;
  background-color: var(--bg-gray);
  border-radius: 15px;
`;

const CardDetailsTitle = styled.h2`
  font-size: var(--fs-lg);
  font-weight: var(--medium);
  line-height: var(--lh-lg);
`;

const CardTypeTitle = styled.p`
  font-size: var(--fs-sm);
  margin-top: 15px;
`;

const CardTypeContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const CardTypeImg = styled.img`
  display: block;
  margin-top: 10px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
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

function Card() {
  return (
    <CardDetails>
      <CardDetailsTitle>Card Details</CardDetailsTitle>
      <CardTypeTitle>Card Type</CardTypeTitle>
      <CardTypeContainer>
        <CardTypeImg src={masterCardImg} />
        <CardTypeImg src={visaImg} />
        <CardTypeImg src={rupayImg} />
      </CardTypeContainer>
      <FormContainer>
        <Form>
          <Label>name on card</Label>
          <Input type="text" />
        </Form>
        <Form>
          <Label>card number</Label>
          <Input type="text" />
        </Form>
        <Form>
          <Label>expiration date</Label>
          <Input type="text" />
        </Form>
        <Form>
          <Label>cvv</Label>
          <Input type="text" />
        </Form>
      </FormContainer>
    </CardDetails>
  );
}

export default Card;
