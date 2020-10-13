import { Component, OnInit } from '@angular/core';
import { SuperService } from '../super.service.js';
// set options to force?????????
@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css'],
})
export class ComponentThreeComponent implements OnInit {
  listOfStuff: any;
  constructor(private superService: SuperService) {}

  ngOnInit(): void {
    this.listOfStuff = this.superService.stuff;
  }

  addSomeStuff(stuff): void {
    this.superService.addStuff(stuff);
  }
}
