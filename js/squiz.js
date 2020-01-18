const data = () => [
  { title: "Apples" },
  { title: "Oranges" },
  { title: "Bananas" },
  { title: "Kiwi Fruit" },
  { title: "Cherries" }
];

// create a new array and copy titles via sorted by alphabetical order
let sortedFruits = [
  ...data()
    .map(f => f.title)
    .sort()
];

// loop inside the new sorted array and append the values with related list items
sortedFruits.map(f => $(".fruit-list").append("<li>" + f + "</li>"));
