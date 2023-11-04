import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyUsingRxstateComponent } from './survey-using-rxstate.component';

describe('SurveyUsingRxstateComponent', () => {
	let component: SurveyUsingRxstateComponent;
	let fixture: ComponentFixture<SurveyUsingRxstateComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SurveyUsingRxstateComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SurveyUsingRxstateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
