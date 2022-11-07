import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { MenufijoComponent } from './componentes/menufijo/menufijo.component';

import { CargarScriptsService } from "./cargar-scripts.service";
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import {  HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { AcercadeDashComponent } from './componentes/acercade-dash/acercade-dash.component';
import { BannerDashComponent } from './componentes/banner-dash/banner-dash.component';
import { EducacionDashComponent } from './componentes/educacion-dash/educacion-dash.component';
import { EncabezadoDashComponent } from './componentes/encabezado-dash/encabezado-dash.component';
import { ExperienciaDashComponent } from './componentes/experiencia-dash/experiencia-dash.component';
import { ProyectosDashComponent } from './componentes/proyectos-dash/proyectos-dash.component';
import { SkillsDashComponent } from './componentes/skills-dash/skills-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ModalComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    MenufijoComponent,
    ProyectosComponent,
    DashboardComponent,
    IndexComponent,
    AcercadeDashComponent,
    BannerDashComponent,
    EducacionDashComponent,
    EncabezadoDashComponent,
    ExperienciaDashComponent,
    ProyectosDashComponent,
    SkillsDashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
