<template>
    <div class="son">
        <h2>
            son—name: {{ name }}
        </h2>
    </div>
</template>

<script setup>


defineOptions({
  name: 'Son'
})


const props = defineProps(['name'])
</script>

<style scoped>
    .son {
        background-color: rgb(135, 235, 140);
        padding: 10px;
        border-radius: 10px;
    }   
</style>