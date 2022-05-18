import { expect, test } from "vitest";

/**
 * Given a 3 letter weekday, convert it to a full length.
 * E.g. : `mon` => `Monday`
 *
 * @param shortWeekDay {string}
 * @return {string}
 **/
export function convertToWeekDay(shortWeekDay) {
  // Add code here ‍💻
  return "Monday";
}

/*****************************************/
/* Test Code Below                       */
/* No need to touch this 🙈              */
/*****************************************/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/

if (import.meta.vitest) {
  test("should set names correctly", () => {
    expect(convertToWeekDay("mon")).toMatch(/monday/i);
    expect(convertToWeekDay("tue")).toMatch(/tuesday/i);
    expect(convertToWeekDay("wed")).toMatch(/wednesday/i);
    expect(convertToWeekDay("thu")).toMatch(/thursday/i);
    expect(convertToWeekDay("fri")).toMatch(/friday/i);
    expect(convertToWeekDay("sau")).toMatch(/saturday/i);
    expect(convertToWeekDay("sun")).toMatch(/sunday/i);
    expect(convertToWeekDay("invalid")).toBeFalsy();
  });
}
