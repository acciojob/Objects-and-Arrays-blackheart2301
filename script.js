const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

let team=players;
let team1=players.concat();
for(let i=0;i<players.length;i++){
	team1[i]= players[i];
}
let cap1= person();
cap1.name=person.name;
cap1.age=person.age;

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
