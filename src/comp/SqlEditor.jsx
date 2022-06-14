import React, { useContext, useEffect, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { SQLContext } from "../Store";
import Dolfin from "../dolfin.svg";
import Down from "../dowm.svg";
const SqlEditor = () => {
  const { query, setQuery } = useContext(SQLContext);
  const [state, setState] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(query);
  }, [query]);
  return (
    <>
      <div className="editor">
        <div className={`editorNav ${state && "border"}`}>
          <h2>
            <img src={Dolfin} alt="logo" className="logo" />
            SQL
          </h2>
          <div className="control">
            <button
              className="b1"
              onClick={() => {
                setQuery(input);
              }}
            >
              Run
            </button>
            <button
              className="b2"
              onClick={() => {
                setQuery("");
                setInput("");
              }}
            >
              Clear
            </button>
            <img
              className={`drop ${state ? "up" : "down"}`}
              src={Down}
              alt="down"
              onClick={() => {
                setState(!state);
              }}
            />
          </div>
        </div>
        <div className={`edi ${state ? "content" : "contentAni"}`}>
          <CodeEditor
            value={query}
            language="sql"
            placeholder="only supports SELECT * querys"
            onChange={(evn) => setInput(evn.target.value)}
            className="code"
            padding={15}
            style={{
              fontSize: 18,
              backgroundColor: "#111B3C",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SqlEditor;
