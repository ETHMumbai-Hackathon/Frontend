import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { coreDao } from "wagmi/chains";
// import { WagmiProvider } from "wagmi";
import { WagmiConfig } from "wagmi";
import { defineChain } from "viem";
const projectId = "48824fc8b1f1fa099b74943d7bf0f0ca";
const isTestnet = "true";

const metadata = {
	name: "Web3Modal",
	description: "Web3Modal Example",
	url: "https://web3modal.com",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const coreDaoTestnet = defineChain({
	blockExplorers: {
		default: {
			name: "CoreDaoTestnet",
			url: "https://scan.test.btcs.network",
			etherscan: {
				name: "CoreDaoTestnet",
				url: "https://scan.test.btcs.network",
			},
		},
	},
	id: 1115,
	name: "Core Testnet",
	nativeCurrency: {
		decimals: 18,
		name: "Core Testnet",
		symbol: "tCORE",
	},
	network: "coreDao testnet",
	rpcUrls: {
		default: {
			http: ["https://rpc.test.btcs.network"],
		},
		public: {
			http: ["https://rpc.test.btcs.network"],
		},
	},
	testnet: true,
});

const chains = [isTestnet ? coreDaoTestnet : coreDao];
const wagmiConfig = defaultWagmiConfig({
	chains,
	projectId,
	metadata,
});

createWeb3Modal({
	wagmiConfig,
	projectId,
	chains,
});

// eslint-disable-next-line react/prop-types
export function Wagmiconfig({ children }) {
	return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
