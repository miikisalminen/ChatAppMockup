<script setup>
import { ref } from "vue";
import SideBar from "./components/SideBar.vue";
import ChatBar from "./components/ChatBar.vue";

const msg = ref();
</script>

<template>
  <div class="bg-sunset h-screen">
    <div class="flex">
      <SideBar />
    </div>
    <ChatBar />
    <div class="container mx-auto bg-white px-10"></div>
  </div>
</template>
