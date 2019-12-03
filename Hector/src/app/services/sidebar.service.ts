import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export class SidebarToggleService {
  public showSidebar = new Subject<boolean>();
  public sidebar: boolean = false;
  public setData(): void {
    this.sidebar = !this.sidebar;
    this.showSidebar.next(!this.sidebar);
  }
}
