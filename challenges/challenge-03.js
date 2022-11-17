import data from "../data/schedule.json";

/**
 * Loop through the schedule, and find all the acts that are playing - Then populate a new array with the name (string) of the acts.
 * - Check the `/data/schedule.json` file for JSON structure
 * - Remove acts called **`break`**
 * - Remove acts that have been **cancelled**
 *
 * @example
 *   import data from '../data/schedule.json'
 *
 *   buildArtistList(data) => [
 *    "AC/DC",
 *    "Abbott and Sons",
 *    "Auer - Towne",
 *    ...
 *   ]
 *
 * @param schedule
 * @returns {Array<string>}
 */
export function buildArtistList(schedule = data) {
  const artistList = [];
  // Add code here ‍💻

  // Got some help from Jonas for this - I was struggling to loop through objects and he reminded me that you can use a for in loop like this
  for (const venue in schedule) {
    const { mon, tue, wed, thu, fri, sat, sun } = schedule[venue];
    // Instead of having to make separate variables for each venue like:
    //schedule["Midgard"] === schedule.Midgard

    // Then I spread the days and add all acts into one array (so now we have all acts for the week for each venue)
    const days = [...mon, ...tue, ...wed, ...thu, ...fri, ...sat, ...sun];

    // And then I use my filter to remove breaks and cancelled acts
    const acts = days.filter((day) => day.act !== "break" && !day.cancelled);

    // And finally push all the names of the acts to the artistlist array
    acts.forEach((act) => {
      artistList.push(act.act);
    });
  }

  return artistList;
}
