import React from "react";

export const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
      className="loader"
    >
      Loading ...
    </div>
  );
};
