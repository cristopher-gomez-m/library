import { TestBed } from '@angular/core/testing';

import { BookFinderService } from './book-finder.service';

describe('BookFinderService', () => {
  let service: BookFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
