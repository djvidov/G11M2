alert('cf')
function aduna3(a, b, c) {
    return a + b + c
}
function inmulteste3(x, y, z) {
    return x * y * z
}
function scade2(q, w) {
    return q - w
}

//  3 + 4 + 5 * 2 * 3
var e11 = inmulteste3(5, 2, 3)
var e1 = aduna3(3, 4, e11)
console.log('ex 1: ' + e1)

//  (3 + 4 + 5) * 2 * 3
var e22 = aduna3(3, 4, 5)
var e2 = inmulteste3(e22, 2, 3)
console.log('ex 2: ' + e2)

//  5 - 2 * 2 * 5
var e33 = inmulteste3(2, 2, 5)
var e3 = scade2(5, e33)
console.log('ex 3: ' + e3)

//  (5 - 2) * 2 * 5
var e44 = scade2(5, 2)
var e4 = inmulteste3(e44, 2, 5)
console.log('ex 4: ' + e4)