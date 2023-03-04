import { useDispatch, useSelector } from "react-redux";

import { setCurrentModal, setIsModalOpen } from "../store/component/component.action";
import { fetchProductsStart, setFetchProductsSearch } from "../store/product/product.action";
import { getFetchProductsLoading, getProducts } from "../store/product/product.selector";

import PageHeader from "../components/page-header.component";
import Button, { BUTTON_TYPES } from "../components/button.component";
import Spinner from "../components/spinner.component";
import InputSearch from "../widgets/input-search.widget";
import ProductList from "../widgets/product-list.widget";
import ProductCreate, { modalKey } from "../widgets/product-create.widget";
import ProductEdit from "../widgets/product-edit.widget";
import { useEffect } from "react";

const Product = () => {
  const dispatch = useDispatch();

  const fetchProductsLoading = useSelector(getFetchProductsLoading);
  const products = useSelector(getProducts);

  const searchChangeHandler = (search) => {
    dispatch(setFetchProductsSearch(search));
    dispatch(fetchProductsStart());
  };

  const addProductClickHandler = () => {
    dispatch(setCurrentModal(modalKey));
    dispatch(setIsModalOpen(true));
  };

  useEffect(() => {
    if (products.length === 0) searchChangeHandler(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageHeader
        title="Manage Product"
        description="Officiis facilis nesciunt sit qui sed repellat quia."
        toolbar={
          <Button type="button" buttonType={BUTTON_TYPES.DARK} onClick={addProductClickHandler}>
            Add New Product
          </Button>
        }
      />
      <InputSearch onSearchValueChanged={searchChangeHandler} />
      {fetchProductsLoading ? (
        <center>
          <Spinner />
        </center>
      ) : (
        <ProductList products={products} />
      )}
      <ProductCreate />
      <ProductEdit />
    </>
  );
};

export default Product;
