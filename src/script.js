const resposta = document.querySelector(".respostaJogo")

const responder = [
    `Creio que pode ser melhor!`,
    `Aí sim! Continue assim!`,
    `Vou precisar pensar mais sobre isso...`,
    `Ok, você venceu, batata frita!`
]

class Jogo{
    static gerarResposta(){
        const random = Math.floor((Math.random() * 4))
        let opcao = random
                
        resposta.innerHTML = responder[opcao]
        
        setTimeout(function(){
            resposta.innerHTML = ""
        }, 2500)
    }
}

const btn = document.getElementById("btn")
btn.addEventListener("click", Jogo.gerarResposta)



