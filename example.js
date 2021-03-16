"use strict";
log('----------')
log('Entered example.js')

const card1 = new Card('card1', 'card-id-1')
card1.makeGeneralCard('Testing', 
                      'This is a test run to see how well this general card works',
                      './img/mclaren.jpeg',
                      {
                        'text': 'Check Out',
                        'link': 'https://www.mclaren.com/'
                      },
                      {
                        'text': 'Buy',
                        'link': 'https://www.mclarenstore.com/en/home/'
                      }
                      )
card1.addBackGroundColor('grey')
// card1.addBackView('McLaren 720', 'Man this car is amazing!')
// card1.makeGeneralCard('Testing', 
//                       'This is a test run to see how well this general card works',
//                       './img/mclaren.jpeg',
//                       {},
//                       {}
//                       )

const card2 = new Card('card2', 'card-id-2')
card2.makeTeammateCard('Mills', 'Core Developer', './img/mclaren.jpeg', [])
card2.addBackGroundColor('#7576b3')
