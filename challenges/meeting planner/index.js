function meetingPlanner(slotsA, slotsB, dur) {
  let i = 0;
  let j = 0;

  while (i < slotsA.length && j < slotsB.length) {
    let start = Math.max(slotsA[i][0], slotsB[j][0]);
    let end = Math.min(slotsA[i][1], slotsB[j][1])
    let minStart = Math.min(slotsA[i][0], slotsB[j][0]);

    if ((end - start) >= dur) return [minStart, minStart + dur]
    if (slotsA[i][1] <= slotsB[j][1]) {
      i += 1;
    } else {
      j += 1;
    }


  }
  return []
}

// Test cases
const slotsA = [[10, 50], [60, 120], [140, 210]];
const slotsB = [[0, 15], [60, 70]];
const dur = 8;
console.log(meetingPlanner(slotsA, slotsB, dur));  // Output: [60, 68]

const slotsA2 = [[10, 50], [60, 120], [140, 210]];
const slotsB2 = [[0, 15], [60, 70]];
const dur2 = 12;
console.log(meetingPlanner(slotsA2, slotsB2, dur2));  // Output: []
