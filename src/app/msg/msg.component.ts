import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {

  public Message !: string;
  public ID !: number;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  Send(){
    console.log(this.ID);
    console.log(this.Message);
    this.http.post("https://localhost:5001/api/Values",{"id": parseInt(this.ID as unknown as string),"text": this.Message}).subscribe(res => {
      console.log(res);
    },err => { console.log(err); })
  }

}
