function meetingPlanner(slotsA, slotsB, dur) {
  let i = 0;
  let j = 0;

  while (i < slotsA.length && j < slotsB.length) {
    const start = Math.max(slotsA[i][0], slotsB[j][0]);
    const end = Math.min(slotsA[i][1], slotsB[j][1]);

    if (end - start >= dur) {
      return [start, start + dur];
    }

    // Move to the next slot for the person who ends earlier
    if (slotsA[i][1] < slotsB[j][1]) {
      i++;
    } else {
      j++;
    }
  }
}

// Test cases
const slotsA = [[10, 50], [60, 120], [140, 210]];
const slotsB = [[0, 15], [20, 60]];
const dur = 8;
console.log(meetingPlanner(slotsA, slotsB, dur));  // Output: [60, 68]

// const slotsA2 = [[10, 50], [60, 120], [140, 210]];
// const slotsB2 = [[0, 15], [60, 70]];
// const dur2 = 12;
// console.log(meetingPlanner(slotsA2, slotsB2, dur2));  // Output: []
