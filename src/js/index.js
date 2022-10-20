/* 

    objetivo: mudar o conteudo das abas!!

    passo 1: dar um jeito de pegas os elementos no html

    passo2: dar um jeito de indentificar o clique na aba

    passo3: desmarcar a aba nao clicada

    passo 4: marca so uma aba

    passo 5: esconder o conteudo

    passo 6 mostrar as outros conteudos

*/

    const abas = document.querySelectorAll(".aba");

    abas.forEach((aba) => {
        aba.addEventListener("click", function() {

            if(aba.classList.contains("selecionado")){
                return;
            }

            SelectionAba(aba)

            mostrarInformacoesDaAba(aba)

        }); 
    });

        function SelectionAba(aba){
            const abaSelecionada = document.querySelector(".aba.selecionado");
            abaSelecionada.classList.remove("selecionado")

            aba.classList.add("selecionado")
        }

        function mostrarInformacoesDaAba(aba){
            const informacaoSelecionada = document.querySelector(".informacao.selecionado");
            informacaoSelecionada.classList.remove("selecionado");

            const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

            const informacaoASermostrada = document.getElementById(idDoElementoDeInformacoesDaAba) 
            informacaoASermostrada.classList.add("selecionado")
        }