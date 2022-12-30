import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature:string = 'recipe';
  title = 'recipe-shop';

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
