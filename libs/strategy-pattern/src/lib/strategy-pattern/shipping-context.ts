import {ShippingStrategy} from "./shipping-strategy";

export class ShippingContext {
	private strategy: ShippingStrategy;

	constructor(strategy: ShippingStrategy) {
		this.strategy = strategy;
	}

	setStrategy(strategy: ShippingStrategy) {
		this.strategy = strategy;
	}

	calculateShipping(packageWeight: number): number {
		return this.strategy.calculate(packageWeight);
	}
}
