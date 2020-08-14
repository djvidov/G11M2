function aduBerea() {
    var page = document.getElementsByTagName('div')[0]
    if (page != null) {
        page.classList.remove('bere')
        page.classList.add('vin')
    }

}
function aduVin() {
    var page = document.getElementsByTagName('div')[0]
    if (page != null) {
        page.classList.remove('vin')
        page.classList.add('bere')

    }

}
function aduMicii() {
    var page = document.getElementsByTagName('p')[0]
    if (page != null) {
        page.classList.remove('vodka')
        page.classList.add('micii')
    }
}

function aduVodka() {
    var page = document.getElementsByTagName('p')[0]
    if (page != null) {
        page.classList.remove('micii')
        page.classList.add('vodka')

    }
}