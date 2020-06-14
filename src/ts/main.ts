class RawMaterial {
    private weight: number;
    private priceQuote: number;
    private priceRates: number[] = [2000, 2100, 2250, 2450, 2700];

    constructor(w: number) {
        this.weight = w;
        this.priceQuote = 0;
    }

    public getQuote(): number {
        this.calcPrice();
        return this.priceQuote;
    }

    private calcPrice(): void {
        let quotient = Math.floor(this.weight/100);
        let remainder = this.weight % 100;

        if (this.weight <= 0) {
            this.priceQuote = -1;
        }

        else {
            for (let i = 0; i < quotient; i++) {
                this.priceQuote += (this.priceRates[i] * 100);
            }

            if (remainder != 0) {
                this.priceQuote += (this.priceRates[quotient] * remainder);
            }
        }
    }
}

let inputBox = document.getElementsByClassName("input__box--rawMtrPrice")[0]! as HTMLInputElement;
let outputBox = document.getElementsByClassName("output__box--rawMtrPrice")[0]! as HTMLInputElement;

const btnGetQuote = document.getElementsByClassName("btn__submit--rawMtrPrice")[0];
btnGetQuote.addEventListener("click", () => {

    if (+inputBox.value <= 0) {
        outputBox.innerText = "Please enter a proper weight.";
        outputBox.style.color = "red";
    }
    else {
        const inquiry = new RawMaterial(+inputBox.value);
        outputBox.innerHTML = "The price for " +inputBox.value + " tons of raw material is " + inquiry.getQuote() + " THB.";
        outputBox.style.color = "#C0C0C0";
    }
});

const btnClear = document.getElementsByClassName("btn__clear--rawMtrPrice")[0];
btnClear.addEventListener("click", () => {

    inputBox.value = "";
    outputBox.innerText = "..and get your quote now.";
    outputBox.style.color = "#C0C0C0";
});