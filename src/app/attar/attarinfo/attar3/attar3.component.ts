import { Component } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';
import { Attar3Service } from './attar3services/attar3.service';

@Component({
  selector: 'app-attar3',
  templateUrl: './attar3.component.html',
  styleUrls: ['./attar3.component.css']
})
export class Attar3Component {
details:Cards[]=[];
constructor(private service:Attar3Service){}
ngOnInit():void{
  this.cinfo()
}
cinfo(){
this.service.getdetails().subscribe(data=>this.details=data)
}
}
