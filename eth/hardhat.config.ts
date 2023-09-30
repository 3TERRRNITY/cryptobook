import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const SEPOLIA_PRIVATE_KEY =
  "6ba9bbc85b9d2de0c69f26a9d19fd1192b7ef6388830ed05f8eb2ca689856288";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/dffb27c5ea374815950426e2a9193ea9`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};

export default config;
