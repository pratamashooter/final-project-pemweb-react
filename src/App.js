import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Loading from "./routes/loading.route";

const Home = lazy(() => import("./routes/home.route"));
const NotFound = lazy(() => import("./routes/not-found.route"));
const Order = lazy(() => import("./routes/order.route"));
const Product = lazy(() => import("./routes/product.route"));
const Layout = lazy(() => import("./components/layout.component"));
const Toast = lazy(() => import("./components/toast.component"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Toast />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
