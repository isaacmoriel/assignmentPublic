import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
 
//store value for header title 
private title$ = new BehaviorSubject<string>('');
getTitle$ = this.title$.asObservable();

private showHomePageBackBtn$ = new BehaviorSubject<boolean>(false);
getShowHomePageBackBtn$ = this.showHomePageBackBtn$.asObservable();

constructor() { }

setTitle(item: any) {
  this.title$.next(item);
}

setHomePageBackBtn(swith: boolean){
  this.showHomePageBackBtn$.next(swith);
}

}
