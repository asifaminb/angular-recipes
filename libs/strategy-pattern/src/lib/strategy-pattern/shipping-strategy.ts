export interface ShippingStrategy {
	calculate(packageWeight: number): number;
}

export class StandardShippingStrategy implements ShippingStrategy {
	calculate(packageWeight: number): number {
		return packageWeight * 1.5; // Just a dummy calculation
	}
}

export class ExpressShippingStrategy implements ShippingStrategy {
	calculate(packageWeight: number): number {
		return packageWeight * 2.5; // Faster shipping costs more
	}
}

export class InternationalShippingStrategy implements ShippingStrategy {
	calculate(packageWeight: number): number {
		return packageWeight * 3.5; // International shipping costs even more
	}
}
