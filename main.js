"use strict";

// DOM 노드 획득
let optionsNode = document.querySelectorAll("option[selected]");
let selectNode = document.getElementById("select");
let resultNode = document.getElementById("result");

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
    tunas += `<li>${selectedOptions[i].value}</li>`;
  }

  let list = document.createElement("ul");
  list.setAttribute("class", "list");
  list.innerHTML = tunas;

  let h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode("선택한 상품"));

  resultNode.appendChild(h3);
  resultNode.appendChild(list);
});
