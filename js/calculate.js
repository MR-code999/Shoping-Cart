function updateProduct(product, price, isplus) {
    const productInputField = document.getElementById(product + '-quantity');
    let inputValue = productInputField.value;
    /* condition */

    if (isplus) {
        productText = parseInt(inputValue) + 1;
    }
    else if (productText > 0) {
        productText = parseInt(inputValue) - 1;
    }
    productInputField.value = productText;

    //  update blance
    const updateBlance = document.getElementById(product + '-total');
    updateBlance.innerText = productText * price;

    calculationTotal()



}

/* final upDateBlance section */
function updateProductBlance(product) {
    const productIinput = document.getElementById(product + '-quantity');
    const productQuantity = parseInt(productIinput.value);
    return productQuantity;
}

function calculationTotal() {
    const cookerAmount = updateProductBlance('cooker') * 126;
    const iceCrimeAmount = updateProductBlance('ice') * 33;
    const Ammount = cookerAmount + iceCrimeAmount;
    const Discount = Ammount / 3;
    const EstTax = Ammount / 12;
    const ordarAmmount = Ammount + EstTax - Discount;

    document.getElementById('product-amount').innerText = Ammount;
    document.getElementById('product-discount').innerText = Discount;
    document.getElementById('product-tax').innerText = EstTax;
    document.getElementById('final-blance').innerText = ordarAmmount;
}


document.getElementById('checkout-now').addEventListener('click', function () {
    alert('Thanks for Purching our Products');
})










/* product 1 plus section */
document.getElementById('cooker-plus').addEventListener('click', function () {
    updateProduct('cooker', 126, true);
})
/* product 1 minus section */
document.getElementById('cooker-minus').addEventListener('click', function () {
    updateProduct('cooker', 126, false);
})
/* product 2 plus section */
document.getElementById('ice-plus').addEventListener('click', function () {
    updateProduct('ice', 33, true);
})
/* product 2 minus section */
document.getElementById('ice-minus').addEventListener('click', function () {
    updateProduct('ice', 33, false);
})

/* product value update section */

