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
    this.setupFrontView(title, desc, imgSrc, button1, button2)
    this.frontView.className = 'general-card'

    this.card.appendChild(this.frontView)
    this.mainDiv.append(this.card)
  }
  
  setupFrontView(title, desc, imgSrc, button1, button2) {
    // Setting up the img
    let imgContainer = document.createElement('div')
    imgContainer.className = 'img'
    imgContainer.style.backgroundImage = `url('${imgSrc}')`

    // Setting up the title
    let textContainer = document.createElement('div')
    let titleDisplay = document.createElement('h1')
    titleDisplay.innerHTML = title
    let descDisplay = document.createElement('p')
    descDisplay.innerHTML = desc
    textContainer.appendChild(titleDisplay)
    textContainer.appendChild(descDisplay)

    let container = document.createElement('div')
    container.appendChild(imgContainer)
    container.appendChild(textContainer)

    // Displaying on card
    this.frontView.appendChild(container)
    // this.frontView.appendChild(textContainer)

    // Setting up the buttons
    if (button1 != {} && button2 != {}) {
      let buttonContainer = document.createElement('div')
      buttonContainer.appendChild(this.createButton(button1))
      buttonContainer.appendChild(this.createButton(button2))
      this.frontView.appendChild(buttonContainer)
    }
  }

  createButton(buttonInfo) {
    // Creating button using the info provided in a JS object
    let buttonDisplay = document.createElement('button')
    buttonDisplay.innerHTML = buttonInfo.text
    buttonDisplay.href = buttonInfo.link

    // Adding bootstrap styling
    buttonDisplay.className = 'btn btn-primary btn-lg'
    // buttonDisplay.role = 'button'

    // returning the created button
    return buttonDisplay
  }
}