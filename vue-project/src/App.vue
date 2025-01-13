<script setup>
  import Navigation from './components/Navigation.vue'
  import HeroImage from './components/HeroImage.vue'
</script>

<!--All the content-->
<template>
  <Navigation />
  <HeroImage />

  <!--router-->
  <RouterView></RouterView>
  
</template>
