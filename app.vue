<template>
  <div>
    Hello world
  </div>
  <button @click="plus">Plus</button>
  <p>{{ count }}</p>
  <button @click="minus">Minus</button>
  
</template>

<script setup>
  const count = ref(0);

  function plus() {
    count.value++;
  }

  function minus() {
    count.value--;
  }
</script>