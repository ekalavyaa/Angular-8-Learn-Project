import { Component, OnInit } from "@angular/core";
import { SidebarToggleService } from "../../services/sidebar.service";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html",
  styleUrls: ["header.component.scss"]
})
export class Header implements OnInit {
  constructor(private sidebarToggle: SidebarToggleService) {}

  ngOnInit() {}

  toggleSidebar(): void {
    console.log("click working");
    this.sidebarToggle.setData();
  }
}
