const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G"]

const button = document.getElementById('btn')
const color = document.getElementById('color')

button.addEventListener('click', function () {
    let valueColor = '#'
    for (let i = 0; i < 6; i++) {
        valueColor += colors[getRandomNumber()]
    }
    color.textContent = valueColor;
    document.body.style.backgroundColor = valueColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}