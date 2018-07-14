import { Component, OnInit } from '@angular/core';
import {TESTOBJS} from '../const';
import {object} from '../testobj';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {

  constructor() { }

  objects = TESTOBJS;
  cont = 'tab1';




  ngOnInit() {
  }

}
