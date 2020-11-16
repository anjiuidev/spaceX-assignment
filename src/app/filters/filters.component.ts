import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  @Input() launchYear;
  @Input() successfulLaunch;
  @Input() successfulLanding;

  @Output() onYearChange = new EventEmitter();
  @Output() onLaunchChange = new EventEmitter();
  @Output() onLandingChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
  
  yearChange(year) {
    this.launchYear == year ? this.onYearChange.emit() : this.onYearChange.emit(year);
  }

  launchChange(val) {
    this.successfulLaunch == val.toLowerCase() ? this.onLaunchChange.emit() : this.onLaunchChange.emit(val);
  }

  landingChange(val) {
    this.successfulLanding == val.toLowerCase() ? this.onLandingChange.emit() : this.onLandingChange.emit(val);
  }

}
