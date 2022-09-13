// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newUserName = [];
array.forEach((user) => {
  let { username } = user;
  username = username + "!";
  newUserName.push(username);
})
console.log(newUserName);
//Create an array using map that has all the usernames with a "? to each of the usernames
const newUserName2 = array.map((user) => {
  let { username } = user;
  return username + "?";
})
console.log(newUserName2);
//Filter the array to only include users who are on team: red
const filterUserName = array.filter((user) => {
  return user.team === "red"
})
console.log(filterUserName); 
// or
function reduceRedTeamUserNames(userList) {
  const filterTerm = "red";
  return userList.reduce((previous, current) => {
    if (current.team === filterTerm) previous.push(current.username);
    return previous;
  }, []);
}
const redTeamNameList1 = reduceRedTeamUserNames(array);
console.log(redTeamNameList1);
// or
function filterRedTeamUserNames(userList) {
  const filterTerm = "red";
  return userList
    .map(({ team, username }) => {
      return team === filterTerm ? username : null;
    })
    .filter((username) => !!username);
}
const redTeamNameList2 = filterRedTeamUserNames(array);
console.log(redTeamNameList2);
//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
  return acc + user.score
}, 0);

console.log(total);
// (1), what is the value of i?
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// })
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
