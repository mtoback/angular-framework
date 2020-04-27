import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';
import { IntrexonComponent } from './intrexon/intrexon.component';
import { VmwareComponent } from './vmware/vmware.component';
import { ChordiantComponent } from './chordiant/chordiant.component';
import { OceaniaComponent } from './oceania/oceania.component';
import { AttorneyComponent } from './attorney/attorney.component';
import { LlnlComponent } from './llnl/llnl.component';
import { RPIComponent } from './rpi/rpi.component';
import { CMUComponent } from './cmu/cmu.component';
import { NIOSHComponent } from './niosh/niosh.component';
import { MetadataComponent } from './metadata/metadata.component';
import { CompanyTemplateComponent } from './company-template/company-template.component';
import { SchoolTemplateComponent } from './school-template/school-template.component';
import { SwitcherComponent } from './switcher/switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent,
    IntrexonComponent,
    VmwareComponent,
    ChordiantComponent,
    OceaniaComponent,
    AttorneyComponent,
    LlnlComponent,
    RPIComponent,
    CMUComponent,
    NIOSHComponent,
    MetadataComponent,
    CompanyTemplateComponent,
    SchoolTemplateComponent,
    SwitcherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'attorney', component: AttorneyComponent},
      {path: 'chordiant', component: ChordiantComponent},
      {path: 'cmu', component: CMUComponent},
      {path: 'intrexon', component: IntrexonComponent},
      {path: 'llnl', component: LlnlComponent},
      {path: 'niosh', component: NIOSHComponent},
      {path: 'oceania', component: OceaniaComponent},
      {path: 'rpi', component: RPIComponent},
      {path: 'vmware', component: VmwareComponent},
      {path: 'metadata', component: MetadataComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: '/welcome', pathMatch: 'full'}
    ]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
