import { TestBed, inject } from '@angular/core/testing';

import { XiaohongshuService } from './xiaohongshu.service';

describe('XiaohongshuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XiaohongshuService]
    });
  });

  it('should be created', inject([XiaohongshuService], (service: XiaohongshuService) => {
    expect(service).toBeTruthy();
  }));
});
