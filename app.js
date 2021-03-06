
document.getElementById('case-plus').addEventListener('click', function(){
    updateProduct('case',59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProduct('case',59,false);
});

// Phone Functions

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProduct('phone',1219,true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProduct('phone',1219,false);
});



    /* Simple functions to reduce Code */

function updateProduct(product, price, yes){
    const ProductInput= document.getElementById( product +'-number');
    let  ProductNumber  = ProductInput.value ;

    if (yes){
        ProductInput.value = parseInt(ProductNumber) +1;
    }
    else if (ProductNumber > 0) {
        ProductInput.value = parseInt(ProductNumber) - 1;
    }
    ProductNumber  = ProductInput.value ;

    const ProductAmount = document.getElementById(product +'-amount');
        ProductAmount.innerText = ProductNumber * price;

        calculateTotal();
        
}

function getValueFinal(product){
const productInput  = document.getElementById( product +'-number');
const   productNumber  = parseInt(productInput.value);
return productNumber ;

} 

function calculateTotal( ){


    const phoneTotal = getValueFinal('phone') * 1219
    const caseTotal = getValueFinal('case') * 59
    const SubTotal = phoneTotal + caseTotal;
    const tax = SubTotal / 10;
    
    document.getElementById('sub-total').innerText = SubTotal;
    document.getElementById('tax-amount').innerText = SubTotal/10;
    document.getElementById('total-price').innerText = SubTotal + tax;

}