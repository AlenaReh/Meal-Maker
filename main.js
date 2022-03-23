const menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    addDishToCourse: function (courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse: function (courseName) {
        const dishes = this.courses[courseName];
        const randomDishInd = Math.floor(Math.random()*dishes.length);
        return dishes[randomDishInd];
    },
    generateRandomMeal: function() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const mealPrice = appetizer.price + main.price + dessert.price;
        console.log(`Tonight you will bw served with ${appetizer.name}, ${main.name}, and ${dessert.name} for total cost of $${mealPrice}. Enjoy!`)
    }
}

// * Adding courses to our menu

menu.addDishToCourse('appetizers', 'Spinach Artichoke Dip', 4);
menu.addDishToCourse('appetizers', 'Fish Dip', 3);
menu.addDishToCourse('appetizers', 'Raw Vegetables and Hummus', 5);

menu.addDishToCourse('mains', 'Steak with Vegetables', 25);
menu.addDishToCourse('mains', 'Pork and Mashed Potatoes', 20);
menu.addDishToCourse('mains', 'Pizza', 15);

menu.addDishToCourse('desserts', 'Ice cream', 5);
menu.addDishToCourse('desserts', 'Lava Cake', 5);
menu.addDishToCourse('desserts', 'Strawberry Cheescake', 4);

menu.generateRandomMeal();








