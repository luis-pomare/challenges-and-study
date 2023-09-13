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
  data.forEach((team) => {
    team.forEach((item) => {
      console.log(item);
    });
    console.log('¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬')
  });
}

printData(information);
