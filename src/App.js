import React from "react";
import AppRoutes from "./route";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <body>
      <Provider store={store}>
        <AppRoutes/>
      </Provider>
    </body>
  );
}

export default App;
