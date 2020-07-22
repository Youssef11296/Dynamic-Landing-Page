let hourArea = document.querySelector('.hours')
let minArea = document.querySelector('.minutes')
let secArea = document.querySelector('.seconds')
let session = document.querySelector('.session')
let dayNameArea = document.querySelector('.day-name')
let dayNumberArea = document.querySelector('.day-number')
let monthNameArea = document.querySelector('.month-name')
let yearNumberArea = document.querySelector('.year-number')
let gText = document.querySelector('.text')
let name = document.querySelector('.name')
let Focus = document.querySelector('.Focus')

const Time = () => {
    let today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    let ampm = 'am'

    if (h >= 24) {
        h = h - 24
        ampm = 'am'
    }

    if (h >= 12) {
        ampm = 'pm'
    }
    if (h < 12) {
        gText.innerHTML = 'Good Morning'
        document.querySelector('.overlay').style.display = 'none'
        document.body.style.backgroundImage = "url('./images/day4.webp')"
    }
    if (h >= 12 && h < 18) {
        gText.innerHTML = 'Good Afternoon'
        document.body.style.color = "#fff"
        document.body.style.backgroundImage = "url('./images/afternoon2.webp')"
    }
    if (h >= 12 && h >= 18) {
        gText.innerHTML = 'Good Night'
        document.body.style.color = "#fff"
        document.body.style.backgroundImage = "url('./images/dark-night.webp')"
    }
    h = (h < 10) ? '0' + h : h
    m = (m < 10) ? '0' + m : m
    s = (s < 10) ? '0' + s : s

    hourArea.innerHTML = h + ' : '
    minArea.innerHTML = m + ' : '
    secArea.innerHTML = s
    session.innerHTML = ampm

    const months = ['January', 'February', 'March', 'April', 'May', 'Jaun', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday']

    let dayName = days[today.getDay() + 1]
    let monthName = months[today.getMonth()]
    let dayNumber = today.getDate()
    let yearNumber = today.getFullYear()

    dayNameArea.innerHTML = dayName
    dayNumberArea.innerHTML = dayNumber
    monthNameArea.innerHTML = monthName
    yearNumberArea.innerHTML = yearNumber
}

Time()

setInterval(Time, 1000)

const setName = e => {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText)
            name.blur()
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)

const getName = () => {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        name.textContent = '[Enter Your Name]'
    } else {
        name.textContent = localStorage.getItem('name')
    }
}

const setFocus = e => {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('Focus', e.target.innerText)
            Focus.blur()
        }
    } else {
        localStorage.setItem('Focus', e.target.innerText)
    }
}

const getFocus = () => {
    if (localStorage.getItem('Focus') === null || localStorage.getItem('Focus') === '') {
        Focus.textContent = '[Enter Your Main Focus]'
    } else {
        Focus.textContent = localStorage.getItem('Focus')
    }
}

Focus.addEventListener('keypress', setFocus)
Focus.addEventListener('blur', setFocus)

getName()
getFocus()