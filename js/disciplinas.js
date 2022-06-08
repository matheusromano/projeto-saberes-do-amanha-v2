// var header = document.querySelector('header'); 
// var section = document.querySelector('section');

var requestURL = 'https://mbairo.github.io/up-2s-topicos-especiais-de-sistemas/alunos.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var alunos = request.response;

populateBody(aluno);
}

function populateBody(jsonObj){
    var verificaMatricula = jsonObj.matricula;

    if (verificaMatricula == 00001) {
        document.getElementById("cod1").value = jsonObj.cod1
        document.getElementById("cod2").value = jsonObj.cod2
        document.getElementById("cod3").value = jsonObj.cod3

        document.getElementById("materiaMatematica").value = jsonObj.materiaMatematica
        document.getElementById("materiaEdFisica").value = jsonObj.materiaEdFisica
        document.getElementById("materiaPortugues").value = jsonObj.materiaPortugues

        document.getElementById("linkMatematica").value = jsonObj.linkMatematica
        document.getElementById("linkEdFisica").value = jsonObj.linkEdFisica
        document.getElementById("linkPortugues").value = jsonObj.linkPortugues

    }
}

// função a ser chamada pelas "Disciplinas Atuais" (Algebra,EdFisica...)
function atualizaConteudo(linkMaterial) {
    // document.getElementById("titulo-caixa").textContent = titulo; 
    // document.getElementById("conteudo-caixa").textContent = conteudo; 
    document.getElementById("link-material").href = linkMaterial;
}

// ------------------Disciplinas Atuais------------------------ //
function setAlgebraConteudo(){
    // const titulo = 'Sobre Algebra';
    // const conteudo = 'Algebra é um ramo da Matemática que testa e comprova as operações básicas e as relações entre conjuntos numéricos. Álgebra é o ramo da Matemática que generaliza a aritmética. Isso significa que os conceitos e operações provenientes da aritmética (adição, subtração, multiplicação, divisão etc.)';
    const linkMaterial = 'https://www.google.com/'  // google apenas de exemplo -- criar outros .htmls
    atualizaConteudo(linkMaterial);
}

function setEdFisicaConteudo(){

    const titulo = 'Sobre Educação Física';   
    const conteudo = 'Educação física é uma área do conhecimento humano ligada às práticas corporais historicamente produzidas pela humanidade. A educação física é o processo pedagógico que visa à formação do homem capaz de conduzir-se plenamente em suas atividades. Trabalha num sentido amplo, visando à prevenção de determinadas doenças.';
    const linkMaterial = 'https://www.google.com/'
    atualizaConteudo(titulo, conteudo, linkMaterial);
}

function setPortuguesConteudo(){

    const titulo = 'Sobre Português';   
    const conteudo = 'A Língua Portuguesa está entre os 10 idiomas mais falados do mundo e possui uma significativa lista de regras e acordos coordenados pela Academia Brasileira de Letras.Dentre as áreas mais importantes da disciplina, estão: morfologia, que estuda as palavras isoladamente; sintaxe, responsável por estudar as palavras enquanto elementos de uma frase; e semântica, que estuda o significado das palavras e os sentidos que elas podem tomar de acordo com o contexto.';
    const linkMaterial = 'https://www.google.com/'
    atualizaConteudo(titulo, conteudo, linkMaterial);
}

function setMatematicaConteudo(){

    const titulo = 'Sobre Matemática';   
    const conteudo = 'A Matemática é uma ciência que relaciona a lógica com situações práticas habituais. Ela desenvolve uma constante busca pela veracidade dos fatos por meio de técnicas precisas e exatas. Ao longo da história, a Matemática foi sendo construída e aperfeiçoada, prosseguindo em constante evolução, investigando novas situações e estabelecendo relações com os acontecimentos cotidianos.';
    const linkMaterial = 'https://www.google.com/'
    atualizaConteudo(titulo, conteudo, linkMaterial);
}



                //Segunda parte da Página //
// ------------------Disciplinas Ofertadas------------------------ //

//Função a ser chamada pelas Disciplinas Ofertadas (Ed. Financeira e Literatura Clássica)// 
function atualizaConteudoOfertados(titulo, conteudo) {
    document.getElementById("titulo-caixa-ofertadas").textContent = titulo; 
    document.getElementById("conteudo-caixa-ofertadas").textContent = conteudo; 
}

//
function setEdFinanceiraConteudo(){
    const titulo = 'Sobre Educação Financeira';   
    const conteudo = 'A Educação financeira é uma área transversal e transdisciplinar cujo propósito é auxiliar indivíduos na escolha de seus rendimentos, em seus sonhos, no consumo sustentável, em suas decisões sobre investimentos, e na prevenção de situações problemáticas. Desde o surgimento do sistema capitalista, as pessoas tiveram a necessidade de se adaptar ao novo conceito de dinheiro e a suas variáveis. As novas relações de troca, domínio e poder fundamentaram as bases econômico-sociais vigentes ainda nos dias de hoje';
    
    atualizaConteudoOfertados(titulo, conteudo);
}

function setLiteraturaClassicaConteudo(){
    const titulo = 'Sobre Literatura Clássica';   
    const conteudo = 'Um clássico, qualquer que seja sua época, carrega consigo uma  magia que lhe é particular; reflete os valores de seu tempo e,  simultaneamente, ultrapassa a época em que foi escrito, tornando-se  sempre atual em sua universalidade. Nesta disciplina será lido e explicado os clássicos Infantojuvenil como os:  O pequeno principe por Antoine de Saint-Exupéry - O Menino Maluquinho, de Ziraldo - Alice no País das Maravilhas, de Lewis Carroll e muitos outros.';
   
    atualizaConteudoOfertados(titulo, conteudo);
}

// Botão Matricule-se //
function matricular(){
    window.alert('Parabéns pela sua iniciativa! Agora aguarde o setor docente aceitar sua solicitação.')
}

