<template>
  <div class="bg-white text-gray-800">
    <NuxtPage />
  </div>
</template>

<style>
/* 引入Tailwind CSS的基础、组件和工具样式 */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* 定义一些全局基础样式 */
body {
  @apply bg-white font-sans;
}
</style>
