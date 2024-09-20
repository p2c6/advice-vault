<script setup>
defineProps({
    icon: {
        type: String,
        require: true
    },
    color: { 
        type: String,
    },
    category: {
        type: String,
        require: true
    }
});

const emit = defineEmits(['shareToSocMed'])
const handleShareClick = (socMed) => {
    emit('shareToSocMed', socMed);
};
</script>

<template>
        <button class="border-indigo-600 rounded-full border-2 w-8 h-8 mt-2" @click="handleShareClick(category)">
            <i :class="`text-indigo-600 ${icon}`"></i>
        </button>
</template>