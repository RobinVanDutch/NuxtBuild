<template>
    <div class="p-5 flex text-center justify-center text-4xl">
        <h1>
            IPhone catalog
        </h1>
    </div>
    <div class="grid grid-cols-4 gap-4 mt-10">
        <nuxt-link to="/iphone/iphone-13" class="p-4 shadow-lg text-center rounded-lg">
            <h2 class="text-lg font-bold">IPhone 13</h2>
            <div class="mt-6 justify-center flex h-74">
                <img width="200" height="280" src="/images/13.jpg" alt="">
            </div>
            
        </nuxt-link>
        <nuxt-link to="/iphone/iphone-14" class="p-4 shadow-lg text-center rounded-lg">
            <h2 class="text-lg font-bold">IPhone 14</h2>
            <div class="mt-6 justify-center flex h-74">
                <img width="200" height="280" src="/images/14.jpg" alt="">
            </div>
        </nuxt-link>
    </div>
</template>

<script setup>
    useHead ({
        title: "Nuxt3 - Iphone",
    })
</script>