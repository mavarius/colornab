// DECLARE HEX VALUES
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function colorQuick (shade, hue) {
  let color = '#'
  let high, low
  if (shade) {
    high = 16 * shade
    low = high / 2
  } else {
    high = 16
    low = 8
  }

  switch (hue) {
    case 'red':
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      for (let i = 0; i < 4; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      break

    case 'yellow':
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      break

    case 'green':
      for (let i = 0; i < 2; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      break

    case 'magenta':
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      break

    case 'cyan':
      for (let i = 0; i < 2; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      break

    case 'blue':
      for (let i = 0; i < 4; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      break

    case 'grayscale':
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low) + low))] }
      color += color.substring(1, 3).repeat(2)
      break

    default:
      for (let i = 0; i < 6; i++) { color += hex[Math.floor(Math.random() * 16)] }
  }

  return color
}

function toggleWidget () {
  if (colorNabWidgetContainer.style.width === '20px') {
    colorNabWidgetContainer.style.width = '540px'
    colorNabOpenWidgetBtn.innerHTML = '▶'
  } else {
    colorNabWidgetContainer.style.width = '20px'
    colorNabOpenWidgetBtn.innerHTML = '◀'
  }
}

let colorNabWidgetContainer = document.getElementById('colorNabWidgetContainer')
colorNabWidgetContainer.style.position = 'fixed'
colorNabWidgetContainer.style.right = '2vmin'
colorNabWidgetContainer.style.bottom = '2vmin'
colorNabWidgetContainer.style.width = '20px'
colorNabWidgetContainer.style.overflow = 'hidden'
colorNabWidgetContainer.style.boxShadow = '0 0 1px rgba(0, 0, 0, 0.2), 0 2px 1px rgba(0, 0, 0, 0.1)'
colorNabWidgetContainer.style.transition = 'all 0.5s'

let colorNabWidget = document.createElement('div')
colorNabWidget.style.height = '100px'
colorNabWidget.style.width = '500px'
colorNabWidget.style.display = 'flex'
colorNabWidget.style.justifyContent = 'space-around'
colorNabWidget.style.flexDirection = 'row'
colorNabWidget.style.flexWrap = 'wrap'
colorNabWidget.style.padding = '10px'
colorNabWidget.style.backgroundColor = 'white'
colorNabWidgetContainer.appendChild(colorNabWidget)

let colorNabOpenWidgetBtn = document.createElement('button')
colorNabOpenWidgetBtn.addEventListener('click', toggleWidget)
colorNabOpenWidgetBtn.style.height = '120px'
colorNabOpenWidgetBtn.style.width = '20px'
colorNabOpenWidgetBtn.style.backgroundColor = 'black'
colorNabOpenWidgetBtn.style.border = 'none'
colorNabOpenWidgetBtn.style.borderRadius = '0'
colorNabOpenWidgetBtn.style.fontSize = '0.8em'
colorNabOpenWidgetBtn.style.position = 'absolute'
colorNabOpenWidgetBtn.style.alignSelf = 'center'
colorNabOpenWidgetBtn.style.color = 'white'
colorNabOpenWidgetBtn.style.right = '0'
colorNabWidget.appendChild(colorNabOpenWidgetBtn)
colorNabOpenWidgetBtn.innerHTML = '◀'


let colorSets = document.createElement('div')
colorSets.style.width = '100%'
colorSets.style.height = '20px'
colorSets.style.display = 'flex'
colorSets.style.justifyContent = 'space-between'
colorSets.style.borderBottom = '1px solid #F0F0F0'
colorSets.style.paddingBottom = '10px'
colorSets.style.marginBottom = '10px'
colorNabWidget.appendChild(colorSets)

let colorSet = ''
let counter = 0

for (var i = 1; i <= 21; i++) {
  let shade = 1 / ((i % 3) || 3)
  if (shade < 0.4) shade -= 0.18
  let colorNabColors = ['magenta', 'red', 'yellow', 'green', 'cyan', 'blue', 'grayscale']
  let hue = colorNabColors[counter]
  if (!(i % 3) && i > 2) counter++

  if (i === 1) colorSet += `<span id="" class="colorSet">`
  colorSet += `<button class="colorNabBtn" style="width:20px; height:20px; border:none;" onclick="makeSwatches(${shade}, '${hue}')"></button>`
  if (!(i % 3) && i < 19) colorSet += `</span><span class="colorSet" data-magenta="magenta">`
  if (i === 21) colorSet += '</span>'
}

colorSets.innerHTML = colorSet

let colorNabBtns = document.getElementsByClassName('colorNabBtn')

if (colorNabBtns) {
  colorNabBtns[0].style.backgroundColor = '#FF00FF'
  colorNabBtns[1].style.backgroundColor = '#880088'
  colorNabBtns[2].style.backgroundColor = '#220022'

  colorNabBtns[3].style.backgroundColor = '#FF0000'
  colorNabBtns[4].style.backgroundColor = '#880000'
  colorNabBtns[5].style.backgroundColor = '#220000'

  colorNabBtns[6].style.backgroundColor = '#FFFF00'
  colorNabBtns[7].style.backgroundColor = '#888800'
  colorNabBtns[8].style.backgroundColor = '#222200'

  colorNabBtns[9].style.backgroundColor = '#00FF00'
  colorNabBtns[10].style.backgroundColor = '#008800'
  colorNabBtns[11].style.backgroundColor = '#002200'

  colorNabBtns[12].style.backgroundColor = '#00FFFF'
  colorNabBtns[13].style.backgroundColor = '#008888'
  colorNabBtns[14].style.backgroundColor = '#002222'

  colorNabBtns[15].style.backgroundColor = '#0000FF'
  colorNabBtns[16].style.backgroundColor = '#000088'
  colorNabBtns[17].style.backgroundColor = '#000022'

  colorNabBtns[18].style.backgroundColor = '#EEEEEE'
  colorNabBtns[19].style.backgroundColor = '#888888'
  colorNabBtns[20].style.backgroundColor = '#222222'
}

let palette = document.createElement('div')
colorNabWidget.appendChild(palette)
palette.style.display = 'flex'
palette.style.width = '100%'
palette.style.height = '60px'
palette.style.justifyContent = 'space-between'
palette.style.alignSelf = 'center'

let colorArr = Array(7).fill()
let swatches = ''

function makeSwatches (shade, hue) {
  let swatches = ''
  colorArr = colorArr.map(() => {
    return colorQuick(shade, hue)
  })
  colorArr.map(color => {
    swatches += `<div style="height:60; width:60px; background-color:${color};" onclick="updateColors()"></div>`
  })
  console.log('colorArr: ', colorArr)
  palette.innerHTML = swatches
}

function updateColors () {
  let clickedSwatch = this.event.target
  let colorNabSetColor = window.getComputedStyle(clickedSwatch, null).getPropertyValue('background-color')
  let colorNabElements = document.getElementsByClassName('colornab')
  for (let i = 0; i < colorNabElements.length; i++) {
    colorNabElements[i].style.backgroundColor = colorNabSetColor
  }
}

// module.exports = colorQuick
