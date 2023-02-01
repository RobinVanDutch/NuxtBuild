<template>
    <p>
        Iphone {{ name }}
    </p>
</template>

<script setup>

const route = useRoute();

 const name = computed(() => {
    return route.params.name.replaceAll("-", " ");
 })

 useHead ({
    title: `IPhone - ${route.params.name}`,
 })
</script>