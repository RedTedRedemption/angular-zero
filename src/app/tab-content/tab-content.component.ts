import { Component, OnInit } from "@angular/core";
import { TESTOBJS } from "../const";
import { object } from "../testobj";
import { PEOPLE } from "../const";
import { Person } from "../person";
import { Router } from "@angular/router";

@Component({
  selector: "app-tab-content",
  templateUrl: "./tab-content.component.html",
  styleUrls: ["./tab-content.component.css"]
})
export class TabContentComponent implements OnInit {
  constructor() {}

  router = Router;

  objects = TESTOBJS;
  cont = "tab1";

  people = PEOPLE;

  selectedPerson: Person;

  selectPerson(selPerson: Person) {
    this.selectedPerson = selPerson;
  }

  ngOnInit() {}
}
