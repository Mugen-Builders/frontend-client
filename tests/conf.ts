import { JsonRpcProvider } from "@ethersproject/providers";


export const provider = new JsonRpcProvider("http://localhost:8545");
export const dappAddress = "0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e".toLowerCase();
export const sunodoToken = "0x92C6bcA388E99d6B304f1Af3c3Cd749Ff0b591e2".toLowerCase();
export const erc721Token = "0x36C02dA8a0983159322a80FFE9F24b1acfF8B570".toLowerCase();
export const testTimeout = 60000;