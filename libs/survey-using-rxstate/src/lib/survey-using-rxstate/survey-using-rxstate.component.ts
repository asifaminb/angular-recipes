import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Survey, SurveyAnswers} from "../survey.model";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {select, selectSlice} from "@rx-angular/state/selections";
import {RxState} from "@rx-angular/state";
import {map} from "rxjs";

type LocalState = {
	data: Survey;
	currQuestionIndex: number | null;
	selectedOptions: Record<number, number>;
	extraText: string | null;
};

@Component({
	selector: 'survey-using-rxstate',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	providers: [RxState],
	templateUrl: './survey-using-rxstate.component.html',
	styleUrls: ['./survey-using-rxstate.component.scss'],
})
export class SurveyUsingRxstateComponent {
	@Input() set data(data: Survey) {
		this.state.set({ data });
	}

	@Output() readonly submitted = new EventEmitter<SurveyAnswers>();

	readonly extraTextControl = new FormControl('');

	readonly estimatedMinutes$ = this.state.select('data', 'estimatedMinutes');

	readonly isNotStarted$ = this.state.select(
		select('currQuestionIndex'),
		map((idx) => idx == null)
	);

	readonly currentQuestion$ = this.state.select(
		selectSlice(['data', 'currQuestionIndex']),
		map(({ data, currQuestionIndex }) =>
			currQuestionIndex == null
				? null
				: data.questions[currQuestionIndex] ?? null
		)
	);

	constructor(private readonly state: RxState<LocalState>) {
		this.state.set({
			currQuestionIndex: null,
			selectedOptions: {},
			extraText: '',
		});

		this.state.connect('extraText', this.extraTextControl.valueChanges);
	}

	handleOptionSelect(questionId: number, optionId: number): void {
		this.state.set((prev) => ({
			currQuestionIndex: (prev.currQuestionIndex ?? 0) + 1,
			selectedOptions: {
				...prev.selectedOptions,
				questionId: optionId,
			},
		}));
	}

	handleStart(): void {
		this.state.set({ currQuestionIndex: 0 });
	}

	handleBack(): void {
		this.state.set((prev) => ({
			currQuestionIndex:
				prev.currQuestionIndex === 0 ? null : (prev.currQuestionIndex ?? 0) - 1,
		}));
	}

	handleSkip(): void {
		this.state.set((prev) => ({
			currQuestionIndex: (prev.currQuestionIndex ?? 0) + 1,
		}));
	}

	handleSubmit(): void {
		const { data, selectedOptions, extraText } = this.state.get();
		this.submitted.emit({
			id: data.id,
			questions: data.questions.map((question) => ({
				id: question.id,
				selectedOptionId: selectedOptions[question.id],
			})),
			extraText,
		});
	}
}
