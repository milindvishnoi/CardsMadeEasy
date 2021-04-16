# CardsMadeEasy

CardsMadeEasy is an unique js library that will provide developers ability to create multiple cards with just a couple of js lines. Being a frontend developer for over a couple of months, I realised a lot of the frontend of a website is creating different kinds of cards to display various information. This is where CardMadeEasy comes to rescue. CardsMadeEasy allows users to choose from a variety of different card designs depending on the specification they require. Using this library, allows users to organize cards using grid manipulation to fit perfectly to their application. Users will be able to add/remove and update a specific card from the cards components using the library API. Further using the API, developers will have an option to display photos/color, choose from flip and zoom animation, add/delete cards, display a group of cards with grid manipulations and will also be able to customize color combinations for all the cards.

**Note** : In this repository, the library can be located at  `/pub/js/cardsMadeEasy.js`  and style sheet for library at  `/pub/css/cardsMadeEasy.css`.

**Link**: https://mysterious-dawn-71990.herokuapp.com/
**Documentation**: https://mysterious-dawn-71990.herokuapp.com/docs

# Getting Started
## Introduction
#### Get started CardsMadeEasy, to choose from a variety of different card designs and displaying techniques to make your developing expereience better.

## Quick Start
Looking to quickly add CardsMadeEasy to your project? 
1. Download and install the library from [here](https://github.com/csc309-winter-2021/js-library-vishnoim)
2. Obtain the `cardsMadeEasy.js` which contains the library and `cardsMadeEasy.css` which contains the CSS styling for the library objects.
3. Add Bootstrap to your HTML page using npm/yarn or CDN

### Load the Javascript/CSS files and Bootstrap to your HTML page
Be sure to have your pages set up with the latest design and development standards. Put it all together and your pages should look like this:
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Loading Bootstrap from CDN -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        
        <!-- Loading the Style Sheet for Library -->
        <link rel="stylesheet" type="text/css" href="/css/cardsMadeEasy.css">

        <!-- Loading the library itself. (with defer tag) -->
        <script type="text/javascript" defer src="/js/cardsMadeEasy.js"></script>
    </head>
    <body>
      <!-- We are setting the id to 'myId'. We will use this unique id to select our div tag in JS file. -->
        <div id='myId'></div>
    </body>
</html>
```

### Quick Example
Once the library is setup, let's look at a simple basic example to get you started. Follow this example in your javascript file to use our library.

```
// Pass the id for div tag in your HTML. In our example, we used 'card-id'.
const card = new Card('card-id', 'card-1-id')
// Add a card
card.makeGeneralCard('card-1-id', 'title', 'desc', 'imgSrc')

// Change background and title color of the card we created
card.changeBackgroundColor(''#638e94')
card.changeTitleColor('#62678a')

// You can also pass a HTML element to create a card.
const cardLst = new CardList(document.createElement('div'), 'backgroundColor', 'cardBackground')
// To add a card in cardLst
cardLst.makeGeneralCard('card-1-id', 'title', 'desc', 'imgSrc')

// Display this cardLst. In our example, we have a div with id 'card-list' in our HTML
document.getElementById('card-list').append(cardLst)
```

## Bootstrap 
This library is made on top of Bootstrap framework. Therefore, it is an important import to use the library to it's full capacity. Not using Bootstrap can cause the library to have weird behaviors.

## Structure of Library
The library is divided into 3 classes, which are CardList, Card and CardCarousel. You can use Card to
make individual cards and modify their styles, whereas CardList is used to create a list
that handles a card array. CardCarousel is a class of CardList used to make a card carousel.
For Card Instance
```
{
    id: 1,
    mainDiv: document.getElementById(selector) or HTMLElement,
    frontView: document.create(‘div’),
    backView: document.create(‘div’),
    zoom: false,
    flip: false,
    color: null
}
```
The id key is used to create a card with a unique id which is later used by CardList to add and delete specific cards. The mainDiv is used to select the main div on the DOM where this card will be displayed. You can also give a HTMLElement for main div. The Card object stores the frontView and the backView of the card in each of these keys. The front and back views are displayed using these keys to the DOM. I have also used zoom and flip which indicates if the card will zoom and flip. These zoom and flip keys will be used to enlarge the card on hover and to flip the card when clicked. The color is used to store the background color of each of the cards that is displayed in the DOM.

For CardList Instance
```
{
    cards: [],
    mainDiv: document.getElementById(selector) or HTMLElement,
    cardContainer: document.createElement(‘div’),
    cardColor: ‘red’,
}
```
The cards used to store all the instances of the card that are being displayed within the container. The cardContainer is used to contain all the DOM representation of the cards which are displayed on the mainDiv that contains the selector div on the DOM. cardColor stores a color that all the cards will follow in the array, although you can change the color of any specific card. You can also modify the color of title, description, etc for each card.

For CardCarousel Instance
```
{
    cards: [],
    mainDiv: document.getElementById(selector) or HTMLElement,
    cardContainer: document.createElement(‘div’),
    cardColor: ‘red’,
}
```
It is similar to CardList with arrow buttons to navigate through cards.

## Dependencies
As of now all the libraries 
```
Bootstrap
```
