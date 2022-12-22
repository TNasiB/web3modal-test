<template>
  <div>
    <button @click="openModal">WalletConnect</button>
  </div>
</template>

<script setup>
import web3modal from "./web3-modal";

const openModal = () => {
  web3modal.openModal();
};
</script>

<style lang="scss" scoped></style>
