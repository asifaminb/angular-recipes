import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import {HomeComponent} from "@random/home";

@Component({
	standalone: true,
    imports: [NxWelcomeComponent, HomeComponent],
	selector: 'random-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'other-app-2';
}
