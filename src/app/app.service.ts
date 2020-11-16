import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Router, UrlSerializer } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient, private router: Router, private serializer: UrlSerializer) { }

  getLaunches(queryParams={}) {
    const tree = this.router.createUrlTree([], { queryParams });
    const query = this.serializer.serialize(tree);
    const url = environment.apiURl + 'launches' + query;
    return this.http.get(url);
  }


}
