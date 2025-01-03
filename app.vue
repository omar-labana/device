<template>
  <pre>
    hash: 
    {{ hash }}
  </pre>
</template>

<script setup lang="ts">
const navigator = window.navigator;
const hash: { [key: string]: any } = {}; // Add type annotation for hash
for (const key in navigator) {
  // log the key and value if the value is a function
  if (typeof navigator[key as keyof Navigator] !== "function") {
    console.log(key, navigator[key as keyof Navigator]);
    // if the value is a string, add it to the hash
    hash[key] = navigator[key as keyof Navigator];
  }
}
</script>
