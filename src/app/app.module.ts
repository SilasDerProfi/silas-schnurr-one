import { ImageRefComponent } from "./_components/image-ref/image-ref.component";
import { PrivacyDialogComponent } from "./_components/privacy-dialog/privacy-dialog.component";
import { ImprintDialogComponent } from "./_components/imprint-dialog/imprint-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ContactDialogComponent } from "./_components/contact-dialog/contact-dialog.component";
import { ScrollableContentComponent } from "./_components/scrollable-content/scrollable-content.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

import { MatExpansionModule } from "@angular/material/expansion";
import { CookieHintComponent } from "./_components/cookie-hint/cookie-hint.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CookieService } from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    CookieHintComponent,
    ScrollableContentComponent,
    ImprintDialogComponent,
    ContactDialogComponent,
    PrivacyDialogComponent,
    ImageRefComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
