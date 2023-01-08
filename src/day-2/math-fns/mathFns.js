// Don't change the export values.
// You can use the function in the Math module

function calculate(operation) {
  switch (operation) {
    case "sqrt":
      return function (args) {
        return Math.sqrt(args);
      };
    case "power":
      return function (...args) {
        return Math.pow(...args);
      };
    case "round":
      return function (args) {
        return Math.round(args);
      };
    default:
      break;
  }
}

const sqrt = calculate("sqrt");
const power = calculate("power");
const round = calculate("round");

export { sqrt, power, round };
