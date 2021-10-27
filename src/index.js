import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import { store } from "../src/store/store";
import { SnackbarProvider } from "notistack";
import Zoom from "@material-ui/core/Zoom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        preventDuplicate
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Zoom}
        iconVariant={{
          success: "✅",
          error: "✖️",
          warning: "⚠️",
          info: "ℹ️",
        }}
        maxSnack={3}
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals(console.log);
serviceWorker.register();
