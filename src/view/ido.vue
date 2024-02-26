<template>
  <div class="yido">
    <div class="yidocon flex">
      <div class="yidoconbox flex">
        <div class="yidocbinp">
          <div class="yidocbinpy flex jus">
            <div @click="cfmax()" class="ydipcniyleft flex">
              {{ $store.state.txt.yidoy }}
            </div>
            <div class="ydipcniyright">
              {{ $store.state.txt.yidot }} {{ idobalance }} BTC
            </div>
          </div>
          <div class="yidocbinpt flex jus">
            <input
              @input="isbuy()"
              type="text"
              v-model="idoinpval"
              :placeholder="$store.state.txt.yidothr"
            />
            <img src="../assets/btc.png" alt="" />
          </div>
        </div>
        <div class="yidocbtxt flex" v-for="item in idotxt" :key="item">
          <div class="yidocbtxtt flex jus">
            <span>{{ $store.state.txt.yidofour }}</span>
            <span>{{ item.amount }} BTC</span>
          </div>
          <div class="yidocbtxtt flex jus">
            <span>{{ $store.state.txt.yidofive }}</span>
            <span>${{ item.price }}</span>
          </div>
          <div class="yidocbtxtt flex jus">
            <span>{{ $store.state.txt.yidosix }}</span>
            <span>{{ item.bamount }} BTC</span>
          </div>
          <div class="yidocbtxtt flex jus">
            <span>{{ $store.state.txt.yidoqi }}</span>
            <span>{{ item.endin }}</span>
          </div>
        </div>
        <button>{{ idobuty }}</button>
        <button class="flex claimbox" style="padding: 0">
          <span class="claim">{{ $store.state.txt.yidojiu }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import bus from "../utils/bus";
import { useStore } from "vuex";
const store = useStore();
let idobalance = ref("0.00");
let idoinpval = ref("");
let idobuty = ref("");
let idotxt = ref([
  { amount: "0", price: "1.000", bamount: "0.01", endin: "00:00:00:00" },
]);
onMounted(() => {
  let qbbalance = localStorage.getItem("xhlbalance");
  if (typeof qbbalance === "object" && qbbalance === null) {
  } else {
    idobalance.value = parseFloat(qbbalance).toFixed(2);
  }
  bus.$on("qbbalance", (val) => {
    if (val != "") {
      idobalance.value = parseFloat(val).toFixed(2);
    }
  });
  idobuty.value = store.state.txt.yidoba;
});
let cfmax = () => {
  idoinpval.value = -0.00001;
};
let isbuy = () => {
  let isnumbert = isnumber(idoinpval.value);
  let numbuy = parseFloat(idobalance.value).toFixed(2);
  if (isnumbert) {
    let numbuyval = parseFloat(idoinpval.value).toFixed(2);
    if (numbuyval > numbuy) {
      idobuty.value = store.state.txt.yidoten;
    } else {
      idobuty.value = store.state.txt.yidoba;
    }
  } else {
    idobuty.value = store.state.txt.yidoba;
  }
};
let isnumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
</script>

<style scoped>
.yido {
  width: 100%;
  height: 65vh;
  background-color: rgb(17, 11, 11);
}
.ymainhy .yido {
  background: rgb(235, 235, 235);
}
.ymainhy .yido > h2 {
  color: rgb(17 11 11);
}
.yidocon {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 90;
}
.yidoconbox {
  width: 35.29%;
  padding: 2rem;
  clip-path: polygon(
    5% 0,
    95% 0,
    100% 5%,
    100% 95%,
    95% 100%,
    5% 100%,
    0 95%,
    0 5%
  );
  background: black;
  box-sizing: border-box;
  row-gap: 0.9375rem;
  margin-top: 6rem;
}
.ymainhy .yidoconbox {
  background: #fff;
}
.yidocbinp {
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
  clip-path: polygon(
    5% 0,
    95% 0,
    100% 20%,
    100% 80%,
    95% 100%,
    5% 100%,
    0 80%,
    0 20%
  );
  background: white;
}
.ymainhy .yidocbinp {
  background: #000;
}
.yidocbinpy {
  align-items: center;
  padding-bottom: 0.625rem;
}
.ydipcniyleft {
  font-family: "Interl";
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 1px 3px;
  font-size: 0.625rem;
  border-radius: 3px;
  cursor: pointer;
}
.ymainhy .ydipcniyleft {
  background: #fff;
  color: #000;
}
.ydipcniyright {
  font-family: "Interl";
  font-size: 0.7rem;
}
.ymainhy .ydipcniyright {
  color: #fff;
}
.yidocbinpt {
  align-items: center;
}
.yidocbinpt > input {
  font-family: "Interl";
  width: 90%;
  border: none;
  padding-top: 0.3125rem;
  background-color: transparent;
  height: 1.875rem;
  outline: none;
  font-size: 2.2rem;
  color: #000;
}
.ymainhy .yidocbinpt > input {
  color: #fff;
}
.yidocbinpt > img {
  width: 1.875rem;
  height: 1.875rem;
}
.yidocbtxt {
  width: 100%;
  row-gap: 0.9375rem;
  flex-direction: column;
  padding: 0.625rem;
  border-radius: 0.625rem;
  box-sizing: border-box;
  border: 1px solid hsla(0, 0%, 100%, 0.12);
}
.ymainhy .yidocbtxt {
  border-color: rgba(0, 0, 0, 0.7);
}
.yidocbtxtt {
  align-items: center;
}
.yidocbtxtt > span:nth-child(1) {
  font-family: "Interl";
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6em;
  color: rgb(179 187 202);
}
.ymainhy .yidocbtxtt > span:nth-child(1) {
  color: rgb(105 111 122);
}
.yidocbtxtt > span:nth-child(2) {
  font-family: "Vectrex";
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6em;
  color: #fff;
}
.ymainhy .yidocbtxtt > span:nth-child(2) {
  color: #000;
}
.yidoconbox > button {
  font-family: "Interl";
  box-sizing: border-box;
  margin: 0;
  border: none;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  font-weight: 400;
  width: 100%;
  line-height: 1em;
  font-size: 1.25rem;
  padding: 0.9375rem 1.875rem;
  min-width: 120px;
  color: gray;
  text-transform: uppercase;
  background-color: #fff;
  clip-path: polygon(
    2.5% 0,
    97.5% 0,
    100% 15%,
    100% 85%,
    97.5% 100%,
    2.5% 100%,
    0 85%,
    0 15%
  );
  overflow: hidden;
  cursor: pointer;
}
.ymainhy .yidoconbox > button {
  background: #000;
}
.claimbox {
  justify-content: center;
  align-items: center;
}
.claim {
  display: block;
  padding: 0.9375rem 1.875rem;
  width: 99.5%;
  height: 96%;
  text-align: center;
  box-sizing: border-box;
  background: black;
  clip-path: polygon(
    2.5% 0,
    97.5% 0,
    100% 15%,
    100% 85%,
    97.5% 100%,
    2.5% 100%,
    0 85%,
    0 15%
  );
  margin-top: 0.008%;
}
.ymainhy .claim {
  background: #fff;
}
@media (max-width: 1500px) {
  .yido {
    height: 95vh;
  }
}
@media (max-width: 1250px) {
  .yidoconbox {
    width: 94%;
    padding: 1rem;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  .yidocbinpt > input {
    width: 85%;
  }
  .yidocbinp {
    padding: 1rem;
  }
  .yidoconbox {
    margin: 5rem auto 0;
  }
}
</style>
