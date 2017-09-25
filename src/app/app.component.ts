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

  masterTopicList: Topic[] = [
    new Topic('MVC', 'C#','Parul Mishra', ['This topic is very interesting']),
    new Topic('Tutorial', 'C#','Parul Mishra', ['This topic is very very interesting'])
  ]

}
