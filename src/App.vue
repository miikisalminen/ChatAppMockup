<script setup>
import { ref } from "vue";
import SideBar from "./components/SideBar.vue";
import ChatBar from "./components/ChatBar.vue";
import ChatMessage from "./components/ChatMessage.vue";

const msg = ref();
</script>

<template>
  <div class="bg-sunset h-screen">
    <div class="flex">
      <SideBar />
    </div>
    <div class="fixed left-24">
      <ChatMessage
        :sent="true"
        message="YOOOOOOOOOOOOOOOOOOO MY MAN!!!! HOW U DOIN?"
      />
      <ChatMessage
        :sent="false"
        message="I hate you man. Don't message me."
      />
      <ChatMessage
        sent="false"
        message="Ok. Frick you too!"
      />
    </div>
    <ChatBar />
  </div>
</template>
