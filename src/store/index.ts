import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import rootReducer from './reducer'

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = useDispatch<typeof store.dispatch>

const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState()),
)

export default store
