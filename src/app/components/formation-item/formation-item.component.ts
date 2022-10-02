import {Component, Input, OnInit} from '@angular/core';
import {Formation} from "../../models/formation";

@Component({
  selector: 'app-formation-item',
  templateUrl: './formation-item.component.html',
  styleUrls: ['./formation-item.component.css']
})
export class FormationItemComponent implements OnInit {
@Input() formation:Formation | undefined;
  constructor() { }

  ngOnInit(): void {

  }

}
