import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReteEditorComponent } from './rete-editor/rete-editor.component';
import { MultiplyComponent } from './rete-editor/multiply/multiply.component';

@NgModule({
  declarations: [
    AppComponent,
    ReteEditorComponent,
    MultiplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
