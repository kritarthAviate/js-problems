function timeWas(time, now = Date.now()) {
  const timeDifference = now - time;

  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;

  const msInTimeframes = {
    second: SECONDS,
    minute: MINUTES,
    hour: HOURS,
    day: DAYS,
    week: WEEKS,
    month: MONTHS,
    year: YEARS,
  };

  if (timeDifference < 0) {
    return "Future time!";
  }

  const timeUnits = Object.keys(msInTimeframes);
  const msValues = Object.values(msInTimeframes);

  let unit = "second";
  let value = 0;

  for (let i = 0; i < timeUnits.length; i++) {
    const result = Math.floor(timeDifference / msValues[i]);

    if (result < 1) break;

    value = result;
    unit = timeUnits[i];
  }

  if (unit == "second" && value < 5) {
    return "just now";
  } else {
    if (value > 1) {
      unit += "s";
    }
    return value + " " + unit + " ago";
  }
}

export { timeWas };
