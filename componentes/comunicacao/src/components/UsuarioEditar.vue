<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
        <button @click="alterarIdade()">Alterar Idade (Callback)</button>
    </div>
</template>

<script>

import barramento from '../barramento'

export default {
   props: ['idade'],

   alterarIdade: Function, // ALTERANDO VIA CALLBACK

   methods: {
     alterarIdade() {
        this.idade = 33 
        //this.$emit('idadeMudou', 33) // ALTERANDO EMITINDO O EVENTO

        barramento.$emit('idadeMudou', this.idade)
     },  
   }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
