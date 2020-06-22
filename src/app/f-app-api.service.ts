import { Injectable } from '@angular/core';
import * as SDK from '@famenun/sdk';

// inject the service in any component to use the api
// no need to reinitalise it everywhere
@Injectable({
  providedIn: 'root'
})
export class FAppApiService {

  api: SDK.FamenunApi;

  constructor() { 
    this.api = SDK.init("my_app_id", true); // pass debug true only while testing
  }

}
