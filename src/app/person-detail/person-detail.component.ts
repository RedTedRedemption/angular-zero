import { Component, OnInit } from "@angular/core";
import { Person } from "../person";
import { selectedPerson } from "../tab-content/tab-content.component";

@Component({
  selector: "app-person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.css"]
})
export class PersonDetailComponent implements OnInit {
  constructor() {}

  public person: Person;

  alert(person);

  ngOnInit() {}
}
