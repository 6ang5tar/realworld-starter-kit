<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script setup lang="ts">
import Header from "./components/TheHeader.vue";
import Footer from "./components/TheFooter.vue";
</script>
