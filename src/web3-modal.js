import { configureChains, createClient } from "@wagmi/core";

import { mainnet, goerli } from "@wagmi/core/chains";

import { Web3Modal } from "@web3modal/html";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

const chains = [goerli, mainnet];

// Wagmi Core Client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "d98a03f456c58683ab6c8a517fa353bf" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "wonderplace_test", chains }),
  provider,
});

// Web3Modal and Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default new Web3Modal(
  { projectId: "d98a03f456c58683ab6c8a517fa353bf" },
  ethereumClient
);
