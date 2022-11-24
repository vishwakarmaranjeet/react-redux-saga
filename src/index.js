import React from "react";
import ReactDOM from "react-dom";
// import TagManager from "react-gtm-module";
import ReactGA from "react-ga4";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();

// const tagManagerArgs = {
//   gtmId: "GTM-MVKQLR6",
// };

// TagManager.initialize(tagManagerArgs);

ReactGA.initialize("G-CE5Q8X5Z6N");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
