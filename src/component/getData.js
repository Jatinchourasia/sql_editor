export const CSVToJSON = (csv) => {
  const lines = csv.split("\n");
  const keys = lines[0].split(",");
  return lines.slice(1).map((line) => {
    return line.split(",").reduce((acc, cur, i) => {
      const toAdd = {};
      toAdd[keys[i]] = cur;
      return { ...acc, ...toAdd };
    }, {});
  });
};
const JSONToCSV = (objArray, keys) => {
  let csv = keys.join(",");
  objArray.forEach((row) => {
    let values = [];
    keys.forEach((key) => {
      values.push(row[key] || "");
    });
    csv += "\n" + values.join(",");
  });
  return csv;
};

const supportedDB = [
  "categories",
  "customers",
  "employee_territories",
  "orders",
  "suppliers",
  "territories",
];
export const getData = async (db) => {
  if (supportedDB.includes(db)) {
    const response = await fetch(
      `https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${db}.csv`
    )
      .then((res) => {
        if (res.ok) {
          return res.text();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((err) => err);
    return response;
  } else {
    return new Error("DB not availabel");
  }
};
