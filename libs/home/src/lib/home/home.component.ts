import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Environment, ENVIRONMENT} from "@random/environment";

@Component({
	selector: 'random-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	name!: string;
	mainColor!: string;
	apiUrl!: string;
	projectApiUrl!: string;

	constructor(@Inject(ENVIRONMENT) private env: Environment) { }

	ngOnInit(): void {
		this.name = this.env.name;
		this.mainColor = this.env.mainColor;
		this.apiUrl = this.env.apiUrl
		this.projectApiUrl = this.env.projectApiUrl
	}
}
