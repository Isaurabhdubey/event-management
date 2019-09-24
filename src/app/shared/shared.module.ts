import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [];

@NgModule({
    declarations:[NavbarComponent],
    entryComponents:[NavbarComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,NavbarComponent]
})
export class SharedModule { }
