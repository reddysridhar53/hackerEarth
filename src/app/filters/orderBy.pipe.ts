import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
  {  name: 'orderBy' }
)

export class OrderrByPipe implements PipeTransform {
  transform(games: Array<any>, args?: any): any {
    console.log("Games: ",games);
    if(!games) return;
    return games.sort(function(a, b){
      if(args.direction){
        if(a[args.property] < b[args.property]){
          return -1 * args.direction;
        }
        else if( a[args.property] > b[args.property]){
          return 1 * args.direction;
        }
        else{
          return 0;
        }
      }else{
        if(!args.property) return;
        if(a[args.property].toLowerCase() < b[args.property].toLowerCase()){
          return -1;
        }
        else if( a[args.property].toLowerCase() > b[args.property].toLowerCase()){
          return 1;
        }
        else{
          return 0;
        }
      }
    });

  };
}
