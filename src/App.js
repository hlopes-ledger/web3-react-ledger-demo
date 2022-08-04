import {
  VStack,
  useDisclosure,
  Button,
  Text,
  HStack
} from "@chakra-ui/react";
import SelectWalletModal from "./Modal";
import { useWeb3React } from "@web3-react/core";
import { Tooltip } from "@chakra-ui/react";

export const shortenAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    chainId,
    account,
    deactivate,
    active
  } = useWeb3React();

  const disconnect = () => {
    deactivate();
  };

  return (
    <>
      <VStack justifyContent="center" alignItems="center" h="100vh">
        <HStack marginBottom="10px">
          <Text
            fontSize={["1.5em", "2em", "3em", "4em"]}
            fontWeight="400"
          >
            Connect with Web3-React
          </Text>
        </HStack>
        <HStack>
          {!active ? (
            <Button onClick={onOpen}>Connect Wallet</Button>
          ) : (
            <Button onClick={disconnect}>Disconnect</Button>
          )}
        </HStack>
        <VStack justifyContent="center" alignItems="center" padding="10px 0">
          <HStack>
            <Text>{`Connection Status: `}</Text>
            {active ? (
              <Text color="green">Connected</Text>
            ) : (
              <Text color="#cd5700">Not connected</Text>
            )}
          </HStack>

          <Tooltip label={account} placement="right">
            <Text>{`Account: ${shortenAddress(account)}`}</Text>
          </Tooltip>
          <Text>{`Network ID: ${chainId ? chainId : "No Network"}`}</Text>
        </VStack>
      </VStack>
      <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
    </>
  );
}
