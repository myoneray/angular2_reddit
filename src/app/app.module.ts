import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgNonBindableComponent } from './ng-non-bindable/ng-non-bindable.component';
import { DemoFormSkuComponent } from './froms/demo-form-sku/demo-form-sku.component';
import { DemoFormSkuBuilderComponent } from './froms/demo-form-sku-builder/demo-form-sku-builder.component';
import { DemoFormWithValidationsComponent } from './froms/demo-form-with-validations/demo-form-with-validations.component';
import { DemoFormWithValidationsExplicitComponent } from './froms/demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
import { DemoFormValidationsShorthandComponent } from './froms/demo-form-validations-shorthand/demo-form-validations-shorthand.component';
import { DemoFormCustomValidationsComponent } from './froms/demo-form-custom-validations/demo-form-custom-validations.component';
import { DemoFormValueChangComponent } from './froms/demo-form-value-chang/demo-form-value-chang.component';
import { DemoFormNgModelComponent } from './froms/demo-form-ng-model/demo-form-ng-model.component';

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
    DemoFormNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
