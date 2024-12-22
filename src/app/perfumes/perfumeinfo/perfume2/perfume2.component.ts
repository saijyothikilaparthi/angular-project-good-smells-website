import { Component } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';
import { Perfume2Service } from './perfume2services/perfume2.service';


@Component({
  selector: 'app-perfume2',
  templateUrl: './perfume2.component.html',
  styleUrls: ['./perfume2.component.css']
})
export class Perfume2Component {
details:Cards[]=[];
constructor(private service:Perfume2Service){}
ngOnInit():void{
  this.cinfo()
}
cinfo(){
this.service.getdetails().subscribe(data=>this.details=data)
}
}
