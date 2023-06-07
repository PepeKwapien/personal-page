import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
    declarations: [AppComponent, LandingComponent, AboutMeComponent, SectionHeaderComponent, SkillsComponent, ProgressBarComponent],
    imports: [BrowserModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
