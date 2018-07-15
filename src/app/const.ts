import { anon } from "./anon";
import { Tab } from "./tab";
import { Person } from "./person";

export const TESTOBJS: anon[] = [
  { name: "john", subinfo: "test1" },
  { name: "jane", subinfo: "test2" }
];

export const TABS: Tab[] = [
  { name: "tab1", path: "" },
  { name: "tab2", path: "/tab2" }
];

export const PEOPLE: Person[] = [
  { name: "john doe", detail: "a human...more or less" },
  { name: "jane doe", detail: "a human...less or more" },
  { name: "silus", detail: "nephew" },
  { name: "julian", detail: "father" }
];
