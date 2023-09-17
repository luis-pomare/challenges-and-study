function meetingPlanner(slotsA, slotsB, dur) {

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
