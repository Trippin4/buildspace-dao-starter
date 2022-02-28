import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xeB94e95e8A11211a237CCEE7b3658b67487Cc0a0",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Zapdos Key",
        description: "This NFT will give you access to BoardDao!",
        image: readFileSync("scripts/assets/zapdos.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()