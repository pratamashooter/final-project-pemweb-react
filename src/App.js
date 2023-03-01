import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loading from "./routes/loading.route";

const Main = lazy(() => import("./routes/main.route"));
const MessagesPopup = lazy(() => import("./widgets/messages-popup.widget"));
const NotFound = lazy(() => import("./routes/not-found.route"));
const Order = lazy(() => import("./routes/order.route"));
const Product = lazy(() => import("./routes/product.route"));
const Toast = lazy(() => import("./components/toast.component"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Toast />
      <Routes>
        <Route path="/" element={<MessagesPopup />}>
          <Route index element={<Main />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
