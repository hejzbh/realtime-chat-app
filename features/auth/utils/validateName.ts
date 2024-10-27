// Helper function to validate name fields (first name, last name)
export const validateName = ({
  inputValue,
  inputName,
}: {
  inputValue: string;
  inputName: string;
}) => {
  if (!inputValue.length) {
    return `${inputName} is required`;
  }

  if (inputValue.length > 25)
    return `${inputName} cannot be longer than 25 chars.`;

  if (/\s/.test(inputValue)) {
    return `${inputName} cannot contain spaces`;
  }
  return undefined;
};
