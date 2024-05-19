import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalLayoutComponent } from './portal-layout/portal-layout.component';
import { ResumeContainerComponent } from './resume-container/resume-container.component';

const routes: Routes = [
  {
    path: '', //ali.com
    component: PortalLayoutComponent,
    children:[
      {
        path: '',
        component: ResumeContainerComponent
      }
    ]
  },
  // {
  //   path: 'contact' //ali.com/contact
  // },
  // {
  //   path: 'experience' //ali.com/experience
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
