<script setup>

defineProps({
    title: String,
    default: 'Share'
})
</script>

<template>
    <div>
        <button>{{ title }}</button>
    </div>
</template>