<script setup>
import Advice from '@/components/reusable/Advice.vue';
import Card from '@/components/reusable/Card.vue';
import axios from "@/config/axios"
import { onMounted, ref } from 'vue';

const advice = ref('');
const isLoading = ref(false);
const clipBoard = ref(false);
const apiWebsite = 'https://api.adviceslip.com/';

const fetchAdvice = async () => {
    isLoading.value = true;
    try {
        const { data } = await axios.get('/advice')
        advice.value = data.slip.advice;
        isLoading.value = false;
        
    } catch(error) {
        console.log('Error fetching advice', error)
        isLoading.value = false;
    }
    
}

const handleGenerateNewClick = () => {
    clipBoard.value = false;
    fetchAdvice()
}

const handleCopyToClickboardClick = (copiedAdvice) => {
    clipBoard.value = true;
    advice.value = copiedAdvice;
}

const handleCloseMessageClick = () => {
    clipBoard.value = false;
}

const handleGithubClick = () => {
    window.open('https://github.com/p2c6/advice-vault', '_blank');
}

onMounted(async () => {
    await fetchAdvice();
})

</script>

<template>
    <div v-if="clipBoard" class="bg-indigo-600 text-white p-2 flex justify-between">
        <p>
            <i class="pi pi-clipboard"> </i> Copied to clipboard.
        </p>
        <button @click="handleCloseMessageClick">
            <i class="pi pi-times text-white"></i>
        </button>
    </div>
    <div class="h-screen flex flex-col gap-5 justify-center items-center ml-auto md:ml-0">
        <h1 class="font-bold text-indigo-600 italic text-4xl">AdviceVault</h1>
        <div class="w-70 md:w-96 text-center text-slate-500">
            <p class="text-xs md:text-sm">Advice Vault a simple platform that generates random thoughtful advice to empower your choices and enhance your life."</p>
        </div>
        <div class="w-0 md:w-96 text-center mr-5 md:mr-0">
            <div class="flex items-center gap-2">
                <button class="bg-indigo-600 p-2 rounded-full text-white" @click="handleGenerateNewClick">
                    <div class="flex gap-1 items-center">
                        <i class="text-sm pi pi-sync"> </i>  
                        <p class="hidden md:block text-xs"> Generate new </p>
                        </div>
                </button> 
            </div>
        </div>
        <Card>
            <advice :advice="advice" :isLoading="isLoading" @copyToClipboard="handleCopyToClickboardClick" />
        </Card> 
        <button class="border-indigo-600 rounded-full border-2 w-8 h-8 mt-2" @click="handleGithubClick">
            <i :class="`text-indigo-600 pi pi-github`"></i>
        </button>
        <p class="text-xs text-slate-500">Credits to <a class="underline" :href="apiWebsite">Advice Slip API</a></p>
    </div>
    
</template>