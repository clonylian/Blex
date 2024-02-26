<template>
  <div class="yward">
    <div class="ywardbox flex jus">
      <div class="ywardbf flex">
        <div class="ywardbfcon">
          <div class="ywardbfcony">
            <h2 class="ywardbfctit flex">
              <img class="giftimg" src="../assets/gift.png" alt="" />
              <span>My Rewards</span>
            </h2>
            <div class="ywardbfl flex">
              <div class="ywardbfly flex">
                <div class="money">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div class="moneytxt flex flexcol">
                  <div>{{ Commissions }}</div>
                  <span>Points</span>
                </div>
              </div>
              <div class="ywardbflt flex">
                <div class="points">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div class="moneytxt flex flexcol">
                  <div>{{ points }}</div>
                  <span>Points</span>
                </div>
              </div>
              <div class="ywardbfly flex">
                <div class="points">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div class="moneytxt flex flexcol">
                  <div>{{ stakeCommissions }}</div>
                  <span>Points</span>
                </div>
              </div>
              <div class="ywardbflt flex">
                <div class="points">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div class="moneytxt flex flexcol">
                  <div>{{ invitepoints }}</div>
                  <span>Points</span>
                </div>
              </div>
            </div>
          </div>
          <div class="ywardbfcont">
            <h2 class="ywardbfctit flex">
              <img class="levelimg" src="../assets/level.png" alt="" />
              <span>My Level</span>
            </h2>
            <div class="ywardbfcontt flex jus">
              <div class="level-item">
                <div class="leveltxt">L1</div>
                <img src="../assets/level_l-42d4c6a5.png" alt="level" />
              </div>
              <div class="level-item">
                <div class="leveltxt">L2</div>
                <img src="../assets/level_d-379976d8.png" alt="level" />
              </div>
              <div class="level-item">
                <div class="leveltxt">L3</div>
                <img src="../assets/level_d-379976d8.png" alt="level" />
              </div>
              <div class="level-item">
                <div class="leveltxt">L4</div>
                <img src="../assets/level_d-379976d8.png" alt="level" />
              </div>
              <div class="level-item">
                <div class="leveltxt">L5</div>
                <img src="../assets/level_d-379976d8.png" alt="level" />
              </div>
              <div class="level-item">
                <div class="leveltxt">L6</div>
                <img src="../assets/level_d-379976d8.png" alt="level" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ywardbfcr">
        <h2 class="ywardbfctit flex">
          <img class="userimg" src="../assets/user.png" alt="" />
          <span>My Referrals</span>
        </h2>
        <div class="ywardbfcrbox">
          <div class="ywardbfcrbc">
            <div class="ywardbfcrbctop flex jus">
              <p>{{ `${copyurl}${invitationcode[0]}` }}</p>
              <button @click="copyurlcli()">COPY LINK</button>
            </div>
            <p>
              Join the referral program and get rewards for transfers made from
              your unique referral link.
            </p>
            <div class="link-box">
              <div @click="twittertxt()" class="link-item">
                <img src="../assets/twitter-66225175.png" alt="link" />
                <div class="linkitembtxt">
                  <div class="linkitembox">
                    <p>Share to Twitter</p>
                  </div>
                  <div class="linkitemjt"></div>
                </div>
              </div>
              <div @click="ttxt()" class="link-item">
                <img src="../assets/telegram-96270d36.jpg" alt="link" />
                <div class="linkitembtxt linkitembtxtb">
                  <div class="linkitembox">
                    <p>Share to Telegram</p>
                  </div>
                  <div class="linkitemjt"></div>
                </div>
              </div>
              <div @click="apptxt()" class="link-item">
                <img src="../assets/whatsapp-78286f95.jpg" alt="link" />
                <div class="linkitembtxt linkitembtxtb">
                  <div class="linkitembox">
                    <p>Share to Whatsapp</p>
                  </div>
                  <div class="linkitemjt"></div>
                </div>
              </div>
              <div @click="facetxt()" class="link-item">
                <img src="../assets/facebook-e3fcdba3.jpg" alt="link" />
                <div class="linkitembtxt linkitembtxtb">
                  <div class="linkitembox">
                    <p>Share to Facebook</p>
                  </div>
                  <div class="linkitemjt"></div>
                </div>
              </div>
              <div @click="linetxt()" class="link-item">
                <img src="../assets/line-f9910d12.png" alt="link" />
                <div class="linkitembtxt linkitembtxtw">
                  <div class="linkitembox">
                    <p>Share to Line</p>
                  </div>
                  <div class="linkitemjt"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ywardlea">
      <div class="ywardleaf flex jus">
        <div class="ywardleafl">
          <h2 class="ywardbfctit flex">
            <img
              class="jbimg"
              src="data:image/png;base64,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"
              alt=""
            />
            <span>Commissions</span>
          </h2>
          <div class="ywardleafltxt">
            <div class="th">
              <div class="th_item">Rank</div>
              <div class="th_item">Address</div>
              <div class="th_item">Totals</div>
            </div>
            <div class="scrool">
              <div
                v-for="(item, index) in huanlist"
                :key="index"
                class="leftls flex"
              >
                <div class="leftlsl">
                  <img
                    :class="
                      index == '0'
                        ? 'leftlslb'
                        : index == '1'
                        ? 'leftlslb'
                        : index == '2'
                        ? 'leftlslb'
                        : 'leftlslnone'
                    "
                    :src="
                      index == '0'
                        ? '/img/c1-df62b591.e2294152.png'
                        : index == '1'
                        ? '/img/c2-62e2c101.977b500d.png'
                        : index == '2'
                        ? '/img/c3-e9b17bd8.dcbb4829.png'
                        : ''
                    "
                    alt=""
                  />
                  <span
                    :class="
                      index == '0'
                        ? 'leftlslnone'
                        : index == '1'
                        ? 'leftlslnone'
                        : index == '2'
                        ? 'leftlslnone'
                        : 'leftlsltxt'
                    "
                    >{{ index }}</span
                  >
                </div>
                <div class="leftlsc">
                  {{
                    String(item.userName).substring(0, 4) +
                    "..." +
                    String(item.userName).substring(
                      String(item.userName).length - 4,
                      String(item.userName).length
                    )
                  }}
                </div>
                <div class="leftlsr">
                  {{ Number(item.totalCommission).toFixed(2) }}
                  {{ item.commissionUnit }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ywardleafl">
          <h2 class="ywardbfctit flex">
            <img
              class="poingimg"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEUAAAD////////////////////////////////rTT7CAAAACXRSTlMA/0Cf378gYH8uqrsGAAAFI0lEQVR4nO2aOZPUMBCFh2shZNhdIAQSUo4/wF2ELL+AMweqyCHhd2N1q60+XntseYoi8MvssWWpv6dnybu7TZs2bdr0T/TpwWLdm2rv5365zt7n7V3uaG9oMe/jpa4G98/SBr/3NXgrbfB5X4PnWXvX+9rb77MiXult8NFxmeRUiMlTrXLitB0+LscvzRV0SUalMDkNRb3Zjq+V43f2povhVEKFbH0nFFUViK5w3aFhYSp0u+rPbne1nPnWjk/K8V1718ecCjExP9HTP6gTv4fjM9ANTCXcTvebot6P40NlqCrlNbcTJVNUouLGl1KJTHblzG194gYYX0olMvGuqVTc+FIqhNT84F0zCIyPyoCoxK5719SLHOaUSnw4PcJeROOzz0ipRCZl6lrscPIlVAigIRBdg8eXUIlMomvw5EuoxI5H1wwqZZhHhbLOnAGugZMvoRKZUFj4YqPJR17yF9L4bMGAa/DkIyq/3IWACXANnnyQCqgNcM2gmEmYSmSCXDMITD5IpdxtH0xVjX6lgjkCgApggngmkw9QAXdD19RHOwKACjGJSRVcUzEfnuGACXTNIEQgnguLhsw1ePLR61W/MAETcIqF5kU4B9AlrsFv9kCFiFomdI0LexKaF+EcMbHbDyrVD7QxoXrbUw/LOU2lc3Ftpah0L66tGpXuxbVVo0JhuF7t/XOkBptrySLr1XpIE3691Hwsc3G1tA/pXbY/0/sPsqbdkqS/lLBxU5e6aFI83y6UH0wyccVsfH2lc2/UmXRhGmOImdq8OKFx6EhLtwsxmWjEfunwxT8FRT0pJBN30L+XuQ66NOW5/gVcFN41FFWx3Px5QKVuRsW/LdghcSycOGotmVAJWUrBGdZKg9g5LoIiFb+d4U8zaNHOXX8xHidU/BaTBuKXEtwA02/OwVTcFpNhInjinGZu9AIOyzlkamduO5gwFlcInsbJdxYux1gftPr1WwNsahEDG52D9iR+6ZyYWuTMjahYu7N50QRlsXPGTiEqdpnGps4+LA2ysUjYHRUz43NTi2wsUod1RvowzE0tsuYGVMzS2fsMycZipGLCkD1jhwBX0GNVIhUqshxMmlpkzE0lNSXSYThtapGJRaLS8qf+Kk3wy/xAB+UyNnegosPQzatUJhY9FWJSZ9JBU1ed0Fyo5vZUVBgeNrVIm9u/g1UYHjY1ikWCoKi0KKhTYEZ7xtxEpeWzYsKe0Q44ZG5uxlJRYTjL1CIVi5ZKC0Ne5h8ytUjFoqXSwpDdijZaUByL5XIzNRqTuaaO5jZUWhiyqed4hqViUVMZwxAtWafV3vmayvg1kk2d/6FnytyayshkgalFYyxqKhKG84LQaoxFRWVse5GpRaO52xdIWTAuM7WInfNWf9GRFxQ/a7apRfLOb1RqGLKp0RedaUksNio1DJeaWiRboZFKXSIvN7VIYlGo1DAMO6T5Xay1kvlRw9CvxBeobkDkqxGHYY+pRdXcQqUM/bzP1CJO0T+VCjFhe/Z1cIxFpsJhGHaEi1RjkecKFe9Jp6lFbO5XRIWa5UX/clNbc3PZuK1eU4s4FmmYre0eU1tzW03808AMgX8D6PUMi51jtKqD4CNWvg+bp8++wV5Ti9jcTWs8w+L8G9Vv6rGL5gvy+g5qc680tch8k17pGZZyzjpTi5S5j9JB1cW1phZxLA46vA+bJ3HOMTzDquZeb2rR1BezPlEsTn9cWCYy95E8wxqccxxTiy5fvO5aH23atGnTpv9XfwEcAVUR549mdAAAAABJRU5ErkJggg=="
              alt=""
            />
            <span>Points</span>
          </h2>
          <div class="ywardleafltxt">
            <div class="th">
              <div class="th_item">Rank</div>
              <div class="th_item">userName</div>
              <div class="th_item">points</div>
            </div>
            <div class="scrool">
              <div
                v-for="(item, index) in leadlist"
                :key="index"
                class="leftls flex"
              >
                <div class="leftlsl">
                  <img
                    :class="
                      item.rankingNum == '1'
                        ? 'leftlsllead'
                        : item.rankingNum == '2'
                        ? 'leftlsllead'
                        : item.rankingNum == '3'
                        ? 'leftlsllead'
                        : 'leftlslnone'
                    "
                    :src="
                      item.rankingNum == '1'
                        ? '/img/p1-1b6bec58.7a5996d9.png'
                        : item.rankingNum == '2'
                        ? '/img/p2-0c482e2f.187ef979.png'
                        : item.rankingNum == '3'
                        ? '/img/p3-b44b24a0.7af46794.png'
                        : ''
                    "
                    alt=""
                  />
                  <span
                    :class="
                      item.rankingNum == '1'
                        ? 'leftlslnone'
                        : item.rankingNum == '2'
                        ? 'leftlslnone'
                        : item.rankingNum == '3'
                        ? 'leftlslnone'
                        : 'leftlsltxt'
                    "
                    >{{ item.rankingNum }}</span
                  >
                </div>
                <div class="leftlsc">
                  {{ item.userName }}
                </div>
                <div class="leftlsr">{{ item.totalPoint }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ywardru">
      <h2 class="ywardbfctit flex">
        <img class="timeimg" src="../assets/time.png" alt="" />
        <span>Rules</span>
      </h2>
      <div class="ywardrub">
        <div class="ywardrublib">
          <div
            :class="tabrus == '1' ? 'ywardrublis ywardrublish' : 'ywardrublis'"
          >
            <div @click="changetab('1')" class="ywardrublisy flex jus">
              <p>Referral Program Introduction</p>
              <img
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
                alt=""
              />
            </div>
            <div class="ywardrublist">
              <div class="ywardrublisttxt">
                The "Owlto Referral Reward Program Phase2" uses a dual reward
                model of Commissions and Bonus Points. When a referrer
                successfully invites a referee to complete a bridging
                transaction via Owlto, the referrer will receive Commissions
                (provided by the official partner Maker) and Bonus Points. In
                addition, both the referrer and referee can receive point
                rewards after completing a bridging transaction.
              </div>
            </div>
          </div>
          <div
            :class="tabrus == '2' ? 'ywardrublis ywardrublish' : 'ywardrublis'"
          >
            <div @click="changetab('2')" class="ywardrublisy flex jus">
              <p>Referrer and referee relationship confirmation</p>
              <img
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
                alt=""
              />
            </div>
            <div class="ywardrublist">
              <div class="ywardrublisttxt">
                In order to avoid the loss of the relationship between the
                referrer and the referee during the process of promotion or
                visiting the website, the referee will immediately receive a
                wallet signature request when connected to wallet after clicking
                on the referral link of the referrer. This signature request is
                only limited to confirming the referral relationship and there
                will be no other permission requests. Please feel free to
                confirm.
              </div>
            </div>
          </div>
          <div
            :class="tabrus == '3' ? 'ywardrublis ywardrublish' : 'ywardrublis'"
          >
            <div @click="changetab('3')" class="ywardrublisy flex jus">
              <p>Referral Rewards</p>
              <img
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
                alt=""
              />
            </div>
            <div class="ywardrublist">
              <div class="ywardrublisttxt">
                Maker will provide the referrer with a scalable proportion of
                the profits generated from every bridging transaction initiated
                by the referee. The referrer's commission percentage increases
                as the referee engages in more bridging transactions, resulting
                in a higher commission amount. Please note that this rule
                applies exclusively to transactions generated after December 6,
                2023. confirm.
              </div>
            </div>
          </div>
          <div
            :class="tabrus == '4' ? 'ywardrublis ywardrublish' : 'ywardrublis'"
          >
            <div @click="changetab('4')" class="ywardrublisy flex jus">
              <p>Bridge Rewards</p>
              <img
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
                alt=""
              />
            </div>
            <div class="ywardrublist">
              <div class="ywardrublisttxt">
                That is, the point reward = 100 * boost.It should be noted that
                the points for Phase2 will be calculated according to the new
                rules, which means they will not be based on the points
                accumulated in Phase1. Your total points = The points of Phase1
                + The points of Phase2.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div :class="iscopy == '1' ? 'yaritcbq yaritcbqtop' : 'yaritcbq'">
    <div class="yaritcbqc flex">
      <span>✓</span>
      <p>Invite Link copied successfully</p>
    </div>
  </div>
  <img style="display: none" src="../assets/c1-df62b591.png" alt="" />
  <img style="display: none" src="../assets/c2-62e2c101.png" alt="" />
  <img style="display: none" src="../assets/c3-e9b17bd8.png" alt="" />
  <img style="display: none" src="../assets/p1-1b6bec58.png" alt="" />
  <img style="display: none" src="../assets/p2-0c482e2f.png" alt="" />
  <img style="display: none" src="../assets/p3-b44b24a0.png" alt="" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../common/api";
import Axios from "axios";
let regtime = ref("2023-11-28 11:11:11");
let Commissions = ref("—");
let points = ref("—");
let stakeCommissions = ref("—");
let invitepoints = ref("—");
let textvalue = ref(
  "@Blex_Finance is the Early protocol launching modular liquid staking for EigenLayer.%0a%0a"
);
let textver = ref(
  "You can earn points and have the opportunity to receive enticing commissions. Check it out and give a trial!%0a%0a"
);
let textsan = ref("👉 https://owlto.finance/?ref=null");
let leadlist = ref([
  {
    totalPoint: "65432",
    rankingNum: "1",
    userName: "MUSK",
    invited: "Lebron",
    userImg: "http://aaaa.com/a.jpg",
  },
  {
    totalPoint: "65422",
    rankingNum: "2",
    userName: "James",
    invited: "Haden",
    userImg: "http://aaaa.com/b.jpg",
  },
]);
let huanlist = ref([
  {
    userName: "MUSK",
    totalCommission: "0.1789789789",
    commissionUnit: "ETH",
  },
  {
    userName: "MUSK",
    totalCommission: "0.1789789789",
    commissionUnit: "ETH",
  },
]);
let valqh = ref(0);
let tabrus = ref("0");
let reglist = ref([]);
let copyurl = ref("");
let iscopy = ref("0");
let invitationcode = ref([]);
const protocol = window.location.protocol;
const hostname = window.location.hostname;
const port = window.location.port;
let twittertxt = () => {
  window.open(
    "https://twitter.com/intent/tweet?&text=\n" +
      textvalue.value +
      textver.value +
      `👉 ${protocol}//${hostname}/%23/launch?ref=${invitationcode.value[0]}`
  );
};
let ttxt = () => {
  window.open(
    "https://t.me/share?url=%20&text=" +
      textvalue.value +
      textver.value +
      `👉 ${protocol}//${hostname}/%23/launch?ref=${invitationcode.value[0]}`
  );
};
let changetab = (str) => {
  if (str == tabrus.value) {
    tabrus.value = "0";
  } else {
    tabrus.value = str;
  }
};
let apptxt = () => {
  window.open(
    "https://api.whatsapp.com/send?text=" +
      textvalue.value +
      textver.value +
      `👉 ${protocol}//${hostname}/%23/launch?ref=${invitationcode.value[0]}`
  );
};
let facetxt = () => {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=https://owlto.finance/?ref=null"
  );
};
let linetxt = () => {
  window.open(
    "https://line.naver.jp/R/msg/text/?" +
      textvalue.value +
      textver.value +
      `👉 ${protocol}//${hostname}/%23/launch?ref=${invitationcode.value[0]}`
  );
};
let copyurlcli = () => {
  navigator.clipboard.writeText(`${copyurl.value}${invitationcode.value[0]}`);
  iscopy.value = "1";
  setTimeout(() => {
    iscopy.value = "0";
  }, 1000);
};
onMounted(() => {
  api
    .toppoint({
      appId: "xbot",
    })
    .then((res) => {
      leadlist.value = res.data.data.topPointList;
      console.log("toppoint", res);
    })
    .catch((err) => {
      console.log(err);
    });
  api
    .registers({
      appId: "xbot",
    })
    .then((res) => {
      console.log("registers", res.data.data.userCommissionsList);
      huanlist.value = res.data.data.userCommissionsList;
    })
    .catch((err) => {
      console.log(err);
    });
  if (localStorage.getItem("user")) {
    api
      .getpoints({
        userId: JSON.parse(localStorage.getItem("user")).userId,
        token: JSON.parse(localStorage.getItem("user")).token,
        appId: "xbot",
      })
      .then((res) => {
        console.log("points", res);
        Commissions.value = res.data.data.totalPoint;
        points.value = res.data.data.taskPoint;
        stakeCommissions.value = res.data.data.invitePoint;
        invitepoints.value = res.data.data.stakePoint;
      });
    api
      .createinvitation({
        userId: JSON.parse(localStorage.getItem("user")).userId,
        token: JSON.parse(localStorage.getItem("user")).token,
        appId: "xbot",
      })
      .then((res) => {
        console.log("cg", res);
        if (res.data.status == "success") {
          let invitas = res.data.data.invitationCode.split(",");
          invitationcode.value[0] = invitas[0];
          copyurl.value = `${protocol}//${hostname}/#/launch?ref=`;
        } else {
          copyurl.value = `${protocol}//${hostname}/#/launch?ref=`;
          invitationcode.value[0] = "FFBSO";
        }
      });
  } else {
    Commissions.value = "—";
    points.value = "—";
    stakeCommissions.value = "—";
    invitepoints.value = "—";
    copyurl.value = `${protocol}//${hostname}/#/launch?ref=`;
    invitationcode.value[0] = "FFBSO";
  }
});
</script>

<style scoped>
.yaritcbq {
  padding: 0.5rem;
  border-radius: 0.5rem;
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  transition: top 0.75s;
  background: white;
  z-index: 100;
}
.yaritcbqtop {
  top: 3rem;
}
.yaritcbqc {
  column-gap: 0.5rem;
  align-items: center;
}
.yaritcbqc > span {
  width: 1.25rem;
  height: 1.25rem;
  background: greenyellow;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.yaritcbqc > p {
  font-family: "Interl";
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: rgba(0, 0, 0, 0.75);
}
.yward {
  width: 100%;
  height: auto;
  padding: 10rem 0 0;
  background: rgb(30, 37, 43);
  box-sizing: border-box;
}
.ymainhy .yward {
  background: white;
}
.ywardbox {
  width: 60%;
  margin: 0 auto;
  column-gap: 2rem;
}
.ywardbf {
  flex: 1;
}
.ywardbfcon {
  width: 100%;
  gap: 1.125rem;
}
.ywardbfl {
  width: 100%;
  height: auto;
  padding: 1rem 1.5rem 1.5rem 1rem;
  text-align: center;
  position: relative;
  column-gap: 0.5rem;
  border-radius: 1.5rem;
  overflow: hidden;
  background: rgb(40, 48, 54);
  box-shadow: 0 8px 32px #0000001a;
  box-sizing: border-box;
}
.ymainhy .ywardbfl {
  box-shadow: 0 8px 32px #0000001a;
  background: #f7f7f8;
}
.ymainhy .moneytxt > div {
  color: #000;
}
.ywardbfcony {
  display: block;
}
.ymainhy .ywardbfcrbox {
  box-shadow: 0 8px 32px #0000001a;
  background: #f7f7f8;
}
.ymainhy .userimg {
  content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEUAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD4RAlZAAAACXRSTlMA/yDfv3+fYEA9X/DUAAAEqUlEQVR4nO1aO28TQRCG45WSxRAoQRDSAiZAySOk5hWgBBSJFiRIXEIRJT8bX/ab3bvz7sw3Z0tIkOnsW3+3O/PNc33mVE5FpDma3Vwd2uHe/TCX6c7XlcBtfG7Rojz6tjRc8y7DzWWy9WtJvGc9vBZyKcSmc1yR9SWs07xexAthazxiEW+OOBbvVhkvhAfj8NZqeGHyahRg5cCtXBuDd76OF8JTP94iA3uH9lv6t4YXwhP3Bk/igexnZ3d29DOGiLFb7GpQ/Lfn1/ecgFmDkzf52828yXUf3oUK5zYyoo+L2SSD322kB9c9eE362QLhEqIrjiWTLGoqRyCPWb7LjwohP6nXc2ZRfZG+t+XMPN4l2URRTYnzn2jAs/jFjfJjiZN8WBS9V6gmB+C5jR9cNV5IE+eiFfTuOJV4TjNJK8J7lolgoaIipOuK0WrLr9RXwM5VJQ8EPFM0BDuT1Jb0qcRk4TZnZjiryjIQhzMzjKz6PuIlZ2Y43mXipZyZwRr1OOA+F8EAqFa/MBxXkkDhauKFr3CA4LW+KKZZjtkR0FjrAYykNYJdfCvnKhRgVDQHSOmbsRwEBjQoBldhnJljBMjq2OHqjgwdUlY2yNoDNCjmAYy0MRiBgpQCjGsNQOqtEJxGZ4SndoAB1ZIXWYqLNuCs2iy5AiySrpovkCaU1N0R1MNqvoCjqHknCdKoSkQYjkujyBdasSbVEjd1kdWKVaTgo/CSFyhKhN3YEha8UZSIV7KNhRSoVSVKOcUZORfl1SpfGi22fxSrVF1fel+6CZcBVYVmYmO+rZDOpuL70vtyjteKKLE88EkDIr4FTyOW4pRLWlVH85gb+sImUnvLNhWtpAZ8cZqSB0Se6VKe2jwePpJu2UGaVvKkb9CDixf5TtxpwUP40v0+D0WcY5bE7bka8/S6Ocx4bFsmko8WwsOP2F53YOcd+PWnffMh+25vlubeYH+LBfHO0syBpBuvZ9BFGTEyXf1QVxk7k33yUN7WAUfN2pUTj0JU8QpBwxJj6uyeOxu0diPmma4ijnCje4mIYzaeJqa60IaRRJ4n9x9mx8cH7/dGXqsMDizRsH2y339EHrrHmEmGO5FekOUs3XPhxRuy3k0adeiuRUpqb/bT4+k2UWR3Kfi8vORu3N0uF3M6d40VvOhH7CVpZ4OKxn/w4SabWIvKzQGLl0084l6sJNWLmZGSL2bc12xlyXUhs3rzYC4zdUnyAirvxtpE000yCVW5QD/au1OZSfXBBKBEEq60sgHTibnSygaUaw+y0rABxcZkOW4CJlaT/98wAYXVbJNpAoofs8WkCQjS0NWuBSikoTskC1BUSJfPFqCokC53LUBkJ36QYAFig/wgwQCU/tMONM2L6YmgVYsfptNhXBSb2LlpWJxVjoaZJdHSkICwCTHOIgHt+0snIL4mWMgBipFtPBIQqxhac4DMhagL0DGYdgEyCZkDBA2ZdFLp2waAoCGBV2vcBnuJX7qmMWq0wUPXH5FUQNeFiwNwzP+QyoCuGxwHIB//LUDEa3a4/xcAERtcMzIGkP9bE3nk1QGubbfy0oPHdAE++R8B7V7PKUQ3eir/pvwBIBwZ5j0e9jIAAAAASUVORK5CYII=");
}
.ymainhy .giftimg {
  content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEUAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD4RAlZAAAACXRSTlMA/yDfQGC/f58cOveqAAAC0klEQVR4nO2auVLcQBCGZRkfoWUZ49BH2ZvarL2bGgpyzoIQiqMIoTg2hQB4bSR1z0zPpe2RqKIW+o92R5pvru6eljSZ6IUrn9wNR/cbtOjn5Hh4cvu/G2/wp2g0Ni1cQUl50YX3AypXGmGP8htd9Ded90tXLoqFrw3vjBQdpvLekco4asorytM0Xr5vAYvrLHtrl5RNr9kyE4jVs8xpolhM4c05lavqdE6hjRTjcTtYVXc7mNZFv3ZA1TRw5cx/TNVKMbXOA35KHnE5Wdk23tFofLm6iy7JH/MbVWGt+pNvUt6/+ro20vo6R6+t+6nHLcANyo1+M4E4hSoA5AaoTA/Nap4JxGnThvvNWwVs4zMT6K6hmlPTRLaUsipYn1gZLgLp0Hu3hTbhzSSaQH+o3eGY91hAWOQvpAQ95wMpgk6nAOkKoplQVwNL4NnNq+bej6QEoxm1Y1h52udpQHovzhiN0QCkrcYFSzAFCK3ywoM/miiQ10N/ND2H7I8mAIRV5i2Kb4cBIPg7DwhmTP00AIQgy9sE0IyJ1flA9HdehEUzJl7gAzEG87IHjPAktvhAjD8sns6KTDrkATEg0YVrE0Zo00UPiB3kmaHZ53Xq6gLVRsjd6fWuNFapqwXMz9X1tjX5TqU393J0XOsA/jW/1Z96TqxKFm6OlR21S2Xijaxst6swC6il98l+Mn4D8aW3jG/hNtlXJuIx88FpMhulAF8OcNHydUtQYTl6HZ7bXGA8NwvserYgggpQgAIUoADDwKPtmHYAeBm9ATLQ2dukBCjApwU+UtJugIPqiQuepUp4/HIFFcLX8Om6+mV/HoBn9PCbndZoA8Pz34IJUIACFKAABShAAQpQgAIUoAAFKEABzhBwfiWkVQBuBS/Ct+kYsLMEOBNA5rnNmPz3/vZZ32T5x0b8s7RJCpzz63W6I3S0cdAHGPx0snsw7Kr7EE/0fPUAd//WhDB8u0oAAAAASUVORK5CYII=");
}
.ymainhy .jbimg {
  content: url("data:image/png;base64,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");
}
.ymainhy .poingimg {
  content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEUAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD4RAlZAAAACXRSTlMA/0Cf378gYH8uqrsGAAAFI0lEQVR4nO2aOZPUMBCFh2shZNhdIAQSUo4/wF2ELL+AMweqyCHhd2N1q60+XntseYoi8MvssWWpv6dnybu7TZs2bdr0T/TpwWLdm2rv5365zt7n7V3uaG9oMe/jpa4G98/SBr/3NXgrbfB5X4PnWXvX+9rb77MiXult8NFxmeRUiMlTrXLitB0+LscvzRV0SUalMDkNRb3Zjq+V43f2povhVEKFbH0nFFUViK5w3aFhYSp0u+rPbne1nPnWjk/K8V1718ecCjExP9HTP6gTv4fjM9ANTCXcTvebot6P40NlqCrlNbcTJVNUouLGl1KJTHblzG194gYYX0olMvGuqVTc+FIqhNT84F0zCIyPyoCoxK5719SLHOaUSnw4PcJeROOzz0ipRCZl6lrscPIlVAigIRBdg8eXUIlMomvw5EuoxI5H1wwqZZhHhbLOnAGugZMvoRKZUFj4YqPJR17yF9L4bMGAa/DkIyq/3IWACXANnnyQCqgNcM2gmEmYSmSCXDMITD5IpdxtH0xVjX6lgjkCgApggngmkw9QAXdD19RHOwKACjGJSRVcUzEfnuGACXTNIEQgnguLhsw1ePLR61W/MAETcIqF5kU4B9AlrsFv9kCFiFomdI0LexKaF+EcMbHbDyrVD7QxoXrbUw/LOU2lc3Ftpah0L66tGpXuxbVVo0JhuF7t/XOkBptrySLr1XpIE3691Hwsc3G1tA/pXbY/0/sPsqbdkqS/lLBxU5e6aFI83y6UH0wyccVsfH2lc2/UmXRhGmOImdq8OKFx6EhLtwsxmWjEfunwxT8FRT0pJBN30L+XuQ66NOW5/gVcFN41FFWx3Px5QKVuRsW/LdghcSycOGotmVAJWUrBGdZKg9g5LoIiFb+d4U8zaNHOXX8xHidU/BaTBuKXEtwA02/OwVTcFpNhInjinGZu9AIOyzlkamduO5gwFlcInsbJdxYux1gftPr1WwNsahEDG52D9iR+6ZyYWuTMjahYu7N50QRlsXPGTiEqdpnGps4+LA2ysUjYHRUz43NTi2wsUod1RvowzE0tsuYGVMzS2fsMycZipGLCkD1jhwBX0GNVIhUqshxMmlpkzE0lNSXSYThtapGJRaLS8qf+Kk3wy/xAB+UyNnegosPQzatUJhY9FWJSZ9JBU1ed0Fyo5vZUVBgeNrVIm9u/g1UYHjY1ikWCoKi0KKhTYEZ7xtxEpeWzYsKe0Q44ZG5uxlJRYTjL1CIVi5ZKC0Ne5h8ytUjFoqXSwpDdijZaUByL5XIzNRqTuaaO5jZUWhiyqed4hqViUVMZwxAtWafV3vmayvg1kk2d/6FnytyayshkgalFYyxqKhKG84LQaoxFRWVse5GpRaO52xdIWTAuM7WInfNWf9GRFxQ/a7apRfLOb1RqGLKp0RedaUksNio1DJeaWiRboZFKXSIvN7VIYlGo1DAMO6T5Xay1kvlRw9CvxBeobkDkqxGHYY+pRdXcQqUM/bzP1CJO0T+VCjFhe/Z1cIxFpsJhGHaEi1RjkecKFe9Jp6lFbO5XRIWa5UX/clNbc3PZuK1eU4s4FmmYre0eU1tzW03808AMgX8D6PUMi51jtKqD4CNWvg+bp8++wV5Ti9jcTWs8w+L8G9Vv6rGL5gvy+g5qc680tch8k17pGZZyzjpTi5S5j9JB1cW1phZxLA46vA+bJ3HOMTzDquZeb2rR1BezPlEsTn9cWCYy95E8wxqccxxTiy5fvO5aH23atGnTpv9XfwEcAVUR549mdAAAAABJRU5ErkJggg==");
}
.ymainhy .levelimg {
  content: url("data:image/png;base64,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");
}
.ywardbfl::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.88%,
    #8084dc 65.46%
  );
  right: -194px;
  bottom: -181px;
  width: 390px;
  height: 390px;
  filter: blur(160px);
  opacity: 0.6;
}
.ywardbfly {
  width: 23%;
  align-items: center;
}
.money {
  width: 2.75rem;
  height: 2.75rem;
  margin-right: 0.5rem;
  box-sizing: border-box;
}
.money > img {
  width: 100%;
}
.moneytxt {
  gap: 0.3rem;
}
.moneytxt > div {
  font-family: "Poppins";
  font-size: 1rem;
  line-height: 1rem;
  color: white;
  text-align: left;
}
.moneytxt > span {
  font-family: "Interl";
  font-size: 1rem;
  line-height: 1.5rem;
  color: #6e757c;
}
.ywardbflt {
  width: 23%;
  align-items: center;
}
.points {
  width: 2.75rem;
  height: 2.75rem;
  margin-right: 0.5rem;
  box-sizing: border-box;
}
.points > img {
  width: 100%;
}
.ywardbfcont {
  margin-top: 2.75rem;
}
.ywardbfcontt {
  margin-top: 1.25rem;
  width: 100%;
  padding: 1.25rem 1.125rem;
  text-align: center;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  background: rgb(40, 48, 54);
  box-shadow: 0 8px 32px #0000001a;
  box-sizing: border-box;
}
.ymainhy .ywardbfcontt {
  box-shadow: 0 8px 32px #0000001a;
  background: #f7f7f8;
}
.ywardbfcontt::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.88%,
    #8084dc 65.46%
  );
  right: -194px;
  bottom: -181px;
  width: 390px;
  height: 390px;
  filter: blur(160px);
  opacity: 0.6;
}
.ywardbfctit {
  align-items: center;
  column-gap: 0.5rem;
  color: #fff;
  font-size: 30px;
  line-height: 36px;
  font-weight: 600;
  font-family: "Poppins";
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}
.ywardbfcontt::after {
  content: "";
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 76%;
  height: 0.2rem;
  background-color: #e2e2e2;
}
.ymainhy .ywardbfcontt::after {
  background-color: rgba(0, 0, 0, 0.6);
}
.ymainhy .ywardbfctit {
  color: #000;
}
.level-item {
  display: flex;
  flex-direction: column;
  width: 3.75rem;
  height: 100%;
  position: relative;
  z-index: 2;
}
.leveltxt {
  font-family: "Interl";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-45%, -50%);
  font-size: 0.875rem;
  color: white;
}
.ymainhy .leveltxt {
  color: #000;
}
.level-item > img {
  width: 100%;
}
.ywardbfctit > img {
  width: 1.3rem;
  height: 1.3rem;
}
.ywardbfcr {
  flex: 1;
}
.ywardbfcrbox {
  width: 100%;
  padding: 1.875rem 1.75rem;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  background: rgb(40, 48, 54);
  box-shadow: 0 8px 32px #0000001a;
  box-sizing: border-box;
}
.ywardbfcrbox::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.88%,
    #8084dc 65.46%
  );
  right: -194px;
  bottom: -181px;
  width: 390px;
  height: 390px;
  filter: blur(160px);
  opacity: 0.6;
}
.ywardbfcrbox::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.88%,
    #8084dc 65.46%
  );
  top: -280px;
  left: -280px;
  width: 560px;
  height: 560px;
  opacity: 0.6;
  filter: blur(278.261px);
}
.ywardbfcrbc {
  width: 100%;
  padding: 0.5rem 0;
}
.ywardbfcrbctop {
  width: 100%;
  height: 3rem;
  border: 1px solid rgb(161 161 170);
  background-color: hsla(0, 0%, 100%, 0.1);
  border-radius: 0.5rem;
  padding: 0.25rem 1rem;
  align-items: center;
  box-sizing: border-box;
}
.ywardbfcrbctop > p {
  font-family: "Interl";
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: rgba(0, 0, 0, 0.75);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.ywardbfcrbctop > button {
  height: 2.5rem;
  font-family: "Interl";
  font-weight: 600;
  text-align: center;
  background: transparent;
  color: #f7f7f8bf;
  border-radius: 0.75rem;
  font-size: 1rem;
  line-height: 0.5rem;
  cursor: pointer;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
}
.ywardbfcrbctop > button:hover {
  color: rgba(0, 0, 0, 0.75);
}
.ymainhy .ywardbfcrbctop > button {
  color: rgb(17 11 11);
}
.ymainhy .ywardbfcrbctop > button:hover {
  color: rgb(56 59 64);
}
.ywardbfcrbc > p {
  font-family: "Interl";
  font-size: 1.25rem;
  line-height: 2rem;
  margin: 1.5rem 0 1rem;
  color: #6e757c;
}
.link-box {
  width: 100%;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 0.5rem 0 1.25rem 0.5rem;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
}
.link-item {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: relative;
}
.link-item:hover > .linkitembtxt {
  display: block;
}
.linkitembtxt {
  width: 305%;
  display: none;
  position: absolute;
  top: 3.125rem;
  left: -80%;
}
.linkitembox {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.25rem 0.5rem;
  box-sizing: border-box;
  background: rgb(40, 48, 54);
  box-shadow: 0 8px 32px #0000001a;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
}
.ymainhy .linkitembox {
  box-shadow: 0 8px 32px #0000001a;
  background: #f7f7f8;
}
.linkitembox::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.88%,
    #8084dc 65.46%
  );
  right: -194px;
  bottom: -181px;
  width: 390px;
  height: 390px;
  filter: blur(160px);
  opacity: 0.6;
}
.linkitembox > p {
  font-family: "Interl";
  font-size: 0.75rem;
  line-height: 1rem;
  color: white;
}
.ymainhy .linkitembox > p {
  color: #000;
}
.linkitemjt {
  width: 0;
  height: 0;
  position: absolute;
  top: -5px;
  left: 45%;
  transform: translate(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid rgb(82 76 103);
}

.ymainhy .linkitemjt {
  border-bottom-color: rgb(225 212 236);
}
.linkitembtxtw > .linkitemjt {
  left: 50%;
}
.link-item > img {
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
}
.ywardlea {
  width: 60%;
  margin: 3rem auto 0;
}
.ywardleaf {
  column-gap: 2rem;
}
.ywardleafl {
  flex: 1;
}
.ywardleafltxt {
  height: 24.6rem;
  padding: 1.2rem;
  box-sizing: border-box;
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
  background: rgb(40, 48, 54);
  box-shadow: 0 8px 32px #0000001a;
  z-index: 2;
}
.ymainhy .ywardleafltxt {
  box-shadow: 0 8px 32px #0000001a;
  background: #f7f7f8;
}
.ywardleafltxt::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.88%,
    #8084dc 65.46%
  );
  right: -194px;
  bottom: -181px;
  width: 390px;
  height: 390px;
  filter: blur(160px);
  opacity: 0.6;
}
.ywardleafltxt::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.88%,
    #8084dc 65.46%
  );
  top: -280px;
  left: -280px;
  width: 560px;
  height: 560px;
  opacity: 0.6;
  filter: blur(278.261px);
}
.th {
  width: 100%;
  height: 2.7rem;
  line-height: 2.7rem;
  display: flex;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: #181818;
  font-size: 1.2rem;
  font-weight: 450;
  position: relative;
  z-index: 10;
}
.th_item {
  font-family: "Poppins";
  flex: 1;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  line-height: 2.7rem;
}
.ymainhy .th {
  background: white;
}
.ymainhy .th_item {
  color: #000;
}
.ymainhy .leftlsc {
  color: #000;
}
.ymainhy .leftlsr {
  color: #000;
}
.scrool {
  height: 19.5rem;
  overflow: auto;
  position: relative;
  z-index: 10;
}

.scrool::-webkit-scrollbar {
  width: 8px;
}

.scrool::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
}
.ymainhy .scrool::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.scrool::-webkit-scrollbar-corner {
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}
.scrool > div:nth-child(odd) {
  background: transparent;
}
.scrool > div:nth-child(even) {
  background: rgb(50, 50, 50);
}
.scrool > div:hover {
  background: #53514e;
}
.ymainhy .scrool > div:nth-child(even) {
  background: #f5f5f5;
}
.ymainhy .scrool > div:hover {
  background: #c4c4c4;
}
.leftls {
  width: 100%;
  height: 3.1rem;
  font-size: 0.9rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.leftlsl {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.leftlslnone {
  display: none;
}
.leftlslb {
  width: 1.9375rem;
  height: 1.9375rem;
}
.leftlsc {
  flex: 1;
  font-family: "Interl";
  font-size: 1.125rem;
  line-height: 1.8125rem;
  color: white;
  text-align: center;
}
.leftlsr {
  flex: 1;
  font-family: "Interl";
  font-size: 1.125rem;
  line-height: 1.8125rem;
  color: white;
  text-align: center;
}
.leftlsltxt {
  flex: 1;
  font-family: "Interl";
  font-size: 1.125rem;
  line-height: 1.8125rem;
  color: white;
  text-align: center;
}
.ymainhy .leftlsltxt {
  color: #000;
}
.leftlsllead {
  width: 1.8125rem;
  height: 2.125rem;
}
.linkitembtxtb {
  width: 322.5%;
}
.ywardru {
  width: 60%;
  margin: 3rem auto 2.5rem;
}
.ymainhy .timeimg {
  content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEUAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD4RAlZAAAACXRSTlMA/0Cff2Ag37/Yg/2YAAACLUlEQVR4nO2aO0/DQAyAS4GIkfBKR4qExAhCgpVKCFZAsEMphZGXYAWEBD8bO2ovbeO7s+8iBI2/LTj3NSE5x/GloSiKovwyfXe4K/V10mdXuO0Ol5lL0/TEHm5CeFskvIIR9/bwDIQfRcJTGLFkD7chvCISdmDEqvv3llVIkWxeDHjHEcONMjsQbpmtS5vvGnYLIdujfXgzBxoPSCGeZqix2gMEqEPE2RYMNQ/xygXTIoQPMULqnxjjo4SY4tLPwwH5jT3cKIPh1nDjGEeu00KTNBlTz6SvWRVahWt2IT4CzO+xhDhi0S7EWWUeOSzhAmzQKSRnHsJvImHScT7VIFxMNpawkZw5fBAeSdM8oQAVqlCFKlShClVYe2Hv69VN8X7HEuZbTjLT42AJsUvh4UUkxJrXg6zgxJLYg6zGxpLYg6zGZryampqeJcQi2oNR8O7DO48u+zC7TsvUU2EthH03Ix05nnDLN/OKtjNLyGiEmdfpqjK2aXdVlbFl+fDvZ+xbv9B09nlNDG/zLxNm7JtvD0UTZmrmsgprICyWVnLK+0uFE+kmsy7CCDqcY5gCOFBYSl/U6kFUxiaXYKIydtWn7Fh0C7sojoVSXsaeWPEq3ptC78Pm+dgCypHdNzVzWYUqVKEK/4swwT8/7QawjyPLlUUuDIc48ogPMejCgvE2Zod6bEd9iUEtbjPaXXbI+jHinOnarPLvbRq9wAtt88G92N0IwaZTFEVRquQHU+NMFDCokLEAAAAASUVORK5CYII=");
}
.ywardrub {
  width: 100%;
}

.ywardrublib {
  width: 100%;
  position: relative;
  z-index: 1;
}
.ywardrublis {
  width: 100%;
  height: auto;
  background: rgb(40, 48, 54);
  box-shadow: 0 8px 32px #0000001a;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 0.9375rem;
}
.ymainhy .ywardrublis {
  box-shadow: 0 8px 32px #0000001a;
  background: #f7f7f8;
}
.ywardrublis::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.88%,
    #8084dc 65.46%
  );
  right: -194px;
  bottom: -181px;
  width: 390px;
  height: 390px;
  filter: blur(160px);
  opacity: 0.6;
}
.ywardrublis::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.88%,
    #8084dc 65.46%
  );
  top: -280px;
  left: -280px;
  width: 560px;
  height: 560px;
  opacity: 0.6;
  filter: blur(278.261px);
}
.ywardrublisy {
  width: 100%;
  align-items: center;
  padding: 1.625rem 1.25rem;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}
.ywardrublisy > p {
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 600;
  font-family: "Poppins";
  color: white;
}
.ymainhy .ywardrublisy > p {
  color: #000;
}
.ywardrublisy > img {
  width: 1rem;
  height: auto;
  transform: rotate(0deg);
  transition: all 0.3s;
}
.ywardrublist {
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.ywardrublish .ywardrublist {
  height: auto;
}
.ywardrublish .ywardrublisy > img {
  transform: rotate(180deg);
}
.ywardrublisttxt {
  width: 100%;
  padding: 1rem 1.25rem;
  font-family: "Interl";
  font-size: 15px;
  font-weight: 400;
  line-height: 1.625rem;
  color: #6e757c;
  box-sizing: border-box;
}
.linkitembtxtw {
  width: 260%;
}
.ymainhy .ywardrublisttxt {
  color: #000;
}
@media (max-width: 1250px) {
  .yward {
    height: auto;
    padding-top: 10rem;
  }
  .ywardbfcontt::after {
    width: 89%;
  }
  .level-item {
    width: 2.5rem !important;
  }
  .ywardrublisy > p {
    font-size: 0.85rem;
  }
  /* .ywardrublib .ywardrublish:nth-child(1) .ywardrublist {
    height: 10.5rem;
  }
  .ywardrublib .ywardrublish:nth-child(2) .ywardrublist {
    height: 11.5rem;
  }
  .ywardrublib .ywardrublish:nth-child(3) .ywardrublist {
    height: 10.5rem;
  }
  .ywardrublib .ywardrublish:nth-child(4) .ywardrublist {
    height: 7.5rem;
  } */
  .ywardrublisttxt {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  .ywardru {
    width: 95%;
  }
  .linkitembtxtw {
    width: 271% !important;
  }
  .linkitembtxt {
    width: 330%;
  }
  .linkitembtxtb {
    width: 342.5%;
  }
  .linkitemjt {
    left: 40%;
  }
  .ywardbfcon {
    margin-bottom: 1.5rem;
  }
  .ywardbox {
    width: 95%;
    display: block;
  }
  .ywardbf {
    width: 100%;
  }
  .ywardbfcr {
    width: 100%;
  }
  .link-box {
    padding: 0.5rem 0.5rem 0 0.5rem;
    justify-content: center;
  }
  .ywardbfcrbc > p {
    text-align: center;
  }
  .ywardbfcrbctop > p {
    width: 70% !important;
  }
  .ywardbfl {
    flex-wrap: wrap;
  }
  .ywardbfly {
    width: 48% !important;
    column-gap: 0.75rem;
  }
  .ywardbflt {
    width: 48% !important;
    column-gap: 0.75rem;
  }
  .ywardlea {
    width: 95%;
  }
  .ywardleaf {
    display: block;
  }
  .ywardleafl {
    padding-bottom: 1.5rem;
  }
  .leftlslb {
    width: 1.5rem;
    height: 1.5rem;
  }
  .th_item {
    font-size: 1rem;
  }
  .leftlsc {
    font-size: 0.875rem;
  }
  .leftlsr {
    font-size: 0.875rem;
  }
  .leftlsllead {
    width: 1.5rem;
    height: 1.8rem;
  }
}
@media screen and (min-width: 2251px) {
  .ywardbfcontt::after {
    width: 90%;
  }
}
@media (max-width: 1950px) {
  .ywardbfcrbctop > p {
    width: 75%;
  }
  .money {
    width: 2rem;
    height: 2rem;
  }
  .level-item {
    width: 3rem;
  }
  .points {
    width: 2rem;
    height: 2rem;
  }
  .moneytxt > span {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  .ywardbfl {
    column-gap: 0.25rem;
  }
  /* .ywardbfly {
    width: 28%;
  }
  .ywardbflt {
    width: 20.5%;
  } */
  .money {
    margin-right: 0.25rem;
  }
  .points {
    margin-right: 0.25rem;
  }
  .ywardbfcrbc > p {
    line-height: 1.5rem;
    margin: 0.75rem 0 0.5rem;
  }
}
</style>
