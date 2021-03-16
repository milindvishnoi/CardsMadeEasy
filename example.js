"use strict";
log('----------')
log('Entered example.js')

const card1 = new Card('card', 'card-id-1')
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