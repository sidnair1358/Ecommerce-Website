## OSC CHALLENGE

I have created a simple ecommerce website using the mock api provided in the spec. The website displays a list of categories on the landing page below the fold and has links to selected categories in the navbar. You can click through to a specific category and reach a products page per category.

Within the products page you can select a product by clicking on it and this should take you to the product details page.

The product details page displays product images, descriptions, price from the mock api as well as some hard-coded values for swatches, reviews and highlights. The page also contains an "Add to bag" button which can be clicked to add an item to the shopping bag.

I modal should pop up to display the addition of an item to the shopping bag. The functionality to close the modal needs to be implemented. Once a product has been added to the shopping bag a user can click on the "Bag" icon in the nabar. This would display a minibag which gives the option to add and reduce the number of items in the shopping bag. It displayes the price of the items in the bag and the total amount.

`At the time of writing this I realized that there is a bug in the total amount funcitonality - if different items are added to the shopping bag the total amount only updates for the first item.`

The fix for this would be to map over the `products` array, and add the prices of each product.

There is an increment and decrement button which does what the name suggests.

## Tools used:

    - Next
    - Tailwind
    - React-HeroIcons
