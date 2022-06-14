import React, { useContext, useEffect } from "react";
import { SQLContext } from "../Store";
import { Result } from "./Result";
import { CSVToJSON, getData } from "../component/getData";
const Output = () => {
  const { data, setData, query, setColumns } = useContext(SQLContext);

  function search(obj, val) {
    if (val === "*") {
      return obj;
    } else if (Object.keys(obj[0]).includes(val)) {
      let g = obj.map((obj) => {
        const filtered = Object.entries(obj).filter(([key, value]) =>
          key.includes(val)
        );
        return Object.fromEntries(filtered);
      });
      return g;
    }
    return null;
  }
  useEffect(() => {
    let target = query.substring(
      query.indexOf("SELECT") + 7,
      query.indexOf("from") - 1
    );
    let db = query.substring(query.indexOf("from") + 5);
    getData(db)
      .then((val) => {
        setData(search(CSVToJSON(val.replace("\n", "")), target));
        setColumns(Object.keys(CSVToJSON(val.replace("\n", ""))[0]));
      })
      .catch(setData(""));
  }, [query]);
  return (
    <>
      <div className="outputNav">
        <h2>Output</h2>
      </div>
      <div className="output">
        <div className="result">
          {data ? (
            <Result data={data} />
          ) : (
            <div className="warning">
              <h2>Invalid Query Request</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Output;
