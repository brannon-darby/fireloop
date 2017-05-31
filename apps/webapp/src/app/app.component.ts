import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fire-root',
  template: `
    <fire-layout></fire-layout>
    <ng2-toasty [position]="'bottom-right'"></ng2-toasty>
  `,
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
