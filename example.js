"use strict";
log('----------')
log('Entered example.js')

// Feature 1
const card1 = new Card('card1', 'card-id-1')
card1.makeGeneralCard('Jeff', 'Model', './img/model.jpg')
const cardWithoutImage = new Card('card-no-img', 'card-no-img')
cardWithoutImage.makeProductCard('McLaren 570s', 
                      'Aspirations are for those who hope to make it big; the 2020 McLaren 570S is for those who actually do.',
                      '',
                      {
                        'text': 'Check Out',
                        'link': 'https://www.mclaren.com/'
                      },
                      {
                        'text': 'Buy',
                        'link': 'https://www.mclarenstore.com/en/home/'
                      }
                      )
cardWithoutImage.addBackGroundColor('grey')

// Feature 2
const card5 = new Card('card5', 'card-id-5')
card5.makeGeneralCard('Jeff', 'Model', './img/model.jpg')
const productCard = new Card('card2', 'card-id-2')
productCard.makeProductCard('McLaren 570s', 
                      'Aspirations are for those who hope to make it big; the 2020 McLaren 570S is for those who actually do.',
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
productCard.addBackGroundColor('grey')

const card2 = new Card('card3', 'card-id-3')
card2.makeTeammateCard('Kristen', 'Core Developer', './img/developer.jpeg', 
  {
    'github': 'https://github.com/milindvishnoi',
    'instagram': 'https://www.instagram.com/',
    'linkedin': 'https://linkedin.com'
  }
)
card2.addBackGroundColor('#7576b3')

const card3 = new Card('card4', 'card-id-4')
card3.makeProjectCard('Project Name', 'augdyeugfyrbnmfioshagydgeuim fgbyrn foihd bdfyeu niwe 8ehf emwd ehf eimd ehgf rjfmrugf uweirghf7 rfiwfb7 4wjfnfur hfgw jmfu rgf8enwd j', 
{
  'github': 'https://github.com/milindvishnoi',
  'url': 'https://google.com'
})
card3.addBackGroundColor('#8a6289')

// Feature 3
const cardList = new CardList('card-list', '#638e94', '#62678a')
cardList.addProjectCard('c1', 'Project Name', 'augdyeugfyrbnmfioshagydgeuim fgbyrn foihd bdfyeu niwe 8ehf emwd ehf eimd ehgf rjfmrugf uweirghf7 rfiwfb7 4wjfnfur hfgw jmfu rgf8enwd j', 
{
  'github': 'https://github.com/milindvishnoi',
  'url': 'https://google.com'
})
cardList.addTeammateCard('c2', 'Mills', 'Core Developer', './img/mclaren.jpeg', 
  {
    'github': 'https://github.com/milindvishnoi',
    'instagram': 'https://www.instagram.com/',
    'linkedin': 'https://linkedin.com'
  }
)
cardList.addProductCard('c3', 'Testing', 
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

