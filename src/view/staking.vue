<template>
  <div class="staking">
    <div class="box">
      <div class="head">
        <h1>{{ $store.state.txt.ystaketitle }}</h1>
      </div>
      <div class="txt_one">
        <p class="txt_three">{{ $store.state.txt.ystakesamletitle }}</p>
        <p class="txt_two">
          {{ $store.state.txt.ystaketxt }}
        </p>
      </div>
      <div class="tiao">
        <div class="tiao_one">
          <div class="tiao_x">
            <div class="tiao_two">
              <p><b> 10%</b></p>
              <div>{{ $store.state.txt.ystakelisty }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>{{ $store.state.txt.ystakelistw }}</b>
              </p>
              <div>{{ $store.state.txt.ystakelistt }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>14</b><span>{{ $store.state.txt.ystakelisttenqi }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistthr }}</div>
            </div>
            <div class="tiao_three">
              <p><b>0.683 %</b></p>
              <div>{{ $store.state.txt.ystakelistf }}</div>
            </div>
            <div
              class="tiao_five"
              style="cursor: pointer"
              @click="showX1 = !showX1"
            >
              <img
                :class="showX1 ? 'tiao_four tfjtz' : 'tiao_four'"
                src="../assets/4.svg"
              />
            </div>
          </div>
          <div class="tiao_x1" style="padding-top: 1rem" v-show="showX1">
            <div class="tiao_two">
              <p>
                <b>54911.6584</b
                ><span>{{ $store.state.txt.ystakelisttenqi }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistqi }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>{{ $store.state.txt.ystakelistsix }}</b>
              </p>
              <div>{{ $store.state.txt.ystakelistba }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>0 </b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistjiu }}</div>
            </div>
            <div class="tiao_three">
              <p><b>0 </b><span>%</span></p>
              <div>{{ $store.state.txt.ystakelistten }}</div>
            </div>
          </div>
          <div class="tiao_x1" style="padding-top: 1rem" v-show="showX1">
            <div class="tiao_two">
              <p>
                <b>0</b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistteny }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>0</b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelisttent }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>0 </b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelisttenthr }}</div>
            </div>
            <div class="tiao_three">
              <p>
                <b>0 </b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelisttenf }}</div>
            </div>
          </div>
          <div
            class="tiao_x1"
            style="padding-top: 1rem; margin-bottom: 3rem; border-bottom: none"
            v-show="showX1"
          >
            <div class="tiao_two"></div>
            <div class="tiao_two">
              <div class="tiao_anno">
                {{ $store.state.txt.ystakelisttenfive }}
              </div>
            </div>
            <div class="tiao_two">
              <div class="tiao_red">
                {{ $store.state.txt.ystakelisttensix }}
              </div>
            </div>
            <div class="tiao_two">
              <div class="tiao_anno">
                {{ $store.state.txt.ystakelisttenfive }}
              </div>
            </div>
          </div>
        </div>
        <div class="tiao_one">
          <div class="tiao_x">
            <div class="tiao_two">
              <p><b> 20%</b></p>
              <div>{{ $store.state.txt.ystakelisty }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>{{ $store.state.txt.ystakelistw }}</b>
              </p>
              <div>{{ $store.state.txt.ystakelistt }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>30</b><span>{{ $store.state.txt.ystakelisttenqi }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistthr }}</div>
            </div>
            <div class="tiao_three">
              <p><b>1.3491 %</b></p>
              <div>{{ $store.state.txt.ystakelistf }}</div>
            </div>
            <div
              class="tiao_five"
              style="cursor: pointer"
              @click="showX2 = !showX2"
            >
              <img
                :class="showX2 ? 'tiao_four tfjtz' : 'tiao_four'"
                src="../assets/4.svg"
              />
            </div>
          </div>
          <div class="tiao_x1" style="padding-top: 1rem" v-show="showX2">
            <div class="tiao_two">
              <p>
                <b>109823.3168</b
                ><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistqi }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>{{ $store.state.txt.ystakelistsix }}</b>
              </p>
              <div>{{ $store.state.txt.ystakelistba }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>0 </b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistjiu }}</div>
            </div>
            <div class="tiao_three">
              <p><b>0 %</b></p>
              <div>{{ $store.state.txt.ystakelistten }}</div>
            </div>
          </div>
          <div class="tiao_x1" style="padding-top: 1rem" v-show="showX2">
            <div class="tiao_two">
              <p>
                <b> 0</b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistteny }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>0</b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelisttent }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>0 </b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelisttenthr }}</div>
            </div>
            <div class="tiao_three">
              <p>
                <b>0 </b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelisttenf }}</div>
            </div>
          </div>
          <div
            class="tiao_x1"
            style="padding-top: 1rem; margin-bottom: 3rem; border-bottom: none"
            v-show="showX2"
          >
            <div class="tiao_two"></div>
            <div class="tiao_two">
              <div class="tiao_anno">
                {{ $store.state.txt.ystakelisttenfive }}
              </div>
            </div>
            <div class="tiao_two">
              <div class="tiao_red">
                {{ $store.state.txt.ystakelisttensix }}
              </div>
            </div>
            <div class="tiao_two">
              <div class="tiao_anno">
                {{ $store.state.txt.ystakelisttenfive }}
              </div>
            </div>
          </div>
        </div>
        <div class="tiao_one">
          <div class="tiao_x">
            <div class="tiao_two">
              <p><b> 30%</b></p>
              <div>{{ $store.state.txt.ystakelisty }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>{{ $store.state.txt.ystakelistw }}</b>
              </p>
              <div>{{ $store.state.txt.ystakelistt }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>60</b><span>{{ $store.state.txt.ystakelisttenqi }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistthr }}</div>
            </div>
            <div class="tiao_three">
              <p><b>2.5339 %</b></p>
              <div>{{ $store.state.txt.ystakelistf }}</div>
            </div>
            <div
              class="tiao_five"
              style="cursor: pointer"
              @click="showX3 = !showX3"
            >
              <img
                :class="showX3 ? 'tiao_four tfjtz' : 'tiao_four'"
                src="../assets/4.svg"
              />
            </div>
          </div>
          <div class="tiao_x1" style="padding-top: 1rem" v-show="showX3">
            <div class="tiao_two">
              <p>
                <b>164734.9752</b
                ><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistqi }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>{{ $store.state.txt.ystakelistsix }}</b>
              </p>
              <div>{{ $store.state.txt.ystakelistba }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>0 </b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistjiu }}</div>
            </div>
            <div class="tiao_three">
              <p><b>0 %</b></p>
              <div>{{ $store.state.txt.ystakelistten }}</div>
            </div>
          </div>
          <div class="tiao_x1" style="padding-top: 1rem" v-show="showX3">
            <div class="tiao_two">
              <p>
                <b> 0</b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistteny }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>0</b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelisttent }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>0 </b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelisttenthr }}</div>
            </div>
            <div class="tiao_three">
              <p>
                <b>0 </b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelisttenf }}</div>
            </div>
          </div>
          <div
            class="tiao_x1"
            style="padding-top: 1rem; margin-bottom: 3rem; border-bottom: none"
            v-show="showX3"
          >
            <div class="tiao_two"></div>
            <div class="tiao_two">
              <div class="tiao_anno">
                {{ $store.state.txt.ystakelisttenfive }}
              </div>
            </div>
            <div class="tiao_two">
              <div class="tiao_red">
                {{ $store.state.txt.ystakelisttensix }}
              </div>
            </div>
            <div class="tiao_two">
              <div class="tiao_anno">
                {{ $store.state.txt.ystakelisttenfive }}
              </div>
            </div>
          </div>
        </div>
        <div class="tiao_one">
          <div class="tiao_x">
            <div class="tiao_two">
              <p><b> 40%</b></p>
              <div>{{ $store.state.txt.ystakelisty }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>{{ $store.state.txt.ystakelistw }}</b>
              </p>
              <div>{{ $store.state.txt.ystakelistt }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>30</b><span>{{ $store.state.txt.ystakelisttenqi }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistthr }}</div>
            </div>
            <div class="tiao_three">
              <p><b>8879.3101 %</b></p>
              <div>{{ $store.state.txt.ystakelistf }}</div>
            </div>
            <div
              class="tiao_five"
              style="cursor: pointer"
              @click="showX4 = !showX4"
            >
              <img
                :class="showX4 ? 'tiao_four tfjtz' : 'tiao_four'"
                src="../assets/4.svg"
              />
            </div>
          </div>
          <div class="tiao_x1" style="padding-top: 1rem" v-show="showX4">
            <div class="tiao_two">
              <p>
                <b>219646.6336</b
                ><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistqi }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>{{ $store.state.txt.ystakelistsix }}</b>
              </p>
              <div>{{ $store.state.txt.ystakelistba }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>0 </b><span>{{ $store.state.txt.ystakelisttenba }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistjiu }}</div>
            </div>
            <div class="tiao_three">
              <p><b>0 %</b></p>
              <div>{{ $store.state.txt.ystakelistten }}</div>
            </div>
          </div>
          <div class="tiao_x1" style="padding-top: 1rem" v-show="showX4">
            <div class="tiao_two">
              <p>
                <b> 0</b><span>{{ $store.state.txt.ystakelistw }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelistteny }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>0</b><span>{{ $store.state.txt.ystakelisttenba }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelisttent }}</div>
            </div>
            <div class="tiao_two">
              <p>
                <b>0 </b><span>{{ $store.state.txt.ystakelisttenba }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelisttenthr }}</div>
            </div>
            <div class="tiao_three">
              <p>
                <b>0 </b><span>{{ $store.state.txt.ystakelisttenba }}</span>
              </p>
              <div>{{ $store.state.txt.ystakelisttenf }}</div>
            </div>
          </div>
          <div
            class="tiao_x1"
            style="padding-top: 1rem; margin-bottom: 3rem; border-bottom: none"
            v-show="showX4"
          >
            <div class="tiao_two"></div>
            <div class="tiao_two">
              <div class="tiao_anno">
                {{ $store.state.txt.ystakelisttenfive }}
              </div>
            </div>
            <div class="tiao_two">
              <div class="tiao_red">
                {{ $store.state.txt.ystakelisttensix }}
              </div>
            </div>
            <div class="tiao_two">
              <div class="tiao_anno">
                {{ $store.state.txt.ystakelisttenfive }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="stake">
      <div class="stake_x">
        <div class="stake_1"></div>
        <div class="stake_2">
          <div class="stake_3">
            {{ $store.state.txt.ystaketwotitley }} <br />
            {{ $store.state.txt.ystaketwotitlet }}
          </div>
          <div class="stake_4">
            <div class="stake_5">
              <div class="stake_6">
                <img src="../assets/staking_1.svg" />{{
                  $store.state.txt.ystaketwolistytitle
                }}
              </div>
              <p>
                {{ $store.state.txt.ystaketwolistytxt }}
              </p>
            </div>
            <div class="stake_5">
              <div class="stake_6">
                <img src="../assets/staking_2.svg" />{{
                  $store.state.txt.ystaketwolistttitle
                }}
              </div>
              <p>
                {{ $store.state.txt.ystaketwolistttxt }}
              </p>
            </div>
            <div class="stake_5">
              <div class="stake_6">
                <img src="../assets/staking_3.svg" />{{
                  $store.state.txt.ystaketwolistthrtitle
                }}
              </div>
              <p>
                {{ $store.state.txt.ystaketwolistthrtxt }}
              </p>
            </div>
            <div class="stake_5">
              <div class="stake_6">
                <img src="../assets/staking_4.svg" />{{
                  $store.state.txt.ystaketwolistftitle
                }}
              </div>
              <p>
                {{ $store.state.txt.ystaketwolistftxt }}
              </p>
            </div>
            <div class="stake_5">
              <div class="stake_6">
                <img src="../assets/staking_5.svg" />{{
                  $store.state.txt.ystaketwolistwtitle
                }}
              </div>
              <p>
                {{ $store.state.txt.ystaketwolistwtxt }}
              </p>
            </div>
            <div class="stake_5">
              <div class="stake_6">
                <img src="../assets/staking_6.svg" />{{
                  $store.state.txt.ystaketwolistsixtitle
                }}
              </div>
              <p>
                {{ $store.state.txt.ystaketwolistsixtxt }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const showX1 = ref(false);
const showX2 = ref(false);
const showX3 = ref(false);
const showX4 = ref(false);
</script>

<style scoped>
@font-face {
  font-family: "one";
  src: url("../assets/VectrexWeb-Bold.woff2") format("woff");
}

@font-face {
  font-family: "two";
  src: url("../assets/GT-Pressura-Mono-Regular.woff2") format("woff");
}

.staking {
  width: 100%;
  background-color: rgb(17, 11, 11);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
}
.ymainhy .staking {
  background: rgb(235, 235, 235);
}
.ymainhy .box {
  background: rgb(235, 235, 235);
}
.ymainhy .box > .head {
  color: rgb(17, 11, 11);
}
.ymainhy .box > .txt_one {
  color: rgb(17, 11, 11);
}
.ymainhy .box > .txt_one {
  color: rgb(17, 11, 11);
}
.ymainhy .stake .stake_3 {
  color: rgb(17, 11, 11);
}
.ymainhy .stake .stake_6 {
  color: rgb(17, 11, 11);
}
.ymainhy .stake .stake_6 + p {
  color: rgb(17, 11, 11);
}
.box {
  width: 63.3%;
  padding: 5rem 0;
  background-color: rgb(17, 11, 11);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.head {
  display: flex;
  color: white;
  font-family: "Vectrex";
  font-size: 40px;
  justify-content: center;
  margin: 1rem;
}

.head > img {
  width: 300px;
  padding-top: 3rem;
  padding-bottom: 1rem;
}

.txt_one {
  color: white;
  /* font-family: one; */
}

.txt_one > p {
  text-align: center;
  /* font-weight: 800; */
}

.txt_two {
  width: 100%;
  font-size: 16px;
  font-family: one;
  margin: 1rem auto;
  line-height: 30px;
  padding-bottom: 1rem;
}

.txt_three {
  font-weight: 900;
  font-size: 20px;
  font-family: one;
  margin-bottom: 0.5rem;
}

.tiao {
  width: 100%;
  /* margin: 0 auto; */
  /* height: 3rem; */
  /* background-color: white; */
}

.tiao_one {
  width: 100%;
  /* margin-top: 1rem,; */
  margin-bottom: 2rem;
  padding: 2rem 2.5rem 0rem 2.5rem;
  border-radius: 20px;
  display: flex;
  background-color: black;
  flex-direction: column;
  box-sizing: border-box;
  color: #fff;
}
.ymainhy .tiao_one {
  background: #fff;
  color: black;
}
.ymainhy .tiao_anno {
  background: black;
  color: #fff;
}
.tiao_x {
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 1px #ccc solid;
}

.tiao_x1 {
  display: none;
  width: 100%;
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 1px #ccc solid;
}

.tiao_two {
  width: 25%;
  font-family: one;
  font-size: 13px;
}

.tiao_two > div {
  font-weight: 900;
  font-size: 12px;
}

.tiao_two > p {
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 0.3rem;
}

.tiao_two > p > span {
  display: block;
  font-size: 12px;
  margin-left: 0.2rem;
  font-weight: 900;
}

.tiao_three {
  width: 20%;
  font-family: one;
}

.tiao_three > p {
  display: flex;
  align-items: center;
}

.tiao_three > p > span {
  display: block;
  margin-left: 0.2rem;
  font-size: 12px;
  font-weight: 900;
}

.tiao_three > div {
  font-weight: 900;
  font-size: 14px;
}

.tiao_three > p {
  margin-bottom: 0.5rem;
}

.tiao_four {
  width: 30px;
  height: 30px;
  transform: rotate(0deg);
  transition: all 0.3s;
}
.tfjtz {
  transform: rotate(180deg);
}
.ymainbt .tiao_four {
  content: url("../assets/55.svg");
}
.tiao_five {
  align-items: flex-end;
  display: flex;
}

.tiao_x {
  width: 100%;
  display: flex;
  align-items: center;
}

.tiao_anno {
  width: 3rem;
  color: black;
  padding: 0.5rem 2.5rem;
  text-align: center;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  background-color: #fff;
}

.tiao_red {
  width: 3rem;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0.5rem 2.5rem;
  text-align: center;
  border-radius: 5px;
  background-color: rgb(201, 13, 0);
}

.lianj {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.lijian {
  /* width: 3rem; */
  /* height: 3rem; */
  /* background-color:white; */
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.lijian > img {
  width: 30px;
  height: 30px;
}

.lijian_one {
  border: 1px #ccc solid;
  padding: 0.5rem;
  background-color: white;
  border-radius: 20px;
  font-family: one;
}

.lijian_img {
  width: 50px !important;
  height: 50px !important;
  position: relative;
  top: -9%;
}

.stake {
  width: 100%;
  margin: 2rem 0 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.stake_x {
  width: 65.3%;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
}

.stake_1 {
  width: 100%;
  padding-top: 3rem;
  /* margin-left: 6rem; */
  border-top: 1px rgb(179, 187, 202) solid;
}

.stake_2 {
  display: flex;
}

.stake_3 {
  width: 25%;
  height: 720px;
  padding-left: 6rem;
  color: white;
  font-family: one;
  font-size: 48px;
  border-left: 1px rgb(179, 187, 202) solid;
}

.stake_4 {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.stake_5 {
  width: 47%;
  /* height:14rem; */
  color: rgb(179, 187, 202);
  font-family: two;
  border-bottom: 1px rgb(179, 187, 202) solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.stake_5 > p {
  font-size: 14px;
}

.stake_6 {
  font-family: one;
  padding: 2rem 0 1rem 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #fff;
}
.stake_6 > img {
  margin-right: 0.5rem;
}

@media only screen and (max-width: 1200px) {
  .box {
    width: 100vw;
    padding: 2.5rem 0;
  }
  .head {
    font-size: 2rem;
  }
  .tiao {
    width: 100%;
  }
  .txt_three {
    font-size: 1.875rem;
  }
  .tiao_one {
    width: 97.5%;
    margin: 0 auto 1rem;
    padding: 1rem 1.5rem 0rem 1.5rem;
    border-radius: 20px;
    display: flex;
    background-color: black;
    flex-direction: column;
  }

  .tiao_x {
    padding-bottom: 1rem;
  }

  .tiao_two > div {
    font-size: 7px;
  }

  .tiao_three {
    font-size: 10px;
  }

  .tiao_three > div {
    font-size: 8px;
  }

  .tiao_anno {
    width: 60px;
    height: 2rem;
    line-height: 2rem;
    padding: 0;
    text-align: center;
  }

  .tiao_two > p {
    font-size: 8px;
  }

  .tiao_two > p > span {
    font-size: 8px;
  }

  .tiao_red {
    width: 60px;
    height: 2rem;
    line-height: 2rem;
    padding: 0;
    text-align: center;
  }

  .stake_x {
    width: 90%;
    padding-left: 0;
  }

  .stake_2 {
    flex-direction: column;
  }

  .stake_3 {
    width: 100%;
    text-align: center;
    flex-direction: column;
    padding-left: 0;
    height: 3rem;
    font-size: 1.875rem;
    border: none;
  }
  .stake_3 > br {
    display: none;
  }
  .stake_4 {
    width: 100%;
  }

  .stake_5 {
    width: 100%;
    height: 10rem;
    border-color: rgb(56 59 64);
  }
  .stake_1 {
    border-color: rgb(56 59 64);
  }
}
</style>
