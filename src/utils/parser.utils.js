export const parseToString = (value) => `${value ?? ""}`;

export const parseToInteger = (value) => {
  let parsedValue = parseInt(value);
  if (isNaN) parsedValue = 0;

  return parsedValue;
};

export const parseToBoolean = (value) => [1, "1", true, "true"].includes(value);
