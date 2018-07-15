import { Component, OnInit } from "@angular/core";
import { TESTOBJS } from "../const";
import { object } from "../testobj";
import { PEOPLE } from "../const";
import { Person } from "../person";
import { Router } from "@angular/router";
import { person } from "../person-detail/person-detail.component";

@Component({
  selector: "app-tab-content",
  templateUrl: "./tab-content.component.html",
  styleUrls: ["./tab-content.component.css"]
})
export class TabContentComponent implements OnInit {
  constructor() {}

  

  objects = TESTOBJS;
  cont = "tab1";

  people = PEOPLE;

  person

  selectPerson(selPerson: Person) {
    person = selPerson;
    alert(person.name);
  }

  ngOnInit() {}
}
