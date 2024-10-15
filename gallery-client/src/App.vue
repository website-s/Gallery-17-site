<template>
  <div id="app">
        <!-- <component :is="layout"> -->
          <router-view :key="$route.fullPath"></router-view>
        <!-- </component> -->
      </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

</style>
