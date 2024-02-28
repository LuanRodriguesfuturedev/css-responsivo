// Espera o documento HTML estar totalmente carregado antes de executar o código
$(document).ready(function(){
    // Seleciona o elemento com a classe 'btn-menu' e adiciona um evento de clique
    $('.btn-menu').click(function(){
        // Seleciona o elemento com a classe 'menu' e aplica a animação de slide (exibindo ou ocultando)
        $('.menu').slideToggle();
    })
})
