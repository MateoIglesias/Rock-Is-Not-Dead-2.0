import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  

  constructor() {}

  prendas = []
  todaslasprendas = []

  this.getPrendas()

}

async getPrendas() {
  this.prendas = await this.productService.getPrendas()
  consol.table(this.prendas);
  this.todasLasPrendas = Array.from(this.prendas)
}