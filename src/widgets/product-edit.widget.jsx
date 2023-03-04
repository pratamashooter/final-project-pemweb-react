import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFormattedValues } from "../utils/formatter.utils";
import { getValidationErrors, rule } from "../utils/validation.utils";
import { showErrorMessage } from "../utils/popup.utils";

import { PRODUCT_TYPES } from "../constants/product.constant";

import { deleteProductStart, updateProductStart } from "../store/product/product.action";
import { getDeleteProductLoading, getProduct, getUpdateProductLoading } from "../store/product/product.selector";

import Modal from "../components/modal.component";
import FormInput from "../components/form-input.component";
import FormSelect, { FormSelectOption } from "../components/form-select.component";
import Button, { BUTTON_TYPES } from "../components/button.component";

export const modalKey = "PRODUCT_EDIT";

const defaultInputValues = {
  name: "",
  type: "",
  brand: "",
  stock: "",
  price: "",
};

const ProductEdit = () => {
  const dispatch = useDispatch();

  const updateProductLoading = useSelector(getUpdateProductLoading);
  const deleteProductLoading = useSelector(getDeleteProductLoading);
  const product = useSelector(getProduct);

  const [inputValues, setInputValues] = useState(defaultInputValues);
  const { name, type, brand, stock, price } = inputValues;

  const deleteProductClickHandler = () => dispatch(deleteProductStart(product.id));

  const formInputChangeHandler = ({ target: { name, value } }) => setInputValues({ ...inputValues, [name]: value });

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const errors = getValidationErrors(
      {
        name,
        type,
        brand,
        stock,
        price,
      },
      {
        name: [rule.required()],
        type: [rule.required()],
        brand: [rule.required()],
        stock: [rule.required()],
        price: [rule.required()],
      }
    );

    if (errors.length > 0) {
      showErrorMessage({ data: errors });
      return;
    }

    dispatch(updateProductStart(product.id, getFormattedValues({ ...inputValues })));
  };

  useEffect(() => {
    const { name, type, brand, stock, price } = product ?? {};

    setInputValues({
      ...defaultInputValues,
      name: name ?? "",
      type: type ?? "",
      brand: brand ?? "",
      stock: stock ?? "",
      price: price ?? "",
    });
  }, [product]);

  return (
    <Modal
      modalKey={modalKey}
      title="Edit Product"
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
        <div className="grid grid-cols-2 gap-4">
          <Button
            type="submit"
            buttonType={BUTTON_TYPES.DARK}
            isExpanded
            disabled={updateProductLoading || deleteProductLoading}
          >
            Save Changes
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES.DANGER}
            isExpanded
            disabled={updateProductLoading || deleteProductLoading}
            onClick={deleteProductClickHandler}
          >
            Delete Product
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ProductEdit;
