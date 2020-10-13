import { Component, OnInit } from '@angular/core';
import { SuperService } from '../super.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css'],
})
export class ComponentOneComponent implements OnInit {
  listOfStuff: any;
  constructor(private superService: SuperService) {}

  ngOnInit(): void {
    this.listOfStuff = this.superService.stuff;
  }

  addSomeStuff(stuff): void {
    this.superService.addStuff(stuff);
  }
}
