// function for product calculation
function updateProductCalculation(product, price, isIncrease) {
    const phoneCount = document.getElementById(product + '-count');
    let productCountNumber = parseInt(phoneCount.value);
    if (isIncrease) {
        productCountNumber = productCountNumber + 1;
    } else if (productCountNumber > 0) {
        productCountNumber = productCountNumber - 1;
    }
    // calculation product (+) (-)
    const phonePrice = document.getElementById(product + '-price');
    const phonePriceTotal = productCountNumber * price;
    phonePrice.innerText = phonePriceTotal;
    phoneCount.value = productCountNumber;

    countProductCalculation();
}
// function for get product increment/decrement value;
function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

// calculation sub total, tax ,total 
function countProductCalculation() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotalAmount = phoneTotal + caseTotal;
    const taxAmount = subTotalAmount * 0.1;
    // tax 
    const tax = document.getElementById('tax-amount');
    tax.innerText = taxAmount.toFixed(2);
    // total amount/price
    const totalAmount = taxAmount + subTotalAmount;
    // sub total 
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = subTotalAmount;
    const total = document.getElementById('total');
    total.innerText = totalAmount;


}

// click handler for phone (+) 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductCalculation('phone', 1219, true);
});

// click handler for phone (-) 
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductCalculation('phone', 1219, false);
});

// click handler for case (+) 
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductCalculation('case', 59, true);
});
// click handler for case (-) 
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductCalculation('case', 59, false)
});