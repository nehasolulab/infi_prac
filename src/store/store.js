import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './reducer'
import createSagaMiddleware from "redux-saga"
import rootSaga from './saga'

const saga = createSagaMiddleware()


export const store = configureStore({
  reducer: {
    users:userSlice
  },
  middleware:[saga]

})

saga.run(rootSaga);
