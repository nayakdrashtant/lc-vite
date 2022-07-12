<script setup>
import {useFlash} from "@/composables/useFlash";
import {useStorage} from "@/composables/useStorage";
let food = useStorage('food','tacos');
let age = useStorage('age',20);
let {flash} = useFlash();
</script>

<template>
  <main>
    <p>
      What is your favorite food? <input type="text" v-model="food">
    </p>
    <p>
      How old are you? <input type="text" v-model="age">
    </p>
    <p>
      flash example
    </p>
  </main>
</template>
