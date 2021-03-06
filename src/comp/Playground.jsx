import React, { lazy, Suspense } from "react";

import { QuickAccess } from "./QuickAccess";
const SqlEditor = lazy(() => import("./SqlEditor"));

const DatabaseInfo = lazy(() => import("./DatabaseInfo"));
const Output = lazy(() => import("./Output"));
const Playground = () => {
  return (
    <div className="playGround">
      <div className="left">
        <div className="top">
          <QuickAccess />
        </div>
        <div className="bottom">
          <Suspense fallback={<div>Loading...</div>}>
            <DatabaseInfo />
          </Suspense>
        </div>
      </div>

      <div className="right">
        <Suspense fallback={<div>Loading...</div>}>
          <SqlEditor />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Output />
        </Suspense>
      </div>
    </div>
  );
};

export default Playground;
