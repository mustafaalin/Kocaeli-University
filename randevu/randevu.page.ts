import { Component } from '@angular/core';
import { DatabaseProvider } from '../database/database'

@Component({
  selector: 'app-randevu',
  templateUrl: 'randevu.page.html',
  styleUrls: ['randevu.page.scss'],
})
export class RandevuPage {
  constructor(private veritabani:DatabaseProvider) {
  }

}
