/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { CookieHintComponent } from "./cookie-hint.component";

describe("CookieHintComponent", () => {
  let component: CookieHintComponent;
  let fixture: ComponentFixture<CookieHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CookieHintComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
