import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeliverySchema } from "../yup";

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
  border: ${(props) => (props.isError ? "1px solid red" : "none")};
  border-radius: 6px;
  padding: 10px;
  margin-top: 3px;
  height: 30px;
`;

const TextField = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 3px;
`;

function Delivery() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(DeliverySchema),
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(errors);
  };

  return (
    <DeliveryDetails>
      <DeliveryDetailsTitle>Delivery Details</DeliveryDetailsTitle>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>first name</Label>
          {errors?.firstName ? (
            <Input isError type="text" {...register("firstName")} />
          ) : (
            <Input type="text" {...register("firstName")} />
          )}
          <TextField>{errors?.firstName?.message}</TextField>
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>last name</Label>
          {errors?.lastName ? (
            <Input isError type="text" {...register("lastName")} />
          ) : (
            <Input type="text" {...register("lastName")} />
          )}
          <TextField>{errors?.lastName?.message}</TextField>
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>email adress</Label>
          {errors?.email ? (
            <Input isError type="email" {...register("email")} />
          ) : (
            <Input type="email" {...register("email")} />
          )}
          <TextField>{errors?.email?.message}</TextField>
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>country</Label>
          {errors?.country ? (
            <Input isError type="text" {...register("country")} />
          ) : (
            <Input type="text" {...register("country")} />
          )}
          <TextField>{errors?.country?.message}</TextField>
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>street address</Label>
          {errors?.streetAdress ? (
            <Input isError type="text" {...register("streetAdress")} />
          ) : (
            <Input type="text" {...register("streetAdress")} />
          )}
          <TextField>{errors?.streetAdress?.message}</TextField>
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>city</Label>
          {errors?.city ? (
            <Input isError type="text" {...register("city")} />
          ) : (
            <Input type="text" {...register("city")} />
          )}
          <TextField>{errors?.city?.message}</TextField>
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>phone number</Label>
          {errors?.phoneNumber ? (
            <Input isError type="tel" {...register("phoneNumber")} />
          ) : (
            <Input type="tel" {...register("phoneNumber")} />
          )}
          <TextField>{errors?.phoneNumber?.message}</TextField>
        </Form>
      </FormContainer>
    </DeliveryDetails>
  );
}

export default Delivery;
