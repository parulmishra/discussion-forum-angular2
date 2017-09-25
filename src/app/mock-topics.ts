import { Topic } from './topic.model';
import { Comment } from './comment.model';


var topic1: Topic = new Topic('MVC', 'Javascript','Parul Mishra', [new Comment('mike','This topic is very interesting')]);



var topic2: Topic = new Topic('Tutorial', 'C#','Parul Mishra', [new Comment('parul', 'This topic is very very interesting')]);

export const TOPICLIST : Topic[] = [topic1, topic2];
export const CATEGORYLIST: string[] = ['C#', 'Javascript', 'Ruby', 'Angular'];
