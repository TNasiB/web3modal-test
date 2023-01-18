<template>
  <div>
    <button @click="openModal">WalletConnect</button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { createClient, configureChains, goerli } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";
import { infuraProvider } from "@wagmi/core/providers/infura";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { connect } from "@wagmi/core";
import { InjectedConnector } from "@wagmi/core/connectors/injected";
import { Web3Modal } from "@web3modal/html";

const { provider } = configureChains(
  [goerli],
  [
    infuraProvider({ apiKey: "299d2673841742ebbaa1a7b98537a52c" }),
    walletConnectProvider({ projectId: "d98a03f456c58683ab6c8a517fa353bf" }),
    publicProvider(),
  ]
);

const connector = new WalletConnectConnector({});
onMounted(async () => {
  const result = await connect({
    chainId: goerli.id,
    connector,
  });

  const test = await result.provider.provider.request({
    method: "eth_getBalance",
    params: [result.account, "latest"],
  });

  alert(test);
});

const client = createClient({
  connectors: [connector, modalConnectors({ appName: "web3Modal", chains: [goerli] })],
  provider,
});

const ethereumClient = new EthereumClient(client, [goerli]);

const web3modal = new Web3Modal(
  { projectId: "d98a03f456c58683ab6c8a517fa353bf" },
  ethereumClient
);

const openModal = () => {
  web3modal.openModal();
  ethereumClient.getAccount();
};
</script>

<style lang="scss" scoped></style>
