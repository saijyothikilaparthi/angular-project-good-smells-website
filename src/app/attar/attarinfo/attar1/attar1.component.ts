import { Component } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';
import { Attar1Service } from './attar1services/attar1.service';

@Component({
  selector: 'app-attar1',
  templateUrl: './attar1.component.html',
  styleUrls: ['./attar1.component.css']
})
export class Attar1Component {
details:Cards[]=[];
constructor(private service:Attar1Service){}
ngOnInit():void{
  this.cinfo()
}
cinfo(){
this.service.getdetails().subscribe(data=>this.details=data)
}
}
