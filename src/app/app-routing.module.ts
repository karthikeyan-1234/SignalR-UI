import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MsgComponent } from './msg/msg.component';

const routes: Routes = [
  {path : "", component : AppComponent},
  {path : "msg", component : MsgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
