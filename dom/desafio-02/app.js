new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },

    methods: {
        exibirAlerta() {
            alert("Alerta do desafio")
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})