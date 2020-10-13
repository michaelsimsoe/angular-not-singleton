import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuperService {
  someStuff: any = [];
  private _someStuff$ = new BehaviorSubject<any[]>(this.someStuff);

  get stuff() {
    return this._someStuff$.asObservable();
  }

  addStuff(stuff): void {
    this.someStuff.push(stuff);
  }

  constructor() {}
}
