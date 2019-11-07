import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AddComponent } from './components/pages/add/add.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { EditComponent } from './components/pages/edit/edit.component';


const routes: Routes = [
  {path:'', component: ContactComponent},
  {path:'add', component: AddComponent},
  {path:'details', component: DetailsComponent},
  {path:'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
