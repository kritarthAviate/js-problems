const msInTimeframes = {
  days: 24 * 60 * 60 * 1000,
  hours: 60 * 60 * 1000,
  minutes: 60 * 1000,
  seconds: 1000,
  milliseconds: 1,
  microseconds: 1 / 1000,
  nanoseconds: 1 / 1000000,
};

const parseMs = (ms) => {
  const result = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    microseconds: 0,
    nanoseconds: 0,
  };

  let time = ms;
  const timeUnits = Object.keys(msInTimeframes);
  const msValues = Object.values(msInTimeframes);

  for (let i = 0; i < timeUnits.length; i++) {
    result[timeUnits[i]] = Math.floor(time / msValues[i]);
    time %= msValues[i];
  }

  return result;
};

export { parseMs };
