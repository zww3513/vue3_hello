<template>
    <div class="father">
        <h2>
            name: {{ name }}
        </h2>
        <input type="text" v-model="name">
    </div>
    <Son :name="name"/>
    <Log :log="name"/>
</template>

<script setup >
import { ref } from 'vue'
import Son from '@/views/01_props/Son.vue'
import Log from '@/views/01_props/Log.vue'


defineOptions({
  name: 'PropsFather'
})


const name=ref("zww")

</script>

<style scoped>
    .father {
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
    }   
</style>