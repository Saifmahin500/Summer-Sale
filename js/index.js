let total = 0;
const lastPriceId = document.getElementById("lastprice"); 
const lastPrice = parseFloat(lastPriceId.innerText );

const discountId = document.getElementById("discount")
const discount = parseFloat(discountId.innerText);

function handleClick(data){
    const selectedItemsContainer = document.getElementById('items-name');
    const itemName = data.childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemsContainer.appendChild(li);

    const price = data.childNodes[7].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById("total").innerText = total;
    
    const purchaseBtn = document.getElementById("btn-purchase")
    const couponBtn = document.getElementById("coupon-btn")

    // input code section
    const inputCouponCode = document.getElementById("input-coupon")
    const discount = 0.20 * total;

    if (total > 0) { 
        purchaseBtn.removeAttribute('disabled');
        //coupon btn show
        if (total > 200) {
            couponBtn.removeAttribute('disabled');

            // add coupon code
            if (inputCouponCode === "SELL200") {


            }
        }
    }
    if (total >= 200 && disc == true){
        lastPrice = total - discount;
        discount.innerText = discount;
    }

    if (total > 0) {
        purchaseBtn.removeAttribute('disabled');
        //coupon btn show
        if (total > 200) {
            couponBtn.removeAttribute('disabled');

            // add coupon code
            if (inputCouponCode === "SELL200") {


            }
        }
    }
}

function checkCoupon(){
    const coupon = document.getElementById('input-coupon').value;
    if (coupon === "SELL200"){
        return disc = true;
    }
    else{
        alert('Please enter a valid coupon')
        return disc = false;
    }
}
const couponBtn = document.getElementById('coupon-btn');
couponBtn.disabled = true;
let disc;
couponBtn.addEventListener('click', function(){
    checkCoupon();
    // updatePrices(0);
})
