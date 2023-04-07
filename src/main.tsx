import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from './routes/routerApp'
import {
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './states/store';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
