import { Component } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';
import { Perfume3Service } from './perfume3services/perfume3.service';

@Component({
  selector: 'app-perfume3',
  templateUrl: './perfume3.component.html',
  styleUrls: ['./perfume3.component.css']
})
export class Perfume3Component {
details:Cards[]=[];
constructor(private service:Perfume3Service){}
ngOnInit():void{
  this.cinfo()
}
cinfo(){
this.service.getdetails().subscribe(data=>this.details=data)
}
}
