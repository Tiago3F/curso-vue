<template>

  <v-app>
   
    <Menu/> <!-- REFERENCIANDO O COMPONENTE MENU NA PÁGINA -->

    <v-app-bar app>
        <Toolbar/> <!-- REFERENCIANDO O COMPONENTE TOOLBAR NA PÁGINA -->
    </v-app-bar>

    <v-content>
        <Carousel/> <!-- REFERENCIANDO O COMPONENTE CAROUSEL NA PÁGINA -->
    </v-content>

    <Footer/> <!-- REFERENCIANDO O COMPONENTE FOOTER NA PÁGINA -->

  </v-app>

</template>

<script>
import Footer from '../components/template/Footer.vue'
import Carousel from '../components/widgets/Carousel.vue'
import Toolbar from '../components/template/Toolbar.vue'
import Menu from '../components/template/Menu.vue'

export default {
  components: {
    Footer,  //REGISTRANDO O COMPONENTE FOOTER
    Carousel,  // REGISTRANDO O COMPONENTE CAROUSEL
    Toolbar,  // REGISTRANDO O COMPONENTE TOOLBAR
    Menu  // REGISTRANDO O COMPONENTE MENU
  },

  
  // // data() {
  // //   return {

  // //     // itensMenu: [
  // //     //   {titulo: 'Início', icon: 'mdi-view-dashboard'},  ----->  // REGISTRADO NO ARQUIVO "Menu.vue"
  // //     //   {titulo: 'Sobre', icon: 'mdi-forum'}
  // //     // ],

  //     // fotos: [
  //     //   {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
  //     //   {src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},       ----->  // REGISTRADO NO ARQUIVO "Carousel.vue"
  //     //   {src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
  //     //   {src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
  //     // ] 
  //   }
  // }
}
</script>
