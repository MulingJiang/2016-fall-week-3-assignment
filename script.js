/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

var shoe1 = {
	name:"Venture",
	price: 79.95,
	maker: "Gel"
};
var shoe2 = {
	name:"Unisex",
	price: 32.99,
	maker: "Jackshibo"
}
var shoe3 = {
	name:"Gusto Cross",
	price: 39.97,
	maker: "Champion"
}
var shoe4 = {
	name:"Suede Classic",
	price: 168.32,
	maker: "PUMA"
}

var productList = []; //this is an array

//Your code here

productList.push(shoe1, shoe2, shoe3, shoe4);
//Hint: productList.push(newObject) will add the object you just created to the array

console.log(productList[0]);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
for(var i = 0; i < productList.length; i++){

    //Your code here
    if (productList[i].price< 50){

    console.log("The product" + productList[i].name + "costs" + productList[i].price + ", and is a match");
}
}
/* Step 3
 * What is the average price of all the products?
 */
var sum = 0;

    for(var i = 0; i < productList.length; i++){

    	sum = sum + productList[i].price 

    }  

var average = sum/productList.length

console.log(average);

//3.1 first, calculate total price using the for loop again

//3.2 then, divide total price by the number of products, using proudctList.length


/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;
    for(var i =0; i<productList.length;i++){

    if(productList[i].price < p ){
    	numOfMatchingProducts ++
    }
    }

    //Your code here

    return numOfMatchingProducts;
}

//
console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
