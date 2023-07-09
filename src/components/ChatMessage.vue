<script setup>
const props = defineProps({
  sent: Boolean,
  message: String,
});
</script>

<template>
  <div class="relative w-[calc(100vw-6rem)] h-full m-5">
    <p
      v-if="sent"
      class="p-5 pr-5 bg-yinminblue text-white w-96 max-w-[calc(100vw-6rem)] rounded-xl shadow-lg ml-auto mr-10"
    >
      {{ message }}
    </p>
    <p
      v-else
      class="p-5 pr-5 bg-white text-black w-96 max-w-[calc(100vw-6rem)] rounded-xl shadow-lg"
    >
      {{ message }}
    </p>
  </div>
</template>
