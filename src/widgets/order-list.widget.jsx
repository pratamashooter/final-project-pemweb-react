import OrderItem from "./order-item.widget";

const OrderList = ({ orders = [] }) => {
 
  return orders.length > 0 ? (
    
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    
      {orders.map((order, key) => (
        <OrderItem key={key} order={order} />
      ))}
    </div>
  ) : (
    <center>No records found</center>
  );
};

export default OrderList;
