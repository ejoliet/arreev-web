
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule,FormBuilder } from '@angular/forms';

import { RoutingModule } from './routing.module';

import { MatSidenavModule } from '@angular/material';

import {
  ToolbarModule,ButtonModule,BlockUIModule,AccordionModule,SplitButtonModule,SharedModule,DialogModule,TooltipModule,
  MessagesModule,FileUploadModule,RadioButtonModule,PanelModule,DropdownModule,CheckboxModule,ProgressSpinnerModule,
  DataTableModule,CalendarModule,MultiSelectModule,SelectButtonModule,TabViewModule,InputTextareaModule,OverlayPanelModule,
  DataListModule,DataGridModule,ConfirmDialogModule,GrowlModule,OrderListModule,InplaceModule,FieldsetModule,CarouselModule,
  ChipsModule,TerminalModule,DragDropModule,ToggleButtonModule,SidebarModule,CardModule,EditorModule,GMapModule,InputSwitchModule,
  DataScrollerModule
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { StepsModule } from 'primeng/steps';

import { ConfirmationService } from 'primeng/api';

import { Authentication } from './authentication.service';
import { SecureGuard } from './secure-guard.service';
import { AuthGuard } from './auth-guard.service';
import { SharedService } from './shared.service';
import { LocaleService } from './locale.service';
import { UserService } from './user.service';
import { API } from './api.service';

import { AppRouteReuseStrategy } from './app.route-reuse-strategy';
import { RouteReuseStrategy } from '@angular/router';

import { APIInterceptor } from './api.interceptor';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './store/account-effects.service';
import { FleetEffects } from './store/fleet-effects.service';
import { RouteEffects } from './store/route-effects.service';
import { WaypointEffects } from './store/waypoint-effects.service';
import { AssignmentEffects } from './store/assignment-effects.service';
import { TransporterEffects } from './store/transporter-effects.service';
import { FollowEffects } from './store/follow-effects.service';
import { GroupEffects } from './store/group-effects.serivce';

import { accountReducer } from './store/account.reducer';
import { fleetReducer } from './store/fleet.reducer';
import { routeReducer } from './store/route.reducer';
import { waypointReducer } from './store/waypoint.reducer';
import { assignmentReducer } from './store/assignment.reducer';
import { transporterReducer } from './store/transporter.reducer';
import { followReducer } from './store/follow.reducer';
import { groupReducer } from './store/group.reducer';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { BarComponent } from './bar.component';
import { HomeComponent } from './content/home.component';
import { FleetComponent } from './content/fleet.component';
import { FleetNewComponent } from './content/fleet-new.component';
import { FleetEditComponent } from './content/fleet-edit.component';
import { FleetTransportersComponent } from './content/fleet-transporters.component';
import { FleetTransporterNewComponent } from './content/fleet-transporter-new.component';
import { RoutesComponent } from './content/routes.component';
import { RoutesNewComponent } from './content/routes-new.component';
import { RoutesWaypointNewComponent } from './content/routes-waypoint-new.component';
import { RoutesWaypointEditComponent } from './content/routes-waypoint-edit.component';
import { RoutesAssignmentNewComponent } from './content/routes-assignment-new.component';
import { RoutesAssignmentEditComponent } from './content/routes-assignment-edit.component';
import { TimesComponent } from './content/times.component';
import { EventsComponent } from './content/events.component';
import { DevicesComponent } from './content/devices.component';
import { FollowComponent } from './content/follow.component';
import { UTrackComponent } from './content/utrack.component';
import { LoginComponent } from './login.component';
import { AccountComponent } from './content/account.component';
import { ForbiddenComponent } from './forbidden.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { UnderConstructionComponent } from './under-construction.component';
import { TestComponent } from './test.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AgmCoreModule } from '@agm/core';

import { PeopleModule } from './people/people.module';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BarComponent,
    HomeComponent,
    FleetComponent,
    FleetNewComponent,
    FleetEditComponent,
    FleetTransportersComponent,
    FleetTransporterNewComponent,
    RoutesComponent,
    RoutesNewComponent,
    RoutesWaypointNewComponent,
    RoutesWaypointEditComponent,
    RoutesAssignmentNewComponent,
    RoutesAssignmentEditComponent,
    TimesComponent,
    EventsComponent,
    DevicesComponent,
    FollowComponent,
    UTrackComponent,
    TestComponent,
    LoginComponent,
    AccountComponent,
    ForbiddenComponent,
    PageNotFoundComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,

    MatSidenavModule,

    ToolbarModule,
    ButtonModule,
    BlockUIModule,
    AccordionModule,
    SplitButtonModule,
    SharedModule,
    DialogModule,
    TooltipModule,
    MessagesModule,
    FileUploadModule,
    RadioButtonModule,
    PanelModule,
    DropdownModule,
    CheckboxModule,
    ProgressSpinnerModule,
    DataTableModule,
    CalendarModule,
    MultiSelectModule,
    SelectButtonModule,
    TabViewModule,
    InputTextareaModule,
    OverlayPanelModule,
    DataListModule,
    DataGridModule,
    ConfirmDialogModule,
    GrowlModule,
    OrderListModule,
    InplaceModule,
    FieldsetModule,
    CarouselModule,
    ChipsModule,
    TerminalModule,
    DragDropModule,
    ToggleButtonModule,
    SidebarModule,
    TableModule,
    StepsModule,
    CardModule,
    EditorModule,
    GMapModule,
    InputSwitchModule,
    ConfirmDialogModule,
    DataScrollerModule,

    PeopleModule,

    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    AngularFireStorageModule,

    AgmCoreModule.forRoot({ apiKey:environment.google_api_key } ),

    StoreModule.forRoot({ account:accountReducer,fleet:fleetReducer,route:routeReducer,waypoint:waypointReducer,
      assignment:assignmentReducer,transporter:transporterReducer,follow:followReducer,
      group:groupReducer } ),

    EffectsModule.forRoot([ AccountEffects,FleetEffects,RouteEffects,WaypointEffects,AssignmentEffects,TransporterEffects,FollowEffects,GroupEffects ] ),

    environment.imports
  ],
  providers: [
    { provide:RouteReuseStrategy,useClass:AppRouteReuseStrategy },

    ConfirmationService,

    Authentication,
    SecureGuard,
    AuthGuard,
    SharedService,
    LocaleService,
    UserService,
    API,

    // TODO: figure out how to discriminate so that some requests do not result in pre-flight
    // { provide: HTTP_INTERCEPTORS,useClass:APIInterceptor,multi:true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
