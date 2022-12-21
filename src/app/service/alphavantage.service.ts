import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlphavantageService {

  constructor(private httpClient: HttpClient ) { }


  getAlphavantageData(): Observable<any> {
    return this.httpClient.get<any>(environment.baseUrl +
       'query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo');
  }
}
