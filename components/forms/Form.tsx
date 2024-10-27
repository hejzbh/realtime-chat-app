"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FormValues, useForm, Validators } from "@/hooks/use-form";
import { FormInputType } from "@/types/formTypes";

const Title = dynamic(() => import("@/components/ui/Title"));
const Text = dynamic(() => import("@/components/ui/Text"));
const Input = dynamic(() => import("@/components/ui/Input"));
const Button = dynamic(() => import("@/components/ui/Button"));

export interface FormProps {
  className?: string;
  initialValues: { [key: string]: any };
  validators: Validators;
  formInputs: FormInputType[];
  submitTitle?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  onSubmit: (formValues: FormValues) => void;
}

const Form = ({
  className = "",
  initialValues,
  validators,
  formInputs,
  title = "",
  description,
  submitTitle = "Submit",
  children = <></>,
  onSubmit,
}: FormProps) => {
  const { values, handleInputChange, errors, handleSubmit, isSubmitting } =
    useForm({
      initialValues,
      validators,
    });

  // TODO: Loading

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit(onSubmit);
      }}
      className={`bg-white rounded-md p-5 ${className}`}
    >
      {/** Heading */}
      <div>
        <Title variant="h1" className="mb-1">
          {title}
        </Title>
        <Text>{description}</Text>
      </div>

      {/** Inputs */}
      <main className="mt-5 space-y-5">
        {" "}
        {formInputs.map((input, index) => {
          if (input.variant === "input") {
            return (
              <Input
                key={index}
                required={input.required}
                name={input.name}
                error={errors[input.name]}
                label={input.label}
                disabled={isSubmitting}
                value={values[input.name]}
                type={input.type}
                Icon={input.Icon}
                onChange={handleInputChange}
              />
            );
          }
        })}
      </main>

      {/** Button */}
      <div className="flex justify-end mt-5">
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {submitTitle}
        </Button>
      </div>

      {/** Children ? */}
      {children}
    </form>
  );
};

export default Form;
