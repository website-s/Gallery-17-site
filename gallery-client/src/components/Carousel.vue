<template>
    <div class="carousel-container" id="carousel">
        <div class="carousel-item" v-for="(item, carousel) in CarouselContent" :key="carousel">
            <RouterLink :to="item['creatorLink']"><div class="creator" :style="{ backgroundImage: 'url(' + require(`@/assets/${item.creator}`) + ')' }"></div></RouterLink>
            <RouterLink :to="item['creationLink']"><div class="creation-contenu"><div class="creation" :style="{ backgroundImage: 'url(' + require(`@/assets/${item.creation}`) + ')' }"></div></div></RouterLink>
        </div>
    </div>
</template>
<script>
import homeCarouselContent from '../assets/jsonAssets/contents/homeCarouselContent.json';
import { Draggable } from "gsap/Draggable"
import { gsap } from "gsap"

gsap.registerPlugin(Draggable);

    export default {
        data() {
            return {
                CarouselContent: homeCarouselContent,
                currentIndex: 0,
            }
        }, 
        mounted() {
            // Largeur d'un élément enfant en pixels
            const itemWidth = 320; // 100px par élément
            const totalItems = this.CarouselContent.length;
            
            // Calculer la distance maximale en pixels (0 à -(nombre d'éléments * largeur d'un élément))
            const maxDistance = -(totalItems * itemWidth);
 
            Draggable.create("#carousel", {
                type: "x",
                bounds: { minX: maxDistance, maxX: 0 },
                inertia: true,
            });
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
        margin-top: 6rem;
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
        z-index: 1;
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
        transition: .5s ease;
    }
    .creation-contenu {
        overflow: hidden;
        height: 24rem;
        width: 20rem;
        transition: all (1.2s);
    }

    .creation-contenu:hover .creation {
        transform: scale(1.03);
    }

</style>