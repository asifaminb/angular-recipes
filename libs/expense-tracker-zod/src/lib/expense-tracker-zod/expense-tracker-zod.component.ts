import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {CommonModule} from "@angular/common";
import {UserProfileService} from "../user-profile.service";

@Component({
	selector: 'random-expense-tracker-zod',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './expense-tracker-zod.component.html',
	styleUrls: ['./expense-tracker-zod.component.scss'],
})
export class ExpenseTrackerComponent {
	user = {
		username: '',
		age: null,
		email: ''
	};

	messages: string[] = [];

	constructor(private userProfileService: UserProfileService) {}

	// @ts-ignore
	onSubmit(data) {
		// @ts-ignore
		const validationResult = this.userProfileService.validateUserProfile(data);
		if (Array.isArray(validationResult)) {
			this.messages = validationResult;
		} else {
			console.log('Validated Data:', validationResult);
		}
	}
}
