import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllpetsComponent } from './allpets/allpets.component';
import { EditpetComponent } from './editpet/editpet.component';
import { PetdetailComponent } from './petdetail/petdetail.component';
import { AddpetComponent } from './addpet/addpet.component';


const routes: Routes = [
  { path: 'pets', component: AllpetsComponent },
  { path: 'pets/new', component: AddpetComponent },
  { path: 'pets/:id', component: PetdetailComponent},
  { path: 'pets/:id/edit', component: EditpetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
