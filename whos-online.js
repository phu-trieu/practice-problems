// Write a function that returns the number of users who are online in your slack
// channel.Please include the following features:

// 1) If nobody is online, return "There is nobody online."

// 2) If one person is online, return "username online"

// 3) If there are two people online, return "username and username2 are online

// 4) If there are more than two people, return "username, username2, and # more
// are online." So, if there were 6 people total online, you could return
// "username, username2, and 4 more are online."

// ex) whoIsOnline(["user123", "user4"]) ➞ "user123 and user4 are online"

const whosOnline = arr => {
  const l = arr.length;
  const user1 = arr[0];
  const user2 = arr[1];

  return l === 0 ? 'There is nobody online.' : l === 1 ? `${user1} online` : l === 2 ? `${user1} and ${user2} are online` : `${user1}, ${user2}, and ${l -2} more are online.`
}

console.log(whosOnline(['user1', 'user2', 'user3', 'user4']));
