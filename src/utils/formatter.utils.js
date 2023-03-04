import moment from "moment";

export const getFormattedValues = (inputValues = {}) => {
  const getFormattedValue = (value) => {
    const isArray = Array.isArray(value);
    const isFile = value instanceof File;
    const isObject = typeof value === "object" && !isArray && value !== null && !isFile;
    const isBoolean = typeof value === "boolean";

    if (isArray) {
      value = value.length === 0 ? null : value.map((val) => getFormattedValue(val));
    } else if (isObject) {
      value =
        Object.keys(value).length === 0
          ? null
          : Object.entries(value).reduce((newVal, [key, val]) => {
              return { ...newVal, [key]: getFormattedValue(val) };
            }, {});
    } else if (isBoolean) {
      value = value === true ? 1 : 0;
    } else {
      value = value === "" ? null : value;
    }

    return value;
  };

  return Object.keys(inputValues).reduce((newInputValues, field) => {
    return { ...newInputValues, [field]: getFormattedValue(inputValues[field]) };
  }, {});
};

export const getCurrencyFormat = (nominal) => {
  let nominalParsed = parseFloat(nominal);
  if (isNaN(nominalParsed)) nominalParsed = 0;

  nominalParsed = nominalParsed.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");

  return `Rp. ${nominalParsed}`;
};

export const getDateTimeFormat = (dateTime, format = "DD MMM YYYY, h:mm A") =>
  ["", null, undefined].includes(dateTime) ? "-" : moment(dateTime).format(format);
