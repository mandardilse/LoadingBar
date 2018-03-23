import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoaderService {
  private requestInFlight$: BehaviorSubject<boolean>
  constructor() { 
    this.requestInFlight$ = new BehaviorSubject<boolean>(false)
  }
  setHttpStatus(inFlight: boolean){
    this.requestInFlight$.next(inFlight)
  }
  getHtttpStatus(): Observable<boolean>{
    return this.requestInFlight$.asObservable();
  }
}
