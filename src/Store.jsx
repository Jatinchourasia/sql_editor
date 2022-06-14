import React, { createContext, useState } from "react";

const SQLContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");
  const [toggel, setToggel] = useState(true);
  const [columns, setColumns] = useState("");
  const [code, setCode] = useState("");

  return (
    <SQLContext.Provider
      value={{
        data,
        setData,
        query,
        setQuery,
        toggel,
        setToggel,
        columns,
        setColumns,
        code,
        setCode,
      }}
    >
      {children}
    </SQLContext.Provider>
  );
};

export { ContextProvider, SQLContext };
