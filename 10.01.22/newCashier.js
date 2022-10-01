// New Cashier Does Not Know About Space or Shift

// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

function getOrder(input) {
    const menuItems = {
        burger: 0,
        fries: 0,
        chicken: 0,
        pizza: 0,
        sandwich: 0,
        onionrings: 0,
        milkshake: 0,
        coke: 0,
    };

    for (item in menuItems) {
        menuItems[item] = input.split(item).length - 1;
    }

    const order = [];

    for (item in menuItems) {
        if (menuItems[item]) {
            for(let i = 0; i < menuItems[item]; i++) {
                order.push(item[0].toUpperCase() + item.slice(1))
            }
        }
    }

    return order.join(' ')
}
