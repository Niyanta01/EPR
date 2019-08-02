import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listofpatients',
  templateUrl: './listofpatients.component.html',
  styleUrls: ['./listofpatients.component.css']
})
export class ListofpatientsComponent implements OnInit {

  constructor( private _httpInstance : HttpClient) { }

  patientList: any;

  ngOnInit() {
   
    this._httpInstance.get("http://localhost:3000/api/listOfPatients")
        .subscribe((data) =>{

          this.patientList = data;
        });
  }
}
