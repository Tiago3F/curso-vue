new Vue({
   el: '#desafio',
   data: {
       nome: 'Tiago',
       idade: 23,
       imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
   },
   methods: {
       idadeVezes3: function(){
            return this.idade * 3
       },

       mathRandom: function(){
        return Math.random()
   }
   }
})