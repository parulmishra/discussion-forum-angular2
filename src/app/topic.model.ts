import { Comment } from './comment.model';

export class Topic {

  constructor(public topicName: string, public topicCategory:string, public userName: string, public comments: Comment[]){}
}
