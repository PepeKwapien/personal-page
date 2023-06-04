import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
    declarations: [AppComponent, SectionHeaderComponent, NavbarComponent, AboutMeComponent],
    imports: [BrowserModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
