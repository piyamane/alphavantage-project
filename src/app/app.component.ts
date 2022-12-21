import { Component, OnInit } from '@angular/core';
import { AlphaData, AlphaVal } from './model/AlphaData';
import { AlphavantageService } from './service/alphavantage.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'alphavantage';
  responseData: { [key: string]: any[] } = {};
  result: any[]=[];
  processedData: AlphaData[]=[];
  constructor(public alphavantageService: AlphavantageService ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // for(let ele in this.data["Time Series (5min)"]) {
    //   console.log(this.data["Time Series (5min)"][ele]["dateTime"] = ele);
    // }
    
     this.alphavantageService.getAlphavantageData().subscribe((data: any) => {
      this.responseData = data;
      console.log("response", data);

      for(let ele in data["Time Series (5min)"]) {
        //console.log("data", ele);
       
        data["Time Series (5min)"][ele]["dateTime"] = ele;
        let dta = {
          dateTime: ele,
          open: data["Time Series (5min)"][ele]['1. open'],
          high: data["Time Series (5min)"][ele]['2. high'],
          low: data["Time Series (5min)"][ele]['3. low'],
          close: data["Time Series (5min)"][ele]['4. close'],
          volume: data["Time Series (5min)"][ele]['5. volume'],
        }
        this.processedData.push(dta);
      }
    })
  }
    
}
