<script setup>
import {onMounted, ref} from "vue";
import TabbableTextarea from "@/components/TabbableTextarea.vue"
let comment = ref('test value');
</script>

<template>
  <main>
    <form action="">
      <TabbableTextarea
          style="width: 100%;height: 300px"
          v-model="comment"
      ></TabbableTextarea>
    </form>
  </main>
</template>
