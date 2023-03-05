import { useDispatch } from "react-redux"

import { getCurrencyFormat } from "../utils/formatter.utils"

import {
  setCurrentModal,
  setIsModalOpen,
} from "../store/component/component.action"
import { setProduct } from "../store/product/product.action"

import { modalKey } from "./product-edit.widget"

const OrderItem = ({ order }) => {
  const dispatch = useDispatch()

  const { customer_name, code, order_product, total, pay, change } = order ?? {}

  const productEditClickHandler = () => {
    dispatch(setProduct(order))
    dispatch(setCurrentModal(modalKey))
    dispatch(setIsModalOpen(true))
  }

  // const formatClassStatus = (status) => {
  //   let css = null
  //   if (status === "waiting") {
  //     css = "bg-[#FFE600]"
  //   } else if (status === "process") {
  //     css = "bg-[#0038FF] text-white"
  //   } else {
  //     css = "bg-[#00FF19]"
  //   }

  //   let cssGeneral = " w-fit px-4 py-1 rounded-md text-sm capitalize"

  //   return css + cssGeneral
  // }

  return (
    <div
      className="cursor-pointer bg-white hover:bg-white/50 p-6"
      onClick={productEditClickHandler}
    >
     
      <div className="text-base">
        <div className="uppercase font-semibold text-slate-800">
          {code ?? null}
        </div>
        {/* <div className="text-slate-700">{date}</div> */}
      </div>
      <div className="text-slate-600">
        <div className="text-sm">Customer: {customer_name ?? null}</div>
      </div>
      {order_product.length > 0 ? (
        <div className="grid-1 gap-3 text-slate-600 text-sm py-6">
          {order_product.map(({ product, qty, id }, key) => (
            <div key={key}>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-slate-700">{product.name}</div>
                  <div>{getCurrencyFormat(product.price)}</div>
                </div>
                <div className="text-base">{qty}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>not found</div>
      )}
      <div className="text-slate-600">
        <div>
          Total : {getCurrencyFormat(total)}
        </div>
        <div>
          Bayar : {getCurrencyFormat(pay)}
        </div>
        <div>
          Kembalian : {getCurrencyFormat(change)}
        </div>
      </div>
    </div>
  )
}

export default OrderItem
