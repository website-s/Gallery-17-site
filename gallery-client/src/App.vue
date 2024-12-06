<template>
  <div id="app">
    <navigation-d class="navigation-d" v-if="$route.meta.showNavigation" :key="$route.fullPath" />
    <navigation-m class="navigation-m" v-if="$route.meta.showNavigation" :key="$route.fullPath" />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script setup>
import NavigationD from "./components/NavD.vue";
import NavigationM from "./components/NavM.vue";
</script>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>


</style>
