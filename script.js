const menu = document.getElementById(`menu`)
const exit = document.getElementById(`exit`)
const change = document.getElementById(`change`)

const openFunction = (e) => {
    change.style.display = `block`
    e.target.style.display = `none`
}

const closeFunction = (e) => {
    change.style.display = `none`
    menu.style.display = `block`
}

menu.addEventListener(`click`, openFunction)
exit.addEventListener(`click`, closeFunction)