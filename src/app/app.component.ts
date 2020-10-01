import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "schnurr-one";
  private downKeys = new Map<string, boolean>();

  constructor() {
    document.addEventListener("keydown", (event) => this.AddAndCheckKey(event));

    document.addEventListener("keyup", (event) => {
      this.downKeys.set(event.key.toLowerCase(), false);
      console.log(this.downKeys);
    });
  }

  AddAndCheckKey(event: KeyboardEvent) {
    this.downKeys.set(event.key.toLowerCase(), true);
    if (
      this.downKeys.get("c") &&
      this.downKeys.get("o") &&
      this.downKeys.get("b") &&
      event.altKey
    ) {
      this.downKeys.clear();
      alert("Spiel 'Cobalt'");
    }
  }
}
