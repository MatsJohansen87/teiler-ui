import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BridgeheadMainMenuComponent} from "./bridgehead-main-menu/bridgehead-main-menu.component";
import {NngmComponent} from "./nngm/nngm.component";
import {QualityReportComponent} from "./quality-report/quality-report.component";
import {ConfigurationComponent} from "./configuration/configuration.component";

export const routingComponents = [
  BridgeheadMainMenuComponent,
  NngmComponent,
  QualityReportComponent,
  ConfigurationComponent
]

const routes: Routes = [
  {path: '', component: BridgeheadMainMenuComponent},
  {path: 'nngm', component: NngmComponent},
  {path: 'quality-report', component: QualityReportComponent},
  {path: 'config', component: ConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
