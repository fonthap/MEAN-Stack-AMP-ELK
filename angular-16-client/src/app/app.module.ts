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
    const apm = service.init({
      serviceName: 'angular-app',
      serverUrl: 'http://192.168.10.31:8200',
      logLevel:"debug",
      environment:"development",
      distributedTracing:true,
      distributedTracingOrigins:["http://localhost:4200","http://localhost:8080"],
    });
    let trans :any= apm.getCurrentTransaction();
    let transId = trans.id
    console.log('id',transId)
    localStorage.setItem('key',transId)
console.log('apm.getCurrentTransaction', apm.getCurrentTransaction())
  }
 }
