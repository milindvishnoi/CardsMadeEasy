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
cardWithoutImage.changeBackGroundColor('grey')

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
productCard.changeBackGroundColor('grey')

const card2 = new Card('card3', 'card-id-3')
card2.makeTeammateCard('Kristen', 'Core Developer', './img/developer.jpeg', 
  {
    'github': 'https://github.com/milindvishnoi',
    'instagram': 'https://www.instagram.com/',
    'linkedin': 'https://linkedin.com'
  }
)
card2.changeBackGroundColor('#7576b3')

const card3 = new Card('card4', 'card-id-4')
card3.makeProjectCard('Material Math', 'Practice Math problems in a fun, beautiful, material experience!', 
{
  'github': 'https://github.com/grey-software/Material-Math',
  'url': 'https://material-math.grey.software/#/'
})
card3.changeBackGroundColor('#8a6289')

// Feature 3
const cardList = new CardList('card-list', '#638e94', '#62678a')
cardList.addProjectCard('c1', 'Material Math', 'Practice Math problems in a fun, beautiful, material experience!', 
{
  'github': 'https://github.com/grey-software/Material-Math',
  'url': 'https://material-math.grey.software/#/'
})
cardList.addTeammateCard('c2', 'Mills', 'Core Developer', './img/developer.jpeg', 
  {
    'github': 'https://github.com/milindvishnoi',
    'instagram': 'https://www.instagram.com/',
    'linkedin': 'https://linkedin.com'
  }
)
cardList.addProductCard('c3', 'McLaren 570s', 
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

// Feature 4
const cardsLst = new CardList('array-of-cards', 'yellow', '#62678a')
cardsLst.addGeneralCard("Random Card", "Random Card", "Display")

const addCardForm = document.getElementById('showAddFeature')
addCardForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('append-name').value
    const title = document.getElementById('append-title').value

    cardsLst.addGeneralCard(name, name, title)
})

// Feature 5
const deleteCardForm = document.getElementById('showDeleteFeature')
deleteCardForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('delete-card').value

    cardsLst.removeCard(name)
})

// Feature 6
const editColorForm = document.getElementById('editColor')
editColorForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('edit-color-name').value
    const bgcolor = document.getElementById('bgcard-color').value    

    cardsLst.getCard(name).changeBackGroundColor(bgcolor)
})

// Feature 7
const zoomCard = new Card('zoom-card', 'zoom-card-1')
zoomCard.makeGeneralCard('Jeff', 'Model', './img/model.jpg')
zoomCard.addZoom()
const teamZoom = new Card('team-zoom', 'zoom-card-2')
teamZoom.makeTeammateCard('Kristen', 'Core Developer', './img/developer.jpeg', 
  {
    'github': 'https://github.com/milindvishnoi',
    'instagram': 'https://www.instagram.com/',
    'linkedin': 'https://linkedin.com'
  }
)
teamZoom.changeBackGroundColor('#3ab096')
teamZoom.addZoom()

// Feature 8
const productZoomCard = new Card('product-flip', 'flip-card')
productZoomCard.makeProductCard('McLaren 570s', 
                      'Aspirations are for those who hope to make it big; the 2020 McLaren 570S is for those who actually do.',
                      './img/mclaren.jpeg',
                      {
                        'text': 'Check Out',
                        'link': 'https://www.mclaren.com/'
                      },
                      {
                        'text': 'Buy',
                        'link': 'https://www.mclarenstore.com/en/home/'
                      })
productZoomCard.changeBackGroundColor('grey')
productZoomCard.addFlip('More Details', 'It’s the ultimate sports car experience. Completely driver-centric and performance oriented, the 570S Coupé is equally at home on the track as it is on the open road. With the lightest weight in its class and the highest power to weight ratio, it delivers super car punch and thrills that would shame many more expensive rivals.')