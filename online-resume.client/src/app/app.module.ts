import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PortalLayoutComponent } from './portal-layout/portal-layout.component';
import { SharedModule } from './shared/shared.module';
import { ResumeContainerComponent } from './resume-container/resume-container.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalLayoutComponent,
    ResumeContainerComponent,
    ContactDetailComponent
  ],
  imports: [
    SharedModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
