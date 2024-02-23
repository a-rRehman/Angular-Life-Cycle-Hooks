import {
  AfterContentInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"],
})
export class DemoComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit
{
  title: string = "Demo Component";
  @Input() message: string;
  // @Input() message: string[];
  @ViewChild("temp") tempPara: ElementRef;

  constructor() {
    console.log("Demo component constructor called");
    console.log(this.title);
    console.log(this.message);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Hook called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngonInit Cycle Called");
    // console.log(this.tempPara.nativeElement.innerHTML);
  }
  ngDoCheck(): void {
    console.log("ngDoCheck Cycle Called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Cycle Called");
  }
}
