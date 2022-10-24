import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndoorComponent } from './indoor/indoor.component';
import { OutdoorComponent } from './outdoor/outdoor.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  { path: ' ', component: HomeComponent },
  { path: 'in', component: IndoorComponent },
  { path: 'out', component: OutdoorComponent },
  { path: 'h', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
