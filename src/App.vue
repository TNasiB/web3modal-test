<template>
  <div>
    <button @click="openModal">WalletConnect</button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import web3modal from "./web3-modal";

const openModal = () => setTimeout(() => web3modal.openModal(), 1000);

onMounted(() => openModal());
</script>

<style lang="scss" scoped></style>
