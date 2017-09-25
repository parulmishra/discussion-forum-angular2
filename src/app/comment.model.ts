import { Topic } from './topic.model';

export class Comment {

  constructor(public topicId: number, public userName: string, public message: string){}
}
