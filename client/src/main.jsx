import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ahv5e8w0q41x0xgm.us.auth0.com"
      clientId="mZIXabECkBm4kPuHdrl1BCBt16O0JraR"
      authorizationParams={{
        redirect_uri: "https://estate-plus-lemon.vercel.app"
      }}
      audience="https://estate-plus.vercel.app"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
