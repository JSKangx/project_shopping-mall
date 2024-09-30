"use strict";

// 서버에서 받아온 데이터
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// 품목 생성
// prettier-ignore
let products = [
  new Product('대뱃살', 3000),
  new Product('목살', 5000),
  new Product('배꼽살', 4000),
  new Product('중뱃살', 1000),
]

// 데이터에 따라 동적으로 option 태그를 생성
let optionTxt = "";
products.forEach((item, index) => {
  optionTxt += `<option value=${index}> ${item.name} - ${item.price}`;
});
// selectNode를 얻어 그 안에 option 태그를 삽입
let selectNode = document.getElementById("select");
selectNode.innerHTML = optionTxt;

// selectNode에 click

function payment() {}
