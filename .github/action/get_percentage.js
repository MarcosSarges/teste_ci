const fs = require("fs");
const path = require("path");

const get_percentage = () => {
  const coveragePath = path.resolve(
    __dirname,
    "../../coverage/lcov-report/index.html"
  );
  console.log({ coveragePath });
  const coverageContent = fs.readFileSync(coveragePath, "utf-8");
  const currentCoverage = coverageContent.match(
    /<span\s+class=['"]strong['"]>(.*?)<\/span>/gi
  );
  const percentageStatements = currentCoverage[0].replace(/[^\d.]/g, "");
  const percentageBranches = currentCoverage[1].replace(/[^\d.]/g, "");
  const percentageFunctions = currentCoverage[2].replace(/[^\d.]/g, "");
  const percentageLines = currentCoverage[3].replace(/[^\d.]/g, "");
  return {
    percentageStatements: parseFloat(percentageStatements),
    percentageBranches: parseFloat(percentageBranches),
    percentageFunctions: parseFloat(percentageFunctions),
    percentageLines: parseFloat(percentageLines),
  };
};

module.exports = get_percentage;
