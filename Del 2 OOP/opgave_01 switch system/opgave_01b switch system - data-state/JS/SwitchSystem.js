
class SwitchSystem {

    constructor() {
        // skifter mellem 0 og 1, pga changeState();
        this.state = 0;
        // css-classes
        this.cssClassArray = ["switchsystem-state-off", "switchsystem-state-on"];
        // NB ady har skrevet off/on med stort, ved ikke om det gør noget?
        this.textOff = "off";
        this.textOn = "on";
    }

    // Definér metoden attachToHTML, som gør referencer til HTML elementer klar, opretter click-events, osv.
    attachToHTML(cssSelector) {
        // denne parent bør skrives i 
        this.switchsystem = document.querySelector(cssSelector);

        this.buttonElement = this.switchsystem.querySelector("button");

        this.buttonElement.addEventListener('click', () => {
            // hvad skriver jeg her
            this.changeState();
        });
        
        this.updateUI();
    }

    // Definér metoden changeState, som skifter værdien af state egenskaben og derefter kalder updateUI metoden.
    changeState() {
        if(this.buttonElement.dataset.state == 0) {
            this.state = 1;
            this.buttonElement.dataset.state = 1;
        } else {
            this.state = 0;
            this.buttonElement.dataset.state = 0;
        }
        
        this.updateUI();
    }

    // Definér metoden updateUI, som sørger for, at knappens tekst og udseende stemmer overens med værdien af state egenskaben, ved hjælp af CSS classes. Inline styling er ikke tilladt.
    updateUI() {
        if(this.state == 0){
            this.buttonElement.innerHTML = this.textOff;
            this.buttonElement.classList.remove(this.cssClassArray[1]);
            this.buttonElement.classList.add(this.cssClassArray[0]);
        } else {
            this.buttonElement.innerHTML = this.textOn;
            // muligt at jeg er nødt til at lave en if-sætning her:
            this.buttonElement.classList.remove(this.cssClassArray[0]);
            this.buttonElement.classList.add(this.cssClassArray[1])
        }
    }

}


