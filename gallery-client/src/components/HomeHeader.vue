<template>
  <header class="home-header">
      <div class="slider-component" :style="{ backgroundImage: 'url(' + require(`@/assets/${item.background}`) + ')' }" v-for="(item, index) in HeaderContent" :key="index">
        <h2>{{ item['sous-titre'] }}</h2> <!-- Affichage du sous-titre -->
        <h3>{{ item['titre'] }}</h3>        <!-- Affichage du titre -->
        <p>{{ item['texte'] }}</p>          <!-- Affichage du texte -->
      </div>
  </header>
</template>

<script>
// Importer directement le fichier JSON
import HomeHeaderContent from '../assets/jsonAssets/contents/HomeHeaderContent.json';

export default {
  data() {
    return {
      HeaderContent: HomeHeaderContent // Charger le JSON directement
    };
  },
  name: 'HeaderComponent' 
}
</script>

<style scoped>
/* Vous pouvez ajouter du style pour vos éléments si nécessaire */
.home-header {
  display: flex;
  width: 300vw;
  overflow: hidden;
}
.slider-component {
  height: 90vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
