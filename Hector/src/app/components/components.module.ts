import { Header } from "./header/header.component";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderModule } from "./header/header.module";
import { SidebarModule } from "./sidebar/sidebar.module";

@NgModule({
  imports: [],
  declarations: [],
  exports: [HeaderModule, SidebarModule]
})
export class ComponentsModule {}
