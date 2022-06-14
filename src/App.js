import React, { lazy, Suspense, useState } from "react";

import "./App.css";
import { Loader } from "./comp/Loader";
import { ContextProvider } from "./Store";
const Playground = lazy(() => import("./comp/Playground"));
export const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <ContextProvider>
          <Playground />
        </ContextProvider>
      </Suspense>
    </div>
  );
};
