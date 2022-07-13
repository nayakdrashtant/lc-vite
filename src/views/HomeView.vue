<script setup>
import {onMounted, ref} from "vue";
import TabbableTextarea from "@/components/TabbableTextarea.vue"
let comment = ref('test value');
import {state} from "@/stores/quizStore";
</script>

<template>
  <main>
    <h2>
      {{state.name}}
    </h2>
    <button @click="state.name = 'A new quiz name'">Change quiz name</button>
  </main>
</template>
