export type Survey = {
	id: number;
	questions: SurveyQuestion[];
	estimatedMinutes: number;
};

export type SurveyQuestion = {
	id: number;
	text: string;
	options: SurveyOption[];
};

export type SurveyOption = {
	id: number;
	text: string;
};

export type SurveyAnswers = {
	id: number;
	questions: {
		id: number;
		selectedOptionId: number | null;
	}[];
	extraText: string | null;
};
