import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

import dotenv from "dotenv";
dotenv.config();

// Checking if private key, rpc url and wallet address are properly defined

if(!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === ""){
    console.log("Error getting the private key.");
}
if(!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === ""){
    console.log("Error getting fetching the wallet address.");
}
if(!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL === ""){
    console.log("Error getting the RPC URL");
}

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY,
        ethers.getDefaultProvider(process.env.ALCHEMY_API_URL),
    ),
);


(async () =>{
    try{
        const address = await sdk.getSigner().getAddress();
        console.log("SDK initialized by address:", address);
    } catch (err) {
        console.log("Failed to get apps from the SDK:", err)
        process.exit();
    }
})();

export default sdk;
