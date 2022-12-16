import { Component } from '@angular/core';
import { PrendasService } from './prendas.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private prendaService: PrendasService,
    public alertController: AlertController, prendasService:PrendasService) {}


  SearchTerm: string;
  prendas = []
  todasLasPrendas = []
  
  ngOnInit(){
    this.getPrendas()
  }
 async getPrendas(){
  this.prendas = await this.prendaService.getPrendas()
  console.table(this.prendas)
 }

}