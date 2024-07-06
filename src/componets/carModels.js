// src/assets/carGallery.js
import img1 from '../assets/AUDI A4.jpg';
import img2 from '../assets/AUDI.jpg';
import img9 from '../assets/AUDI Q7.jpg';

import img3 from '../assets/BENZ.jpg';
import img10 from '../assets/BENZ E-.jpg';
import img11 from '../assets/BENZ-S.jpg';

import img8 from '../assets/BMW.jpg';
import img4 from '../assets/BMW M3.jpg';
import img5 from '../assets/BMW  X5.jpg';

import img6 from '../assets/TESLA.jpg';
import img7 from '../assets/TESLA S.jpg';


const carGallery = [
  {
    model: "BMW",
    cars: [
      {
        text: "Amazing discount on BMW!",
        image: img8,
        location: "Los Angeles, California",
        mileage: 15000,
        year: 2023,
        cost: "$30,000",
        power: "300 HP",
      },
      {
        text: "BMW M3 for sale!",
        image: img4,
        location: "San Francisco, California",
        mileage: 20000,
        year: 2022,
        cost: "$35,000",
        power: "350 HP",
      },
      {
        text: "BMW X5, fully loaded!",
        image: img5,
        location: "Miami, Florida",
        mileage: 25000,
        year: 2021,
        cost: "$40,000",
        power: "400 HP",
      },
    ],
  },
  {
    model: "Audi",
    cars: [
      {
        text: "Great deals on Audi!",
        image: img2,
        location: "Chicago, Illinois",
        mileage: 22000,
        year: 2022,
        cost: "$25,000",
        power: "280 HP",
      },
      {
        text: "Audi A4, low mileage!",
        image: img1,
        location: "New York City, New York",
        mileage: 15000,
        year: 2023,
        cost: "$28,000",
        power: "300 HP",
      },
      {
        text: "Audi Q7, great condition!",
        image: img9,
        location: "Boston, Massachusetts",
        mileage: 30000,
        year: 2021,
        cost: "$32,000",
        power: "320 HP",
      },
    ],
  },
  {
    model: "Mercedes-Benz",
    cars: [
      {
        text: "Huge savings on Mercedes-Benz!",
        image: img3,
        location: "Dallas, Texas",
        mileage: 18000,
        year: 2023,
        cost: "ksh. 30,00,000",
        power: "450 HP",
      },
      {
        text: "Mercedes E-Class, like new!",
        image: img10,
        location: "Houston, Texas",
        mileage: 12000,
        year: 2022,
        cost: "$42,000",
        power: "420 HP",
      },
      {
        text: "Mercedes S-Class, like new!",
        image: img11,
        location: "Houston, Texas",
        mileage: 12000,
        year: 2022,
        cost: "$42,000",
        power: "420 HP",
      },
    ],
  },
  {
    model: "Tesla",
    cars: [
      {
        text: "Special offer on Tesla!",
        image: img6,
        location: "San Diego, California",
        mileage: 8000,
        year: 2023,
        cost: "$55,000",
        power: "500 HP",
      },
      {
        text: "Tesla Model S, excellent condition!",
        image: img7,
        location: "Austin, Texas",
        mileage: 9000,
        year: 2022,
        cost: "$60,000",
        power: "550 HP",
      },
    ],
  },
];

export default carGallery;
