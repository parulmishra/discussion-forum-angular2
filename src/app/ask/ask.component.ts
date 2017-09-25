import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TopicListComponent } from '../topic-list/topic-list.component';
import { Topic } from '../topic.model';
import { Comment } from '../comment.model';
import { TopicService } from '../topic.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css'],
  providers: [TopicService]
})
export class AskComponent implements OnInit {
  @Output() newTopicSender = new EventEmitter();
  topics: Topic[] = [];
  categories: string[] = [];

  constructor(private router: Router, private topicService: TopicService) { }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
    this.categories = this.topicService.getCategories();
  }

  addTopic(username: string, category: string, topicname: string)
  {
    console.log(username);
    console.log(category);
    console.log(topicname);

    var comments = [];
    let newTopic = new Topic(topicname, category, username, comments);
    console.log(newTopic)
    console.log(this.topics);
    //this.newTopicSender.emit(newTopic);
    this.topics.push(newTopic);
  }

}
