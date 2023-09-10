async function getCarsFromRoadTripWheels() {
  const url = 'http://localhost:3000/api/v1/cars';
  const response = await fetch(url);
  console.log(response);
}

getCarsFromRoadTripWheels();
