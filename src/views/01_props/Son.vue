<template>
    <div class="son">
        <h2>
            son—name: {{ name }}
        </h2>
    </div>
</template>

<script setup>
import {watch} from 'vue'

defineOptions({
  name: 'Son'
})


const props = defineProps(['name'])

watch(() => props.name, () => {
  console.log('props.name变化了', props.name)
})

</script>

<style scoped>
    .son {
        background-color: rgb(135, 235, 140);
        padding: 10px;
        border-radius: 10px;
    }   
</style>