import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topic } from '../topic.model';
import { Comment } from '../comment.model';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  @Output() commentAddSender = new EventEmitter();
  filterByCategory: string = "allCategories";
  topicToComment: Topic = null;

  constructor() { }

  ngOnInit() {
  }

  masterTopicList: Topic[] = [
  new Topic('MVC', 'C#','Parul Mishra', [new Comment('mike','This topic is very interesting')]),
  new Topic('Tutorial', 'C#','Parul Mishra', [new Comment('parul', 'This topic is very very interesting')])
]

  onChangeCategory(categorySelected: string)
  {
    this.filterByCategory = categorySelected;
  }

  displayCommentForm(topicSelected: Topic){
    this.topicToComment = topicSelected;
    console.log(topicSelected);
  }

  AddComment(userName: string, userComment: string)
  {
    var comment = new Comment(userName, userComment);
    this.topicToComment.comments.push(comment);
    console.log(comment);
    console.log(this.topicToComment.comments);
    console.log(this.topicToComment);
    this.topicToComment = null;
  }
}
