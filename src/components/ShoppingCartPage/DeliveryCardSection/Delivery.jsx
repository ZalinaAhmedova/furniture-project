import React from "react";
import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../../../yup";
import Input from "./Input";

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

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
`;

function Delivery() {
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
    <DeliveryDetails>
      <DeliveryDetailsTitle>Delivery Details</DeliveryDetailsTitle>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            isError={errors?.firstName}
            name={"firstName"}
            labelName={"first name"}
            errors={errors?.firstName}
          />

          <Input
            isError={errors?.lastName}
            name={"lastName"}
            labelName={"last name"}
            errors={errors?.lastName}
          />

          <Input
            isError={errors?.email}
            name={"email"}
            labelName={"email address"}
            errors={errors?.email}
          />

          <Input
            isError={errors?.country}
            name={"country"}
            labelName={"country"}
            errors={errors?.country}
          />

          <Input
            isError={errors?.streetAdress}
            name={"streetAdress"}
            labelName={"street adress"}
            errors={errors?.streetAdress}
          />

          <Input
            isError={errors?.city}
            name={"city"}
            labelName={"city"}
            errors={errors?.city}
          />

          <Input
            isError={errors?.phoneNumber}
            name={"phoneNumber"}
            labelName={"phone number"}
            errors={errors?.phoneNumber}
          />

          <button style={{ display: "none" }} type="submit"></button>
        </Form>
      </FormProvider>
    </DeliveryDetails>
  );
}

export default Delivery;
