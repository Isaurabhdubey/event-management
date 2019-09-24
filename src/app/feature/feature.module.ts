import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [];

@NgModule({
    declarations:[HomeComponent, ContactComponent],
  imports: [
    RouterModule.forRoot(routes),
    SharedModule
],
  exports: [RouterModule]
})
export class FeatureModule { }
