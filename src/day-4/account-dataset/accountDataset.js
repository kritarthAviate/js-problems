const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  return bankBalances.filter((data) => +data.amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map((data) => {
    let newObj = {};
    newObj.amount = data.amount;
    newObj.state = data.state;
    newObj.rounded = Math.round(data.amount);
    return newObj;
  });
}

function sumOfBankBalances() {
  return +bankBalances.reduce((acc, data) => acc + +data.amount, 0).toFixed(2);
}

function sumOfInterests() {
  const taxableStates = ["WI", "IL", "WY", "OH", "GA", "DE"];
  return +bankBalances
    .filter((data) => taxableStates.includes(data.state))
    .reduce((acc, data) => acc + +data.amount * 0.189, 0)
    .toFixed(2);
}

function higherStateSums() {
  const map = {};
  bankBalances.map((account) => {
    const amount = parseFloat(account.amount);
    if (account.state in map) {
      map[account.state] = map[account.state] + amount;
    } else {
      map[account.state] = amount;
    }
  });
  return Object.keys(map)
    .filter((state) => map[state] > 1000000)
    .reduce((sum, state) => sum + map[state], 0);
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
