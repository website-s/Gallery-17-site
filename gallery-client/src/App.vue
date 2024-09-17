<template>
  <div id="app">
    <!-- <navigation v-if="!$route.meta.hideNavigation" /> -->
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <!-- <component :is="layout"> -->
          <router-view :key="$route.fullPath">test test</router-view>
        <!-- </component> -->
        <footerC v-if="!$route.meta.hideNavigation" />
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>
