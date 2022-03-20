var menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    addDishToCourse: function (courseName, dishName, dishPrice) {
        var dish = {
            name: dishName,
            price: dishPrice,
        };
        return this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse: function (courseName) {
        var dishes = this.courses[courseName];
        var randomDish = Math.floor(Math.random(0 * dishes.length));
        return dishes[randomDish];
    },
    generateRandomMeal: function () {
        var appetizer = menu.getRandomDishFromCourse('appetizers');
        var main = menu.generateRandomMeal('mains');
        var dessert = menu.generateRandomMeal('deserts');

        var totalPrice = appetizer[2] + main[2] + dessert[2];
        console.log(`Your total price is ${totalPrice}.`);
        return totalPrice;
    }
}

menu.addDishToCourse('appetizers', 'Spinach Artichoke Dip', 3);
menu.addDishToCourse('appetizers', 'Fish Dip', 3);
menu.addDishToCourse('appetizers', 'Raw Vegetables and Hummus', 3);

menu.addDishToCourse('mains', 'Steak with Vegetables', 15);
menu.addDishToCourse('mains', 'Pork and Mashed Potatoes', 15);
menu.addDishToCourse('mains', 'Pizza', 15);

menu.addDishToCourse('desserts', 'Ice cream', 4);
menu.addDishToCourse('desserts', 'Lava Cake', 4);
menu.addDishToCourse('desserts', 'Strawberry Cheescake', 4);

// console.log(menu.courses.appetizers);
// console.log(menu.courses.mains);
// console.log(menu.courses.desserts);
var meal = menu.generateRandomMeal();

console.log('Your meal for today is: ', meal);





