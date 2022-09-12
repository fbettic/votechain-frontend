import React from "react";
import AppContainer from "./src/navigation/AppContainer";
import { store } from "./src/slices/store";
import { Provider as ReduxProvider } from "react-redux";

const App = () => {
  return (
		<ReduxProvider store={store}>
    <AppContainer/>
		</ReduxProvider>
  );
}


export default App;