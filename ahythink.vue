<template>
  
  <a href="#" @click="view('counter')">Counter</a>
  <a href="#" @click="view('home')">Home</a>

  <NuxtPage />

  <LazyHomeWelcome v-if="page === 'home'" />
  <LazyCounter v-if="page === 'counter'" />
  
</template>

<script setup>
const page = ref("home");
  function view(name) {
    page.value = name;
  }
</script>
