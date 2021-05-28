const groceryList = [
    {
        id: 1,
        name: "Cheese",
        price: 5        
    },
    {
        id: 2,
        name: "Chicken Thighs",
        price: 10
    },
    {
        id: 3,
        name: "Tomatoes",
        price: 2
    },
    {
        id: 4,
        name: "Pork Chops",
        price: 7
    },
    {
        id: 5,
        name: "Sushi",
        price: 8
    },
    {
        id: 6,
        name: "Wild Rice",
        price: 4
    },
    {
        id: 7,
        name: "Angus Steak",
        price: 15
    }
];

// console.log(groceryList);



// Now think about it and making a fucntion that adds a new shopping item and automates adding id to each added item exercise

const addToShoppingList = (shoppingItemObject) => {
    const lastIndex = groceryList.length - 1 //getting the last index in the groceryList array and storing the value to the lastIndex variable
    const currentLastGroceryList = groceryList[lastIndex] //getting the last current grocery object's index in the groceryList array and storing it in the currentlastGroceryList variable
    const maxId = currentLastGroceryList.id //getting the id of the current last grocery list object and storing it in the maxId variable
    const newGroceryItemId = maxId + 1 //setting the declared new grocery item id variable to equal the maxId and adding 1
    shoppingItemObject.id = newGroceryItemId //adding an id property to the shoppingItemObject parameter and setting it equal to the newGroceryItemId
    groceryList.push(shoppingItemObject) //pushing the shoppingItemObject parameter to the groceryList array
    shoppingItemObject.dateCreated = new Date().toLocaleDateString(); //adding a dateCreated property to the shoppingItemObject and setting it equal to the current date and time
};

const water = {
    name: "Water",
    price: 4
};

const carrots = {
    name: "Carrot",
    price: 6
};

const meatballs = {
    name: "Meatballs",
    price: 8
}
const apples = {
    name: "Apples",
    price: 30
};

const peanutButter = {
    name: "Peanut Butter",
    price: 20
};

addToShoppingList(water);
addToShoppingList(carrots);
addToShoppingList(meatballs);
addToShoppingList(apples);
addToShoppingList(peanutButter);

//Filtering grocery list to find items that are more than 8 dollars

for (const groceryItem of groceryList) {
    if (groceryItem.price > 8) {
        console.log("List of items that are more than 8 dollars:", groceryItem) 
    } 
};

console.log(groceryList);