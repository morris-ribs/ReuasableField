import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ReusableInputComponent } from './reusable-input-component/reusable-input.component';

@NgModule({
  declarations: [
    ReusableInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ReusableInputComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(ReusableInputComponent, { injector });
    customElements.define('input-component', el);
  }
  ngDoBootstrap() {}
}
