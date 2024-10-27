import { useState } from "react";

export type FormValues = { [key: string]: any };
type Errors = { [key: string]: string };
export type Validators = { [key: string]: (value: any) => string | undefined };

export const useForm = ({
  initialValues,
  validators = {},
}: {
  initialValues: FormValues;
  validators?: Validators;
}) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle value change
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));

    // Clear errors when field changes
    if (errors[name]) {
      setErrors((prevErrors) => {
        const { [name]: _, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  // Validate all fields on submit
  const validateForm = () => {
    const newErrors: Errors = {};
    for (const key in validators) {
      const error = validators[key](values[key]);
      if (error) newErrors[key] = error;
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (
    onSubmit: (values: FormValues) => Promise<void> | void
  ) => {
    if (isSubmitting) return; // Cannot run this function until prevously called function is not done yet.

    try {
      setIsSubmitting(true);
      if (validateForm()) {
        await onSubmit(values);
      }
      setIsSubmitting(false);
    } catch (err: any) {
      throw new Error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Utility to reset form
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};
