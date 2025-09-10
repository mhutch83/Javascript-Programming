//Track Product stock levels. First create the product obejects
const products = [{item:"coffee", stockLeft: 300,},
                  {item:"Bread", stockLeft: 0,},
                  {item:"Sugar", stockLeft:500,}
];

function checkStockLevels(products){
    for(let i = 0; i < products.length; i++){
        if(products[i].stockLeft > 0){
            console.log(`${products[i].item} is In Stock`);
        }else{
            console.log(`${products[i].item} is Out of Stock`);
        }
    }
}
checkStockLevels(products);
