import { Injectable, ElementRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { flatMap, map, distinctUntilChanged, tap, filter } from 'rxjs/Operators';



@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {
  imagesUrls = new Map();
  componentsExist = new Set();
  constructor() { }

  elementInSight(element: ElementRef): Observable<boolean> {
    const elementVisible$ = new Observable(observer => {
      const intersectionObserver = new IntersectionObserver(entries => {
        observer.next(entries);
      });
      intersectionObserver.observe(element.nativeElement);
      return () => { intersectionObserver.disconnect(); };
      })
      .pipe (
        flatMap((entries: IntersectionObserverEntry[]) => entries),
        map((entry: IntersectionObserverEntry) => entry.isIntersecting),
        distinctUntilChanged()
      );

    return elementVisible$.pipe(distinctUntilChanged());
  }
  // TODO: Need To implement Lazy Image with http
  getImageUrl(id: string): Observable<string> {
    const isImage = this.imagesUrls.has(id);
    if (isImage){
      return of(this.imagesUrls.get(id));
    } else {
      return of('zhxbchk').pipe(tap(res =>  this.imagesUrls.set(id, res)));
    }

  }
  loadComponent(element, id): Observable<boolean> {
    return this.elementInSight(element)
    .pipe(map(isInSight => {
      if (isInSight){
        return this.addComponentOrNot(id);
      }
      return false;
    }), filter(res => res));
  }

  addComponentOrNot(id): boolean {
    const isComp = this.componentsExist.has(id);
    if (isComp) {
      return false;
    } else {
      this.componentsExist.add(id);
      return true;
    }
  }





}
