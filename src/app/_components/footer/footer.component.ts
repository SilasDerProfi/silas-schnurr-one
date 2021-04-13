import { PrivacyDialogComponent } from "./../privacy-dialog/privacy-dialog.component";
import { ImprintDialogComponent } from "./../imprint-dialog/imprint-dialog.component";
import { ContactDialogComponent } from "./../contact-dialog/contact-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { NoopScrollStrategy } from "@angular/cdk/overlay";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "website-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  languages = [{ isoCode: "DE", englishName: "German", nativeName: "Deutsch" }];

  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {}

  openImprint() {
    this._dialog.open(ImprintDialogComponent, {
      scrollStrategy: new NoopScrollStrategy(),
    });
  }

  openPrivacy() {
    this._dialog.open(PrivacyDialogComponent, {
      scrollStrategy: new NoopScrollStrategy(),
    });
  }

  openContact() {
    this._dialog.open(ContactDialogComponent, {
      scrollStrategy: new NoopScrollStrategy(),
    });
  }
}
