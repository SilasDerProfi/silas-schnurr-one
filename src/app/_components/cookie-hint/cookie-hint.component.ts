import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "cookie-hint",
  templateUrl: "./cookie-hint.component.html",
  styleUrls: ["./cookie-hint.component.css"],
  animations: [
    trigger("openClose", [
      state(
        "open",
        style({
          bottom: "0vh",
        })
      ),
      state(
        "closed",
        style({
          top: "100vh",
        })
      ),
      transition("open => closed", [animate("0.5s")]),
      transition("closed => open", [animate("0.3s")]),
    ]),
  ],
})
export class CookieHintComponent implements OnInit {
  openState = "closed";
  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    if (this.cookieService.get("cookies-allowed") == "true") return;

    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 200));
      this.openState = "open";
    })();
  }

  Accept() {
    this.cookieService.set("cookies-allowed", "true");
    this.openState = "closed";
  }
}
