import { createBrowserRouter } from "react-router-dom";
// import { Home } from "../pages/Home";
import App from "../App";
import SearchPage from "../pages/SearchPage";
import FloatWindow from "../components/shared/FloatWindow";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/box", element: <FloatWindow /> },
]);
