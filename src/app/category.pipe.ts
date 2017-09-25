import { Pipe, PipeTransform } from '@angular/core';
import { Topic } from './topic.model';

@Pipe({
  name: 'categoryFilter',
  pure: false
})
export class CategoryPipe implements PipeTransform {

  transform(input: Topic[], filterByCategory) {
    var output: Topic[] =[];

    if(filterByCategory === "C#")
    {
      for(var i=0; i<input.length; i++)
      {
        if(input[i].topicCategory === "C#")
        {
        output.push(input[i]);
        }
      }
      return output;
    }
    else if(filterByCategory === "Javascript")
    {
      for(var i=0; i<input.length; i++)
      {
        if(input[i].topicCategory === "Javascript")
        {
        output.push(input[i]);
        }
      }
      return output;
    }
    else if(filterByCategory === "Ruby")
    {
      for(var i=0; i<input.length; i++)
      {
        if(input[i].topicCategory === "Ruby")
        {
        output.push(input[i]);
        }
      }
      return output;
    }else{
      return input;
    }

  }

}
