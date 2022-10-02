import { Component, OnInit } from '@angular/core';
import {Formation} from "../../models/formation";

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
formations:Formation[] = [];
  constructor() { }

  ngOnInit(): void {
    this.formations= [
      {
        _id: "1",
        name: 'PHP',
        description: 'Une petit petite formation php',
        category: ['PHP', 'SYMFONY', 'BOOTSTRAP', 'HTML & CSS'],
        imageUrl: [
          '../../../assets/img_formation/php.png',
        ],
        regular_price: 200,
        sold_price: 100,
        created_at: new Date(),
        },
      {
        _id: "2",
        name: 'SYMFONY',
        description: 'Une petit petite formation Symfony',
        category: ['PHP', 'SYMFONY', 'BOOTSTRAP', 'HTML & CSS','Développeur web'],
        imageUrl: [
          '../../../assets/img_formation/symf.png',
       ],
        regular_price: 300,
        sold_price: 150,
        created_at: new Date(),
        },

      {
        _id: "3",
        name: 'BOOTSTRAP',
        description: 'Une petit petite formation Bootstrap',
        category: ['PHP', 'SYMFONY', 'BOOTSTRAP', 'HTML & CSS', 'Développeur web'],
        imageUrl: [
          '../../../assets/img_formation/bootstrap.png',
        ],
        regular_price: 150,
        sold_price: 75,
        created_at: new Date(),
        },

      {
        _id: "4",
        name: 'HTML & CSS',
        description: 'Une petit petite formation HTML & CSS',
        category: ['PHP', 'SYMFONY', 'BOOTSTRAP', 'HTML & CSS','Développeur web'],
        imageUrl: [
          '../../../assets/img_formation/css.jpeg'
        ],
        regular_price: 75,
        sold_price: 35.25,
        created_at: new Date(),
        },

      {
        _id: "5",
        name: 'Développeur web',
        description: 'Une petit petite formation dev web en général',
        category: ['PHP', 'SYMFONY', 'BOOTSTRAP', 'HTML & CSS', 'Développeur web'],
        imageUrl: [
          '../../../assets/img_formation/dev.png'
        ],
        regular_price: 60,
        sold_price: 30,
        created_at: new Date(),
      },
    ]
  }

}
