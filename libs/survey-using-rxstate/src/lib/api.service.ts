import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Survey, SurveyAnswers } from './survey.model';

const MOCK_SURVEY: Survey = {
	id: 42,
	estimatedMinutes: 2,
	questions: [
		{
			id: 1,
			text: 'What is your role within your company?',
			options: [
				{ id: 11, text: 'CEO' },
				{ id: 12, text: 'CTO' },
				{ id: 13, text: 'Project manager' },
				{ id: 14, text: 'Software engineer' },
			],
		},
		{
			id: 2,
			text: 'How likely are you to recommend our product to a colleague?',
			options: [
				{ id: 21, text: 'Very likely' },
				{ id: 22, text: 'Quite likely' },
				{ id: 23, text: 'Neutral' },
				{ id: 24, text: 'Quite unlikely' },
				{ id: 25, text: 'Very unlikely' },
			],
		},
	],
};

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	private readonly surveyData$ = new Subject<Survey | null>();

	getSurvey(): Observable<Survey | null> {
		setTimeout(() => {
			this.surveyData$.next(MOCK_SURVEY);
		}, 300);
		return this.surveyData$;
	}

	postSurveyAnswers(answers: SurveyAnswers): void {
		console.log('Submitted answers', answers);
		this.surveyData$.next(null);
	}
}
