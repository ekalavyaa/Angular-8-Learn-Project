import { Header } from "./header.component";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SidebarToggleService } from "../../services/sidebar.service";

@NgModule({
  imports: [MatToolbarModule],
  declarations: [Header],
  exports: [Header],
  providers: [SidebarToggleService]
})

export class HeaderModule {}
