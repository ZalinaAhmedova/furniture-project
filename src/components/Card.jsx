import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardSchema } from "../yup";
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
  width: 80px;
  margin-top: 10px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    border: 2px #CEDFF3 solid;
    border-radius: 15px;
  }

  &:active {
    border: 2px #A3C8F3 solid;
    border-radius: 15px;
  }
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

const InputError = styled.input`
  border: 1px solid red;
  border-radius: 6px;
  padding: 10px;
  margin-top: 3px;
  height: 30px;
`;

const TextField = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

function Card() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(CardSchema),
  });

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
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>name on card</Label>
          {errors?.nameOnCard ? (
            <InputError type="text" {...register("nameOnCard")} />
          ) : (
            <Input type="text" {...register("nameOnCard")} />
          )}
          {errors?.nameOnCard?.type === "required" && (
            <TextField>{errors.nameOnCard.message}</TextField>
          )}
          {errors?.nameOnCard?.type === "matches" && (
            <TextField>{errors.nameOnCard.message}</TextField>
          )}
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>card number</Label>
          {errors?.cardNumber ? (
            <InputError type="text" {...register("cardNumber")} />
          ) : (
            <Input type="text" {...register("cardNumber")} />
          )}
          {errors?.cardNumber?.type === "required" && (
            <TextField>{errors.cardNumber.message}</TextField>
          )}
          {errors?.cardNumber?.type === "matches" && (
            <TextField>{errors.cardNumber.message}</TextField>
          )}
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>expiration date</Label>
          {errors?.expirationDate ? (
            <InputError type="text" {...register("expirationDate")} />
          ) : (
            <Input type="text" {...register("expirationDate")} />
          )}
          {errors?.expirationDate?.type === "required" && (
            <TextField>{errors.expirationDate.message}</TextField>
          )}
          {errors?.expirationDate?.type === "matches" && (
            <TextField>{errors.expirationDate.message}</TextField>
          )}
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>cvv</Label>
          {errors?.cvvNumber ? (
            <InputError type="text" {...register("cvvNumber")} />
          ) : (
            <Input type="text" {...register("cvvNumber")} />
          )}
          {errors?.cvvNumber?.type === "required" && (
            <TextField>{errors.cvvNumber.message}</TextField>
          )}
          {errors?.cvvNumber?.type === "matches" && (
            <TextField>{errors.cvvNumber.message}</TextField>
          )}
        </Form>
      </FormContainer>
    </CardDetails>
  );
}

export default Card;
