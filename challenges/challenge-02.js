/**
 * Given a time in the format `hh:mm`, for start and end, calculate the total duration between them.
 *
 * @example
 *   durationInHours('00:00', '03:00') => 3;
 *   durationInHours('02:00', '04:00') => 2;
 *   ...
 *
 * @param start {string} Something like  `01:00`
 * @param end {string} Something like `04:00`
 * @return {number} Hours as a number (not a string), e.g. 2
 **/
export function durationInHours(start, end) {
  // Add code here ‍💻

  // Convert entered strings to integers
  const startHour = parseInt(start.split(":")[0]);
  const startMinutes = parseInt(start.split(":")[1]) / 60;
  const endHour = parseInt(end.split(":")[0]);
  const endMinutes = parseInt(end.split(":")[1]) / 60;
  // Do the maths & round to 2 decimals if needed
  // maths are: (endHour + endMinutes) - (startHour + startMinutes);
  const result = Math.round((endHour + endMinutes - (startHour + startMinutes) + Number.EPSILON) * 100) / 100;
  // return as absolute
  return Math.abs(result);
}
