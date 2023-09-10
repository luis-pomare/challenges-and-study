async function getCarsFromRoadTripWheels() {
  const url = 'http://localhost:3000/api/v1/cars';
  let response = await fetch(url);
  response = await response.json();
  console.log(response);
}

getCarsFromRoadTripWheels();
