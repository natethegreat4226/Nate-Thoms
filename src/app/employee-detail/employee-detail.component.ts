import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.css"]
})
export class EmployeeDetailComponent implements OnInit {
  @Input() inputText = "";
  collection: string[] = [];

  count: number = 0;
  log: number[] = [];

  constructor() {}

  ngOnInit() {}
}
