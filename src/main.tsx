import ReactDOM from "react-dom/client";

import { store } from "./store/store.ts";

import { Provider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
