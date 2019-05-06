class CounterSystem {
	constructor (cssSelector) {
		this.counter = 0;
		this.counterValueElement = null;
		this.btnCounterIncreaseElement = null;
		this.btnCounterDecreaseElement = null;

		this.attachToHTML (cssSelector);
	}

	// ================================================================

	increase () {
		this.counter++;
	}

	// ================================================================

	decrease () {
		this.counter--;
		if (this.counter < 0) {
			this.counter = 0;
		}
	}

	// ================================================================

	updateUI () {
		this.counterValueElement.innerHTML = this.counter;
	}

	// ================================================================

	attachToHTML (cssSelector) {
		// References
		this.counterValueElement       = document.querySelector (cssSelector + " .counter-value");
		this.btnCounterIncreaseElement = document.querySelector (cssSelector + " .btn-counter-increase");
		this.btnCounterDecreaseElement = document.querySelector (cssSelector + " .btn-counter-decrease");

		this.updateUI();

		// EventListeners

		this.btnCounterIncreaseElement.addEventListener ("click", (event) => {
			this.increase();
			this.updateUI();
		});

		this.btnCounterDecreaseElement.addEventListener ("click", (event) => {
			this.decrease();
			this.updateUI();
		});
	}
}