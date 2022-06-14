import React, { useContext } from "react";
import { SQLContext } from "../Store";
import CodeEditor from "@uiw/react-textarea-code-editor";

export const QuickAccess = () => {
  const { setQuery } = useContext(SQLContext);

  const Querys = [
    "SELECT * from customers",
    "SELECT * from orders",
    "SELECT contactName from customers",
    "SELECT orderID from orders",
  ];
  return (
    <>
      <p>QuickAccess</p>

      <div className="quick">
        {Querys.map((val, i) => (
          <div className="li" key={i} onClick={() => setQuery(val)}>
            <CodeEditor
              value={val}
              language="sql"
              padding={15}
              style={{
                fontSize: 14,
                backgroundColor: "#111B3C",
                cursor: "pointer",
                pointerEvents: "none",
                borderRadius: "8px",
                padding: "0.3rem",
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
