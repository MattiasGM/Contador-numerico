
verif.addEventListener('click', contar)

function contar() {

    var txtinicio = window.document.querySelector('input#txtinicio')
    var txtfim = window.document.querySelector('input#txtfim')
    var txtpasso = window.document.querySelector('input#txtpasso')
    var res = window.document.querySelector('div#res')

    if(txtinicio.value.length == 0 || txtfim.value.length == 0) { //verificação de caixas vazias

        passo = 0
        res.innerHTML = 'Impossível calcular! <strong>digite um número nas caixas</strong>'

    } else {

        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)


        if(passo <= 0) { //verificação do passo vazio
            window.alert('Impossível calcular com Passo = 0 ou vazio, acrescentando o valor 1')
            txtpasso.value = '1'
            passo++
        }

        res.innerHTML = '<p>Contando: <br>'
        if(inicio > fim) { //contagem crescente
            for(let c = inicio; c >= fim; c -= passo) {

                res.innerHTML += `${c} \u{1f449} `

            }
        }else { //contagem decrescente
            for(let c = inicio; c <= fim; c += passo) {

                res.innerHTML += `${c} \u{1f449} `

            }
        }
        res.innerHTML += `\u{1f3c1} </p>` //bandeira final

    }
        
}