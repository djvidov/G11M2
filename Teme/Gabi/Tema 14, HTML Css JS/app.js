function changeDiv1() {
    var page = document.getElementsByTagName('div')[0]
    if (page != null) {
        page.classList.remove('theme2')
        page.classList.add('theme1')
    }
}

function changeDiv2() {
    var page = document.getElementsByTagName('div')[0]
    if (page != null) {
        page.classList.remove('theme1')
        page.classList.add('theme2')
    }
}

function changeParagraph1() {
    var page = document.getElementsByTagName('p')[0]
    if (page != null) {
        page.classList.remove('theme4')
        page.classList.add('theme3')

    }
}

function changeParagraph2() {
    var page = document.getElementsByTagName('p')[0]
    if (page != null) {
        page.classList.remove('theme3')
        page.classList.add('theme4')
    }
}








