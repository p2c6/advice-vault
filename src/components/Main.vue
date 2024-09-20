<script setup>
import Quote from '@/components/Quote.vue';
import Card from '@/components/reusable/Card.vue';
import ButtonList from '@/components/reusable/ButtonList.vue';
import Button from '@/components/reusable/Button.vue';

// https://api.adviceslip.com/advice
</script>

<template>
    <div class="h-screen flex flex-col gap-5 justify-center items-center">
        <h1 class="font-bold text-indigo-600 italic text-4xl">AdviceVault</h1>
        <div class="w-96 text-center text-slate-500">
            <p>Advice Vault is your go-to source for instant, uplifting advice designed to spark motivation and clarity in everyday situations. </p>
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
            <Quote quote="Pag may tinanim, may aanihin" />
        </Card> 
        <ButtonList>
                <Button title="facebook" icon="pi pi-facebook" />
                <Button title="twitter" icon="pi pi-twitter" />
                <Button title="pinterest" icon="pi pi-linkedin" />
        </ButtonList>
    </div>
    
</template>