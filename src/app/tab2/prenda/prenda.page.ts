import { Component, OnInit } from '@angular/core';
import { PrendasService } from '../prendas.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-prenda',
  templateUrl: './prenda.page.html',
  styleUrls: ['./prenda.page.scss'],
})
export class PrendaPage implements OnInit {

  constructor(private prendasService: PrendasService,
    public alertController: AlertController) { }

   searchTerm: string;
   prenda = {
    nombre: "",
    comment:"",
    category:"",
    imageUrl:"",
    price: 0,
   }


  ngOnInit() {
    this.getPrenda()
  }

  async getPrenda() {
    const prenda = await this.prendasService.getPrendas()
    this.prenda = prenda.find(prenda => prenda.id === 1)

}


}