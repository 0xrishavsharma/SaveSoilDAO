import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";


(async () =>{
    try{
        // The method returns the address of the deployed contract
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            name:"SaveSoilDAO Membership",
            description:"A DAO for countries which support SaveSoil Revolution",
            image: readFileSync("scripts/assets/saveSoil.jpeg"),
            primary_sale_recipient: AddressZero,
        });
        // We use this to initialize our contract on Thirdweb SDK
        const editionDrop = sdk.getEditionDrop(editionDropAddress);

        // with this, we can get the metadata of our contract
        const metadata = await editionDrop.metadata.get();
    
        console.log(
          "✅ Successfully deployed editionDrop contract, address:",
          editionDropAddress,
        );
        console.log("✅ editionDrop metadata:", metadata);
      } catch (error) {
        console.log("failed to deploy editionDrop contract", error);
      }
    })();

// (async () => {
//   try {
//     const editionDropAddress = await sdk.deployer.deployEditionDrop({
//       // The collection's name, ex. CryptoPunks
//       name: "NarutoDAO Membership",
//       // A description for the collection.
//       description: "A DAO for fans of Naruto.",
//       image: readFileSync("scripts/assets/naruto.png"),
//       primary_sale_recipient: AddressZero,
//     });

//     // this initialization returns the address of our contract
//     // we use this to initialize the contract on the thirdweb sdk
//     const editionDrop = sdk.getEditionDrop(editionDropAddress);

//     // with this, we can get the metadata of our contract
//     const metadata = await editionDrop.metadata.get();

//     console.log(
//       "✅ Successfully deployed editionDrop contract, address:",
//       editionDropAddress,
//     );
//     console.log("✅ editionDrop metadata:", metadata);
//   } catch (error) {
//     console.log("failed to deploy editionDrop contract", error);
//   }
// })();