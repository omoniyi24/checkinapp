import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { DataService } from '../../services/data.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

data: any;
checkInResponse:any;
noOfBags: any;

  constructor(private router:Router, private route:ActivatedRoute, private service:DataService) { }

  ngOnInit(): void {
    var id = Number.parseInt(this.route.snapshot.paramMap.get("id"));
    this.service.getReservation(id).subscribe(res=>{
      this.data = res;
    })
  }

  checkin(noOfBags){
    console.log(" noOfBags >>>>>>>>>>>" + noOfBags);
    var checkInRequest:any = new Object();
    checkInRequest.id = this.data.id;
    checkInRequest.checkedIn = true;
    checkInRequest.numberOfBags = noOfBags;

    this.service.checkin(checkInRequest).subscribe(res=>{
      this.checkInResponse = res;
    })
    this.router.navigate(['/confirm'])
  }
}
