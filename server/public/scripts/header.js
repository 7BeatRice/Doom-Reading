const header = document.querySelector('header')
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'
const logoImage = document.createElement('img')
logoImage.className = 'logo'
logoImage.src='./logo.png'
const title = document.createElement('h1')
title.textContent = 'DoomReading'
headerLeft.appendChild(logoImage)
headerLeft.appendChild(title)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const homeButton = document.createElement('button')
homeButton.textContent = "Home"
homeButton.addEventListener('click', function handleClick(event){
    window.location = '/'
})

headerRight.appendChild(homeButton)
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)
header.appendChild(headerContainer)