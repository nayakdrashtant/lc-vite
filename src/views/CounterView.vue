<template>
  <div class="about">
    <h1>
      {{ counter.count }}
    </h1>
    <button
        @click="counter.increment()"
        :disabled="! counter.remaining"
    >Increment ({{counter.remaining}})</button>
  </div>
</template>
<script setup>
import {useCounterStore} from "@/stores/CounterStore";
let counter = useCounterStore();
</script>
