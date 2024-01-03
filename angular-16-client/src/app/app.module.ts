import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApmModule, ApmService } from '@elastic/apm-rum-angular'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ApmModule
  ],
  providers: [ApmService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(service: ApmService) {
    // Agent API is exposed through this apm instance
    const apm : any = service.init({
      serviceName: 'angular-app',
      serverUrl: 'http://localhost:8200',
      environment:"development",
      logLevel:"debug",
      distributedTracing:true,
      distributedTracingOrigins:["http://localhost:8080"],
    });
  }
 }
