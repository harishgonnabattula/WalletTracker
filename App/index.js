import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import EStyleSheet from "react-native-extended-stylesheet";
import Navigation from "../App/navigation/navigator";
import { AlertProvider } from "./components/Alert";
import { Provider } from "react-redux";
import { store, persistor } from "./config/store";

EStyleSheet.build({
  $theme: "#1E212A",
  $outline: 0
});
export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AlertProvider>
        <Navigation onNavigationStateChange={null} />
      </AlertProvider>
    </PersistGate>
  </Provider>
);
