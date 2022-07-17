import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewayComponent } from './oneway/oneway.component';
import { PropertyComponent } from './property/property.component';
import { ClassbindComponent } from './classbind/classbind.component';
import { StylebindComponent } from './stylebind/stylebind.component';
import { TwowaybindComponent } from './twowaybind/twowaybind.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path:'', component: OnewayComponent },
  { path:'property', component: PropertyComponent },
  { path:'style', component: StylebindComponent },
  { path:'class', component: ClassbindComponent },
  { path:'event', component: EventbindComponent },
  { path:'twoway', component: TwowaybindComponent },    
];
@NgModule({
  declarations: [
    OnewayComponent,
    PropertyComponent,
    ClassbindComponent,
    StylebindComponent,
    TwowaybindComponent,
    EventbindComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class BidingModule { }
