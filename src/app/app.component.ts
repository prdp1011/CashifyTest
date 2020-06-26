import { ComponentLoaderService } from './common/services/component-loader.service';
import { Component, AfterViewInit, ComponentFactoryResolver, ViewChild, ElementRef, Injector, ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';
import { FooterComponent } from './footer/footer.component';
const componentMapper = {
  header: HeaderComponent,
  middle: MiddleComponent,
  footer: FooterComponent,
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('header') header: ElementRef;
  @ViewChild('middle') middle: ElementRef;
  @ViewChild('footer') footer: ElementRef;
  componentRef: any;
  constructor(
    private listServ: ComponentLoaderService,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
    ){
  }
  ngAfterViewInit(): void {
    this.listServ.loadComponent(this.header, 'header')
    .subscribe(() => this.startAddingComponent(this.header, 'header'));

    this.listServ.loadComponent(this.middle, 'middle')
    .subscribe(() => this.startAddingComponent(this.middle, 'middle'));

    this.listServ.loadComponent(this.footer, 'footer')
    .subscribe(() => this.startAddingComponent(this.footer, 'footer'));
  }

  startAddingComponent(ref: ElementRef, id){
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[id]
    );
    const componentRef = factory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    const ele = ref.nativeElement as HTMLElement;
    try{
     const old =  ele.firstChild;
     ele.replaceChild(domElem, old);
    } catch (e){
      console.log(e);
    }
  }
}
