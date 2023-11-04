import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyShellComponent } from './survey-shell.component';

describe('SurveyShellComponent', () => {
	let component: SurveyShellComponent;
	let fixture: ComponentFixture<SurveyShellComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SurveyShellComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SurveyShellComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
