import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import { Root } from "./views/root";
import { Provider } from "react-redux";
import * as serviceWorker from "./services/index/serviceWorker";
import reportWebVitals from "./services/index/reportWebVitals";
import { store } from "../src/store/store";
import { SnackbarProvider } from "notistack";
import Zoom from "@material-ui/core/Zoom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        preventDuplicate
        anchorOrigin={{
          vertical: "bottom",
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
        <Root />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals(console.log);
serviceWorker.register();
