const fs = require("fs");
const get_percentage = require("./get_percentage");
const { makeBadge } = require("badge-maker");

const generateBadge = ({ percentageStatements }) => {
  const format = {
    label: "coverage",
    message: `${percentageStatements}%`,
    color: percentageStatements > 50 ? "green" : "red",
  };

  const svg = makeBadge(format);
  fs.writeFileSync("./badge.svg", svg);
};

generateBadge(get_percentage());
