var dt = new Date();
var diasem = dt.getDay();
var dia = dt.getDate();
var mes = dt.getMonth();
var ano = dt.getFullYear();

var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", " Dezembro");

var semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado");

document.write(semanas[diasem] + " , " + dia + " de " + meses[mes] + " de " + ano);

function relogio() {

    var data = new Date();
    var hor = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    if (hor < 10) {
        hor = "0" + hor;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (seg < 10) {
        seg = "0" + seg;
    }

    var horas = hor + ":" + min + ":" + seg;
    document.getElementById("rel").value = horas;

}

var tempo = setInterval(relogio, 1000);