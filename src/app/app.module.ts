import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlert } from './warningAlert/warningAlert.component';
import { SuccessWarningComponent } from './success-warning/success-warning.component';

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, ServersComponent,
    WarningAlert,
    SuccessWarningComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
