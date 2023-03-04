
function calculate(){  
        const peso =document.getElementById("peso").value
        const altura =document.getElementById("altura").value

        const conta = peso / altura **2;
        const imc = +(conta.toFixed(2))
        var text=""

            if(imc <18.5){
            text= ("Seu IMC é " +imc+ " e Você esta magro demais.") 

            }else if (imc <24.9){
            text= ("Seu IMC é " +imc+ " e Você esta normal.")

            }else if (imc <29.9){
                text=("Seu IMC é " +imc+ " e Você esta com pré-obeso.")

            }else if (imc >39.9){
                text=("Seu IMC é " +imc+ " e Você esta obeso.")
            };

        document.getElementById("text_area").innerText= text


}


function limpar(){
    document.getElementById('text_area' ).value=""

}

