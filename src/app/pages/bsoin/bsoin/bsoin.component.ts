import { Component, OnInit } from '@angular/core';
import { LigbsoinService } from '../services/ligbsoin.service';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { Module } from '@ag-grid-community/core';
import { TokenStorage } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-bsoin',
  templateUrl: './bsoin.component.html',
  styleUrls: ['./bsoin.component.scss']
})
export class BsoinComponent implements OnInit {
  data !: [];
  data1 !: [];
  array : any;
  list:any;
  list1:any=[];
    mat:any
    datesoin:any;
  //idBsoin !: Idbsoin;
  idbesoin:any = {
    cod_soc:this.token.getUser().cod_soc,
    mat_pers:this.token.getUser().matpers,
    num_soins:6
  }

  ligbult:any=[]
/*
    this.idbesoin.mat_pers=this.token.getUser().matpers
    console.log("teeeeeeeeee"+this.token.getUser().matpers)*/
  
  constructor(private serv : LigbsoinService,private token:TokenStorage) { }

  ngOnInit() {
  
    this.getgouv();
    this.getgouv1();
    
  }


   
  getgouv(){
    this.serv.bultSoinDet(this.idbesoin).subscribe(
      data => {
        this.list =data;
       //this.ligbult =this.list.ligBult
        
       
      },
      err => {
        console.log(err);
      }
      );

    }
    getgouv1(){
      this.serv.bultSoinDet(this.idbesoin).subscribe(
        data1 => {
          this.array =data1;
         //this.ligbult =this.list.ligBult
          console.log("dddd : ",this.token.getUser().matpers);
         
        },
        err => {
          console.log(err);
        }
        );
  
      }

  
}
