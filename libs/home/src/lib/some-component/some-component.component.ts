import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'random-some-component',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './some-component.component.html',
	styleUrls: ['./some-component.component.scss'],
})
export class SomeComponentComponent {
	constructor() {}
}
