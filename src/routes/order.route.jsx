import { useDispatch, useSelector } from "react-redux"

import {
  fetchOrdersStart,
  setFetchOrdersSearch,
} from "../store/order/order.action"
import { fetchProductsStart } from "../store/product/product.action"
import { getFetchOrdersLoading, getOrders } from "../store/order/order.selector"
import {
  getFetchProductsLoading,
  getProducts,
} from "../store/product/product.selector"
import {
  setCurrentModal,
  setIsModalOpen,
} from "../store/component/component.action"

import PageHeader from "../components/page-header.component"
import OrderList from "../widgets/order-list.widget"
import OrderCreate, { modalKey } from "../widgets/order-create.widget"
import InputSearch from "../widgets/input-search.widget"
import Spinner from "../components/spinner.component"
import Button, { BUTTON_TYPES } from "../components/button.component"

import { useEffect } from "react"

const Order = () => {
  const dispatch = useDispatch()

  // order
  const fetchOrdersLoading = useSelector(getFetchOrdersLoading)
  const orders = useSelector(getOrders)

  // product
  const fetchProductsLoading = useSelector(getFetchProductsLoading)
  const products = useSelector(getProducts)

  const addOrderClickHandler = () => {
    dispatch(setCurrentModal(modalKey))
    dispatch(setIsModalOpen(true))
  }

  const searchChangeHandler = (search) => {
    dispatch(setFetchOrdersSearch(search))
    dispatch(fetchOrdersStart())
  }

  const fetchProductsList = () => {
    dispatch(fetchProductsStart())
  }

  useEffect(() => {
    if (orders.length === 0) searchChangeHandler(null)
    if (products.length === 0) fetchProductsList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(products)

  return (
    <>
      <PageHeader
        title="Order"
        description="List Order ada disini ya gess"
        toolbar={
          <Button
            type="button"
            buttonType={BUTTON_TYPES.DARK}
            onClick={addOrderClickHandler}
          >
            Add New Order
          </Button>
        }
      />
      <InputSearch onSearchValueChanged={searchChangeHandler} />

      {fetchOrdersLoading && fetchProductsLoading ? (
        <center>
          <Spinner />
        </center>
      ) : (
        <div>
          <OrderList orders={orders}></OrderList>
          <OrderCreate products={products} />
        </div>
      )}
    </>
  )
}

export default Order
