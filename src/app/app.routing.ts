import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicListComponent } from './topic-list/topic-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { AskComponent }   from './ask/ask.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
      path: 'topics',
      component: TopicListComponent
  },
  {
      path: 'ask',
      component: AskComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
