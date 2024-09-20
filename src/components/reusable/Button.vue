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
        <button class="rounded-full border-2 w-6 h-6 mt-2">
            <i :class="icon"></i>
        </button>
</template>