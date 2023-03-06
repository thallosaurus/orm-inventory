<script setup lang="ts">
import Navbar from './components/Navbar.vue';
//import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <Navbar />
  </header> 

  <main>
    <RouterView></RouterView>
  </main>
</template>