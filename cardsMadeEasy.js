"use strict";
const log = console.log;
const create = document.createElement;
log('----------');
log('Entered cardsMadeEasy js file');

class Card {
  constructor(selector, id) {
    // Selecting main div
    log(selector)
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
    this.frontView.className = 'general-card'

    this.card.appendChild(this.frontView)
    this.mainDiv.append(this.card)
  }

  makeTeammateCard(name, title, imgSrc, links) {
    this._setUpTeammateFrontView(name, title, imgSrc, links)
    this.card.className = 'teammate-card'

    this.card.appendChild(this.frontView)
    this.mainDiv.append(this.card)
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
      buttonContainer.appendChild(this.createButton(button1))
      buttonContainer.appendChild(this.createButton(button2))
      this.frontView.appendChild(buttonContainer)
    }
  }

  _setUpTeammateFrontView(name, title, imgSrc, links) {
    this.frontView.className = 'teammate-card-front'

    const image = document.createElement('img')
    image.src = imgSrc

    const textContainer = document.createElement('div')
    const nameDisplay = document.createElement('h1')
    nameDisplay.innerHTML = name
    const titleDisplay = document.createElement('h2')
    titleDisplay.innerHTML = title
    textContainer.appendChild(nameDisplay)
    textContainer.appendChild(titleDisplay)

    this.frontView.appendChild(image)
    this.frontView.appendChild(textContainer)
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

  createButton(buttonInfo) {
    // Creating button using the info provided in a JS object
    const buttonDisplay = document.createElement('button')
    buttonDisplay.innerHTML = buttonInfo.text
    buttonDisplay.href = buttonInfo.link

    // Adding bootstrap styling
    buttonDisplay.className = 'btn btn-primary btn-lg'
    // buttonDisplay.role = 'button'

    // returning the created button
    return buttonDisplay
  }
}