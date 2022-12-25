const possibleValues = ['true', 'false', '!true', '!false', '^', '&', '|'];

const isGarbagevalue = (expression) => {
  const expressionArr = expression.split(' ');
  return expressionArr.every((value) => possibleValues.includes(value));
};

function booleanExpressionEvaluator(expression) {
}

export { booleanExpressionEvaluator };
