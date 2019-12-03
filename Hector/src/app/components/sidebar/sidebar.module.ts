import { NgModule } from "@angular/core";
import { Sidebar } from "./sidebar.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [Sidebar],
  imports: [MatSidenavModule, MatListModule, CommonModule],
  exports: [Sidebar],
  providers: []
})
export class SidebarModule {}
