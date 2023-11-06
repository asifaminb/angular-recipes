import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent, SomeComponentComponent, YourLibraryService } from '@random/home';
import { Environment, ENVIRONMENT } from '@random/environment';
import { HttpClientModule } from '@angular/common/http';

@Component({
	standalone: true,
	imports: [NxWelcomeComponent, RouterModule, HomeComponent, SomeComponentComponent, HttpClientModule],
	selector: 'random-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'other-app';

	constructor(@Inject(ENVIRONMENT) private env: Environment, private libService: YourLibraryService) {}

	ngOnInit() {
		console.log(this.env.projectApiUrl, 'Inside Micro -> this.env.projectApiUrl');
		// console.log(this.apiService.getData());
	}
}
