import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
    declarations: [AppComponent, LandingComponent, NavbarComponent, AboutMeComponent, SectionHeaderComponent, SkillsComponent],
    imports: [BrowserModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
