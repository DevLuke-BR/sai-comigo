function jogo(){
    window.location = "jogo.html";

}
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar


// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')


// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
    
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "F.R.I.E.N.D.S - Sem coragem de terminar (mais uma vez) com Janice, Chandler inventa que precisa mudar-se para outro país. Que país é esse?",
    alternativaA : "Egito",
    alternativaB : "Nigéria",
    alternativaC : "Cazaquistão",
    alternativaD : "Lêmen",
    correta      : "Lêmen",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Meu trovão vem antes do relâmpago, meu raio vem antes das nuvens e minha chuva seca toda terra em que toca. Quem eu sou?",
    alternativaA : "O Vento",
    alternativaB : "O Som",
    alternativaC : "Um Vulcão",
    alternativaD : "A Nuvem",
    correta      : "Um Vulcão",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "F.R.I.E.N.D.S - No Primeiro episódio descobrimos o número do apartamento da Monica. Qual era?",
    alternativaA : "10",
    alternativaB : "7",
    alternativaC : "5",
    alternativaD : "1",
    correta      : "5",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Posso ser aberto ou fechado, grande ou pequeno. Posso revelar a verdade ou escondê-la. Quase sempre sou bem-vindo e posso surgir sem avisar. Todo mundo tem, mas nem todos compartilham. Que eu sou?",
    alternativaA : "A Sombra",
    alternativaB : "O Sorriso",
    alternativaC : "Um Baú",
    alternativaD : "Os Olhos",
    correta      : "O Sorriso",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "F.R.I.E.N.D.S - Quem disse a frase 'Às vezes eu gostaria de ser lésbica' ?",
    alternativaA : "Joey",
    alternativaB : "Phoebe",
    alternativaC : "Chandler",
    alternativaD : "Rachel",
    correta      : "Chandler",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "F.R.I.E.N.D.S - A qual alimento Ross é alérgico?",
    alternativaA : "Laranja",
    alternativaB : "Amendoin",
    alternativaC : "Kiwi",
    alternativaD : "Queijo",
    correta      : "Kiwi",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "F.R.I.E.N.D.S - Com quem Mônica estava saindo no inicio da série?",
    alternativaA : "Paul, O Cara do Vinho",
    alternativaB : "Julio– O Poeta",
    alternativaC : "Chip - O Homem sem Ambição",
    alternativaD : "Ethan– Menor de Idade",
    correta      : "Paul, O Cara do Vinho",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "O que desaparece simplesmente quando o seu nome é falado?",
    alternativaA : "O Som",
    alternativaB : "O Silencio",
    alternativaC : "A Voz",
    alternativaD : "O Nome",
    correta      : "O Silencio",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "O que pode ser quebrada, mas nunca segurada?",
    alternativaA : "A Luz",
    alternativaB : "A Sombra",
    alternativaC : "O Amor",
    alternativaD : "A Confiança",
    correta      : "A Confiança",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Essa é diferente...Olha o Nome do Site",
    alternativaA : "Sim rsrs",
    alternativaB : "Não kk",
    alternativaC : "Com Certeza rsrs",
    alternativaD : "Nunca Na Vida hm",
    correta      : "Com Certeza rsrs"

}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
function mensagem(){
    window.location = "mensagem.html";
}