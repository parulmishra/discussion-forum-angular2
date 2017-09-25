import { Injectable } from '@angular/core';
import { Topic } from './topic.model';
import { TOPICLIST } from './mock-topics';
import { CATEGORYLIST } from './mock-topics';
@Injectable()
export class TopicService {

  constructor() { }

  getTopics()
  {
    return TOPICLIST;
  }
  getCategories(){
    return CATEGORYLIST;
  }
}
