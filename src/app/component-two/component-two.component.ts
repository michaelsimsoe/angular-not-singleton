import { Component, OnInit } from '@angular/core';
import { SuperService } from '../super.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css'],
})
export class ComponentTwoComponent implements OnInit {
  listOfStuff: any;
  constructor(private superService: SuperService) {}

  ngOnInit(): void {
    this.listOfStuff = this.superService.stuff;
  }

  addSomeStuff(stuff): void {
    this.superService.addStuff(stuff);
  }
}
