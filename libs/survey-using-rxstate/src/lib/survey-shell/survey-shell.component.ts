import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SurveyUsingRxstateComponent} from "@random/survey-using-rxstate";
import {Subject} from "rxjs";
import {SurveyAnswers} from "../survey.model";
import {ApiService} from "../api.service";

@Component({
	selector: 'random-survey-shell',
	standalone: true,
	imports: [CommonModule, SurveyUsingRxstateComponent],
	templateUrl: './survey-shell.component.html',
	styleUrls: ['./survey-shell.component.scss'],
})
export class SurveyShellComponent {
	readonly survey$ = this.apiService.getSurvey();

	readonly surveyAnswers$ = new Subject<SurveyAnswers>();

	constructor(private readonly apiService: ApiService) {}

	handleSurveySubmit(event: SurveyAnswers): void {
		this.apiService.postSurveyAnswers(event);
		this.surveyAnswers$.next(event);
	}
}
