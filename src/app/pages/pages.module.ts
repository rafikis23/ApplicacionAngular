import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule} from './pages.routing.module';
import { GraphDonuComponent } from 'src/app/component/graph-donu/graph-donu.component';
import { IncrementadorComponent } from 'src/app/component/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProgressComponent,
    Graph1Component,
    IncrementadorComponent,
    GraphDonuComponent
    // FontAwesomeModule
 ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    HomeComponent,
    ProgressComponent,
    Graph1Component
    // FontAwesomeModule
  ]
})
export class PagesModule { }
