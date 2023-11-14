import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarTemplateService } from '../toolbar-template.service';

@Component({
	selector: 'random-toolbar',
	standalone: true,
	imports: [CommonModule, MatToolbarModule],
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
	customTemplate: TemplateRef<any> | null = null;

	constructor(private toolbarTemplateService: ToolbarTemplateService) {}

	ngOnInit(): void {
		this.toolbarTemplateService.template$.subscribe((template) => {
			this.customTemplate = template;
		});
	}
}
