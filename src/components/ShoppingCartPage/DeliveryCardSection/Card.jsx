import React from "react";
import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../../../yup";
import Input from "./Input";
import masterCardImg from "../../../images/mastercard_img.png";
import visaImg from "../../../images/visa_img.png";
import rupayImg from "../../../images/rupay_img.png";

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
  width: 80px;
  margin-top: 10px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    border: 2px #cedff3 solid;
    border-radius: 15px;
  }

  &:active {
    border: 2px #a3c8f3 solid;
    border-radius: 15px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
`;

function Card() {
  const methods = useForm({ resolver: yupResolver(FormSchema) });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <CardDetails>
      <CardDetailsTitle>Card Details</CardDetailsTitle>
      <CardTypeTitle>Card Type</CardTypeTitle>
      <CardTypeContainer>
        <CardTypeImg src={masterCardImg} />
        <CardTypeImg src={visaImg} />
        <CardTypeImg src={rupayImg} />
      </CardTypeContainer>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            isError={errors?.nameOnCard}
            name={"nameOnCard"}
            labelName={"name on card"}
            errors={errors?.nameOnCard}
          />

          <Input
            isError={errors?.cardNumber}
            name={"cardNumber"}
            labelName={"card number"}
            errors={errors?.cardNumber}
          />

          <Input
            isError={errors?.expirationDate}
            name={"expirationDate"}
            labelName={"expiration date"}
            errors={errors?.expirationDate}
          />

          <Input
            isError={errors?.cvvNumber}
            name={"cvvNumber"}
            labelName={"cvv number"}
            errors={errors?.cvvNumber}
          />

          <button style={{ display: "none" }} type="submit"></button>
        </Form>
      </FormProvider>
    </CardDetails>
  );
}

export default Card;
