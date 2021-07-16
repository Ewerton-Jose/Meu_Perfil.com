function mostratudo(){
    var txt1 = window.document.getElementById('txtn1')
    var txt2 = window.document.getElementById('txtn2')
    var d1 = window.document.getElementById('res1')
    var d2 = window.document.getElementById('res2')
    var d3 = window.document.getElementById('res3')
    var d4 = window.document.getElementById('res4')
    var n1 = Number(txt1.value)
    var n2 = Number(txt2.value)
    d1.innerText = `${n1} + ${n2} = ${n1 + n2}`
    d2.innerText = `${n1} / ${n2} = ${n1 / n2}`
    d3.innerText = `${n1} * ${n2} = ${(n1 * n2).toFixed(2)}`
    d4.innerText = `${n1} - ${n2} = ${n1 - n2}`
}