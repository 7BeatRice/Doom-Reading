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


const buttonDiv= document.createElement('div')
buttonDiv.className = "buttonDiv" 
const homeButton = document.createElement('button')
homeButton.textContent = "Home"
homeButton.classList.add("buttonDark")

const html = document.querySelector("html")
homeButton.addEventListener('click', function handleClick(event){
    window.location = '/'
})


const switchMode= document.createElement('div')
switchMode.className = "switchMode" 
const cards = document.querySelectorAll(".card")


const modeLable = document.createElement('label')
modeLable.textContent = "Light Mode ☀️"
modeLable.setAttribute('for', 'inputBut')
const inputBut = document.createElement('input')
inputBut.setAttribute('type', 'checkbox')
inputBut.setAttribute('role', "switch")
inputBut.id = "inputBut"

inputBut.addEventListener('click', function handleClick(event){
    if (inputBut.checked){
        modeLable.textContent = "Dark Mode 🌙"
        html.setAttribute('data-theme', "light")
        inputBut.setAttribute('checked', "true")
         homeButton.classList.remove("buttonDark")
        homeButton.classList.add("buttonLight")

    }
    else{
         modeLable.textContent =  "Light Mode ☀️"
        html.setAttribute('data-theme', "dark")

         homeButton.classList.remove("buttonLight")
        homeButton.classList.add("buttonDark")

       

    }
})
switchMode.appendChild(modeLable)
switchMode.appendChild(inputBut)
buttonDiv.appendChild(homeButton)
buttonDiv.appendChild(switchMode)
headerRight.appendChild(buttonDiv)
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)
header.appendChild(headerContainer)