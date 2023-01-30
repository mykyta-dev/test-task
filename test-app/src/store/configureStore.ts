import { createStore } from "redux";
import { RootReducerType } from "./reducers";

interface ConfigureStore {
  initialState: Record<string, any>,
  reducer: RootReducerType,
}

export default function configureStore({ initialState, reducer }: ConfigureStore) {
  const store = createStore(reducer, initialState);

  return store;
}
