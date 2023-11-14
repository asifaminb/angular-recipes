import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent, SomeComponentComponent, YourLibraryService } from '@random/home';
import { Environment, ENVIRONMENT } from '@random/environment';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent, ToolbarTemplateService } from '@random/toolbar';

@Component({
	standalone: true,
	imports: [NxWelcomeComponent, RouterModule, HomeComponent, SomeComponentComponent, HttpClientModule, ToolbarComponent],
	selector: 'random-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	@ViewChild('customToolbarTemplate', { static: true }) customToolbarTemplate!: TemplateRef<any>;

	constructor(private toolbarTemplateService: ToolbarTemplateService) {}

	ngOnInit(): void {
		this.toolbarTemplateService.sendTemplate(this.customToolbarTemplate);
	}
}
