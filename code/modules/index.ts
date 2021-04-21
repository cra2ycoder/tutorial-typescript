import {
  HOURS_PER_DAY,
  TOTAL_DAYS_PER_WEEK,
  getCurrentDate,
  getWeekDays
} from "./Module";

// getting all the exports expect the default export
import * as Module from "./Module";

// getting only the default
import hoursPerDay from "./Module";

// reference
import { HOURS_PER_DAY as totalHours } from "./Module";

// simple way
console.log({ HOURS_PER_DAY });
console.log({ TOTAL_DAYS_PER_WEEK });

getCurrentDate();

getWeekDays();

// * as Module
console.log(Module.HOURS_PER_DAY);
console.log(Module.TOTAL_DAYS_PER_WEEK);
Module.getCurrentDate();
Module.getWeekDays();

// printing default export
console.log({ hoursPerDay });

// reference
console.log({ totalHours });
