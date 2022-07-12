<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      <button @click="flash('Yay!','It Works On The About Page!','info')">Click me</button>
    </p>
  </div>
</template>
<script setup>
import {useFlash} from "@/composables/useFlash";
let {flash} = useFlash();
</script>
