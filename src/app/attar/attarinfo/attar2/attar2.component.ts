import { Component } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';
import { Attar2Service } from './attar2services/attar2.service';
@Component({
  selector: 'app-attar2',
  templateUrl: './attar2.component.html',
  styleUrls: ['./attar2.component.css']
})
export class Attar2Component {
details:Cards[]=[];
constructor(private service:Attar2Service){}
ngOnInit():void{
  this.cinfo()
}
cinfo(){
this.service.getdetails().subscribe(data=>this.details=data)
}
}
