import { NgModule } from "@angular/core";
import { HomePage } from "./home.component";
import { Header } from '../../components/header/header.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [HomePage],
  imports: [ComponentsModule],
  exports: [HomePage],
  providers: []
})
export class HomeModule {}
