import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceItemComponent } from './components/experience/experience-item/experience-item.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        AboutMeComponent,
        SectionHeaderComponent,
        SkillsComponent,
        ProgressBarComponent,
        ExperienceComponent,
        ExperienceItemComponent,
        ProjectsComponent,
        InterestsComponent,
        ContactComponent
    ],
    imports: [BrowserModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
