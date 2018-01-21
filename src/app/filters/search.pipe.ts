import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
  { name: 'title' }
)

export class searchPipe implements PipeTransform {
  transform(games: any, searchTitle: any): any {
    if(searchTitle == null) return games;
    return games.filter(function(game:any){
      return game.title ? game.title.toLowerCase().indexOf(searchTitle.toLowerCase()) > -1 : false;
    })
  }
}
