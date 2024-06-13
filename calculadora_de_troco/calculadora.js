var produtinhos = []

function cp() {
    var prod = String((document.getElementById('produtos')).value)
    var d = document.getElementById('por')
    produtinhos.push(prod)
    d.innerText = `${produtinhos}`
}

function m() {
    var d = document.getElementById('por')
    var sv = Number((document.getElementById('sv1')).value) 
    var vp = Number((document.getElementById('vp1')).value)
    d.innerText = `${sv} - ${vp} = ${sv - vp}`
     }
