import { Route } from '@angular/router';
import {StrategyPatternComponent} from "@random/strategy-pattern";
import {SurveyShellComponent} from "@random/survey-using-rxstate";
import {ExpenseTrackerComponent} from "@random/expense-tracker-zod";

export const routes: Route[] = [
	{ path: 'survey-rxstate', component: SurveyShellComponent },
	{ path: 'strategy-pattern', component: StrategyPatternComponent },
	{ path: 'expense-tracker', component: ExpenseTrackerComponent },
];
