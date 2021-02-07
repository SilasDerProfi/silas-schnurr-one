import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-contact-dialog",
  templateUrl: "./contact-dialog.component.html",
  styleUrls: ["./contact-dialog.component.css"],
})
export class ContactDialogComponent implements OnInit {
  contactInformationGroup: FormGroup;
  nameControl = new FormControl("");
  emailControl = new FormControl("", [Validators.email]);
  copyControl = new FormControl(false);
  subjectControl = new FormControl("");
  messageControl = new FormControl("", [Validators.required]);
  randomQuote = "";

  readonly quotes = [
    "The universe is big. It’s vast and complicated and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles.",
    "When you’re a kid, they tell you it’s all… Grow up, get a job, get married, get a house, have a kid, and that’s it. But the truth is, the world is so much stranger than that. It’s so much darker. And so much madder. And so much better.",
    "The way I see it, every life is a pile of good things and bad things. The good things don’t always soften the bad things, but vice versa, the bad things don’t always spoil the good things and make them unimportant.",
    "Some people live more in 20 years than others do in 80. It’s not the time that matters, it’s the person.",
    "Do what I do. Hold tight and pretend it’s a plan!",
    "In 900 years of time and space, I’ve never met anyone who wasn’t important",
    "900 years of time and space, and I’ve never been slapped by someone’s mother.",
    "Never ignore coincidence. Unless, of course, you’re busy. In which case, always ignore coincidence.",
    "There’s a lot of things you need to get across this universe. Warp drive… wormhole refractors… You know the thing you need most of all? You need a hand to hold.",
    "This is who I am, right here, right now, all right? All that counts is here and now, and this is me!",
    "I am and always will be the optimist. The hoper of far-flung hopes and the dreamer of improbable dreams.",
    "We’re all stories, in the end. Just make it a good one, eh?",
    "Letting it get to you. You know what that’s called? Being alive. Best thing there is. Being alive right now is all that counts.",
    "Always take a banana to a party.",
    "You don’t just give up. You don’t just let things happen. You make a stand! You say no! You have the guts to do what’s right, even when everyone else just runs away.",
    "You were fantastic. Absolutely fantastic. And you know what? So was I.",
  ];

  constructor(
    formBuilder: FormBuilder,
    public dialog: MatDialogRef<ContactDialogComponent>
  ) {
    this.contactInformationGroup = formBuilder.group({
      email: this.emailControl,
      message: this.messageControl,
    });
  }

  ngOnInit() {
    this.randomQuote = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ];
  }

  getEMailErrorMessage() {
    if (this.emailControl.hasError("email"))
      return "Die angegebene E-Mail Adresse ist nicht gültig.";
    else return "";
  }
  getMessageErrorMessage() {
    if (this.messageControl.valid) return "";
    else return "Bitte geben Sie eine Nachricht ein";
  }

  send() {
    if (this.contactInformationGroup.valid) {
      alert("Die Nachricht konnte nicht gesendet werden");
      this.dialog.close();
    }
  }
}
