<script setup>
import Quote from '@/components/Quote.vue';
import Card from '@/components/reusable/Card.vue';
import ButtonList from '@/components/reusable/ButtonList.vue';

// https://api.adviceslip.com/advice
</script>

<template>
    <div class="h-screen flex justify-center items-center">
        <Card>
            <Quote />
            <ButtonList>
                <Button />
                <Button />
                <Button />
            </ButtonList>
        </Card>
        
    </div>
    
</template>