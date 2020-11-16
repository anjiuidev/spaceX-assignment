import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpaceX Launch Programs';
  launchYear;
  successfulLaunch;
  successfulLanding;
  launches;
  getLaunches$;

  constructor(private appService:AppService){

  }

  ngOnInit() { 
    this.loadLaunches();
  }

  yearChange(event){
    this.launchYear = event;
    this.loadLaunches();
  }
  
  launchChange(event){
    this.successfulLaunch = event && event.toLowerCase();
    this.loadLaunches();
  }
  
  landingChange(event){
    this.successfulLanding = event && event.toLowerCase();
    this.loadLaunches();
  }

  loadLaunches() {
    const queryParams = {
      launch_success : this.successfulLaunch,
      land_success : this.successfulLanding,
      launch_year : this.launchYear,
      limit: 100
    }
    this.getLaunches$ = this.appService.getLaunches(queryParams)
      .subscribe(data => {
        console.log(data);
        this.launches = data;
      }, err => {
        console.log("Error while loading Launches data:", err);
      })
  }

  ngOnDestroy() {
    this.getLaunches$.unsubscribe();
}

}
