import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient} from "@angular/common/http";
import { IonicModule } from '@ionic/angular';

import { RandevuPage } from './randevu.page';

const routes: Routes = [
  {
    path: '',
    component: RandevuPage
  }
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RandevuPage]
})
export class RandevuPageModule {}