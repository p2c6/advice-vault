<script setup>

defineProps({
    advice: {
        type: String,
        require: true,
    },
    isLoading: {
        type: Boolean,
        require: true
    }
});

const emit = defineEmits(['copyToClipboard'])

const handleCopyClick = () => {
    const advice = document.querySelector("#advice").textContent;
    navigator.clipboard.writeText(advice)

    emit('copyToClipboard', advice)

    

}
</script>

<template>
    <div>
        <div class="flex justify-end">
            <button><i class="pi pi-clone text-indigo-600" @click="handleCopyClick"></i></button>
        </div>
        <div class="text-center font-normal italic mb-5 text-indigo-700">
            <div v-if="!isLoading && advice">
                <div class="text-3xl md:text-5xl flex justify-start ml-5">“</div> 
                <p class="text-sm md:text-md lg:text-md  font-bold" id="advice">
                    {{ advice }} 
                </p>
                <div class="text-3xl md:text-5xl flex justify-end mr-5">
                    ”
                </div>
            </div>
            <div v-else>
                <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
            </div>
        </div> 
    </div>
</template>