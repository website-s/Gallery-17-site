<template>
    <div class="carousel-container">
        <div class="carousel-item" v-for="(item, carousel) in CarouselContent" :key="carousel">
            <RouterLink class="" :to="item['creatorLink']"><div class="creator" :style="{ backgroundImage: 'url(' + require(`@/assets/${item.creator}`) + ')' }"></div></RouterLink>
            <div class="creation" :style="{ backgroundImage: 'url(' + require(`@/assets/${item.creation}`) + ')' }"></div>
        </div>
    </div>
</template>
<script>
import homeCarouselContent from '../assets/jsonAssets/contents/homeCarouselContent.json';

    export default {
        data() {
            return {
                CarouselContent: homeCarouselContent,
                currentIndex: 0,
            }
        }, 
        name: 'homeCarousel'
    }
</script>
<style scoped>
    .carousel-container {
        padding-left: 3rem;
        display: flex;
        width: fit-content;
    }
    .carousel-item {
        position: relative;   
        height: 24rem;
        width: 20rem;
        margin-top: 8rem;
        margin-right: 7rem;
    }
    .creator {
        border-radius: 100%;
        overflow: hidden;
        aspect-ratio: 1 / 1;
        width: 6rem;
        position: absolute;
        top: -2rem;
        left: -3rem;
        background-size: cover;
        background-position: center;
        box-shadow: 0px 4px 40px 3px rgba(0, 0, 0, 0.3);
        transition-duration: .3s;
    }
    .creator:hover {
        transform:translate(-1px, -1px);
    }
    .creation {
        height: 100%;
        width: 100%;
        overflow: hidden;
        background-size: cover;
        background-position: center;
    }

</style>