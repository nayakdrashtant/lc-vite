<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import {ref} from "vue";
let message = ref('Hello world!');

setTimeout(() => {
  message.value = "I've been changed!";
},2000);
let doSomething = () => {
  alert("doing it now");
}
</script>

<template>
  <main>
    <TheWelcome />

    <p>{{message}}</p>
    <p>
      <button @click="doSomething">Click me</button>
    </p>
  </main>
</template>
