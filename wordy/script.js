console.log('Wordy')

// camelCase - frontend
// tooltip_place - backend
let tooltipNoPlace = `
<div class="tooltip">Не угадали положение буквы<br> &#128520;</div>`

let tooltipPlace = `
<div class="tooltip">Вы угадали положение буквы<br>&#128526;</div>`

let word = 'налог'.toUpperCase()

let wordNumber = 1
let letterNumber = 0

window.onload = function () {
    const desk = document.getElementById('desk')
    const keyboard = document.getElementById('keyboard')

    console.log('desk:', desk)

    keyboard.addEventListener('click', (e) => {
        let key = e.target.innerText.toUpperCase()
        console.log('keyboard:', key)
        console.log('letterNumber:', letterNumber)

        let controls = e.target.id

        if (wordNumber > 6 || key.length > 1) {
            console.log('Aready done, return')

            return
        }

        if (controls) {
            actions[controls]()

            return
        }

        let row = document.getElementById(`word${wordNumber}`)

        let cells = row.querySelectorAll('.cell')

        if (cells[letterNumber]) {
            cells[letterNumber].innerText = key

            let hasLetter = word.includes(key)

            console.log('hasLetter:', hasLetter)

            let placeLetter = word[letterNumber] === key

            console.log('placeLetter:', placeLetter)

            if (hasLetter && placeLetter) {
                cells[letterNumber].classList.add('place')
            } else if (hasLetter) {
                cells[letterNumber].classList.add('letter')
            } else {
                cells[letterNumber].classList.add('wrong')
            }

            if (letterNumber < 5) {
                letterNumber += 1
            }
            console.log('letterNumber:', letterNumber)
        }
    }, false)

}

const actions = {
    submit: () => {
        console.log('submit')
        if (letterNumber === 4) {
            console.log('submit word')
            letterNumber = 0
            wordNumber += 1
            if (wordNumber > 6) {
                console.log('Done')
            }
        }
    },
    backspace: () => {
        console.log('backspace letterNumber:', letterNumber)

        if (letterNumber > 0) {
            let row = document.getElementById(`word${wordNumber}`)
            let cells = row.querySelectorAll('.cell')
            let targetCell = cells[letterNumber - 1]

            if (targetCell) {
                targetCell.innerText = ''
                targetCell.classList.remove('wrong')
                targetCell.classList.remove('letter')
                targetCell.classList.remove('place')

                letterNumber -= 1
            }
        }
        console.log('backspace letterNumber:', letterNumber)
    }
}
