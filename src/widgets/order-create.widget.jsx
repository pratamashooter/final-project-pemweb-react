import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getValidationErrors, rule } from "../utils/validation.utils"
import { showErrorMessage, showSuccessMessage } from "../utils/popup.utils"
import { getCurrencyFormat } from "../utils/formatter.utils"

// import { PRODUCT_TYPES } from "../constants/product.constant";

import { createOrderStart } from "../store/order/order.action"
import {
  getCreateOrderLoading,
  getCreateOrderSuccess,
} from "../store/order/order.selector"

import Modal from "../components/modal.component"
import FormInput from "../components/form-input.component"
import { setIsModalOpen } from "../store/component/component.action"
import FormSelect, {
  FormSelectOption,
} from "../components/form-select.component"
import Button, { BUTTON_TYPES } from "../components/button.component"

export const modalKey = "ORDER_CREATE"

const defaultInputValues = {
  cashier_name: "",
  customer_name: "",
  list_product: "",
  pay: "",
}

const OrderCreate = ({ products = [] }) => {
  // console.log(products)
  const dispatch = useDispatch()

  const createOrderLoading = useSelector(getCreateOrderLoading)
  const createOrderSuccess = useSelector(getCreateOrderSuccess)
  const [inputValues, setInputValues] = useState(defaultInputValues)
  const { cashier_name, list_product, customer_name, pay } = inputValues

  const formInputChangeHandler = ({ target: { name, value } }) =>
    setInputValues({ ...inputValues, [name]: value })

  const [bodyProduct, setBodyProduct] = useState([])
  const handleAddProduct = (ID) => {
    const product = products.filter((item) => item.id == ID)[0]
    const checkExist = bodyProduct.filter(
      (item) => item.product_id == ID
    ).length

    if (checkExist === 0) {
      setBodyProduct([
        ...bodyProduct,
        {
          product_id: product.id,
          name: product.name,
          qty: 1,
          price: product.price,
          total_price: product.price * 1,
        },
      ])
      setInputValues({ ...inputValues, list_product: "" })
    } else {
      showErrorMessage({ data: [{ message: "Produk sudah di tambahkan" }] })
    }
  }
  const handleChange = (i, event) => {
    let data = [...bodyProduct]

    data[i].qty = event.target.value
    data[i].total_price = data[i].price * event.target.value
    setBodyProduct(data)
  }

  const totalPrice = () => {
    const total = bodyProduct.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    )
    return total
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault()

    const errors = getValidationErrors(
      {
        cashier_name,
        customer_name,
        pay,
      },
      {
        cashier_name: [rule.required()],
        customer_name: [rule.required()],
        pay: [rule.required()],
      }
    )

    if (errors.length > 0) {
      showErrorMessage({ data: errors })
      return
    }

    if (totalPrice() == 0) {
      showErrorMessage({
        data: [
          {
            message: "Produk Harus terisi",
          },
        ],
      })
    } else if (inputValues.pay < totalPrice()) {
      showErrorMessage({
        data: [
          {
            message: "Duitmu kurang",
          },
        ],
      })
    }

    const uangBeli = parseInt(inputValues.pay)
    const kembalian = uangBeli - totalPrice()

    const body = {
      cashier_name: inputValues.cashier_name,
      customer_name: inputValues.customer_name,
      total: totalPrice(),
      pay: uangBeli,
      change: kembalian,
      product_id: [],
      qty: [],
      price: [],
      total_price: [],
    }

    for (const product of bodyProduct) {
      body.product_id.push(product.product_id)
      body.qty.push(parseInt(product.qty))
      body.price.push(product.price)
      body.total_price.push(product.total_price)
    }

    dispatch(createOrderStart(body))
    dispatch(setIsModalOpen(false))
    showSuccessMessage('Berhasil membuat Order')
    
  }

  useEffect(() => {
    if (createOrderSuccess !== null) {
      setInputValues(defaultInputValues)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createOrderSuccess])

  return (
    <Modal
      modalKey={modalKey}
      title="Create New Order"
      description="Fugiat nesciunt molestiae non placeat maiores adipisci."
    >
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label="Nama Kasir"
          type="text"
          name="cashier_name"
          className="mb-3"
          placeholder="Nama Kasi"
          onChange={formInputChangeHandler}
          value={cashier_name}
        />

        <FormInput
          label="Nama Customer"
          type="text"
          name="customer_name"
          className="mb-3"
          placeholder="Nama Customer"
          onChange={formInputChangeHandler}
          value={customer_name}
        />
        {products.length > 0 ? (
          <FormSelect
            label="List Product"
            name="list_product"
            className="capitalize mb-3"
            placeholder="Select product"
            onChange={formInputChangeHandler}
            value={list_product}
          >
            <FormSelectOption value="">Select product</FormSelectOption>
            {products.map((item, key) => (
              <FormSelectOption key={key} value={item.id}>
                {item.name}
              </FormSelectOption>
            ))}
          </FormSelect>
        ) : (
          <div>List Product Not found</div>
        )}

        <div>
          {list_product != "" ? (
            <Button
              type="button"
              buttonType={BUTTON_TYPES.DARK}
              isExpanded
              onClick={() => handleAddProduct(list_product)}
            >
              Add Product
            </Button>
          ) : null}
        </div>

        <div className="py-3">
          {bodyProduct.length > 0 ? (
            <div>
              {bodyProduct.map((item, key) => (
                <div
                  key={`${"product"}-${key}`}
                  className="bg-slate-200 p-3 flex items-center justify-between mb-2"
                >
                  <div>
                    <div>{item.name}</div>
                    <div>{getCurrencyFormat(item.price)}</div>
                  </div>
                  <div>
                    <div className="text-sm pb-1">Jumlah</div>
                    <input
                      type="number"
                      placeholder="Jumlah"
                      name="qty"
                      value={item.qty}
                      onChange={(event) => handleChange(key, event)}
                      className="px-2 text-center w-20"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-slate-200 p-3 text-center mb-2">
              Tidak ada Produk
            </div>
          )}
        </div>

        <div className="bg-slate-200 p-3 flex items-center justify-between mb-2 font-bold">
          <div>Total Pembelian</div>
          <div>{getCurrencyFormat(totalPrice())}</div>
        </div>

        <FormInput
          label="Bayar"
          type="number"
          name="pay"
          className="mb-3"
          placeholder="Masukan Uang Bayaranmu"
          inputMode="numeric"
          onChange={formInputChangeHandler}
          value={pay}
        />

        <br />

        <Button
          type="submit"
          buttonType={BUTTON_TYPES.DARK}
          isExpanded
          disabled={createOrderLoading}
        >
          Create Order
        </Button>
      </form>
    </Modal>
  )
}

export default OrderCreate
