import { Component } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';
import { Scent1Service } from './scent1services/scent1.service';

@Component({
  selector: 'app-scent1',
  templateUrl: './scent1.component.html',
  styleUrls: ['./scent1.component.css']
})
export class Scent1Component {
details:Cards[]=[];
constructor(private service:Scent1Service){}
ngOnInit():void{
  this.cinfo()
}
cinfo(){
this.service.getdetails().subscribe(data=>this.details=data)
}
}
