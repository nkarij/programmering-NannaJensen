
// man kalder i princippet constructoren, men med navnet fra class = new Person();
class CounterSystem {
    constructor(cssSelector1){
        console.log(cssSelector1);
        this.counter = 0;
        this.buttonIncreaseCounterElement = null;
        this.buttonDecreaseCounterElement = null;
        this.displayCounterElement = null;
        this.attachToHTML(cssSelector1);
    }

    increase(){
        this.counter++;
    }
    
    decrease(){
        this.counter--;
        if(this.counter < 0){
            this.counter = 0;
        }
    }

    updateDisplayCounter(){
        // opdaterer 
        this.displayCounterElement = this.counter;
    }

    attachToHTML(cssSelector2){
        // referencer
        // css-selector: NB! mellemrummet mellem "" og class-navn er superduper vigtigt
        this.buttonIncreaseCounterElement = document.querySelector(cssSelector2 + " .counter-increase");
        console.log(this.buttonIncreaseCounterElement);
        this.buttonDecreaseCounterElement = document.querySelector(cssSelector2 + " .counter-decrease");
        this.displayCounterElement = document.querySelector(cssSelector2 + " .display-counter");

        this.updateDisplayCounter();

        // addEventlistener
        this.buttonIncreaseCounterElement.addEventlistener('click', function(){
            this.increase();
            // console.log(this.counter);
            this.updateDisplayCounter();
        })

    }

}

