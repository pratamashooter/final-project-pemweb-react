import ProductItem from "./product-item.widget";

const ProductList = ({ products = [] }) => {
  return products.length > 0 ? (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, key) => (
        <ProductItem key={key} product={product} />
      ))}
    </div>
  ) : (
    <center>No records found</center>
  );
};

export default ProductList;
