
class SwitchSystem {

    constructor(cssSelector) {
        // skifter mellem 0 og 1, pga changeState();
        this.state = 0;
        // denne parent bør skrives i 
        this.switchsystem = document.querySelector(".switchsystem");
        // css-classes
        this.cssClassArray = ["switchsystem-state-off", "switchsystem-state-on"];
        this.buttonElementArray = [];
        // NB ady har skrevet off/on med stort, ved ikke om det gør noget?
        this.textOff = "off";
        this.textOn = "on";
        this.updateUI() = null;
    }

    // Definér metoden attachToHTML, som gør referencer til HTML elementer klar, opretter click-events, osv.
    attachToHTML() {

        this.buttonElementArray = this.switchsystem.querySelectorAll("button");
        // console.log(this.buttonElementArray)

        this.buttonElementArray.forEach(element => {
            // console.log(element);
            element.addEventListener('click', () => {
                console.log(element);
                // element.classList.add("active");
                // if(element.classList.contains("active")){
                    this.changeState(element);
                    this.updateUI(element);
                // }
            })
        });
        
        
    }

    // Definér metoden changeState, som skifter værdien af state egenskaben og derefter kalder updateUI metoden.
    changeState(element) {

        if(element.dataset.state == 0) {
            this.state = 1;
            element.dataset.state = 1;
        } else {
            this.state = 0;
            element.dataset.state = 0;
        }
        
        // this.updateUI();
    }

    // Definér metoden updateUI, som sørger for, at knappens tekst og udseende stemmer overens med værdien af state egenskaben, ved hjælp af CSS classes. Inline styling er ikke tilladt.
    updateUI(element) {
        if(this.state == 0){
            element.innerHTML = this.textOff;
            element.classList.remove(this.cssClassArray[1]);
            element.classList.add(this.cssClassArray[0]);
        } else {
            element.innerHTML = this.textOn;
            // muligt at jeg er nødt til at lave en if-sætning her:
            element.classList.remove(this.cssClassArray[0]);
            element.classList.add(this.cssClassArray[1])
        }
    }

}


