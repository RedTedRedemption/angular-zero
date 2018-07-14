import { Component, OnInit } from '@angular/core';
import { TABS } from '../const';
import { Tab } from '../tab';

@Component({
  selector: 'app-tab-holder',
  templateUrl: './tab-holder.component.html',
  styleUrls: ['./tab-holder.component.css']
})
export class TabHolderComponent implements OnInit {

  constructor() { }

  tabs = TABS;
  selectedTab: Tab;

  onSelect(tab: Tab): void {
    this.selectedTab = tab;
  }

  ngOnInit() {
    this.selectedTab = tabs[0];
  }

}
