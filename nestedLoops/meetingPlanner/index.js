function meetingPlanner(slotsA, slotsB, dur) {
  for (let i = 0; i < slotsA.length; i += 1) {
    for (let j = 0; j < slotsB.length; j += 1) {
      let maxStart = Math.max(slotsA[i][0], slotsB[j][0]);
      let minEnd = Math.min(slotsA[i][1], slotsB[j][1]);

      if ((minEnd - maxStart) >= dur) return [Math.min(slotsA[i][0], slotsB[j][0]), Math.min(slotsA[i][0], slotsB[j][0]) + dur]
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
