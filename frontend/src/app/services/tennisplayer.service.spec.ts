import { TestBed } from '@angular/core/testing';

import { TennisplayerService } from './tennisplayer.service';

describe('TennisplayerService', () => {
  let service: TennisplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TennisplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
