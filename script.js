const td = document.getElementById("td");
const tw = document.getElementById("tw");
const tb = document.getElementById("tb");
const date = document.getElementById("date");
const account = document.getElementById("account");
const amount = document.getElementById("amount");
const Btn1 = document.getElementById("Btn1");
const Btn2 = document.getElementById("Btn2");

function deposit() {
    let depositValue = Number(td.innerText);
    let amountValue = Number(amount.value);
    let accountValue = Number(account.value);
    let totalBalance = Number(tb.innerText);
    let dateValue = new Date(date.value);


    let newDeposit = depositValue + amountValue;
    let newTotalBalnace = totalBalance + amountValue;

    td.innerText = newDeposit;
    tb.innerText = newTotalBalnace;
}
function withdraw() {
    let withdrawValue = Number(tw.innerText);
    let amountValue = Number(amount.value);
    let accountValue = Number(account.value);
    let totalBalance = Number(tb.innerText);
    let dateValue = new Date(date.value);
    if (amountValue > totalBalance) {
        alert("Not enough balance!");
        return;
    }
    let newWithdraw = withdrawValue + amountValue;
    let newTotalBalnace = totalBalance - amountValue;

    tw.innerText = newWithdraw;
    tb.innerText = newTotalBalnace;

  
}