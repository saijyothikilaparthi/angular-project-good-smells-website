import { Component } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';
import { Perfume1Service } from './perfume1services/perfume1.service';

@Component({
  selector: 'app-perfume1',
  templateUrl: './perfume1.component.html',
  styleUrls: ['./perfume1.component.css']
})
export class Perfume1Component {
details:Cards[]=[];
constructor(private service:Perfume1Service
  
){}
ngOnInit():void{
  this.cinfo()
}
cinfo(){
this.service.getdetails().subscribe(data=>this.details=data)
}
}
