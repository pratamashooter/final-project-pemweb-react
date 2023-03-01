const isEmpty = (value) => value === undefined || value === null || value === "";

const getLowercase = (char) => (char === char.toUpperCase() ? ` ${char}`.toLowerCase() : char);

const getFieldFormatted = (field) => {
  field = field.replaceAll("_id", " ");
  field = field.replaceAll("_", " ");
  field = field.split("").reduce((a, b) => `${a}${getLowercase(b)}`, "");

  return field;
};

export const rule = {
  required: () => (value, field) => isEmpty(value) && `The ${field} field is required.`,
  minLength: (min) => (value, field) =>
    !!value && value.length < min && `The ${field} must be at least ${min} characters.`,
  notEmptyArray: () => (value, field) =>
    Array.isArray(value) && value.length === 0 && `The ${field} must have at least 1 items.`,
  email: () => (value, field) =>
    !!value && !/\S+@\S+\.\S+/.test(value) && `The ${field} must be a valid email address.`,
};

export const getValidationErrors = (fieldValues, fieldValidators) => {
  const errors = [];
  Object.entries(fieldValidators).forEach(([field, validators]) => {
    [validators].flat().forEach((validator) => {
      const message = validator(fieldValues[field], getFieldFormatted(field));
      if (message) errors.push({ message, field });
    });
  });

  return errors;
};
