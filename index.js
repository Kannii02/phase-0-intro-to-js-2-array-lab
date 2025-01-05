// Write your solution here!
["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name); // Appends to the end of the array
  }
  function appendCat(name) {
    return [...cats, name]; // Returns a new array
  }
  function destructivelyRemoveLastCat() {
    cats.pop(); // Removes the last element
  }
  function removeLastCat() {
    return cats.slice(0, -1); // Returns a new array without the last element
  }
  