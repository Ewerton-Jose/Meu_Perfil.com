var p = [true, true, false, false];
var q = [true, false, true, false];
var pq = [];
var count = 0;
var resultado = document.getElementById("result");
var operacao = document.getElementById("result2");
var select = document.getElementById("opcoes").value;

for (var e in p){
    console.log(p[e]);
    resultado.innerHTML += `<table> </tr> <tr> <td>${p[e]}</td>  <td>${q[e]}</td> </tr> </table>`;
}

if (select == "op2"){
    operacao.innerHTML += "<tr> <th>P v Q</th> </tr>";
    for (var e in p) {
        if (p[e] |q[e]){
            operacao.innerHTML += ` <tr> <td>True</td> </tr> </table>`;
        } else {
            operacao.innerHTML += ` <tr> <td>False</td> </tr> </table>`;

        }
    }
    };

    if (select == "op1"){
        operacao.innerHTML += "<tr> <th>P ^ Q</th> </tr>";
        for (var e in p) {
            if (p[e] & q[e]){
                operacao.innerHTML += ` <tr> <td>True</td> </tr> </table>`;
            } else {
                operacao.innerHTML += ` <tr> <td>False</td> </tr> </table>`;
    
            }
        };


};

if (select == "op3"){
    operacao.innerHTML += "<tr> <th>P <-> Q</th> </tr>"; 
    for (var e in p) {
        if (p[e] === q[e]){ 
            operacao.innerHTML += ` <tr> <td>True</td> </tr> </table>`;
        } else {
            operacao.innerHTML += ` <tr> <td>False</td> </tr> </table>`;

        }
    };
 
}

if (select == "op4"){
    operacao.innerHTML += "<tr> <th>P -> Q</th> </tr>"; 
    for (var e in p) {
        if (((!p[e]  || q[e]))){
            operacao.innerHTML += ` <tr> <td>True</td> </tr> </table>`;
        } else {
            operacao.innerHTML += ` <tr> <td>False</td> </tr> </table>`;

        }
    };
 
}