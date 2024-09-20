<script setup>
import Quote from '@/components/reusable/Quote.vue';
import Card from '@/components/reusable/Card.vue';
import ButtonList from '@/components/reusable/ButtonList.vue';
import Button from '@/components/reusable/Button.vue';
import axios from "@/config/axios"
import { onMounted, ref } from 'vue';

const advice = ref('');

const fetchAdvice = async () => {
    const { data } = await axios.get('/advice')
    advice.value = data.slip.advice;
}

onMounted(async () => {
    await fetchAdvice();
})

</script>

<template>
    <div class="h-screen flex flex-col gap-5 justify-center items-center">
        <h1 class="font-bold text-indigo-600 italic text-4xl">AdviceVault</h1>
        <div class="w-96 text-center text-slate-500">
            <p>Advice Vault a simple platform that generates random thoughtful advice to empower your choices and enhance your life."</p>
        </div>
        <div class="w-0 md:w-96 text-center mr-5 md:mr-0">
            <div class="flex items-center gap-2">
                <button class="bg-indigo-600 p-2 rounded-full text-white">
                    <div class="flex gap-1 items-center">
                        <i class="text-sm pi pi-sync"> </i>  
                        <p class="hidden md:block text-xs"> Generate new </p>
                        </div>
                </button> 
            </div>
        </div>
        <Card>
            <Quote :quote="advice" />
        </Card> 
        <ButtonList>
                <Button title="facebook" icon="pi pi-facebook" />
                <Button title="twitter" icon="pi pi-twitter" />
                <Button title="pinterest" icon="pi pi-linkedin" />
        </ButtonList>
    </div>
    
</template>