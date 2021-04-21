export const HOURS_PER_DAY = 24;
export const TOTAL_DAYS_PER_WEEK = 7;

export const getWeekDays = () => {
  return [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];
};

export function getCurrentDate() {
  return new Date();
}

export default HOURS_PER_DAY;
