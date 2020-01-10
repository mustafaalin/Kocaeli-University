import { Component, OnInit } from '@angular/core';
import { DatabaseProvider } from '../../database/database'
import { SQLite } from '@ionic-native/sqlite/ngx';
import { AlertController } from '@ionic/angular';
import { SOURCE } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-randevu',
  templateUrl: './randevu.page.html',
  styleUrls: ['./randevu.page.scss'],
})
export class RandevuPage implements OnInit {

  private txtRandevuDoktorTarih:string="";
  private txtRandevuDoktorSaat:string="";
  private base64Image:string;

  constructor(private veritabani: DatabaseProvider, 
    private alert:AlertController, 
    ) { 
  
  }

  ngOnInit() {
  }

   Randevu() {
    this.veritabani.Randevu(this.txtRandevuDoktorTarih,this.txtRandevuDoktorSaat,this.base64Image);
    const alert = this.alert.create({
      header: 'Alinan Randevular',
      subHeader: 'Başarılı',
      message: 'Randevu kaydedildi.',
      buttons: ['Kapat']
    }).then((alert)=> {alert.present()});
  } 
  
  
  }
}