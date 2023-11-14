import { TestBed } from '@angular/core/testing';

import { ToolbarTemplateService } from './toolbar-template.service';

describe('ToolbarTemplateService', () => {
  let service: ToolbarTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
