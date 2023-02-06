import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./components/common/ErrorBoundary";
import AuthContext from "./context/auth/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback="loading" />
      <Suspense fallback="loading">
        <AuthContext>
          <App />
        </AuthContext>
          </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
