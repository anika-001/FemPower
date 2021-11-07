import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
blog:any;
  constructor() { }

  ngOnInit(): void {
    this.getblogdata();
  }
  getblogdata(){  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@BarbaraDiGangi')
  .then(response=>response.json())
  .then(data=>{this.setNewsData(data);})}
  setNewsData(data:any){
     
    this.blog = data; 
   console.log(this.blog); 
   // console.log(data.hits[0].created_at);
  }
}
