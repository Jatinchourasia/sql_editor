import React, { useContext } from "react";
import { SQLContext } from "../Store";

const DatabaseInfo = () => {
  const { columns } = useContext(SQLContext);

  return (
    <>
      <h2>Database columns</h2>

      <div className="dbInfo">
        {columns &&
          columns.map((key, i) => (
            <p key={key}>
              {i + 1}. {key}
            </p>
          ))}
      </div>
    </>
  );
};

export default DatabaseInfo;
