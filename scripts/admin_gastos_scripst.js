
var trans = document.getElementById("trans");
var monto = document.getElementById("monto");
var total = document.getElementById("total");

total = parseInt(total);
monto = parseInt(monto);


function suma() {
  if (trans === "gasto") {
    total = total + monto;
    document.getElementById("total").innerHTML = "$" + total;
  }
}
