"use strict";
const log = console.log;
log('----------')
log('Entered home.js')

const card1 = new Card('card1', 'card-1')
card1.makeGeneralCard('Mark', 'Entrepreneur', './img/entrepreneur.jpeg')
card1.changeSubtitleColor('red')
card1.changeTitleColor('white')
card1.addZoom()

const card2 = new Card('card2', 'card-2')
card2.makeProductCard('Airpods', 
  'AirPods deliver an unparalleled listening experience with all your devices. \
  Every model connects effortlessly and packs rich, high-quality sound into an innovative wireless design.',
  './img/airpods.png', {})
card2.changeBackgroundColor('black')
card2.changeDescriptionColor('grey')
card2.changeTitleColor('white')
card2.addZoom()

const card3 = new Card('card3', 'card-3')
card3.makeGeneralCard('Yellow', 'color')
card3.changeBackgroundColor('yellow')
card3.addZoom()

const card4 = new Card('card4', 'card-4')
card4.makeTeammateCard('Superwoman', 'Youtuber', './img/lillysingh.jpeg', 
  {
    'youtube': 'https://www.youtube.com/user/IISuperwomanII',
    'instagram': 'https://www.instagram.com/lilly/'
  }
)
card4.changeBackgroundColor('rgb(58, 176, 150)')