import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { VisNetworkExampleComponent } from './network-graph/network-graph.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/primeng';
import { ButtonModule, PanelModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import {Router,RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    VisNetworkExampleComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    CommonModule,
    MenubarModule,
    ButtonModule,
    PanelModule,
    DialogModule,
    RouterModule.forRoot([])    
  ],
  providers: [            
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
