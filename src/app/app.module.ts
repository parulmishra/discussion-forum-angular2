import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { routing } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

import { AskComponent } from './ask/ask.component';
import { CategoryPipe } from './category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    WelcomeComponent,
    AboutComponent,
    AskComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
