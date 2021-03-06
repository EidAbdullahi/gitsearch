import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
username:string;


@Output() addSearch  = new EventEmitter<any>();

  constructor() { }
search(){
  this.addSearch.emit(this.username);
}

  ngOnInit(): void {
  }

}
