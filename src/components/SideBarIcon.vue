<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <div
    class="sidebar-icon relative flex items-center justify-center h-16 w-16 mt-2 mx-auto bg-sunset text-black hover:bg-yinminblue hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
  >
    <h1 class="text-3xl">{{ name }}</h1>
  </div>
</template>
