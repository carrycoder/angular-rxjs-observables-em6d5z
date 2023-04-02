import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  ReplaySubject,
  BehaviorSubject,
  AsyncSubject,
  Subscription,
  of,
} from 'rxjs';
import {
  map,
  switchMap,
  tap,
  mergeMap,
  exhaustMap,
  concatMap,
} from 'rxjs/operators';

type ObservableType = { value: {}; color: string };

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {  
  }
}
