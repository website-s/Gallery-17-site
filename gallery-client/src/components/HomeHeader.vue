<template>
  <header class="home-header">
      <div class="slider-component" :style="{ backgroundImage: 'url(' + require(`@/assets/${item.background}`) + ')' }" v-for="(item, index) in HeaderContent" :key="index">
        <video 
          v-if="item.video" 
          class="header-video" 
          :src="require(`@/assets/${item.video}`)"
          autoplay 
          muted 
          loop 
          playsinline
          :style="{ pointerEvents: 'none' }"
        ></video>     
        <div class="button-aligner">
          <RouterLink class="headerLink" :to="item['boutton']"><img v-if="item.buttonImg" :src="require(`@/assets/${item.buttonImg}`)" :alt="item['buttonImgAlt']"><div class="text-xs" v-if="item.buttonTxt">{{ item['buttonTxt'] }}</div></RouterLink>
        </div>
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
    position: relative;
    height: 90vh;
    width: 100vw;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .button-aligner {
    position: absolute;
    display: flex;
    width: 100%;
    bottom: 3rem;
    justify-content: center;
  }
  .header-video {
    min-height: 100%;
    min-width: 100%;
  }
  .headerLink {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .7rem 3rem;
    min-width: 9rem;
  }
  
  .headerLink img {
    max-height: 2.25rem;
    max-width: 100%;
  }
</style>
