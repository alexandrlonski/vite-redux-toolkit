import { configureStore } from "@reduxjs/toolkit";
import couterReducer from '../features/counter/counter-slice';
import { apiDogSlice } from "../features/dogs/dogs-api-slice";

export const store = configureStore({
    reducer: {
        counter: couterReducer,
        [apiDogSlice.reducerPath]: apiDogSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiDogSlice.middleware)
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
