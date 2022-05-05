import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VenuesMapPage } from './venues-map.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    
    RouterModule.forChild([{ path: '', component: VenuesMapPage }])
  ],
  declarations: [VenuesMapPage]
})
export class VenuesMapPageModule {}
