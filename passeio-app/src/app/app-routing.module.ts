import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'paginas',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
