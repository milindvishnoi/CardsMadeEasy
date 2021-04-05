"use strict";
const log = console.log;
log('----------');
log('Entered cardsMadeEasy js file');

(function(global, document, $) { 
  const logoLocation = '../logo-svgs/'

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
      this.flipContainer = null
      this.flip = false
      this.zoom = false
      this.color = null
    }

    /* Creating all kinds of cards */
    makeGeneralCard(title, subtitle, imgSrc) {
      this.#_setUpGeneralFrontView(title, subtitle, imgSrc)
      this.card.className = 'card general-card'

      this.card.appendChild(this.frontView)
      if (this.mainDiv)
        this.mainDiv.append(this.card)
    }

    makeProductCard(title, desc, imgSrc, button1, button2) {
      this.#_setupProductFrontView(title, desc, imgSrc, button1, button2)
      this.card.className = 'card product-card'

      this.card.appendChild(this.frontView)
      if (this.mainDiv)
        this.mainDiv.append(this.card)
    }

    makeTeammateCard(title, subtitle, imgSrc, links) {
      this.#_setUpTeammateFrontView(title, subtitle, imgSrc, links)
      this.card.className = 'card teammate-card'

      this.card.appendChild(this.frontView)
      if (this.mainDiv)
        this.mainDiv.append(this.card)
    }

    makeProjectCard(title, desc, links) {
      this.#_setUpProjectFrontView(title, desc, links)
      this.card.className = 'card project-card'

      this.card.appendChild(this.frontView)
      if (this.mainDiv)
        this.mainDiv.appendChild(this.card)
    }

    /* Additional features */
    addZoom() {
      this.zoom = true
      this.card.onmouseenter = () => {
        this.card.classList.add('zoom')
      }
      this.card.onmouseleave = () => {
        this.card.classList.remove('zoom')
      }
    }

    addFlip(title, desc) {
      this.#_setUpBackView(title, desc)
      this.flipContainer.classList.add('pointer')
      this.flipContainer.onclick = () => this.#_flip()
      this.backView.onclick = () => this.#_flip()
    }

    /* Customization options */
    changeBackgroundColor(color) {
      this.color = color
      this.backView.style.backgroundColor = color
      this.frontView.style.backgroundColor = color
    }

    changeTitleColor(color) {
      this.frontView.getElementsByClassName('title')[0].style.color = color
    }

    changeSubtitleColor(color) {
      this.frontView.getElementsByClassName('subtitle')[0].style.color = color
    }

    changeDescriptionColor(color) {
      this.frontView.getElementsByClassName('desc')[0].style.color = color
    }

    changeBackTitleColor(color) {
      this.backView.getElementsByClassName('title')[0].style.color = color
    }

    changeBackDescriptionColor(color) {
      this.backView.getElementsByClassName('desc')[0].style.color = color
    }

    /* Private methods */
    #_setUpGeneralFrontView(title, subtitle, imgSrc) {
      if (imgSrc) 
        this.frontView.style.backgroundImage = `url('${imgSrc}')`
      
      const conatiner = document.createElement('div')
      conatiner.className = 'container'
      const titleH1 = document.createElement('h1')
      titleH1.innerHTML = title
      titleH1.classList.add('title')
      const subtitleP = document.createElement('p')
      subtitleP.innerHTML = subtitle
      subtitleP.classList.add('subtitle')
      conatiner.appendChild(titleH1)
      conatiner.appendChild(subtitleP)
      this.frontView.appendChild(conatiner)

      this.flipContainer = this.frontView
      this.frontView.className = 'general-card-front'
    }
    
    #_setupProductFrontView(title, desc, imgSrc, button1, button2) {
      // Setting up the img
      const imgContainer = document.createElement('div')
      imgContainer.className = 'img'
      imgContainer.style.backgroundImage = `url('${imgSrc}')`

      // Setting up the title
      const textContainer = document.createElement('div')
      const titleDisplay = document.createElement('h1')
      titleDisplay.innerHTML = title
      titleDisplay.classList.add('title')
      const descDisplay = document.createElement('p')
      descDisplay.innerHTML = desc
      descDisplay.classList.add('desc')
      textContainer.appendChild(titleDisplay)
      textContainer.appendChild(descDisplay)

      const container = document.createElement('div')
      if (imgSrc)
        container.appendChild(imgContainer)
      container.appendChild(textContainer)

      // Displaying on card
      this.frontView.appendChild(container)

      // Setting up the buttons
      if (Object.entries(button1).length && Object.entries(button2).length) {
        const buttonContainer = document.createElement('div')
        buttonContainer.appendChild(this.#_createButton(button1))
        buttonContainer.appendChild(this.#_createButton(button2))
        this.frontView.appendChild(buttonContainer)
      }

      this.flipContainer = container
      this.frontView.className = 'product-card-front'
    }

    #_setUpTeammateFrontView(title, subtitle, imgSrc, links) {
      this.frontView.className = 'teammate-card-front'

      // Adding image for the card
      const image = document.createElement('img')
      image.className = 'teammate-card-profilepic'
      image.src = imgSrc

      // To display title and subtitle
      const textContainer = document.createElement('div')
      const titleDisplay = document.createElement('h1')
      titleDisplay.innerHTML = title
      titleDisplay.classList.add('title')
      const subtitleDisplay = document.createElement('h2')
      subtitleDisplay.innerHTML = subtitle
      subtitleDisplay.classList.add('subtitle')
      textContainer.appendChild(titleDisplay)
      textContainer.appendChild(subtitleDisplay)

      const flipContain = document.createElement('div')
      flipContain.className = 'd-flex flex-column justify-content-between align-items-center'
      flipContain.style = 'min-height: 250px; width: 100%;'
      flipContain.appendChild(image)
      flipContain.appendChild(textContainer)

      this.frontView.appendChild(flipContain)
      this.flipContainer = flipContain

      // Setup the links
      this.frontView.appendChild(this.#_setUpLinks(links))
    }

    #_setUpProjectFrontView(title, desc, links) {
      this.frontView.className = 'project-card-front'
      
      const projectNameContainer = document.createElement('h1')
      projectNameContainer.innerHTML = title
      projectNameContainer.classList.add('title')
      this.frontView.appendChild(projectNameContainer)

      const linksContainer =  this.#_setUpLinks(links)
      linksContainer.className = 'project-card-links'
      this.frontView.appendChild(linksContainer)
      
      const projectDesc = document.createElement('p')
      projectDesc.innerHTML = desc
      projectDesc.classList.add('title')
      this.frontView.appendChild(projectDesc)

      this.flipContainer = projectDesc
      projectDesc.style = 'height: 100%;'
    }

    #_setUpLinks(links) {
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

    #_setUpBackView(title, desc) {
      this.backView.className = 'backview'

      // Added title
      const titleContainer = document.createElement('h1')
      titleContainer.innerHTML = title
      titleContainer.classList.add('title')
      
      // Added desc
      const descContainer = document.createElement('p')
      descContainer.innerHTML = desc
      descContainer.classList.add('desc')

      this.backView.appendChild(titleContainer)
      this.backView.appendChild(descContainer)

      this.backView.className = 'backview pointer'
    }

    #_flip() {
      if (this.card.firstChild === this.frontView)
        this.card.replaceChild(this.backView, this.frontView)
      else
        this.card.replaceChild(this.frontView, this.backView)
    }

    #_createButton(buttonInfo) {
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
        this.cardsContainer.style.backgroundColor = containerColor

      this.cards = []
      this.cardColor = cardColor
      this.zoom = false
      this.mainDiv.appendChild(this.cardsContainer)
    }

    // Add General Card
    addGeneralCard(id, title, subtitle, imgSrc) {
      const card = new Card(null, id)
      card.makeGeneralCard(title, subtitle, imgSrc)
      card.changeBackgroundColor(this.cardColor)
      this.#_keepAddingZoom(card)
      this.cardsContainer.appendChild(card.card)
      this.cards.push(card)
    }

    // Add Product Card
    addProductCard(id, title, desc, imgSrc, button1, button2) {
      const card = new Card(null, id)
      card.makeProductCard(title, desc, imgSrc, button1, button2)
      card.changeBackgroundColor(this.cardColor)
      this.#_keepAddingZoom(card)
      this.cardsContainer.appendChild(card.card)
      this.cards.push(card)
    }

    // Add Teammate Card
    addTeammateCard(id, title, subtitle, imgSrc, links) {
      const card = new Card(null, id)
      card.makeTeammateCard(title, subtitle, imgSrc, links)
      card.changeBackgroundColor(this.cardColor)
      this.#_keepAddingZoom(card)
      this.cardsContainer.appendChild(card.card)
      this.cards.push(card)
    }

    // Add Project Card
    addProjectCard(id, title, desc, links) {
      const card = new Card(null, id)
      card.makeProjectCard(title, desc, links)
      card.changeBackgroundColor(this.cardColor)
      this.#_keepAddingZoom(card)
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

    // Add zoom feature to all cards and the cards that are made in future
    addZoomToAll() {
      this.zoom = true
      this.cards.forEach((card) => card.addZoom())
    }

    /* Hidden Functions */
    #_keepAddingZoom(card) {
      if (this.zoom)
        card.addZoom(card)
    }
  }

  class CardCarousel extends CardList {
    constructor(selector, cardColor, containerColor) {
      super(selector, cardColor, containerColor)
      this.mainDiv.classList.add('carouser-container')

      this.cardsContainer.className = 'carouser-container-inner'

      this.leftButton = this.#_setUpLeftButton()
      this.rightButton = this.#_setUpRightButton()

      this.imageIndex = 0
      this.translateX = 0

      this.mainDiv.appendChild(this.leftButton)
      this.mainDiv.appendChild(this.rightButton)
    }

    #_setUpLeftButton() {
      const buttonDisplay = document.createElement('button')
      buttonDisplay.innerHTML = '<'

      // Adding bootstrap styling
      buttonDisplay.className = 'btn btn-primary btn-lg carouser-left carouser-btn disabled'
      buttonDisplay.onclick = () => {
        if (this.imageIndex !== 0) {
          this.imageIndex--;
          this.translateX += 320;
          this.rightButton.classList.contains('disabled') ? this.rightButton.classList.remove('disabled') : null
        } 
        if (this.imageIndex === 0) {
          this.leftButton.classList.add('disabled')
        }
        this.cardsContainer.style.transform = `translateX(${this.translateX}px)`;
      }
      return buttonDisplay
    }

    #_setUpRightButton() {
      const buttonDisplay = document.createElement('button')
      buttonDisplay.innerHTML = '>'

      // Adding bootstrap styling
      buttonDisplay.className = 'btn btn-primary btn-lg carouser-right carouser-btn'
      buttonDisplay.onclick = () => {
        if (this.imageIndex !== this.cards.length - 1) {
          this.imageIndex++;
          this.translateX -= 320;
          this.leftButton.classList.contains('disabled') ? this.leftButton.classList.remove('disabled') : null
        } 
        if (this.imageIndex === this.cards.length - 1) {
          this.rightButton.classList.add('disabled')
        }
        this.cardsContainer.style.transform = `translateX(${this.translateX}px)`;
      }
      return buttonDisplay
    }

  }

  global.Card = global.Card || Card
  global.CardList = global.CardList || CardList
  global.CardCarousel = global.CardCarousel || CardCarousel
})(window, window.document);
