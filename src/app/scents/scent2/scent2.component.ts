import { Component } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';
import { Scent2Service } from './scent2services/scent2.service';

@Component({
  selector: 'app-scent2',
  templateUrl: './scent2.component.html',
  styleUrls: ['./scent2.component.css']
})
export class Scent2Component {
details:Cards[]=[];
constructor(private service:Scent2Service){}
ngOnInit():void{
  this.cinfo()
}
cinfo(){
this.service.getdetails().subscribe(data=>this.details=data)
}
}
