import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFormattedValues } from "../utils/formatter.utils";
import { getValidationErrors, rule } from "../utils/validation.utils";
import { showCustomErrorMessage, showErrorMessage } from "../utils/popup.utils";

import { PRODUCT_TYPES } from "../constants/product.constant";

import { createProductStart } from "../store/product/product.action";
import { getCreateProductLoading, getCreateProductSuccess } from "../store/product/product.selector";

import Modal from "../components/modal.component";
import FormInput from "../components/form-input.component";
import FormSelect, { FormSelectOption } from "../components/form-select.component";
import Button, { BUTTON_TYPES } from "../components/button.component";

export const modalKey = "PRODUCT_CREATE";

const defaultInputValues = {
  name: "",
  type: "",
  brand: "",
  stock: "",
  price: "",
};

const ProductCreate = () => {
  const dispatch = useDispatch();

  const createProductLoading = useSelector(getCreateProductLoading);
  const createProductSuccess = useSelector(getCreateProductSuccess);

  const [image, setImage] = useState(null);
  const [inputValues, setInputValues] = useState(defaultInputValues);
  const { name, type, brand, stock, price } = inputValues;

  const setUploadedImageFromFiles = (files = []) => {
    let isMoreThan2MbExist = false;

    const [selectedFile] = [...files].filter(({ type, size }) => {
      const isImage = type.match(/image.*/) !== null;
      const isNotMoreThan2Mb = size / 1024 / 1024 <= 2;

      isMoreThan2MbExist = isMoreThan2MbExist || !isNotMoreThan2Mb;

      return isImage && isNotMoreThan2Mb;
    });

    if (isMoreThan2MbExist) showCustomErrorMessage("File size can't be more than 2 mb");

    setImage(selectedFile);
  };

  const formInputFileHandler = ({ target }) => setUploadedImageFromFiles(target.files);

  const formInputChangeHandler = ({ target: { name, value } }) => setInputValues({ ...inputValues, [name]: value });

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const errors = getValidationErrors(
      {
        name,
        type,
        image,
        brand,
        stock,
        price,
      },
      {
        name: [rule.required()],
        type: [rule.required()],
        image: [rule.required()],
        brand: [rule.required()],
        stock: [rule.required()],
        price: [rule.required()],
      }
    );

    if (errors.length > 0) {
      showErrorMessage({ data: errors });
      return;
    }

    dispatch(createProductStart(getFormattedValues({ ...inputValues, image })));
  };

  useEffect(() => {
    if (createProductSuccess !== null) {
      setInputValues(defaultInputValues);
      setImage(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createProductSuccess]);

  return (
    <Modal
      modalKey={modalKey}
      title="Create New Product"
      description="Fugiat nesciunt molestiae non placeat maiores adipisci."
    >
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label="Product Name"
          type="text"
          name="name"
          className="mb-3"
          placeholder="Enter product name"
          onChange={formInputChangeHandler}
          value={name}
        />
        <FormSelect
          label="Product Type"
          name="type"
          className="capitalize mb-3"
          placeholder="Select product type"
          onChange={formInputChangeHandler}
          value={type}
        >
          <FormSelectOption value="">Select product type</FormSelectOption>
          {Object.keys(PRODUCT_TYPES).map((key) => (
            <FormSelectOption key={key} value={key}>
              {key.toLowerCase()}
            </FormSelectOption>
          ))}
        </FormSelect>
        <FormInput
          label="Product Image"
          type="file"
          accept="image/*"
          name="image"
          className="mb-3"
          placeholder="Select product image"
          onChange={formInputFileHandler}
        />
        <FormInput
          label="Product Brand"
          type="text"
          name="brand"
          className="mb-3"
          placeholder="Enter product brand"
          onChange={formInputChangeHandler}
          value={brand}
        />
        <FormInput
          label="Product Stock"
          type="number"
          name="stock"
          className="mb-3"
          placeholder="Enter product stock"
          inputMode="numeric"
          onChange={formInputChangeHandler}
          value={stock}
        />
        <FormInput
          label="Product Price"
          type="number"
          name="price"
          className="mb-6"
          placeholder="Enter product price"
          inputMode="numeric"
          onChange={formInputChangeHandler}
          value={price}
        />
        <Button type="submit" buttonType={BUTTON_TYPES.DARK} isExpanded disabled={createProductLoading}>
          Create Product
        </Button>
      </form>
    </Modal>
  );
};

export default ProductCreate;
