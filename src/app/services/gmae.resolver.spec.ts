import { TestBed } from '@angular/core/testing';

import { GmaeResolver } from './gmae.resolver';

describe('GmaeResolver', () => {
  let resolver: GmaeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GmaeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
