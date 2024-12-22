import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { FaqComponent } from './faq/faq.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannarComponent } from './bannar/bannar.component';
import { SubcardsComponent } from './subcards/subcards.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { ScentsComponent } from './scents/scents.component';
import { AttarComponent } from './attar/attar.component';
import { PerfumeinfoComponent } from './perfumes/perfumeinfo/perfumeinfo.component';
import { ScentinfoComponent } from './scents/scentinfo/scentinfo.component';
import { AttarinfoComponent } from './attar/attarinfo/attarinfo.component';
import { Attar1Component } from './attar/attarinfo/attar1/attar1.component';
import { Attar2Component } from './attar/attarinfo/attar2/attar2.component';
import { Attar3Component } from './attar/attarinfo/attar3/attar3.component';
import { Perfume1Component } from './perfumes/perfumeinfo/perfume1/perfume1.component';
import { Perfume2Component } from './perfumes/perfumeinfo/perfume2/perfume2.component';
import { Perfume3Component } from './perfumes/perfumeinfo/perfume3/perfume3.component';
import { Scent1Component } from './scents/scent1/scent1.component';
import { Scent2Component } from './scents/scent2/scent2.component';
import { Scent3Component } from './scents/scent3/scent3.component';
import { ScenttypesComponent } from './scents/scenttypes/scenttypes.component';
import { PerfumetypesComponent } from './perfumes/perfumetypes/perfumetypes.component';
import { AttartypesComponent } from './attar/attartypes/attartypes.component';
import { PcarouselComponent } from './perfumes/pcarousel/pcarousel.component';
import { AcarouselComponent } from './attar/acarousel/acarousel.component';
import { ScarouselComponent } from './scents/scarousel/scarousel.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CarddetailsComponent,
    WelcomeComponent,
    FaqComponent,
    NavbarComponent,
    BannarComponent,
    SubcardsComponent,
    SliderComponent,
    FooterComponent,
    ContactusComponent,
    PerfumesComponent,
    ScentsComponent,
    AttarComponent,
    PerfumeinfoComponent,
    ScentinfoComponent,
    AttarinfoComponent,
    Attar1Component,
    Attar2Component,
    Attar3Component,
    Perfume1Component,
    Perfume2Component,
    Perfume3Component,
    Scent1Component,
    Scent2Component,
    Scent3Component,
    ScenttypesComponent,
    PerfumetypesComponent,
    AttartypesComponent,
    PcarouselComponent,
    AcarouselComponent,
    ScarouselComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
