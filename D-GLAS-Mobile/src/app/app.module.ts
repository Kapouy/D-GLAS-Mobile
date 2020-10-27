import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionCovidComponent } from './component/inscription-covid/inscription-covid.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'merde', component: InscriptionCovidComponent },
  { path: 'ruby', component: InscriptionCovidComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InscriptionCovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
