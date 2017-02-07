import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { VisNetworkExampleComponent } from './network-graph/network-graph.component';
import { AppComponent } from './app.component';
import { VisNetworkService } from 'ng2-vis';
import { VisModule } from 'ng2-vis';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/primeng';
import { ButtonModule, PanelModule } from 'primeng/primeng';
import {Router,RouterModule} from '@angular/router';

import {GraphService} from './network-graph/graph.service';
import {GraphServiceConfiguration} from './network-graph/graph.service.configuration';

@NgModule({
  declarations: [
    AppComponent,
    VisNetworkExampleComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    VisModule,
    CommonModule,
    MenubarModule,
    ButtonModule,
    PanelModule,
    RouterModule.forRoot([])    
  ],
  providers: [
    VisNetworkService,
    GraphService,
    GraphServiceConfiguration    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
