import * as React from "react";
import { App } from "./App";
import ReactDOM from "react-dom";
import { configI18n } from "config";
import "./styles/landing.css";
import { Router } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "config/theme";
import { RTLProvider } from "shared/providers";
import { QueryClient, QueryClientProvider } from "react-query";
import { Csrf } from "config/Csrf";
import { history } from "shared/history.utils";
import { AuthGuard } from "shared/providers/AuthGuard";
import { SnackbarProvider } from "shared/providers/SnackbarProvider";

configI18n();
const queryClient = new QueryClient();

ReactDOM.render(
  <Router history={history}>
    <QueryClientProvider client={queryClient}>
      <Csrf>
        <AuthGuard>
          <ThemeProvider theme={theme}>
            <RTLProvider>
              <CssBaseline />
              <SnackbarProvider>
                <App />
              </SnackbarProvider>
            </RTLProvider>
          </ThemeProvider>
        </AuthGuard>
      </Csrf>
    </QueryClientProvider>
  </Router>,
  document.querySelector("#root")
);
