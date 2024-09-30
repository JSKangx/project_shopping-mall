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

let paymentPrice = 0;
// selectNode에 change 이벤트가 발생했을 때 해당 객체를 얻어 화면에 출력
selectNode.addEventListener("change", (e) => {
  // 변경된 객체를 얻어 변수에 할당
  let selectedItems = e.target.selectedOptions;
  // 결과 출력 노드 얻기
  let resultNode = document.getElementById("result");
  // 선택된 아이템이 있을 때만 노드를 생성한다.
  if (selectedItems.length > 0) {
    // resultNode의 innerHTML로 resultTxt를 넣기 위해 초기값 설정
    let resultTxt = "";
    resultTxt += "<h3>선택한 상품</h3>";

    resultTxt += "<ul>";
    let totalPrice = 0;
    for (let i = 0; i < selectedItems.length; i++) {
      let product = products[selectedItems[i].value];
      resultTxt += `<li>${product.name} - ${product.price}</li>`;
      totalPrice += product.price;
    }
    resultTxt += "</ul>";

    resultTxt += `<h4> 총액 : ${totalPrice}</h4>`;

    // resultNode에 지금까지 적은 텍스트 출력
    paymentPrice = totalPrice;
    resultNode.innerHTML = resultTxt;
  } else {
    resultNode.innerHTML = "";
  }
});

// payment 창에서 paymentPrice에 직접 접근하지 않고, 이 함수에 접근하여 paymentPrice값을 얻어가도록 함(유지보수 측면)
function sendPrice() {
  return paymentPrice;
}

// 결제 버튼을 눌렀을 때 실행될 함수
function payment() {
  if (paymentPrice === 0) {
    alert("결제할 상품을 선택해야 합니다.");
  } else {
    window.open("payment.html", "_blank", "left=100, top=100, width=500, height=300");
  }
}

function paymentSuccess(card1, card2, card3, card4) {
  alert(`${card1} - ${card2} - ${card3} - ${card4}로 ${paymentPrice}원을 결제합니다.`);
}
