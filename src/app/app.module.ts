import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfComponent } from './operators/of/of.component';
import { MapTapComponent } from './operators/map-tap/map-tap.component';
import { ShareComponent } from './operators/share/share.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { DebounceTimeComponent } from './operators/debounce-time/debounce-time.component';
import { TakeComponent } from './operators/take/take.component';
import { MergeMapComponent } from './operators/merge-map/merge-map.component';
import { ConcatComponent } from './operators/concat/concat.component';
import { ForkJoinComponent } from './operators/fork-join/fork-join.component';

@NgModule({
  declarations: [
    AppComponent,
    OfComponent,
    MapTapComponent,
    ShareComponent,
    SwitchMapComponent,
    DebounceTimeComponent,
    TakeComponent,
    MergeMapComponent,
    ConcatComponent,
    ForkJoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
