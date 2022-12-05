/* Desenvolva um algoritmo que faça o cálculo do índice de massa
corporal de uma pessoa. 
Esse algoritmo deve solicitar ao usuário
que digite sua altura,
em seguida solicitar que digite seu peso e que
lhe exiba o status. 
O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
“Você está abaixo da faixa de peso ideal”;

b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
“Você está acima da faixa de peso ideal”;

c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”. */

let usuarioAltura = prompt("Digite sua altura.")

if (usuarioAltura !== null) { // diferente de vazio que pode ser zero ou não
        usuarioAltura = Number(usuarioAltura.replace('.', '').replace(',', '.')) // por causa do replace

} if (!usuarioAltura) {
    document.write("O valor digitado não é valido.") // quando o usuario clikar em cancelar
} else {
    let usuarioPeso = prompt("Digite seu peso.")

    if (!usuarioPeso) {
        document.write("O valor não é valido.")
    } else {

        let imc = usuarioPeso / (usuarioAltura * usuarioAltura)
        console.log(` ${imc.toFixed(2)} `)

        if (imc < 18.5) {
            document.write("Voce está abaixo da faixa de peso ideal.")
        } else if (imc > 24.99) {
            document.write("Voce acima da faixa de peso ideal.")
        } else {
            document.write("Voce esta dentro da fixa de peso ideal.")
        }
        
    }
}








