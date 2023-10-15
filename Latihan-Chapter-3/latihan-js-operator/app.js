const DISCOUNT = 0.1;
const SHIPPING_FEE = 100;

const productText = document.getElementById('product-text');
const subTotalText = document.getElementById('subtotal-text');
const discountText = document.getElementById('discount-text');
const shippingFeeText = document.getElementById('shipping-fee-text');
const totalText = document.getElementById('total-text');

discountText.innerHTML = "10%";
shippingFeeText.innerHTML = SHIPPING_FEE;

const inputItemName = document.getElementById('itemName');
const inputPrice = document.getElementById('price');
const inputQty = document.getElementById('qty');
const formCart = document.getElementById('form-cart');

inputItemName.addEventListener('change', onChangeInputName);
formCart.addEventListener('submit', onSubmitCart);

function formatPrice(price_){
    const price = price_

    const formattedPrice = price.toLocaleString();

    return formattedPrice
}

function onChangeInputName(e) {
    const inputValue = inputItemName.value;
    productText.textContent = `${inputValue}`;
}

function onSubmitCart(e) {
    e.preventDefault();


    const priceInputValue = inputPrice.value;
    const qtyInputValue = inputQty.value;

    if(priceInputValue == "" && qtyInputValue == ""){
        alert("Masukkan Price dan Quantity..");
    } else {
        const DISKON = DISCOUNT;
        
        const FEE = SHIPPING_FEE;

        // console.log(DISKON)
        // console.log(SHIPPING_FEE)

        
        const subTotalProcessedValue =  priceInputValue * qtyInputValue;
        const totalProcessedValue = subTotalProcessedValue - (subTotalProcessedValue * DISKON) + FEE;
        subTotalText.textContent = ` ${formatPrice(subTotalProcessedValue)}`;
        totalText.textContent = ` ${formatPrice(totalProcessedValue)}`;
    }
    // console.log(totalProcessedValue)
    // if (subTotalProcessedValue > 300){
    //     totalText.textContent = ` ${formatPrice(totalProcessedValue)}`;
    // } else {
    //     totalText.textContent = "-";
    // }
}
