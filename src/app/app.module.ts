import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// -----------------3 añadidas

import { AppComponent } from './app.component';
import { CrearComponent } from './crear/crear.component';
import { ListadoComponent } from './listado/listado.component';
import { UnoComponent } from './uno/uno.component';
import { FiltrarComponent } from './filtrar/filtrar.component';
import { DosComponent } from './dos/dos.component';
import { TresComponent } from './tres/tres.component';




@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    ListadoComponent,
    UnoComponent,
    FiltrarComponent,
    DosComponent,
    TresComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
    // -----------------FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
