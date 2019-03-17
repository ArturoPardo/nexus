import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// -----------------3 añadidas
import { AppComponent } from './app.component';
import { CrearComponent } from './crear/crear.component';
import { ListadoComponent } from './listado/listado.component';
import { FiltrarComponent } from './filtrar/filtrar.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    ListadoComponent,
    FiltrarComponent,
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
