const data = () => [
  { title: "Apples" },
  { title: "Oranges" },
  { title: "Bananas" },
  { title: "Kiwi Fruit" },
  { title: "Cherries" }
];

// create an empty array
const sortedData = [];

// push the relevant data into the empty array
data().map(t => {
  sortedData.push(t.title);
  // sort the array data with alfhabetical order
  sortedData.sort();
});

// loop inside the new sorted array and append the values with related list items
sortedData.map(f => $(".fruit-list").append("<li>" + f + "</li>"));
