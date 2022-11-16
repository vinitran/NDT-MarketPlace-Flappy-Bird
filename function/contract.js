

import birdAbi from "@/contractData/birdAbi";
import birdAddress from "@/contractData/birdAddress";
import marketplaceAbi from "@/contractData/marketplaceAbi";
import marketplaceAddress from "@/contractData/marketplaceAddress";
import viniAbi from "@/contractData/viniAbi";
import viniAddress from "@/contractData/viniAddress";
const ethers = require("ethers");

const fromWei = (value) => {
    return ethers.utils.formatEther(value);
}

const toWei = (value) => {
    return ethers.utils.parseUnits(value.toString(), "ether");
}

const provider = () => {
    return new ethers.providers.JsonRpcProvider(
        "https://data-seed-prebsc-1-s3.binance.org:8545	"
    );
}

const getBirdContract = () => {
    return new ethers.Contract(birdAddress, birdAbi, provider());
}

const getMarketContract = () => {
    return new ethers.Contract(marketplaceAddress, marketplaceAbi, provider());
}

const getViniContract = () => {
    return new ethers.Contract(viniAddress, viniAbi, provider());
}

const getSigner = async () => {
    return new ethers.providers.Web3Provider(window.ethereum).getSigner()
}

const getUserAccount = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}

export {
    getBirdContract,
    getMarketContract,
    getViniContract,
    getSigner,
    getUserAccount,
    fromWei, 
    toWei
}