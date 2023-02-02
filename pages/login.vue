<template>
    <div class="w-80 flex justify-center content-center items-center flex-col m-auto mb-80 mt-80">
        <div class="bg-red-600 mb-6 border-solid block rounded text-center w-72" v-if="_error">
            <p class=" text-red-200 text-sm font-bold p-3 ">{{ _error }}</p>
        </div>
        <form @submit.prevent="onSubmit">
            <div class="mb-6">
                <input v-model="form.email" type="text" class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700
                 bg-white bg-clip-padding border border-solid
                   rounded transition ease-in-out m-0 focus:text-gray-700
                   focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email adress" />
            </div>
            <div class="mb-6">
                <input v-model="form.password" type="password" class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700
                 bg-white bg-clip-padding border border-solid
                   rounded transition ease-in-out m-0 focus:text-gray-700
                   focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
            </div>
            <div class="mb-6">
                <button type="submit" data-mdb-repple="true" data-mdb-repple-color="light"
                    class=" bg-blue-800 rounded-lg shadow-md p-3 w-72">
                    <span v-if="isLoading" class="w-auto h-6 text-white p-5 text-lg font-bold">Loading...</span>
                    <span v-else class="w-auto h-6 text-white p-5 text-lg font-bold">Sign in</span>
                </button>
            </div>

        </form>

    </div>
</template>

<script setup>
const url = "https://reqres.in/api/login";
const isLoading = ref(false);
const _error = ref(null);

const form = reactive({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
});

async function onSubmit() {
    if (isLoading.value) return;

    isLoading.value = true;
    const { data, error } = await useFetch(url, {
        method: "post",
        body: form,
    });

    isLoading.value = false;
    if (error.value) {
        _error.value = error.value.data.error;
        return;
    }

    const auth = useAuth();
    auth.value.isAuthenticated = true;
    navigateTo('/');
}
</script>