const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

let team=players;
let team1=Array.from(players);
let cap1= person();


window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
