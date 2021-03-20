"use strict";
const log = console.log;
const create = document.createElement;
log('----------');
log('Entered cardsMadeEasy js file');

const logoLocation = './logo-svgs/'

class Card {
  constructor(selector, id) {
    // Selecting main div
    this.mainDiv = document.getElementById(selector)

    // Creating main card div
    this.card = document.createElement('div')
    this.card.id = id

    // Basic attributes for a card
    this.frontView = document.createElement('div')
    this.backView = document.createElement('div')
    this.flip = false
    this.zoom = false
    this.about = document.createElement('div')
    this.link = document.createElement('div')
  }

  makeGeneralCard(title, desc, imgSrc, button1, button2) {
    this._setupGeneralFrontView(title, desc, imgSrc, button1, button2)
    this.card.className = 'card general-card'

    this.card.appendChild(this.frontView)
    if (this.mainDiv)
      this.mainDiv.append(this.card)
  }

  makeTeammateCard(name, title, imgSrc, links) {
    this._setUpTeammateFrontView(name, title, imgSrc, links)
    this.card.className = 'card teammate-card'

    this.card.appendChild(this.frontView)
    if (this.mainDiv)
      this.mainDiv.append(this.card)
  }

  makeProjectCard(name, desc, links) {
    this._setUpProjectFrontView(name, desc, links)
    this.card.className = 'card project-card'

    this.card.appendChild(this.frontView)
    if (this.mainDiv)
      this.mainDiv.appendChild(this.card)
  }
  
  _setupGeneralFrontView(title, desc, imgSrc, button1, button2) {
    // Setting up the img
    const imgContainer = document.createElement('div')
    imgContainer.className = 'img'
    imgContainer.style.backgroundImage = `url('${imgSrc}')`

    // Setting up the title
    const textContainer = document.createElement('div')
    const titleDisplay = document.createElement('h1')
    titleDisplay.innerHTML = title
    const descDisplay = document.createElement('p')
    descDisplay.innerHTML = desc
    textContainer.appendChild(titleDisplay)
    textContainer.appendChild(descDisplay)

    const container = document.createElement('div')
    container.appendChild(imgContainer)
    container.appendChild(textContainer)

    // Displaying on card
    this.frontView.appendChild(container)

    // Setting up the buttons
    if (Object.entries(button1).length && Object.entries(button2).length) {
      const buttonContainer = document.createElement('div')
      buttonContainer.appendChild(this._createButton(button1))
      buttonContainer.appendChild(this._createButton(button2))
      this.frontView.appendChild(buttonContainer)
    }

    this.frontView.className = 'general-card-front'
  }

  _setUpTeammateFrontView(name, title, imgSrc, links) {
    this.frontView.className = 'teammate-card-front'

    // Adding image for the card
    const image = document.createElement('img')
    image.className = 'teammate-card-profilepic'
    image.src = imgSrc

    // To display name and job title
    const textContainer = document.createElement('div')
    const nameDisplay = document.createElement('h1')
    nameDisplay.innerHTML = name
    const titleDisplay = document.createElement('h2')
    titleDisplay.innerHTML = title
    textContainer.appendChild(nameDisplay)
    textContainer.appendChild(titleDisplay)
  
    this.frontView.appendChild(image)
    this.frontView.appendChild(textContainer)
    // Setup the links
    this.frontView.appendChild(this._setUpLinks(links))
  }

  _setUpProjectFrontView(name, desc, links) {
    this.frontView.className = 'project-card-front'
    
    const projectNameContainer = document.createElement('h1')
    projectNameContainer.innerHTML = name
    this.frontView.appendChild(projectNameContainer)

    const linksContainer =  this._setUpLinks(links)
    linksContainer.className = 'project-card-links'
    this.frontView.appendChild(linksContainer)
    
    const projectDesc = document.createElement('p')
    projectDesc.innerHTML = desc
    this.frontView.appendChild(projectDesc)
  }

  _setUpLinks(links, project) {
    const linkContainer = document.createElement('div')
    linkContainer.className = 'link-container'

    for (let l in links) {
      const link = document.createElement('a')
      link.href = links[l]
      const logo = document.createElement('img')
      logo.src = `${logoLocation}${l}.svg`
      logo.className = 'links btn btn-primary'
      link.appendChild(logo)
      linkContainer.appendChild(link)
    }

    return linkContainer
  }

  // addBackView(title, desc) {
  //   this.backView.className = 'backview general-card'

  //   // Added title
  //   const titleContainer = document.createElement('h1')
  //   titleContainer.innerHTML = title
    
  //   // Added desc
  //   const descContainer = document.createElement('p')
  //   descContainer.innerHTML = desc

  //   this.backView.appendChild(titleContainer)
  //   this.backView.appendChild(descContainer)
  //   this.card.appendChild(this.backView)

  //   this.backView.className = 'back'
  //   this.frontView.className = 'front'
  // }

  addBackGroundColor(color) {
    this.backView.style.backgroundColor = color
    this.frontView.style.backgroundColor = color
  }

  _createButton(buttonInfo) {
    // Creating button using the info provided in a JS object
    const buttonDisplay = document.createElement('button')
    buttonDisplay.innerHTML = buttonInfo.text
    buttonDisplay.href = buttonInfo.link

    // Adding bootstrap styling
    buttonDisplay.className = 'btn btn-primary btn-lg'

    // returning the created button
    return buttonDisplay
  }
}

class CardList {
  constructor(selector, cardColor, containerColor) {
    // Container div
    this.mainDiv = document.getElementById(selector)

    this.cardsContainer = document.createElement('div')
    this.cardsContainer.className = 'main-container-div'
    if (containerColor)
      this.mainDiv.style.backgroundColor = containerColor

    this.cards = []
    this.cardColor = cardColor
    this.mainDiv.appendChild(this.cardsContainer)
  }

  // Add General Card
  addGeneralCard(id, title, desc, imgSrc, button1, button2) {
    const card = new Card(null, id)
    card.makeGeneralCard(title, desc, imgSrc, button1, button2)
    card.addBackGroundColor(this.cardColor)
    this.cardsContainer.appendChild(card.card)
    this.cards.push(card)
  }

  // Add Teammate Card
  addTeammateCard(id, name, title, imgSrc, links) {
    const card = new Card(null, id)
    card.makeTeammateCard(name, title, imgSrc, links)
    card.addBackGroundColor(this.cardColor)
    this.cardsContainer.appendChild(card.card)
    this.cards.push(card)
  }

  // Add Project Card
  addProjectCard(id, name, desc, links) {
    const card = new Card(null, id)
    card.makeProjectCard(name, desc, links)
    card.addBackGroundColor(this.cardColor)
    this.cardsContainer.appendChild(card.card)
    this.cards.push(card)
  }

  // Get a specific card
  getCard(id) {
    return this.cards.filter((c) => c.card.id === id)[0]
  }

  // Delete a specific card
  removeCard(id) {
    const deleteCard = this.getCard(id)
    log(deleteCard)
    if (deleteCard) {
      this.cardsContainer.removeChild(deleteCard.card)
      this.cards = this.cards.filter((c) => c.card.id !== id)
    }
  }  
}