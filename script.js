const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  for (let property in sampleObject) {
    if (property === key) {
      return true; // Key found, return true
    }
  }
  return false; // Key not found, return false after checking all properties
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
