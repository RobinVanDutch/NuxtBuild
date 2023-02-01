<template>
    <nav class="bg-purple-900 text-white p-7 flex justify-between text-lg shadow-lg">
        <NuxtLink to="/" class="pr-5 pl-5">Home</NuxtLink>
        <NuxtLink to="/about" class="pr-5 pl-5">About</NuxtLink>
        <NuxtLink to="/iphone" class="pr-5 pl-5">Catalog</NuxtLink>
        <NuxtLink to="/login" class="pr-5 pl-5">Login</NuxtLink>
        <p>
            Cart ({{cart.length}})
        </p>
    </nav>
</template>

<script setup>
    const cart = useCart();
    console.log(cart.value.length);
</script>