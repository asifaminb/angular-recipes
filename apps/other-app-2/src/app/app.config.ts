import { ApplicationConfig } from '@angular/core';
import {ENVIRONMENT} from "@random/environment";
import {environment} from "../environments/environment";


export const appConfig: ApplicationConfig = {
	providers: [
		{ provide: ENVIRONMENT, useValue: environment },
	],
};
