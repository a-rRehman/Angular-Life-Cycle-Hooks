import { Component, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-lifecycle-hook";
  inputVal: string = "";
  // inputVal: string[] = ["Hello", "Hi There"];
  constructor() {
    console.log("App Component constructor called!");
  }

  onBtnclicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
    // this.inputVal.push(inputEl.value);
  }
}
