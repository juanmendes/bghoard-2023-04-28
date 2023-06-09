import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatCardModule } from '@angular/material/card';
import {StoreUiSharedModule} from "@bg-hoard/store/ui-shared";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreUiSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
