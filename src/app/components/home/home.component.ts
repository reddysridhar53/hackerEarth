import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilityService } from '../../services/utils.service';
import { searchPipe } from '../../filters/search.pipe';

@Component({
  selector: 'home-component',
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')]
})

export class HomeComponent{

  games:any;
  option:string='';
  high:number = 0;
  sortOptions:any = [];

  constructor(private utils: UtilityService){}

  getGames( ) {
    if(localStorage.getItem("games")){
      this.parseData(JSON.parse(localStorage.getItem("games")))
      return;
    }
    let params = {
        url : "http://starlord.hackerearth.com/gamesarena"
    }
    this.utils.fetchData(params)
    .subscribe( ( res ) => {
        this.parseData( res )
        localStorage.setItem("games", JSON.stringify(res))
    }, (err) => {
        console.log("Error: ", err)
    })
  }
  getImage(game:any){
    switch(game.platform){
      case "PC" :
        return "../../assets/pc.png";
      case "PlayStation 3" :
        return "../../assets/ps.png";
      case "PlayStation Vita" :
        return "../../assets/ps.png";
      case "Nintendo DS" :
        return "../../assets/nintendo.jpeg";
      case "Nintendo 3DS" :
        return "../../assets/nintendo.jpeg";
      case "iPhone" :
        return "../../assets/iphone.jpeg";
      case "Xbox 360" :
        return "../../assets/xbox.jpeg";
      case "Macintosh" :
        return "../../assets/mac.jpeg";
      case "iPad" :
        return "../../assets/ipad.jpeg";
      case "Android" :
        return "../../assets/android.jpeg";
      default:
        return "../../assets/android.jpeg";
    }
  }
  selectedOption(option:string){
    if(option === "null") return;
    this.high = option === "platform" ? 0 : option === "score(low-high)" ? 1 : -1;
    this.option = option === "score(low-high)" || option === "score(high-low)" ? "score" : "platform";
  }
  parseData(data:any){
    this.games = data.slice(1, data.length);
  }
	ngOnInit( ) {
    this.getGames();
    this.sortOptions = [
      {
        name : "score(low-high)",
        id : 1
      },
      {
        name : "score(high-low)",
        id : 2
      },
      {
        name : "platform",
        id : 3
      }
    ]
  }
}
