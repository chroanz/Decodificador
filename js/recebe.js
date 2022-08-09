let botaoCriptografar = document.querySelector('#criptografar');
let botaoDescriptografar = document.querySelector('#descriptografar');

let descriptografia = ['a','e','i','o','u'];
let criptografia = ['ai','enter','imes','ober','ufat'];

function escondeDesenho(){
    let boneco = document.querySelector('#boneco');
    let textoBoneco = document.querySelector('#descricao-boneco');

    boneco.classList.add('sumiu');
    textoBoneco.classList.add('sumiu');
}

function mostraResultado(textoAtualizado){
    let resultado = document.querySelector('#impresso');
    resultado.textContent = textoAtualizado;
    resultado.classList.remove('sumiu');
}


botaoCriptografar.addEventListener('click', function(event){
    event.preventDefault();
    let texto = document.querySelector('#texto-para-coleta').value;
    let textoAtualizado = "";

    if(texto != "") {
        textoAtualizado = texto.replace(/a|e|i|o|u/g, function (x) {
            if(x == descriptografia[0]){
                return criptografia[0];
            } else if(x == descriptografia[1]){
                return criptografia[1];
            } else if(x == descriptografia[2]){
                return criptografia[2];
            } else if(x == descriptografia[3]){
                return criptografia[3];
            } else if(x == descriptografia[4]){
                return criptografia[4];
            }
        });
        escondeDesenho();
        mostraResultado(textoAtualizado);
        console.log(textoAtualizado);
    }
    });

botaoDescriptografar.addEventListener('click', function(event){
    event.preventDefault();
    let texto = document.querySelector('#texto-para-coleta').value;
    let textoAtualizado = "";
    
    if(texto != "") {
        textoAtualizado = texto.replace(/ai|enter|imes|ober|ufat/g, function (x) {
            if(x == criptografia[0]){
                return descriptografia[0];
            } else if(x == criptografia[1]){
                return descriptografia[1];
            } else if(x == criptografia[2]){
                return descriptografia[2];
            } else if(x == criptografia[3]){
                return descriptografia[3];
            } else if(x == criptografia[4]){
                return descriptografia[4];
            }
        });
        escondeDesenho();
        mostraResultado(textoAtualizado);
        console.log(textoAtualizado);
    }
});







// function imprimeMensagem(textoAtualizado){
//     var mensagem = document.querySelector('#impresso')
//     var mensagemImpressa = mensagem.textContent;
    
//     mensagemImpressa = textoAtualizado;
// }








