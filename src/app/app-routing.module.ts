import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegmentationComponent } from './components/segmentation/segmentation.component';
import { DegreeviewComponent } from './components/degreeview/degreeview.component';

const routes: Routes = [
  {path:"segment",component:SegmentationComponent},
  {path:"degreeview",component:DegreeviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
