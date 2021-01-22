import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "image-ref",
  templateUrl: "./image-ref.component.html",
  styleUrls: ["./image-ref.component.css"],
})
export class ImageRefComponent implements OnInit {
  @Input() link: string;
  @Input() name: string;
  @Input() imagePath: string;

  constructor() {}

  ngOnInit() {}
}
