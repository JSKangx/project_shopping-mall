"use strict";

// DOM 노드 획득
let optionsNode = document.querySelectorAll("option[selected]");
let selectNode = document.getElementById("select");
let resultNode = document.getElementById("result");

// 총액 초기 값
let sumPrice = 0;

// 선택된 옵션의 값을 얻는 함수
selectNode.addEventListener("click", () => {
  // 옵션 중 선택된 노드 얻기
  let selectedOptions = selectNode.selectedOptions;
  let tunas = "";

  if (resultNode.innerHTML) {
    resultNode.innerHTML = "";
  }
  // 화면에 출력하기
  for (let i = 0; i < selectedOptions.length; i++) {
    tunas += `<li>${selectedOptions[i].innerHTML}</li>`;
    sumPrice += parseInt(selectedOptions[i].value);
  }

  let list = document.createElement("ul");
  list.setAttribute("class", "list");
  list.innerHTML = tunas;

  let h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode("선택한 상품"));

  let span = document.createElement("span");
  span.innerHTML = sumPrice;
  let h4 = document.createElement("h4");
  h4.innerHTML = `총액 : ${span.innerHTML}`;

  resultNode.appendChild(h3);
  resultNode.appendChild(list);
  resultNode.appendChild(h4);
});

// 결제하는 함수
function purchase() {
  if (selectNode.selectedOptions.length === 0) {
    alert("결제할 상품을 선택해야 합니다.");
  } else {
    let childWindow = window.open("pop-up.html", "_blank", "left=100, top=100, width=300, height=300");
    childWindow.sumPrice = sumPrice;
  }
}

function confirm() {
  alert(`${child.creditCardNo}로 ${sumPrice}원이 결제 완료되었습니다.`);
}
