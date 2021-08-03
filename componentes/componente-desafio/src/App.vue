<template>

  <v-app>
   
    <app-menu/> <!-- REFERENCIANDO O COMPONENTE MENU NA PÁGINA -->

    <v-app-bar app>
        <app-toolbar/> <!-- REFERENCIANDO O COMPONENTE TOOLBAR NA PÁGINA -->
    </v-app-bar>

    <v-content>
        <app-carousel/> <!-- REFERENCIANDO O COMPONENTE CAROUSEL NA PÁGINA -->
    </v-content>

    <app-footer/> <!-- REFERENCIANDO O COMPONENTE FOOTER NA PÁGINA -->

  </v-app>

</template>

<script>
import Footer from './Footer.vue'
import Carousel from './Carousel.vue'
import Toolbar from './Toolbar.vue'
import Menu from './Menu.vue'

export default {
  components: {
    'app-footer': Footer,  //REGISTRANDO O COMPONENTE FOOTER
    'app-carousel': Carousel,  // REGISTRANDO O COMPONENTE CAROUSEL
    'app-toolbar': Toolbar,  // REGISTRANDO O COMPONENTE TOOLBAR
    'app-menu': Menu  // REGISTRANDO O COMPONENTE MENU
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
