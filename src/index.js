import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import "tachyons";
import registerServiceWorker from "./registerServiceWorker";
import { searchRobots } from "./reducers";

const logger = createLogger();
const store = createStore(searchRobots);
createStore(searchRobots, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
