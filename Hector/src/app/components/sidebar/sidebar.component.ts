import { Component, OnInit } from "@angular/core";
import { SidebarToggleService } from "../../services/sidebar.service";
import {
  useAnimation,
  transition,
  trigger,
  style,
  animate,
  state
} from "@angular/animations";
@Component({
  selector: "sidebar",
  templateUrl: "sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  animations: [
    trigger("slideInOut", [
      state(
        "In",
        style({
          overflow: "hidden",
          height: "*",
          width: "300px"
        })
      ),
      state(
        "Out",
        style({
          opacity: "0",
          overflow: "hidden",
          height: "0px",
          width: "0px"
        })
      ),
      transition("In => Out", animate("4000ms ease-in-out")),
      transition("Out => In", animate("4000ms ease-in-out"))
    ])
  ]
})
export class Sidebar implements OnInit {
  public showSidebar: boolean = true;
  public animateState: string = "In";
  constructor(public sidebarService: SidebarToggleService) {}

  ngOnInit() {
    this.sidebarService.showSidebar.subscribe(value => {
      this.showSidebar = value;
      this.animateState = this.showSidebar ? "In" : "Out";
      console.log(value);
    });
  }
}
