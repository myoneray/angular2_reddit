import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { NgClassComponent } from './ng/ng-class/ng-class.component';
import { NgStyleComponent } from './ng/ng-style/ng-style.component';
import { NgSwitchComponent } from './ng/ng-switch/ng-switch.component';
import { NgIfComponent } from './ng/ng-if/ng-if.component';
import { NgForComponent } from './ng/ng-for/ng-for.component';
import { NgNonBindableComponent } from './ng/ng-non-bindable/ng-non-bindable.component';
import { DemoFormSkuComponent } from './froms/demo-form-sku/demo-form-sku.component';
import { DemoFormSkuBuilderComponent } from './froms/demo-form-sku-builder/demo-form-sku-builder.component';
import { DemoFormWithValidationsComponent } from './froms/demo-form-with-validations/demo-form-with-validations.component';
import { DemoFormWithValidationsExplicitComponent } from './froms/demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
import { DemoFormValidationsShorthandComponent } from './froms/demo-form-validations-shorthand/demo-form-validations-shorthand.component';
import { DemoFormCustomValidationsComponent } from './froms/demo-form-custom-validations/demo-form-custom-validations.component';
import { DemoFormValueChangComponent } from './froms/demo-form-value-chang/demo-form-value-chang.component';
import { DemoFormNgModelComponent } from './froms/demo-form-ng-model/demo-form-ng-model.component';


import { HomePageComponent } from './page/home-page/home-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'contactus', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    NgClassComponent,
    NgStyleComponent,
    NgSwitchComponent,
    NgIfComponent,
    NgForComponent,
    NgNonBindableComponent,
    DemoFormSkuComponent,
    DemoFormSkuBuilderComponent,
    DemoFormWithValidationsComponent,
    DemoFormWithValidationsExplicitComponent,
    DemoFormValidationsShorthandComponent,
    DemoFormCustomValidationsComponent,
    DemoFormValueChangComponent,
    DemoFormNgModelComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule { }
