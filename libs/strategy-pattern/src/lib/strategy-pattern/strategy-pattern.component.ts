import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShippingContext} from "./shipping-context";
import {ExpressShippingStrategy, InternationalShippingStrategy, StandardShippingStrategy} from "./shipping-strategy";
import {FormsModule} from "@angular/forms";

@Component({
	selector: 'random-strategy-pattern',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './strategy-pattern.component.html',
	styleUrls: ['./strategy-pattern.component.scss'],
})
export class StrategyPatternComponent {
	packageWeight = 0;
	shippingCost = 0;
	shippingContext = new ShippingContext(new StandardShippingStrategy()); // Default strategy

	constructor() { }

	calculate(type: string) {
		switch (type) {
			case 'standard':
				this.shippingContext.setStrategy(new StandardShippingStrategy());
				break;
			case 'express':
				this.shippingContext.setStrategy(new ExpressShippingStrategy());
				break;
			case 'international':
				this.shippingContext.setStrategy(new InternationalShippingStrategy());
				break;
		}

		this.shippingCost = this.shippingContext.calculateShipping(this.packageWeight);
	}
}
