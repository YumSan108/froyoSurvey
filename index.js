let customer = {
    //object Cusomter with properties
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "613",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Amazon Fresh",
    firstVisit: false
};

//editing properties
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 319551234;
customer["zipCode"] = "63132"
customer["favoriteFlavors"] = "coffee", "strawberry", "matcha";

//deleting properties
delete customer.zipCode;
delete customer.favoriteFlavors;

//adding properties
customer.toppings = "chocolate sprinkles", "wafer straws", "gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

//printing out keys only
let keys = Object.keys(customer);

console.log(keys);


let values = Object.values(customer);

console.log(values);