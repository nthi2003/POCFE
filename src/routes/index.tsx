import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SearchPage from "../pages/SearchPage";
import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { Law } from "../pages/Law";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "search", element: <SearchPage /> },
      { path: "new", element: <New /> },
      { path: "law", element: <Law /> }
    ]
  }
]);