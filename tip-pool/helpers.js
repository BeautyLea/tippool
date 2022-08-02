// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement("td");
  newTd.innerText = value;
  tr.append(newTd);
}
function appendDeleteBtn(tr, type) {
  let newTd = document.createElement("td");
  //let newBtn = document.createElement("button");
  newTd.innerText = "X";

  newTd.addEventListener("click", removeEle);
  //newTd.append(newBtn);

  tr.append(newTd);
}
function removeEle(evt) {
  // let ele = evt.target.closest("tr");
  let ele = evt.target.closest("tr");
  // delete propety in object
  delete allServers[ele.id];
  ele.parentNode.removeChild(ele);
  updateServerTable();
}

// function removeEle(evt) {
//   let ele = evt.target.closest("tr");

//   delete allServers[ele.id];

//   ele.parentNode.removeChild(ele);
//   updateServerTable();
// }

// function appendDeleteBtn(tr) {
//   let newTd = document.createElement("td");
//   newTd.className = "deleteBtn";
//   newTd.innerText = "X";

//   newTd.addEventListener("click", removeEle);

//   tr.append(newTd);
// }

// function removeEle(evt) {
//   let ele = evt.target.closest("tr");

//   delete allServers[ele.id];

//   ele.parentNode.removeChild(ele);
//   updateServerTable();
// }
