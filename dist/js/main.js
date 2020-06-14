"use strict";
class RawMaterial {
    constructor(w) {
        this.priceQuote = 0;
        this.weight = w;
    }
    getQuote() {
        this.calcPriceQuote();
        return this.priceQuote;
    }
    calcPriceQuote() {
        const tonage = 100;
        if (this.weight <= 0) {
            this.priceQuote = -1;
        }
        else if (this.weight <= tonage) {
            this.priceQuote = 2000 * this.weight;
        }
        else if (this.weight <= (2 * tonage)) {
            this.priceQuote = 2100 * this.weight;
        }
        else if (this.weight <= (3 * tonage)) {
            this.priceQuote = 2250 * this.weight;
        }
        else if (this.weight <= (4 * tonage)) {
            this.priceQuote = 2450 * this.weight;
        }
        else {
            this.priceQuote = 2700 * this.weight;
        }
    }
}
class AppComponents extends RawMaterial {
    static onClickBtnGetQuote() {
        let weight = document.getElementsByClassName("input__box--rawMtrPrice")[0];
        const onClickGetQuote = new AppComponents(+weight.value);
        let outputField = document.getElementsByClassName("output__box--rawMtrPrice")[0];
        if (onClickGetQuote.getQuote() > 0) {
            outputField.innerHTML = "The price for "
                + weight.value + " tons of raw material is " + onClickGetQuote.getQuote() + " THB.";
            outputField.style.color = "#C0C0C0)";
        }
        else {
            outputField.innerHTML = "Please enter a proper weight.";
            outputField.style.color = "#E82C0C";
        }
    }
    static onClickBtnClear() {
        let inputField = document.getElementsByClassName("input__box--rawMtrPrice")[0];
        inputField.value = "";
        let outputField = document.getElementsByClassName("output__box--rawMtrPrice")[0];
        outputField.innerHTML = "..and get your quote now.";
    }
}
const btnGetQuote = document.getElementsByClassName("btn__submit--rawMtrPrice")[0];
btnGetQuote.addEventListener("click", AppComponents.onClickBtnGetQuote);
const btnClear = document.getElementsByClassName("btn__clear--rawMtrPrice")[0];
btnClear.addEventListener("click", AppComponents.onClickBtnClear);
//# sourceMappingURL=main.js.map