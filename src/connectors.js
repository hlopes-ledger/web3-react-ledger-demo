import { InjectedConnector } from "@web3-react/injected-connector";
import { LedgerConnector } from "@web3-react/ledger-connector";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
});

const ledger = new LedgerConnector({
  chainId: 1
});

export const connectors = {
  injected: injected,
  ledger,
};
