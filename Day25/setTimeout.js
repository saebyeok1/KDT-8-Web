// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000); //2000ms = 2s
// console.log(3);

let product;
let price;
goMart();
PickDrink();
pay(product, price);

function goMart() {
  console.log("마트에 와서 어떤 음료를 마실까?");
}

function PickDrink() {
  setTimeout(() => {
    console.log("고민 끝~^ㅁ^");
    product = "오렌지 주스";
    price = 2000;
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
