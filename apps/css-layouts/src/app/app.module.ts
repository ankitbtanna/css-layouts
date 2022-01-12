import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuperCenteredComponent } from './super-centered/super-centered.component';
import { TheDeconstructedPancakeComponent } from './the-deconstructed-pancake/the-deconstructed-pancake.component';
import { SidebarSaysComponent } from './sidebar-says/sidebar-says.component';
import { PancakeStackComponent } from './pancake-stack/pancake-stack.component';
import { ClassicHolyGrailLayoutComponent } from './classic-holy-grail-layout/classic-holy-grail-layout.component';
import { TwelveSpanGridComponent } from './twelve-span-grid/twelve-span-grid.component';
import { RepeatAutoMinmaxComponent } from './repeat-auto-minmax/repeat-auto-minmax.component';
import { LineUpComponent } from './line-up/line-up.component';
import { ClampingComponent } from './clamping/clamping.component';
import { RespectForAspectComponent } from './respect-for-aspect/respect-for-aspect.component';

@NgModule({
  declarations: [AppComponent, SuperCenteredComponent, TheDeconstructedPancakeComponent, SidebarSaysComponent, PancakeStackComponent, ClassicHolyGrailLayoutComponent, TwelveSpanGridComponent, RepeatAutoMinmaxComponent, LineUpComponent, ClampingComponent, RespectForAspectComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
