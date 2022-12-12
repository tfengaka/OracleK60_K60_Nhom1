import { ApolloProvider } from "@apollo/client";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import client from "~/app/apolloClient";
import store, { persistor } from "~/redux/store";
import { RoutesProvider } from "~/routes";
import ThemeProvider from "~/theme";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <RoutesProvider />
        </ThemeProvider>
      </ApolloProvider>
    </PersistGate>
  </ReduxProvider>,
);
reportWebVitals();
