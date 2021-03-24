import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  collection: string[] = [];

  count: number = 0;
  log: number[] = [];
  empText: string = "";

  onClick() {
    this.count++;
    this.log.push(this.count);
    this.collection.push(this.empText);
  }
}
