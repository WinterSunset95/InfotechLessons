const display = document.getElementById('main_display')
const clickHandler = (num) => {
    let val = display.value
    display.value = val + num
}