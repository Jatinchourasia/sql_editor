import React, { createContext, useState } from "react";

const SQLContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("SELECT * from customers");
  const [toggel, setToggel] = useState(true);
  const [columns, setColumns] = useState("");

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
      }}
    >
      {children}
    </SQLContext.Provider>
  );
};

export { ContextProvider, SQLContext };
