import configureStore from "./configureStore";
import RootReducer, { RootInitialState } from "./reducers";


const store = configureStore({
  initialState: RootInitialState,
  reducer: RootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;
