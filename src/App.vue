<script setup>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import Card from "./components/Card.vue";
</script>

<template>
  <div id="list">
    <PerfectScrollbar>
      <Card v-for="i in 20" style="margin-bottom: 2rem" :key="i" />
    </PerfectScrollbar>
  </div>
</template>

<style scoped>
#list {
  width: 34rem;
  margin: auto;
  padding: 2rem 0;
}
.ps {
  height: 100vh;
  padding: 0 1rem;
}
</style>
