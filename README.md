# meu-site
tv-show
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Carrossel de Sites</title>

<style>
html, body{
    margin:0;
    width:100%;
    height:100%;
}

iframe{
    width:100%;
    height:100vh;
    border:none;
}
</style>

</head>
<body>

<iframe id="tela"></iframe>

<script>

const sites = [
    "https://g1.globo.com",
    "https://www.r7.com",
    "https://www.cnnbrasil.com.br",
    "https://site4.com"
];

let atual = 0;

const iframe = document.getElementById("tela");

function trocar(){

    iframe.src = sites[atual];

    atual++;

    if(atual >= sites.length){
        atual = 0;
    }

}

trocar();

setInterval(trocar,5000);

</script>

</body>
</html>
