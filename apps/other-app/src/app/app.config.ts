import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';
import { ENVIRONMENT } from '@random/environment';
import { environment, url, apiEndPoint } from '../environments/environment';
import { LIB_CONFIG } from '@random/home';

export const appConfig: ApplicationConfig = {
	providers: [
		{ provide: ENVIRONMENT, useValue: environment },
		{
			provide: LIB_CONFIG,
			useValue: {
				projectApiUrl: url + apiEndPoint + '/core',
			},
		},
		provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
	],
};
