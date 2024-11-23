<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <header class="page-header">
          <h1 ref="h1" class="text-3xl uppercase" data-speed="1.2">creators</h1>
      </header>
      <div class="intro-container">
        <p class="intro paragraph text-lg">Carefully chosen to fit our gallery’s cryterias, we are proud to present to you our associates. </p>
      </div>
      <div class="creator-container">
        <div class="static-img-container"><img class="static-image" data-speed="1.8" src="../assets/hipppo.webp" alt=""></div>
        <div class="creator-content-container">
          <div class="content">
            <div class="creator-img-container">
              <img class="creator-img" src="../assets/hipppo.webp" alt="">
            </div>
            <div class="left-container">
              <div class="text-container">
                <svg class="top-svg" width="49" height="32" viewBox="0 0 49 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.024 0.607994C47.256 3.936 46.488 7.47733 45.72 11.232C44.952 14.9867 44.2267 18.656 43.544 22.24C42.9467 25.7387 42.4773 28.9813 42.136 31.968H26.904L26.008 30.56C26.776 27.488 27.7147 24.2453 28.824 20.832C29.9333 17.4187 31.1707 13.9627 32.536 10.464C33.9013 6.96533 35.224 3.68 36.504 0.607994H48.024ZM22.168 0.607994C21.4 3.936 20.632 7.47733 19.864 11.232C19.096 14.9867 18.4133 18.656 17.816 22.24C17.2187 25.7387 16.7067 28.9813 16.28 31.968H1.176L0.28 30.56C1.048 27.488 1.98667 24.2453 3.096 20.832C4.29067 17.4187 5.528 13.9627 6.808 10.464C8.17333 6.96533 9.45333 3.68 10.648 0.607994H22.168Z" fill="black"/></svg>
                <svg class="bottom-svg" width="49" height="32" viewBox="0 0 49 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.28 2.016C47.5973 5.00266 46.6587 8.24533 45.464 11.744C44.3547 15.1573 43.16 18.6133 41.88 22.112C40.6 25.5253 39.2773 28.8107 37.912 31.968H26.264C27.032 28.64 27.8 25.1413 28.568 21.472C29.4213 17.7173 30.1467 14.048 30.744 10.464C31.4267 6.88 31.9387 3.59466 32.28 0.607994H47.512L48.28 2.016ZM22.424 2.016C21.7413 5.00266 20.8027 8.24533 19.608 11.744C18.4987 15.1573 17.304 18.6133 16.024 22.112C14.744 25.5253 13.4213 28.8107 12.056 31.968H0.664C1.26133 29.4933 1.816 26.8907 2.328 24.16C2.92533 21.4293 3.48 18.6987 3.992 15.968C4.58933 13.152 5.10133 10.464 5.528 7.904C5.95467 5.25866 6.296 2.82666 6.552 0.607994H21.656L22.424 2.016Z" fill="black"/></svg>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor nulla in ipsum tempor interdum. Etiam eget bibendum purus.</p>
              </div>
              <div class="right-aligner">
                <div class="signature">maya p.</div>
                <RouterLink to="/one-creator">
                  <button>Visit creator page</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CreatorsView' 
  }
</script>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';

const h1 = ref(null);

onMounted(() => {
  const tl = gsap.timeline();

  tl.fromTo(h1.value, { opacity: 0}, { opacity: 1, duration: 1.5 });
  tl.fromTo(h1.value, { x: -60 }, { x: 0, duration: .8, ease: 'power4.out'}, '-=1.5');
});

onBeforeUnmount(() => {
  const tl = gsap.timeline();
  tl.to(h1.value, { opacity: 0, duration: 1.5 });
  tl.to(h1.value, { x: 60, duration: .8, ease: 'power4.in'});
});
</script>

<style scoped>
  .page-header {
    height: 80vh;
    background-image: url(../assets/hipppo.webp);
    position: relative;
  }

  h1 {
    color: #fff;
    z-index: 1;
    position: absolute;
    bottom: 5rem;
    left: 5rem;
  }

  .intro-container {
    max-width: 100%;
    padding: 5rem 3rem;
  }

  .creator-content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 3rem;
  }

  .static-img-container {
    height: 10rem;
    overflow: hidden;
    position: relative;
  }

  .static-img-container img {
    position: absolute;
    width: 100%;
    top: -23rem;
  }
  
  .creator-img-container {
    height: 27.5rem;
    width: 20rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
   }

   .left-container {
     width: 50%;
   }

   .right-aligner {
    display: flex;
    flex-direction: column;
    align-items: end;
   }

   .signature {
    font-size: 1.25rem;
    margin-bottom: 3rem;
   }

   .text-container {
    position: relative;
    padding: 2rem;
    font-size: 1.25rem;
    margin-bottom: 2rem;
   }

   .top-svg {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(.8);
   }
   .bottom-svg {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: scale(.8);
   }

  .creator-img {
    height: 100%;
    position: relative;
    max-width: none;
  }
  
  .entry-from {
      opacity: 0;
  }

  .entry-to {
      opacity: 1;
  }

  .enter-active {
      transition: opacity 8s ease;
  }

  a {
    background-color: #000;
    color: #fff;
    border: 1px solid #00000000;
    padding: .5rem 2rem;
  }
  a:hover {
    background-color: #fff;
    border: 1px solid #000;
  }

  a:hover button{
    color: #000; 
  }
</style>