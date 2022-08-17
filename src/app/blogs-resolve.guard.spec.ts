import { TestBed } from '@angular/core/testing';

import { BlogsResolveGuard } from './blogs-resolve.guard';

describe('BlogsResolveGuard', () => {
  let guard: BlogsResolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BlogsResolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
