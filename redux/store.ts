import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import loginReducer from '../features/login/loginSlice'
import { recipesApiSlice } from '../features/recipes/fetchRecipes'

const whitelist = ['login']

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist,
}

const rootReducer = combineReducers({
  login: loginReducer,
  [recipesApiSlice.reducerPath]: recipesApiSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(recipesApiSlice.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
