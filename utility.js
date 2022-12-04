const importData = (filepath) => {
  const fs = require("fs");
  let string = fs.readFileSync(filepath).toString();
  return string;
};

module.exports = { importData };
