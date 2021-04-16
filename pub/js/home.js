"use strict";
log('----------')
log('Entered home.js')

const card1 = new CardList('cardDisplay', 'yellow', '#62678a')
card1.addZoomToAll()
card1.addGeneralCard('Mark', 'Mark', 'Entrepreneur', './img/entrepreneur.jpeg')
card1.getCard('Mark').changeSubtitleColor('red')
card1.getCard('Mark').changeTitleColor('white')
card1.addProductCard('Airpods',
  'Airpods', 
  'AirPods deliver an unparalleled listening experience with all your devices. \
  Every model connects effortlessly and packs rich, high-quality sound into an innovative wireless design.',
  './img/airpods.png', {})
card1.getCard('Airpods').changeBackgroundColor('black')
card1.getCard('Airpods').changeDescriptionColor('grey')
card1.getCard('Airpods').changeTitleColor('white')
card1.addGeneralCard('Yellow', 'Yellow', 'color')
card1.addTeammateCard('lilly', 'Superwoman', 'Youtuber', './img/lillysingh.jpeg', 
  {
    'youtube': 'https://www.youtube.com/user/IISuperwomanII',
    'instagram': 'https://www.instagram.com/lilly/'
  }
)
card1.getCard('lilly').changeBackgroundColor('rgb(58, 176, 150)')

