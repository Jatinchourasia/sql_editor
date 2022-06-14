import React from "react";

export const Result = ({ data }) => {
  // console.log("dhfjklshdfjhsdjhj", data);
  return (
    <>
      {data && (
        <table>
          <tbody>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
            {data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((val, i) => (
                  <td key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
