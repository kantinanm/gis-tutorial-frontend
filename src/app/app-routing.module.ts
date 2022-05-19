import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OsmComponent } from './page/osm/osm.component';

const routes: Routes = [{
  path:'',component:OsmComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
