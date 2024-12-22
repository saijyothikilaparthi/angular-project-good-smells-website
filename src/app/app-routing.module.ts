import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { CardsComponent } from './cards/cards.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { ScentsComponent } from './scents/scents.component';
import { AttarComponent } from './attar/attar.component';
import { Scent1Component } from './scents/scent1/scent1.component';
import { Scent2Component } from './scents/scent2/scent2.component';
import { Scent3Component } from './scents/scent3/scent3.component';
import { Perfume1Component } from './perfumes/perfumeinfo/perfume1/perfume1.component';
import { Perfume2Component } from './perfumes/perfumeinfo/perfume2/perfume2.component';
import { Perfume3Component } from './perfumes/perfumeinfo/perfume3/perfume3.component';
import { Attar1Component } from './attar/attarinfo/attar1/attar1.component';
import { Attar2Component } from './attar/attarinfo/attar2/attar2.component';
import { Attar3Component } from './attar/attarinfo/attar3/attar3.component';

const routes: Routes = [{path:'',component:WelcomeComponent
},
{
  path:'contactus',component:ContactusComponent
},
  {
  path:'card/:id',component:CarddetailsComponent
},
{
  path:'perfumes',component:PerfumesComponent
},
{
  path:'scents',component:ScentsComponent
},
{
  path:'attar',component:AttarComponent
},
{
  path:'scent1',component:Scent1Component
},
{
  path:'scent2',component:Scent2Component
},
{
  path:'scent3',component:Scent3Component
},
{
  path:'perfume1',component:Perfume1Component
},
{
  path:'perfume2',component:Perfume2Component
},
{
  path:'perfume3',component:Perfume3Component
},
{
  path:'attar1',component:Attar1Component
},
{
  path:'attar2',component:Attar2Component
},
{
  path:'attar3',component:Attar3Component
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
