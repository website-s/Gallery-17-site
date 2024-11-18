<template>
  <div id="app">
          <navigation-d :key="$route.fullPath"/>
          <router-view :key="$route.fullPath"></router-view>
      </div>
</template>

<script setup>
import NavigationD from "./components/NavD.vue";
</script>

<script>
export default {
  name: 'App',
};
</script>

<style>

</style>
