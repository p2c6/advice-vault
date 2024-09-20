<script setup>

defineProps({
    quote: {
        type: String,
        require: true,
    },
    isLoading: {
        type: Boolean,
        require: true
    }
});
</script>

<template>
    <div>
        <div class="flex justify-end">
            <button><i class="pi pi-clone text-indigo-600"></i></button>
        </div>
        <div class="text-center font-normal italic mb-5 text-indigo-700">
            <div v-if="!isLoading && quote">
                <div class="text-5xl flex justify-start ml-5">“</div> 
                <p class="font-bold">
                    {{ quote }} 
                </p>
                <div class="text-5xl flex justify-end mr-5">
                    ”
                </div>
            </div>
            <div v-else>
                Loading...
            </div>
        </div> 
    </div>
</template>