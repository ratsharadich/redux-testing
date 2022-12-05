import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof store.getState>;

const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState()),
)

export default store

