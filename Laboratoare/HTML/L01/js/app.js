
function makeNight() {
    var page = document.getElementsByTagName('body')[0];
    if (page != null) {
        page.classList.remove('day')
        page.classList.add('night')

    }
}

function makeDay() {
    var page = document.getElementsByTagName('body')[0];
    if (page != null) {
        page.classList.remove('night')
        page.classList.add('day')

    }


}