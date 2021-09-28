import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradesStoreModule } from './features/dashboard/trades/store/trades.store.module';
import { DashboardLayoutComponent } from './shared/layouts/dashboard-layout/dashboard-layout.component';
import { metaReducers, reducers } from './store/app-meta.regucer';

const STORE = [
  TradesStoreModule,

  StoreModule.forRoot(reducers, { metaReducers }),
  StoreDevtoolsModule.instrument({ maxAge: 25 }),
  EffectsModule.forRoot([]),
];

const LAYOUT = [
  DashboardLayoutComponent,
];

const MATERIAL = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
]
@NgModule({
  declarations: [
    AppComponent,
    LAYOUT
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MATERIAL,
    STORE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
