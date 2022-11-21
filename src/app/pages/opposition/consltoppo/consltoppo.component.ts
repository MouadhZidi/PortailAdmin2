import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorage } from 'src/app/core/services/token-storage.service';
import { OppositionserviceService } from '../services/oppositionservice.service';

@Component({
  selector: 'app-consltoppo',
  templateUrl: './consltoppo.component.html',
  styleUrls: ['./consltoppo.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ConsltoppoComponent implements OnInit {
  [x: string]: any;
  idCessionPers:any={
    cod_soc:this.token.getUser().cod_soc,
    mat_pers:this.token.getUser().matpers,
  }
  list:any;
  data !: [];
  listPers:any;
  listlig:any;
  


  constructor(private serv :OppositionserviceService,private token:TokenStorage,config: NgbModalConfig, private modalService: NgbModal) {

    config.backdrop = 'static';
		config.keyboard = false;
   }
   open(content) {
		this.modalService.open(content);
	}
  ngOnInit() {
 

    this.getCessionPerso()
 
    
  }
   anotherFunction(event: Event ) {
    throw new Error('Function not implemented.');
  }
   
  getCessionPerso(){
    this.serv.fetchCessionPers(this.idCessionPers).subscribe(
      
        data => {
          this.list =data;
          this.listPers=this.list.personnel; //list 1
          this.listlig=this.list.ligCession;//list 2
       //this.ligbult =this.list.ligBult
       console.log("abdo 1 :"+this.listlig[3].mois_pret_prevu); 

    
       
      },
      err => {
        console.log(err);
      }
      );

    }
    
}
