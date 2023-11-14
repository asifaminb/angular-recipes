import { Injectable, TemplateRef } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ToolbarTemplateService {
	private templateSubject = new ReplaySubject<TemplateRef<any>>();

	sendTemplate(template: TemplateRef<any>) {
		this.templateSubject.next(template);
	}

	get template$(): Observable<TemplateRef<any>> {
		return this.templateSubject.asObservable();
	}
}
