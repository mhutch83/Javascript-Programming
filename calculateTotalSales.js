//create a sales objecţ that holds at least three items to calculate sales
const sales=[
            { item:"shoes", quantity:5, price:70.00 },
            { item:"jeans", quantity:5, price:120.00 },
            { item:"shirts", quantity:4, price:200.00 }
];

//Create a fucntion that calculates total sales and takes the sales as input
function calculateTotalSales(sales){
    let total = 0;
    for(let i = 0; i < sales.length; i++){
        total += sales[i].quantity * sales[i].price;
    }
    return total;
}
console.log("Total Sales Amount: ",calculateTotalSales(sales));

//create a fucntion that itemizes the orders and adds the grandtotal 
function generateReceipt(sales){
    let grandTotal = 0;

    console.log("Receipt");
    console.log("--------------");
//Iterate through the sales array, calculate the item total and add to the grand total
    for(let i =0;i<sales.length;i++){
        const itemTotal = sales[i].quantity * sales[i].price;
        grandTotal+=itemTotal;
        console.log(`${sales[i].item} - Quantity: ${sales[i].quantity}, Price: $${sales[i].price}, Total: $${itemTotal}`);
    }
    console.log("-------------");
    console.log(`Grand Total: $${grandTotal}`);
}
generateReceipt(sales);