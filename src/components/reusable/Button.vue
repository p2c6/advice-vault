<script setup>
defineProps({
    icon: {
        type: String,
        require: true
    },
    color: { 
        type: String,
    }
});
</script>

<template>
        <button class="border-indigo-600 rounded-full border-2 w-8 h-8 mt-2">
            <i :class="`text-indigo-600 ${icon}`"></i>
        </button>
</template>