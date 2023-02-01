<template>
    <div class="p-10 m-5 flex justify-center items-center content-center flex-col">
        <h2 class="font-bold text-2xl mb-3 mt-3">
            Iphone {{ name }}
        </h2>
        <div class="mt-6 justify-center flex h-74">
            <img width="300" :src="`/images/${name}.jpg`" alt="">
        </div>
        <button @click="addToCart" class=" bg-blue-800 rounded-lg shadow-md p-3 m-5">
            <span v-if="inCart()" class="w-12 h-6 text-white p-5 text-lg font-bold">Remove</span>
            <span v-else class="w-12 h-6 text-white p-5 text-lg font-bold">Buy Now</span>
        </button>
    </div>
</template>

<script setup>

const route = useRoute();

const name = computed(() => {
    return route.params.name.replaceAll("-", " ")
});
useHead({
    title: `IPhone - ${route.params.name}`,
});

const fullname = computed(() => {
    return `iphone-${route.params.name}`
});

const cart = useCart();

function inCart() {
    return !!cart.value.find((ct) => ct.name === fullname.value);
}


function addToCart() {

    if (!inCart()) {
        cart.value.push({
            name: fullname,
        })
    } else {
        cart.value = cart.value.filter((ct) => ct.name !== fullname.value)
    }
}
</script>