import { Component } from '@angular/core';
import { Topic } from './topic.model';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Discussion Forum';
  selectedTopic  = null;
  currentDate: any = moment();


}
