import bigInt from "big-integer";


export const chain = "goerli";

export const ChainId = {
  MAINNET: 1,
  GOERLI: 5,
  BSC: 56,
  BSC_TESTNET: 97
};

export const contract_address = {
  [ChainId["MAINNET"]]: "",
  [ChainId["GOERLI"]]: bigInt("9C5C83564538abFbf4e3B6daB0b446EE4f278766", 16),
};

export const mainNetworkChainId = ChainId.MAINNET;
export const goerliNetworkChainId = ChainId.GOERLI;
