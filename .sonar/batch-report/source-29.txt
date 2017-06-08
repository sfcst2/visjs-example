/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GraphService } from './graph.service';
import {Http, Response, Headers, URLSearchParams, HttpModule} from '@angular/http';
import {GraphServiceConfiguration} from './graph.service.configuration';
describe('GraphserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphService, GraphServiceConfiguration],
      imports: [HttpModule]
    });
  });

  it('should Be', inject([GraphService], (service: GraphService) => {
    expect(service).toBeTruthy();
  }));
});
