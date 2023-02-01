<template>
    <div>
        <h2 class="">
            Iphone {{ name }}
        </h2>
    </div>
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