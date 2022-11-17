/**
 * Given a 3 letter weekday, convert it to a full length day in English.
 *
 * @example
 *   convertToWeekDay('mon') => 'Monday'
 *   convertToWeekDay('tue') => 'Tuesday'
 *   ...
 *
 * @param shortWeekDay {string} ('mon', 'tue', 'wed', etc...)
 * @return {string}
 **/
export function convertToWeekDay(shortWeekDay) {
  // Add code here ‍💻

  // Make sure the entered string is the correct format:
  const input = shortWeekDay.toLowerCase();

  // Create array with all weekdays to use for filtering
  const weekDayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Use a filter function to find the day that matches
  const longWeekDay = weekDayArray.filter(determineDay);
  function determineDay(day) {
    if (day.toLowerCase().includes(input)) return day;
  }
  return longWeekDay[0];
}
