import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab2',
    loadChildren: ()=> import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: ':prendaId',
    loadChildren: () => import('./tab2/prenda/prenda.module').then( m => m.PrendaPageModule)
  },
 
 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
