import { createBrowserRouter } from "react-router-dom";
// import { Home } from "../pages/Home";
import App from "../App";
import SearchPage from "../pages/SearchPage";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/search", element: <SearchPage /> }
]);