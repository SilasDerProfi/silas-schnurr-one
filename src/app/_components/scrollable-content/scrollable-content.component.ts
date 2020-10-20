import { PrivacyDialogComponent } from "./../privacy-dialog/privacy-dialog.component";
import { ImprintDialogComponent } from "./../imprint-dialog/imprint-dialog.component";
import { ContactDialogComponent } from "./../contact-dialog/contact-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { NoopScrollStrategy } from "@angular/cdk/overlay";

@Component({
  selector: "scrollable-content",
  templateUrl: "./scrollable-content.component.html",
  styleUrls: ["./scrollable-content.component.css"],
})
export class ScrollableContentComponent implements OnInit {
  constructor(private _dialog: MatDialog) {
    window.onscroll = (_) => {
      var rect = document
        .getElementById("main-content-banner")
        .getBoundingClientRect();

      var height = document.body.clientHeight - rect.height * 2;
      var optDecimal = (rect.top - rect.height) / height;
      var optNumber = Math.floor(255 * optDecimal);
      if (optNumber < 0) optNumber = 0;

      var opt = optNumber.toString(16);
      while (opt.length < 2) opt = "0" + opt;

      var lightcolor = "#F5F5F5" + opt;
      var darkColor = "#3a3a3a" + opt;
      document.getElementById("main-content-banner").style.color = lightcolor;
      document.getElementById("caption-hint").style.color = darkColor;

      document.querySelectorAll("img").forEach((element) => {
        var lateZoomScale = optDecimal * 2;
        if (lateZoomScale > 1) lateZoomScale = 1;
        (element as HTMLElement).style.transform = `scale(${lateZoomScale})`;
        (element as HTMLElement).style.opacity = optDecimal.toString();
      });

      var captionHorizontalSeparation =
        document.getElementById("caption").getBoundingClientRect().bottom / 2;

      if (rect.top == 0) {
        document.getElementById("caption").style.color = "#F5F5F5";
      } else if (rect.top <= captionHorizontalSeparation) {
        document.getElementById("caption").style.color = "#F5F5F5";
      } else {
        document.getElementById("caption").style.color = "#3a3a3a";
      }

      var hBottom = this.vh(15);
      var hText = this.vh(13);
      var hTop = document.getElementById("caption").clientHeight;

      var hComplete =
        (optNumber / 255) * hBottom + ((255 - optNumber) / 255) * hTop;

      var hCompleteText =
        (optNumber / 255) * hText + ((255 - optNumber) / 255) * hTop;
      document.getElementById("main-content-banner").style.height =
        hComplete + "px";

      document.getElementById("main-content-banner").style.fontSize =
        hCompleteText + "px";

      // make this script dynamic
      // remove console.logs
    };
  }

  vh(v: number): number {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  }

  ngOnInit() {}

  scrollContent() {
    let id =
      window.innerHeight / window.scrollY > 2 ? "main-content" : "top-content";
    document.getElementById(id).scrollIntoView(true);
    // beim scrollen ein blur effect....
  }

  openImprint() {
    const dialogRef = this._dialog.open(ImprintDialogComponent, {
      scrollStrategy: new NoopScrollStrategy(),
    });

    // dialogRef
    //   .afterClosed()
    //   .subscribe((result) => console.log(`Dialog result: ${result}`));
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
