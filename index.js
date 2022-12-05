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








