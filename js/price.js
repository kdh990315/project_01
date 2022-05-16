var sell_price = 10000;
var amount = document.form.amount.vlaue;
document.form.sum.value = sell_price;

function add() {
    const hm = document.form.amount;
    const sum = document.form.sum;
    hm.value++;
    sum.value = parseInt(hm.value) * sell_price;
}

function del() {
    hm = document.form.amount;
    sum = document.form.sum;
    if (hm.value > 1) {
        hm.value--;
        sum.value = parseInt(hm.value) * sell_price;
    }
}
