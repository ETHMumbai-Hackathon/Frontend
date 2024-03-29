import { createWeb3Modal } from "@web3modal/wagmi";
import { defaultWagmiConfig } from "@web3modal/wagmi/dist/types/src/utils/defaultWagmiReactConfig";
import { defineChain } from "viem";
import { coreDao } from "viem/chains";
import { WagmiProvider } from "wagmi";

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
			http: ["http://rpc.test.btc.network"],
		},
		public: {
			http: ["https://rpc.test.btcs.network"],
		},
	},
	testnet: true,
});

const projectId = "48824fc8b1f1fa099b74943d7bf0f0ca";
const isTestnet = "true";
const metadata = {
	name: "Core11 fantasy league",
	description: "Fantasy league on CORE",
};

const chains = [coreDaoTestnet, coreDao];
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
export function WagmiConfig({ children }) {
	return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}
