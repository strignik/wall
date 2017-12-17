import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule } from '@angular/router';
import { CardsListComponent } from './cards-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardService } from './card.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AddCardComponent } from './add-card/add-card.component';
import { MaterialModule } from '../material.module';

const cardsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: CardsListComponent
  },
  {
    path: 'details/:id',
    component: CardDetailsComponent,
    canActivate: [AuthGuard]
  }
])

@NgModule({
  imports: [
    cardsRouting,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    CardsListComponent, 
    CardsComponent,
    CardDetailsComponent,
    AddCardComponent
  ],
  providers: [
    CardService,
    AuthGuard
  ]
})
export class CardsListModule { }
