// your-library.service.ts in your library

import { Injectable, Inject } from '@angular/core';
import { LIB_CONFIG } from './lib-config.token';
import { LibConfig } from './lib-config.interface';

@Injectable({
	providedIn: 'root',
})
export class YourLibraryService {
	private apiUrl: string;

	constructor(@Inject(LIB_CONFIG) config: LibConfig) {
		console.log(config.projectApiUrl, 'Inside lib -> config.projectApiUrl');
		this.apiUrl = config.projectApiUrl;
	}

	// ... your service methods, using this.apiUrl
}
