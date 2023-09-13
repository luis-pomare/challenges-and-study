const information = [];

information.push([
  'Team: America',
  'Played games: 3',
  'goals: 3'
]);

information.push([
  'Team: Cali',
  'Played games: 10',
  'goals: 0'
]);

information.push([
  'Team: Envigado',
  'Played games: 2',
  'goals: 1'
]);

const printData = (data) => {
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].length; j += 1) {
      console.log(information[i][j])
    }
    console.log('---------------------------------');
  }
}

printData(information);
