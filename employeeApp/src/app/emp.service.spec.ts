/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmpService } from './emp.service';

describe('EmpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpService]
    });
  });

  it('should ...', inject([EmpService], (service: EmpService) => {
    expect(service).toBeTruthy();
  }));
});
