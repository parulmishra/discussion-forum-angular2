import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Topic } from '../topic.model';
import { Comment } from '../comment.model';
import { TopicService } from '../topic.service';
@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css'],
  providers: [TopicService]
})


export class TopicListComponent implements OnInit {

  @Output() commentAddSender = new EventEmitter();

  filterByCategory: string = "C#";
  topicToComment: Topic = null;
  topics: Topic[];
  categories: string[] = [];

  constructor(private router: Router, private topicService: TopicService) { }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
    this.categories = this.topicService.getCategories();
  }
  // goToDetailPage(clickedTopic: Topic) {
  //   this.router.navigate(['albums', clickedTopic.id]);
  // };

  onChangeCategory(categorySelected: string)
  {
    this.filterByCategory = categorySelected;
  }

  displayCommentForm(topicSelected: Topic)
  {
    this.topicToComment = topicSelected;
    console.log(topicSelected);
      console.log(this.topicToComment);
  }

  AddComment(userName: string, userComment: string)
  {

    var newComment = new Comment(userName, userComment);
    this.topicToComment.comments.push(newComment);
    console.log(newComment);
    console.log(this.topicToComment.comments);
    console.log(this.topicToComment);
    this.topicToComment = null;
  }
}
