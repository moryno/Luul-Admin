import { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { makePersistor, makeStore } from ".";
import { AppLoader } from "@/components";

export default function StoreProvider({ children }) {
  const [store] = useState(() => makeStore());
  const [persistor] = useState(() => makePersistor(store));

  return (
    <Provider store={store}>
      <PersistGate loading={<AppLoader />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
