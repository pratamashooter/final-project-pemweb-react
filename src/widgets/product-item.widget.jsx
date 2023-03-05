import { useDispatch } from "react-redux";

import { getCurrencyFormat } from "../utils/formatter.utils";

import { setCurrentModal, setIsModalOpen } from "../store/component/component.action";
import { setProduct } from "../store/product/product.action";

import { modalKey } from "../widgets/product-edit.widget";

import NoImage from "../assets/images/no-image.jpeg";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const { image, name, price, stock } = product ?? {};

  const productEditClickHandler = () => {
    dispatch(setProduct(product));
    dispatch(setCurrentModal(modalKey));
    dispatch(setIsModalOpen(true));
  };

  return (
    <div className="cursor-pointer bg-white hover:bg-white/50 p-6" onClick={productEditClickHandler}>
      <img src={image ?? NoImage} alt={name ?? "No Image"} className="w-full aspect-video object-cover mb-3" />
      <div className="flex items-start">
        <div className="grow">
          <h5 className="text-lg font-bold mb-1">{name ?? "No Name"}</h5>
          <p className="text-sm text-green-700 m-0">{getCurrencyFormat(price ?? 0)}</p>
        </div>
        <p className="text-sm text-slate-600">Stock: {stock ?? 0}</p>
      </div>
    </div>
  );
};

export default ProductItem;
