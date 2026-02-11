import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./counter";
import Header_link from './header_link';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <Header_link />
        <Counter />
    </Provider>
  </StrictMode>,
)
