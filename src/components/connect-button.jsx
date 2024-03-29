import { useWalletConnect } from "../hooks/use-wallet-connect";
import { W3mAccountButton } from "./w3m-account-button";

const ConnectButton = () => {
	const { isConnected, isConnecting, open } = useWalletConnect();

	return isConnected ? (
		<W3mAccountButton />
	) : (
		<button disabled={isConnecting} onClick={() => open()}>
			{isConnecting ? <span>Please wait</span> : "Connect Wallet"}
		</button>
	);
};

export default ConnectButton;
