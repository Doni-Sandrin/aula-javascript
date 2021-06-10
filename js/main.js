
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false

    }
    return validar;
}


var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

//alert(soma(5, 10))
*/




/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

//var d = new Date(); //mostra a data atual
//alert(d);

//var d = new Date();   //mostra o minuto atual
//alert(d.getMinutes());
/*
var d = new Date();   //mostra o minuto atual
alert(d.getDay());
alert(d.getUTCHours());
alert(d.getMinutes());
*/
//var d = new Date();   //mostra o mês atual
//alert(d.getMonth()+1);


/*
var caunt;
for(count=0; count <= 5; count++){
    alert(count);
};
*/


/*
var count = 0;
while (count < 5){
    console.log(count);
    count = count +1;
};
*/


/*
var idade = prompt("Qual sua idade");
if(idade >=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/



//var frutas = [{nome: "maça", cor:"vermelho"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);

/*
var fruta = {nome: "maça", cor:"vermelho"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva"); //adiciona elementos na lista
//lista.pop(); //retira o ultimo item da lista
//console.log(lista); 
//console.log(lista.length); //ver a quantidade de itens na lista
//alert(lista[1]);
//console.log(lista.reverse()); // reverte a ordem dos itens da lista
//console.log(lista);
//console.log(lista.toString());  //transforma os itens da lista em string
//console.log(lista.join(" - ")); // altera o tipo de separador dos itens da lista


//var nome = "Roberto Sandrin"
//var idade = 38;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));