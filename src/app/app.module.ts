import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

import {AppRoutingModule, routingComponents} from './route/app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {SidebarComponent} from './sidebar/sidebar.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";
import {
  TeilerAppPluginOrchestratorComponent
} from './teiler-app-plugin-orchestrator/teiler-app-plugin-orchestrator.component';
import {ParcelModule} from "single-spa-angular/parcel";
import {ExternalLinkDirective} from './external-link.directive';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializeKeycloak} from "./security/keycloak/keycloak-init.factory";
import {TeilerModule} from "./teiler/teiler.module";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TeilerBoxComponent} from './teiler-box/teiler-box.component';
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {TeilerWelcomeComponent} from './teiler-welcome/teiler-welcome.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {BarChartModule} from "@swimlane/ngx-charts";
import { DialogQualiComponent } from './embedded/Dialogs/dialog-quali/dialog-quali.component';
import { DialogUploadsComponent } from './embedded/Dialogs/dialog-uploads/dialog-uploads.component';
import { InquiryDialogComponent } from './embedded/Dialogs/inquiry-dialog/inquiry-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SidebarComponent,
    TeilerAppPluginOrchestratorComponent,
    ExternalLinkDirective,
    TeilerBoxComponent,
    TeilerWelcomeComponent,
    DialogQualiComponent,
    DialogUploadsComponent,
    InquiryDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BarChartModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    NoopAnimationsModule,
    ParcelModule,
    ReactiveFormsModule,
    TeilerModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
