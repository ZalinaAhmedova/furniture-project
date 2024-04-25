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
  };

  return (
    <DeliveryDetails>
      <DeliveryDetailsTitle>Delivery Details</DeliveryDetailsTitle>
      <FormContainer>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>first name</Label>
          {errors?.name ? (
            <InputError type="text" {...register("name")} />
          ) : (
            <Input type="text" {...register("name")} />
          )}
          {errors?.name?.type === "required" && (
            <TextField>{errors.name.message}</TextField>
          )}
          {errors?.name?.type === "matches" && (
            <TextField>{errors.name.message}</TextField>
          )}
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>last name</Label>
          {errors?.name ? (
            <InputError type="text" {...register("name")} />
          ) : (
            <Input type="text" {...register("name")} />
          )}
          {errors?.name?.type === "required" && (
            <TextField>{errors.name.message}</TextField>
          )}
          {errors?.name?.type === "matches" && (
            <TextField>{errors.name.message}</TextField>
          )}
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>email adress</Label>
          {errors?.email ? (
            <InputError type="email" {...register("email")} />
          ) : (
            <Input type="email" {...register("email")} />
          )}
          {errors?.email?.type === "required" && (
            <TextField>{errors.email.message}</TextField>
          )}
          {errors?.email?.type === "matches" && (
            <TextField>{errors.email.message}</TextField>
          )}
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>country</Label>
          {errors?.country ? (
            <InputError type="text" {...register("country")} />
          ) : (
            <Input type="text" {...register("country")} />
          )}
          {errors?.country?.type === "required" && (
            <TextField>{errors.country.message}</TextField>
          )}
          {errors?.country?.type === "matches" && (
            <TextField>{errors.country.message}</TextField>
          )}
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>street address</Label>
          {errors?.streetAdress ? (
            <InputError type="text" {...register("streetAdress")} />
          ) : (
            <Input type="text" {...register("streetAdress")} />
          )}
          {errors?.streetAdress?.type === "required" && (
            <TextField>{errors.streetAdress.message}</TextField>
          )}
          {errors?.streetAdress?.type === "matches" && (
            <TextField>{errors.streetAdress.message}</TextField>
          )}
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>city</Label>
          {errors?.city ? (
            <InputError type="text" {...register("city")} />
          ) : (
            <Input type="text" {...register("city")} />
          )}
          {errors?.city?.type === "required" && (
            <TextField>{errors.city.message}</TextField>
          )}
          {errors?.city?.type === "matches" && (
            <TextField>{errors.city.message}</TextField>
          )}
        </Form>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>phone number</Label>
          {errors?.phoneNumber ? (
            <InputError type="tel" {...register("phoneNumber")} />
          ) : (
            <Input type="tel" {...register("phoneNumber")} />
          )}
          {errors?.phoneNumber?.type === "required" && (
            <TextField>{errors.phoneNumber.message}</TextField>
          )}
          {errors?.phoneNumber?.type === "matches" && (
            <TextField>{errors.phoneNumber.message}</TextField>
          )}
        </Form>
      </FormContainer>
    </DeliveryDetails>
  );
}

export default Delivery;
