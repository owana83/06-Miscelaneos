import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <app-ng-style></app-ng-style>
    <br>

    <app-css></app-css>
    <br>

    <app-clases></app-clases>
    <br><br>


    <p [appResaltado]="'#f2d843'">
        Hola Mundo
    </p>
    <br>

    <app-ng-switch></app-ng-switch>

  `,
  styles: []
})

export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked,
                                      AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('Constructor');
   }

  ngOnInit() {
           console.log('ngOnInit');
  }

  ngOnChanges() {
     console.log('OnChanges');
  }

  ngDoCheck() {
     console.log('DoCheck');
  }

  ngAfterContentChecked() {
     console.log('AfterContentChecked');
  }

  ngAfterContentInit() {
     console.log('AfterContentInit');
  }

  ngAfterViewInit() {
     console.log('AfterViewInit');
  }

  ngAfterViewChecked() {
     console.log('AfterViewChecked');
  }

  ngOnDestroy() {
     console.log('OnDestroy');
  }

}
