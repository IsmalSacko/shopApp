import {Formation} from "../../app/models/formation";

let formations = [
  {
    id: "1",
    name: 'PHP',
    description: 'Une petit petite formation php',
    category: ['PHP', 'SYMFONY', 'BOOTSTRAP', 'HTML & CSS'],
    imageUrl: [
      '../../../assets/img_formation/php.png',
      '../../../assets/img_formation/symf.png',
      '../../../assets/img_formation/bootstrap.png',
      '../../../assets/img_formation/html.png'
    ],
    regular_price: 200,
    sold_price: 100,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: "2",
    name: 'SYMFONY',
    description: 'Une petit petite formation Symfony',
    category: ['PHP', 'SYMFONY', 'BOOTSTRAP', 'HTML & CSS'],
    imageUrl: [
      '../../../assets/img_formation/php.png',
      '../../../assets/img_formation/symf.png',
      '../../../assets/img_formation/bootstrap.png',
      '../../../assets/img_formation/html.png'
    ],
    regular_price: 300,
    sold_price: 150,
    created_at: new Date(),
    updated_at: new Date()
  },

  {
    id: "3",
    name: 'BOOTSTRAP',
    description: 'Une petit petite formation Bootstrap',
    category: ['PHP', 'SYMFONY', 'BOOTSTRAP', 'HTML & CSS'],
    imageUrl: [
      '../../../assets/img_formation/php.png',
      '../../../assets/img_formation/symf.png',
      '../../../assets/img_formation/bootstrap.png',
      '../../../assets/img_formation/html.png'
    ],
    regular_price: 150,
    sold_price: 75.50,
    created_at: new Date(),
    updated_at: new Date()
  },

  {
    id: "4",
    name: 'HTML & CSS',
    description: 'Une petit petite formation HTML & CSS',
    category: ['PHP', 'SYMFONY', 'BOOTSTRAP', 'HTML & CSS'],
    imageUrl: [
      '../../../assets/img_formation/php.png',
      '../../../assets/img_formation/symf.png',
      '../../../assets/img_formation/bootstrap.png',
      '../../../assets/img_formation/html.png'
    ],
    regular_price: 75,
    sold_price: 35.25,
    created_at: new Date(),
    updated_at: new Date()
  },
]

/*
formations:Formation[] = [
  {
    name:"PHP",
    description:"Formation php",
    imageUrl:"",
    category:["PHP", "SYMFONY, BOOTSTRAP"],
    created_at:new Date(),
    updated_at:new Date(),
    regular_price:200,
    sold_price:90
  },
  {
    name:"SYMFONY",
    description:"Formation symfony",
    imageUrl:"",
    category:["PHP", "SYMFONY, BOOTSTRAP"],
    created_at:new Date(),
    updated_at:new Date(),
    regular_price:100,
    sold_price:50
  },

];
*/
