const categories = [
  {
    name: "Motors, Tools & DIY",
    childern: [
      {
        name: "Lubricants",
        children: null,
      },
      {
        name: "Motorcycles",
        children: [
          {
            name: "Standard Bikes",
            childern: null,
          },
          {
            name: "Electric Bikes",
            childern: null,
          },
          {
            name: "Scooters",
            childern: null,
          },
        ],
      },
    ],
  },
];

console.log(categories);

const printCategories = (catList) => {
  let gap = "";
  for (let j = 0; j < i; j++) {
    let gap = "";
    for (let j = 0; j < i; j++) {
      gap += " ";
    }
  }

  for (let cat of catList) {
    console.log(cat.name);
    if (cat.childern) {
      printCategories(cat.childern);
    }
  }
};
