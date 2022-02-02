function confirmar(){
    var atleta = document.getElementById('atl')
    var tn1 = document.querySelector('input#txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var tn3 = document.querySelector('input#txtn3')
    var res = document.querySelector('div#res')

    var n1 =Number.parseFloat(tn1.value)
    var n2 = Number.parseFloat(tn2.value)
    var n3 = Number.parseFloat(tn3.value)
    var nome = atleta.value

    var n1 = n1.toFixed(2)
    var n2 = n2.toFixed(2)
    var n3 = n3.toFixed(2)

    if (n1 > n2 && n1 > n3){
        res.innerHTML = `<p>O(A) Atleta(a) ${nome}, teve um resultado com a <strong>MAIOR DISTÂNCIA DE: ${n1}</strong></p>`
    }else if (n2 > n3){
        res.innerHTML = `<p>O(A) Atleta(a) ${nome}, teve um resultado com a <strong>MAIOR DISTÂNCIA DE: ${n2}</strong></p>`
    }else {
        res.innerHTML = `<p>O(A) Atleta(a) ${nome}, teve um resultado com a <strong>MAIOR DISTÂNCIA DE: ${n3}</strong></p>`
    }

}