import { createStore } from "redux";
import rootReducer from "../reducers/my-root-reducer";

const store = createStore(rootReducer);

export default store;