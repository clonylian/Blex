import { createStore } from "vuex";

const store = createStore({
  state: {
    txt: {
      tabzero: "HOME",
      tabone: "Stake",
      tabtwo: "REWARDS",
      tabAirdrop: "AIRDROP",
      tabStake: "STAKE",
      tabClaim: "CLAIM",
      tabthree: "Ido",
      foottxtone: "The No Sign-Up Crypto Exchange. Shift",
      foottxttwo: "between BTC, ETH, BCH, XAI and 100+ other",
      foottxtthree: "cryptocurrencies, no account required. 🎈",
      footalistone: ["TREASURY", "INTEGRATIONS", "API", "EMBED", "JOBS"],
      footalisttwo: ["ACCOUNT", "REFER A HUMAN", "FAQ", "BRAND ASSETS"],
      footalistthree: [
        "LISTED COINS",
        "XAI WHITE PAPER",
        "STATISTICS",
        "RESEARCH",
      ],

      yhome: "Claim your first $50 in $GIVE Coins",
      yhometitle: " Register your Twitter and Wallet for our Beta ",
      yhomecont:
        " With Give Coin, you can seamlessly earn coins and show appreciation to your beloved content creators, all while staying within the familiar confines of Twitter/X. Earn $Give Coins and Cash Out. ",
      yhometitlet: "EARLY ACCESS AIRDROP",
      yhomecontt: "Enter your invite code to claim your airdrop",
      thometitle: "xShareBot",
      thomesamletitle: "Edge Wallet",
      thometxty:
        "One of the world’s go-to mobile wallets, Edge is a staple for many humans. Trade your favourite cryptocurrencies inside Edge with SideShift.ai.",
      thometxtt:
        "Learn how to shift inside Edge Wallet in our step-by-step guide.",
      thrhometitle: "MevBot",
      thrhomesamletitle: "Monerujo",
      thrhometxty:
        "An Android wallet for the privacy-focused humans. Monerujo uses remote nodes to synchronize with the Monero blockchain while keeping all of your private data on your device.",
      thrhometxtt:
        "Monerujo users can pay addresses in multiple cryptocurrencies, in-app with SideShift.ai.",

      fhometitle: "Tokennomics",
      fhometxttit: "$Nerd Tokenomics",
      fhometxtsy: "Total supply: ",
      fhometxtst: "Initial Launch Price: ",
      fhometxtsthr: "Contract Address: ",
      fhometxtsbut: "save your slot",
      whometitle: "Roadmap",
      whomelistdy: "QUARTER3+4",
      whomelistdyboxy: "Beta launch",
      whomelistdyboxt: "Weekly pack drops launched",
      whomelistdyboxthr: "WEEKLY RAFFLES LAUNCHED",
      whomelistdyboxf: "IXT Private Sale Completed",
      whomelistdyboxw: "Organisational growth from 0 to 30 people",
      whomelistdyboxs: "On-chain Migration",
      whomelistdyboxq:
        "Airdrop IX Token (IXT) completed to 130,000+ web3 wallets",
      whomelistdyboxba: "Planet IX New Look & Feel",
      whomelistdyboxjiu: "BETA Marketplace Live",
      whomelistdyboxten: "Pack Sales moved On-chain",
      whomelistdyboxteny:
        "IXT Liquidity Pools available on QuickSwap & SushiSwap",
      whomelistdyboxtent: "Planted 300 000 trees ",
      whomelistdyboxtenthr: " with One Tree Planted",
      whomelistdyboxtenf: "Sold 330 million PIX ",
      whomelistdyboxtenw: "(approx. 20% of the map)",
      whomelistdyboxtens: "Beta launch",
      whomelistdt: "QUARTER1",
      whomelistdtboxy: "PIX Inspector",
      whomelistdtboxt: "New UI/UX",
      whomelistdtboxthr: "IXT Private Sale Completed",
      whomelistdtboxf: "Weekly pack drops launched",
      whomelistdtboxw: "WEEKLY RAFFLES LAUNCHED",
      whomelistdtboxs: "Cargo Drop",
      whomelistdtboxq: "Drones",
      sixhometitle: "Some Algorithms by Micro AI",
      sixhometxt:
        "Micro AI is not just one algorithm, but a swarm of intelligently taken market orders that get information from 100+ algorithms, which are getting their data from over 100,000,000 constantly refreshing end-points.",
      sixhomelist: [
        {
          img: "https://assets-global.website-files.com/6518638dadf2a346d345ad76/6541b9bd33d477fdfb4ebb53_Untitled%20design-10.svg",
          txt: "FuturesFuture is using DYDX <-> Bloomberg Data Aggregation to intelligently take news-trades. FuturesFuture is also used to for other algorithms which hold long-term positions to recalculate data. Everything in lightning-speed. Outpacing Competition and Humans.",
          user: "Futures Future",
          usertxt: "BUILT IN JULIA & PYTHON",
        },
        {
          img: "https://assets-global.website-files.com/6518638dadf2a346d345ad76/6541b9bd33d477fdfb4ebb53_Untitled%20design-10.svg",
          txt: "On-Chain-Money-Flow (OCMF) treats Ethereums capital like waves of hype. It intelligently predicts new waves with the help of Arkham and our Social Feeds (IRA & IRAX). OCMF is in a symbiosis with Screener, both benefit from each other’s perspectives.",
          user: "On Chain Money Flow",
          usertxt: "BUILT IN JULIA",
        },
        {
          img: "https://assets-global.website-files.com/6518638dadf2a346d345ad76/6541b9bd33d477fdfb4ebb53_Untitled%20design-10.svg",
          txt: "Screener was the beginning of Micro AI. Screener automatically scans newly generated pairs on Uniswap, frontruns sniping bots, and holds token which are labeled as a 'Strong Buy'.",
          user: "Screener AI",
          usertxt: "BUILT IN RUST & PYTHON & JULIA",
        },
        {
          img: "https://assets-global.website-files.com/6518638dadf2a346d345ad76/6541b9bd33d477fdfb4ebb53_Untitled%20design-10.svg",
          txt: "Layerless is a market maker for wrapped tokens or tokens on several chains, ensuring same price rates even with low liquidity on one chain. AI calculated buying & selling pressure. Layerless Bot is able to be booked by protocols. AIaaS. (ETA: 2024 Q4)",
          user: "Layerless Bot (In Development)",
          usertxt: "BUILDING IN JULIA & PYTHON",
        },
      ],
      yidoy: "Max",
      yidot: "Balance : ",
      yidothr: "Amount",
      yidofour: "Total raised amount:",
      yidofive: "Presale price:",
      yidosix: "Minimun buy amount:",
      yidoqi: "Ends in:",
      yidoba: "BUY",
      yidojiu: "CLAIM",
      yidoten: "INSUFFICIENT BALANCE",
      yleadertitle: "Leaderboard",
      yleadercont: "Bridge & Invite friends to rank up",
      yleadertaby: "RANK",
      yleadertabt: "NAME",
      yleadertabthr: "INVITED BY",
      yleadertabf: "POINTS",
      yleadersamletitle: "Recent Joins",
      ystaketitle: "Staking",
      ystakesamletitle: "MAKE YOUR SPIRIT TOKEN WORK FOR YOU",
      ystaketxt:
        "Invest in staking periods of 14, 30, or 60 days and let your Spirit Tokens grow. The longer the staking period, the greater therewards you'll reap. TVL 0 Spirit and 0 Spirit-ETH LP",
      ystakelisty: "PROPORTION OF DIVIDEND POOL",
      ystakelistt: "STAKING TOKEN",
      ystakelistthr: "STAKING LOCK-UP TIME",
      ystakelistf: "APY",
      ystakelistw: "SPIRIT",
      ystakelistsix: "Everyday",
      ystakelistqi: "CUMULATIVE DIVIDENDS AVAILABLE",
      ystakelistba: "DIVIDEND TIME",
      ystakelistjiu: "TOTAL STAKED POOL",
      ystakelistten: "YOUR CURRENT PROPORTION",
      ystakelistteny: "YOUR TOTAL DIVIDEND",
      ystakelisttent: "NOT BEEN CLAIMED",
      ystakelisttenthr: "YOU HAVE STAKED",
      ystakelisttenf: "REDEEMABLE UPIN MATURITY",
      ystakelisttenfive: "CLAIM",
      ystakelisttensix: "STAKE",
      ystakelisttenqi: "DAYS",
      ystakelisttenba: "SPIRIT-ETH LP",
      ystaketwotitley: "Why",
      ystaketwotitlet: "Stake?",
      ystaketwolistytitle: "ON-CHAIN",
      ystaketwolistytxt:
        "Stake on the Ethereum Network and enjoy ERC-4626 staking, an innovative tokenized vault standard.",
      ystaketwolistttitle: "AUTO-COMPOUNDING",
      ystaketwolistttxt:
        "Your svXAI is automatically compounded as staking rewards are paid into the vault. No action required.",
      ystaketwolistthrtitle: "DAILY REWARDS",
      ystaketwolistthrtxt:
        "25% of revenue is sent to the staking vault every day at 00:00 UTC. Every time staking rewards are added, you can redeem more XAI from the vault for the svXAI you hold.",
      ystaketwolistftitle: "FULL CONTROL & FLEXIBILITY",
      ystaketwolistftxt:
        "You have full custody of your svXAI. Connect your Ethereum wallet to the dashboard and accrue rewards on-chain.",
      ystaketwolistwtitle: "WE GROW, YOU GROW",
      ystaketwolistwtxt:
        "As SideShift.ai’s volume grows, the APY percentage paid to you every day does too.",
      ystaketwolistsixtitle: "CUTTING EDGE DASHBOARD",
      ystaketwolistsixtxt:
        "Hook up your wallet and manage your staking activities from our easy-to-use dashboard.",
      yaridroptitle: "SYSTEM PROCESSING",
      yaridroptxt:
        "Our system is currently processing for the next epoch, please continue to check back.",
      yaridropsamletitle: "Shift Process",
      yaridroplisty: "Add “❤️ Memecoin” to your X name",
      yaridroplistt: "Tell the world!",
      yaridroplistthr: "Follow @Memeland",
      yaridroplistf: "Invitation code",
      yaridroplistw: "Reward: 1 NFT + 1000 POINTS",
      yaridroptitlet: "$RATIO Calculator",
      yaridroptabytit: "Post Calculator",
      yaridroptabytxty:
        "Any tweet that is posted using our ticker $RATIO will begin earning points based on the criteria of that said tweet.",
      yaridroptabytxtt:
        "On the right side of this page you will find our Post Calculator that simulates an in depth view of how many points you'd earn based on the engagement of your Tweet.",
      yaridroptabttit: "Comment Calculator",
      yaridroptabttxty:
        "Unlike the Post Calculator, the Comment Calculator is for those who comment under a tweet using our ticker $RATIO.",
      yaridroptabttxtt:
        "On the right side of this page you will find our Comment Calculator that simulates an in depth view of how many points you'd earn based on the success of your comment.",
      yaridroptabthrtit: "Engager Calculator",
      yaridroptabthrtxty:
        "The Engagement calculator is for anybody that likes, retweets, comments under any post that contains the ticker $RATIO.",
      yaridroptabthrtxtt:
        "On the right side of this page you will find our Engager Calculator that simulates an in depth view of how many points you'd earn based off your engagement with other people's Tweets.",
      yaridropregtitle: "CONNECT TO YOUR ACCOUNT",
      yaridropregtxt:
        "You will need to complete the follow steps to complete your onboarding.",
      yaridropregtxtt: "Audited by",
      yaridropsubmit: "SUBMIT",
      yaridropswaptitley: "Bridge to Earn Yield +",
      yaridropswaptitlet: "BLAST POINTS",
      yaridropswaptxty: "You can earn Blast Points by bridging",
      yaridropswaptxtt: "ETH or stablecoins. Points can be",
      yaridropswaptxtthr: "redeemed for REDACTED in May",
      yaridropswapttxty: " You will earn more Points over time",
      yaridropswapttxtt: "based on how much you bridge",
      yaridropswappy:
        "Withdrawing from the bridge will be available after the ",
      yaridropswappt: "Blast Mainnet launches in February!",
      yaridropswapry: "YOU CAN BRIDGE",
      yaridropswaprt: "FROM",
      yaridropswaprthr: "Ethereum Mainnet",
      yaridropswaprf: "Balance",
      yaridropswaprwy: "You will receive",
      yaridropswaprwt: "ETH + Yield + Spins for Points",
      yaridropcopyy: "Invite friends to unlock exclusive rewards!",
      yaridropcopyt: "COPY",
      yaridropcopythr: "COPYED",
      yaridropcopyf:
        "Please send the code to your friends. You'll get 5 points perfriend and 5% of their weekly points when they complete thetasks.",
    },

    ch: {
      tabzero: "首页",
      tabone: "赌注",
      tabtwo: "奖励",
      tabAirdrop: "空投",
      tabStake: "赌注",
      tabClaim: "宣称",
      tabthree: "我愿意",
      foottxtone: "无需注册的加密货币交易所。 转移",
      foottxttwo: "BTC、ETH、BCH、XAI 和 100 多种其他货币之间",
      foottxtthree: "加密货币，无需帐户。🎈",
      footalistone: ["财政部", "整合", "应用程序编程接口", "嵌入式", "工作"],
      footalisttwo: ["账户", "推荐人", "常见问题", "品牌资产"],
      footalistthree: ["上市币种", "XAI 白皮书", "统计数据", "研究"],

      yhome: "领取您的第一笔 50 美元 $GIVE 硬币",
      yhometitle: " 注册您的 Twitter 和钱包以获取我们的测试版 ",
      yhomecont:
        " 借助 Give Coin，您可以无缝赚取金币并向您喜爱的内容创作者表示感谢，同时保持在 Twitter/X 熟悉的范围内。赚取 $Give 金币并兑现。 ",
      yhometitlet: "抢先体验空投",
      yhomecontt: "输入您的邀请码以领取空投",
      thometitle: "xShareBot",
      thomesamletitle: "边缘钱包",
      thometxty:
        "Edge 是世界上首选的移动钱包之一，是许多人的主要钱包。使用 SideShift.ai 在 Edge 内交易您最喜欢的加密货币。",
      thometxtt: "在我们的分步指南中了解如何在 Edge Wallet 内进行切换。",
      thrhometitle: "MevBot",
      thrhomesamletitle: "Monerujo",
      thrhometxty:
        "专为注重隐私的人们打造的 Android 钱包。Monerujo 使用远程节点与门罗币区块链同步，同时将您的所有私人数据保留在您的设备上。",
      thrhometxtt:
        "Monerujo 用户可以使用 SideShift.ai 在应用程序内以多种加密货币向地址付款。",

      fhometitle: "代币经济学",
      fhometxttit: "$Nerd 代币经济学",
      fhometxtsy: "总供应量：",
      fhometxtst: "初始发行价：",
      fhometxtsthr: "合约地址：",
      fhometxtsbut: "保存你的插槽",
      whometitle: "路线图",
      whomelistdy: "第3+4季度",
      whomelistdyboxy: "测试版发布",
      whomelistdyboxt: "推出每周礼包掉落",
      whomelistdyboxthr: "每周RAFFLES推出",
      whomelistdyboxf: "IXT私募已完成",
      whomelistdyboxw: "组织规模从 0 人增长到 30 人",
      whomelistdyboxs: "链上迁移",
      whomelistdyboxq: "已向超过 130,000 个 web3 钱包空投 IX 代币 (IXT)",
      whomelistdyboxba: "九号行星新外观和感觉",
      whomelistdyboxjiu: "BETA 市场上线",
      whomelistdyboxten: "包装销售转移至链上",
      whomelistdyboxteny: "QuickSwap 和 SushiSwap 提供 IXT 流动资金池",
      whomelistdyboxtent: "种植 300 000 棵树 ",
      whomelistdyboxtenthr: "  种植一棵树，",
      whomelistdyboxtenf: "售出 3.3 亿个 PIX  ",
      whomelistdyboxtenw: "（约占地图的 20%）",
      whomelistdyboxtens: "测试版发布",
      whomelistdt: "第一季度",
      whomelistdtboxy: "PIX检查员",
      whomelistdtboxt: "新的用户界面/用户体验",
      whomelistdtboxthr: "IXT私募已完成",
      whomelistdtboxf: "推出每周礼包掉落",
      whomelistdtboxw: "每周RAFFLES推出",
      whomelistdtboxs: "货物空投",
      whomelistdtboxq: "无人机",
      sixhometitle: "Micro AI的一些算法",
      sixhometxt:
        "微型人工智能不仅仅是一种算法，而是一大群智能接受的市场订单，这些订单从 100 多种算法中获取信息，这些算法从超过 1 亿个不断刷新的端点获取数据。",
      sixhomelist: [
        {
          img: "https://assets-global.website-files.com/6518638dadf2a346d345ad76/6541b9bd33d477fdfb4ebb53_Untitled%20design-10.svg",
          txt: "FuturesFuture 正在使用 DYDX <-> Bloomberg 数据聚合来智能地获取新闻交易。FuturesFuture 还用于其他持有长期头寸的算法来重新计算数据。一切都以闪电般的速度进行。超越竞争和人类。",
          user: "期货 未来",
          usertxt: "内置 Julia 和 Python",
        },
        {
          img: "https://assets-global.website-files.com/6518638dadf2a346d345ad76/6541b9bd33d477fdfb4ebb53_Untitled%20design-10.svg",
          txt: "链上资金流（OCMF）将以太坊资本视为炒作浪潮。它在 Arkham 和我们的社交源（IRA 和 IRAX）的帮助下智能地预测新浪潮。OCMF 与 Screener 是共生关系，两者都从彼此的观点中受益。",
          user: "链上资金流向",
          usertxt: "内置 JULIA",
        },
        {
          img: "https://assets-global.website-files.com/6518638dadf2a346d345ad76/6541b9bd33d477fdfb4ebb53_Untitled%20design-10.svg",
          txt: "Screener 是 Micro AI 的开端。Screener 自动扫描 Uniswap 上新生成的货币对，抢先狙击机器人，并持有标记为“强力买入”的代币。",
          user: "筛选人工智能",
          usertxt: "内置 RUST 和 PYTHON 和 JULIA",
        },
        {
          img: "https://assets-global.website-files.com/6518638dadf2a346d345ad76/6541b9bd33d477fdfb4ebb53_Untitled%20design-10.svg",
          txt: "Layerless 是打包代币或多条链上代币的做市商，即使一条链上的流动性较低，也能确保相同的价格。人工智能计算买卖压力。Layerless Bot 可以通过协议进行预订。人工智能服务。（预计到达时间：2024 年第四季度）",
          user: "无层机器人（开发中）",
          usertxt: "内置 JULIA 和 PYTHON",
        },
      ],
      yidoy: "Max",
      yidot: "余额 : ",
      yidothr: "数量",
      yidofour: "募集总额：",
      yidofive: "预售价格：",
      yidosix: "最低购买金额：",
      yidoqi: "结束于：",
      yidoba: "BUY",
      yidojiu: "宣称",
      yidoten: "余额不足",
      yleadertitle: "排行榜",
      yleadercont: "连接并邀请好友提升排名",
      yleadertaby: "序号",
      yleadertabt: "姓名",
      yleadertabthr: "邀请者",
      yleadertabf: "积分",
      yleadersamletitle: "最近加入",
      ystaketitle: "质押",
      ystakesamletitle: "让您的精神令牌为您服务",
      ystaketxt:
        "投资 14 天、30 天或 60 天的质押期，让您的 Spirit 代币不断增长。质押期限越长，您获得的奖励就越大。TVL 0 Spirit 和 0 Spirit-ETH LP",
      ystakelisty: "股息池比例",
      ystakelistt: "质押代币",
      ystakelistthr: "锁仓时间",
      ystakelistf: "平均年产量",
      ystakelistw: "精神",
      ystakelistsix: "每天",
      ystakelistqi: "累计可派发股息",
      ystakelistba: "股息时间",
      ystakelistjiu: "总质押池",
      ystakelistten: "您目前的比例",
      ystakelistteny: "您的总股息",
      ystakelisttent: "未被认领",
      ystakelisttenthr: "您已下注",
      ystakelisttenf: "到期日可赎回",
      ystakelisttenfive: "宣称",
      ystakelisttensix: "赌注",
      ystakelisttenqi: "天",
      ystakelisttenba: "精神-ETH LP",
      ystaketwotitley: "为什么",
      ystaketwotitlet: "质押？",
      ystaketwolistytitle: "链上",
      ystaketwolistytxt:
        "在以太坊网络上进行质押并享受 ERC-4626 质押，这是一种创新的代币化金库标准。",
      ystaketwolistttitle: "自动复合",
      ystaketwolistttxt:
        "当质押奖励支付到金库时，您的 svXAI 会自动复合。无需采取任何行动。",
      ystaketwolistthrtitle: "每日奖励",
      ystaketwolistthrtxt:
        "每天 00:00 UTC 时，25% 的收入将发送至质押金库。每次增加质押奖励时，您都可以从金库中兑换更多的 XAI 来兑换您持有的 svXAI。",
      ystaketwolistftitle: "完全控制和灵活性",
      ystaketwolistftxt:
        "您拥有 svXAI 的完全保管权。将您的以太坊钱包连接到仪表板并在链上累积奖励。",
      ystaketwolistwtitle: "我们成长，你成长",
      ystaketwolistwtxt:
        "随着 SideShift.ai 交易量的增长，每天支付给您的 APY 百分比也会随之增长。",
      ystaketwolistsixtitle: "尖端仪表板",
      ystaketwolistsixtxt:
        "连接您的钱包并通过我们易于使用的仪表板管理您的质押活动。",
      yaridroptitle: "系统处理",
      yaridroptxt: "我们的系统目前正在处理下一个纪元，请继续回来查看。",
      yaridropsamletitle: "轮班流程",
      yaridroplisty: "将“❤️ Memecoin”添加到您的 X 名称中",
      yaridroplistt: "告诉世界！",
      yaridroplistthr: "关注@Memeland",
      yaridroplistf: "邀请代码",
      yaridroplistw: "奖励：1 NFT + 1000 积分",
      yaridroptitlet: "$RATIO 计算器",
      yaridroptabytit: "邮政计算器",
      yaridroptabytxty:
        "使用我们的代码 $RATIO 发布的任何推文都将根据该推文的标准开始赚取积分。",
      yaridroptabytxtt:
        "在此页面的右侧，您会发现我们的帖子计算器，它可以根据您的推文参与度模拟您可以获得多少积分的深入视图。",
      yaridroptabttit: "评论计算器",
      yaridroptabttxty:
        "与帖子计算器不同，评论计算器适用于那些使用我们的代码 $RATIO 在推文下发表评论的人。",
      yaridroptabttxtt:
        "在此页面的右侧，您会找到我们的评论计算器，它可以根据您的评论的成功程度模拟您将获得的积分的深入视图。",
      yaridroptabthrtit: "参与计算器",
      yaridroptabthrtxty:
        "参与度计算器适用于在任何包含 $RATIO 代码的帖子下点赞、转发、评论的任何人。",
      yaridroptabthrtxtt:
        "在此页面的右侧，您会找到我们的参与计算器，它可以根据您与其他人的推文的互动来模拟您可以获得多少积分的深入视图。",
      yaridropregtitle: "连接到您的帐户",
      yaridropregtxt: "您需要完成以下步骤才能完成入职。",
      yaridropregtxtt: "审核人",
      yaridropsubmit: "SUBMIT",
      yaridropswaptitley: "赚取收益+",
      yaridropswaptitlet: "爆炸点的桥梁",
      yaridropswaptxty: "您可以通过桥接 ETH 或稳定币来赚取 Blast 积分。",
      yaridropswaptxtt: "积分可在 5 月兑换 REDACTED",
      yaridropswaptxtthr: "",
      yaridropswapttxty: " 随着时间的推移，您将根据桥接的程度获得更多积分",
      yaridropswapttxtt: "",
      yaridropswappy: "2 月份 Blast 主网启动后即可从桥上提现！",
      yaridropswappt: "",
      yaridropswapry: "YOU CAN BRIDGE",
      yaridropswaprt: "FROM",
      yaridropswaprthr: "Ethereum Mainnet",
      yaridropswaprf: "Balance",
      yaridropswaprwy: "您将收到",
      yaridropswaprwt: "ETH  + 收益 + 旋转积分",
      yaridropcopyy: "邀请好友解锁专属奖励！",
      yaridropcopyt: "复制",
      yaridropcopythr: "已复制",
      yaridropcopyf:
        "请将代码发送给您的朋友。每个朋友完成任务后，您将获得 5 积分以及他们每周积分的 5%。",
    },

    en: {
      tabzero: "HOME",
      tabone: "Stake",
      tabtwo: "REWARDS",
      tabAirdrop: "AIRDROP",
      tabStake: "STAKE",
      tabClaim: "CLAIM",
      tabthree: "Ido",
      foottxtone: "The No Sign-Up Crypto Exchange. Shift",
      foottxttwo: "between BTC, ETH, BCH, XAI and 100+ other",
      foottxtthree: "cryptocurrencies, no account required. 🎈",
      footalistone: ["TREASURY", "INTEGRATIONS", "API", "EMBED", "JOBS"],
      footalisttwo: ["ACCOUNT", "REFER A HUMAN", "FAQ", "BRAND ASSETS"],
      footalistthree: [
        "LISTED COINS",
        "XAI WHITE PAPER",
        "STATISTICS",
        "RESEARCH",
      ],

      yhome: "Claim your first $50 in $GIVE Coins",
      yhometitle: " Register your Twitter and Wallet for our Beta ",
      yhomecont:
        " With Give Coin, you can seamlessly earn coins and show appreciation to your beloved content creators, all while staying within the familiar confines of Twitter/X. Earn $Give Coins and Cash Out. ",
      yhometitlet: "EARLY ACCESS AIRDROP",
      yhomecontt: "Enter your invite code to claim your airdrop",
      thometitle: "xShareBot",
      thomesamletitle: "Edge Wallet",
      thometxty:
        "One of the world’s go-to mobile wallets, Edge is a staple for many humans. Trade your favourite cryptocurrencies inside Edge with SideShift.ai.",
      thometxtt:
        "Learn how to shift inside Edge Wallet in our step-by-step guide.",
      thrhometitle: "MevBot",
      thrhomesamletitle: "Monerujo",
      thrhometxty:
        "An Android wallet for the privacy-focused humans. Monerujo uses remote nodes to synchronize with the Monero blockchain while keeping all of your private data on your device.",
      thrhometxtt:
        "Monerujo users can pay addresses in multiple cryptocurrencies, in-app with SideShift.ai.",

      fhometitle: "Tokennomics",
      fhometxttit: "$Nerd Tokenomics",
      fhometxtsy: "Total supply: ",
      fhometxtst: "Initial Launch Price: ",
      fhometxtsthr: "Contract Address: ",
      fhometxtsbut: "save your slot",
      whometitle: "Roadmap",
      whomelistdy: "QUARTER3+4",
      whomelistdyboxy: "Beta launch",
      whomelistdyboxt: "Weekly pack drops launched",
      whomelistdyboxthr: "WEEKLY RAFFLES LAUNCHED",
      whomelistdyboxf: "IXT Private Sale Completed",
      whomelistdyboxw: "Organisational growth from 0 to 30 people",
      whomelistdyboxs: "On-chain Migration",
      whomelistdyboxq:
        "Airdrop IX Token (IXT) completed to 130,000+ web3 wallets",
      whomelistdyboxba: "Planet IX New Look & Feel",
      whomelistdyboxjiu: "BETA Marketplace Live",
      whomelistdyboxten: "Pack Sales moved On-chain",
      whomelistdyboxteny:
        "IXT Liquidity Pools available on QuickSwap & SushiSwap",
      whomelistdyboxtent: "Planted 300 000 trees ",
      whomelistdyboxtenthr: " with One Tree Planted",
      whomelistdyboxtenf: "Sold 330 million PIX ",
      whomelistdyboxtenw: "(approx. 20% of the map)",
      whomelistdyboxtens: "Beta launch",
      whomelistdt: "QUARTER1",
      whomelistdtboxy: "PIX Inspector",
      whomelistdtboxt: "New UI/UX",
      whomelistdtboxthr: "IXT Private Sale Completed",
      whomelistdtboxf: "Weekly pack drops launched",
      whomelistdtboxw: "WEEKLY RAFFLES LAUNCHED",
      whomelistdtboxs: "Cargo Drop",
      whomelistdtboxq: "Drones",
      sixhometitle: "Some Algorithms by Micro AI",
      sixhometxt:
        "Micro AI is not just one algorithm, but a swarm of intelligently taken market orders that get information from 100+ algorithms, which are getting their data from over 100,000,000 constantly refreshing end-points.",
      sixhomelist: [
        {
          img: "https://assets-global.website-files.com/6518638dadf2a346d345ad76/6541b9bd33d477fdfb4ebb53_Untitled%20design-10.svg",
          txt: "FuturesFuture is using DYDX <-> Bloomberg Data Aggregation to intelligently take news-trades. FuturesFuture is also used to for other algorithms which hold long-term positions to recalculate data. Everything in lightning-speed. Outpacing Competition and Humans.",
          user: "Futures Future",
          usertxt: "BUILT IN JULIA & PYTHON",
        },
        {
          img: "https://assets-global.website-files.com/6518638dadf2a346d345ad76/6541b9bd33d477fdfb4ebb53_Untitled%20design-10.svg",
          txt: "On-Chain-Money-Flow (OCMF) treats Ethereums capital like waves of hype. It intelligently predicts new waves with the help of Arkham and our Social Feeds (IRA & IRAX). OCMF is in a symbiosis with Screener, both benefit from each other’s perspectives.",
          user: "On Chain Money Flow",
          usertxt: "BUILT IN JULIA",
        },
        {
          img: "https://assets-global.website-files.com/6518638dadf2a346d345ad76/6541b9bd33d477fdfb4ebb53_Untitled%20design-10.svg",
          txt: "Screener was the beginning of Micro AI. Screener automatically scans newly generated pairs on Uniswap, frontruns sniping bots, and holds token which are labeled as a 'Strong Buy'.",
          user: "Screener AI",
          usertxt: "BUILT IN RUST & PYTHON & JULIA",
        },
        {
          img: "https://assets-global.website-files.com/6518638dadf2a346d345ad76/6541b9bd33d477fdfb4ebb53_Untitled%20design-10.svg",
          txt: "Layerless is a market maker for wrapped tokens or tokens on several chains, ensuring same price rates even with low liquidity on one chain. AI calculated buying & selling pressure. Layerless Bot is able to be booked by protocols. AIaaS. (ETA: 2024 Q4)",
          user: "Layerless Bot (In Development)",
          usertxt: "BUILDING IN JULIA & PYTHON",
        },
      ],
      yidoy: "Max",
      yidot: "Balance : ",
      yidothr: "Amount",
      yidofour: "Total raised amount:",
      yidofive: "Presale price:",
      yidosix: "Minimun buy amount:",
      yidoqi: "Ends in:",
      yidoba: "BUY",
      yidojiu: "CLAIM",
      yidoten: "INSUFFICIENT BALANCE",
      yleadertitle: "Leaderboard",
      yleadercont: "Bridge & Invite friends to rank up",
      yleadertaby: "RANK",
      yleadertabt: "NAME",
      yleadertabthr: "INVITED BY",
      yleadertabf: "POINTS",
      yleadersamletitle: "Recent Joins",
      ystaketitle: "Staking",
      ystakesamletitle: "MAKE YOUR SPIRIT TOKEN WORK FOR YOU",
      ystaketxt:
        "Invest in staking periods of 14, 30, or 60 days and let your Spirit Tokens grow. The longer the staking period, the greater therewards you'll reap. TVL 0 Spirit and 0 Spirit-ETH LP",
      ystakelisty: "PROPORTION OF DIVIDEND POOL",
      ystakelistt: "STAKING TOKEN",
      ystakelistthr: "STAKING LOCK-UP TIME",
      ystakelistf: "APY",
      ystakelistw: "SPIRIT",
      ystakelistsix: "Everyday",
      ystakelistqi: "CUMULATIVE DIVIDENDS AVAILABLE",
      ystakelistba: "DIVIDEND TIME",
      ystakelistjiu: "TOTAL STAKED POOL",
      ystakelistten: "YOUR CURRENT PROPORTION",
      ystakelistteny: "YOUR TOTAL DIVIDEND",
      ystakelisttent: "NOT BEEN CLAIMED",
      ystakelisttenthr: "YOU HAVE STAKED",
      ystakelisttenf: "REDEEMABLE UPIN MATURITY",
      ystakelisttenfive: "CLAIM",
      ystakelisttensix: "STAKE",
      ystakelisttenqi: "DAYS",
      ystakelisttenba: "SPIRIT-ETH LP",
      ystaketwotitley: "Why",
      ystaketwotitlet: "Stake?",
      ystaketwolistytitle: "ON-CHAIN",
      ystaketwolistytxt:
        "Stake on the Ethereum Network and enjoy ERC-4626 staking, an innovative tokenized vault standard.",
      ystaketwolistttitle: "AUTO-COMPOUNDING",
      ystaketwolistttxt:
        "Your svXAI is automatically compounded as staking rewards are paid into the vault. No action required.",
      ystaketwolistthrtitle: "DAILY REWARDS",
      ystaketwolistthrtxt:
        "25% of revenue is sent to the staking vault every day at 00:00 UTC. Every time staking rewards are added, you can redeem more XAI from the vault for the svXAI you hold.",
      ystaketwolistftitle: "FULL CONTROL & FLEXIBILITY",
      ystaketwolistftxt:
        "You have full custody of your svXAI. Connect your Ethereum wallet to the dashboard and accrue rewards on-chain.",
      ystaketwolistwtitle: "WE GROW, YOU GROW",
      ystaketwolistwtxt:
        "As SideShift.ai’s volume grows, the APY percentage paid to you every day does too.",
      ystaketwolistsixtitle: "CUTTING EDGE DASHBOARD",
      ystaketwolistsixtxt:
        "Hook up your wallet and manage your staking activities from our easy-to-use dashboard.",
      yaridroptitle: "SYSTEM PROCESSING",
      yaridroptxt:
        "Our system is currently processing for the next epoch, please continue to check back.",
      yaridropsamletitle: "Shift Process",
      yaridroplisty: "Add “❤️ Memecoin” to your X name",
      yaridroplistt: "Tell the world!",
      yaridroplistthr: "Follow @Memeland",
      yaridroplistf: "Invitation code",
      yaridroplistw: "Reward: 1 NFT + 1000 POINTS",
      yaridroptitlet: "$RATIO Calculator",
      yaridroptabytit: "Post Calculator",
      yaridroptabytxty:
        "Any tweet that is posted using our ticker $RATIO will begin earning points based on the criteria of that said tweet.",
      yaridroptabytxtt:
        "On the right side of this page you will find our Post Calculator that simulates an in depth view of how many points you'd earn based on the engagement of your Tweet.",
      yaridroptabttit: "Comment Calculator",
      yaridroptabttxty:
        "Unlike the Post Calculator, the Comment Calculator is for those who comment under a tweet using our ticker $RATIO.",
      yaridroptabttxtt:
        "On the right side of this page you will find our Comment Calculator that simulates an in depth view of how many points you'd earn based on the success of your comment.",
      yaridroptabthrtit: "Engager Calculator",
      yaridroptabthrtxty:
        "The Engagement calculator is for anybody that likes, retweets, comments under any post that contains the ticker $RATIO.",
      yaridroptabthrtxtt:
        "On the right side of this page you will find our Engager Calculator that simulates an in depth view of how many points you'd earn based off your engagement with other people's Tweets.",
      yaridropregtitle: "CONNECT TO YOUR ACCOUNT",
      yaridropregtxt:
        "You will need to complete the follow steps to complete your onboarding.",
      yaridropregtxtt: "Audited by",
      yaridropsubmit: "SUBMIT",
      yaridropswaptitley: "Bridge to Earn Yield +",
      yaridropswaptitlet: "BLAST POINTS",
      yaridropswaptxty: "You can earn Blast Points by bridging",
      yaridropswaptxtt: "ETH or stablecoins. Points can be",
      yaridropswaptxtthr: "redeemed for REDACTED in May",
      yaridropswapttxty: " You will earn more Points over time",
      yaridropswapttxtt: "based on how much you bridge",
      yaridropswappy:
        "Withdrawing from the bridge will be available after the ",
      yaridropswappt: "Blast Mainnet launches in February!",
      yaridropswapry: "YOU CAN BRIDGE",
      yaridropswaprt: "FROM",
      yaridropswaprthr: "Ethereum Mainnet",
      yaridropswaprf: "Balance",
      yaridropswaprwy: "You will receive",
      yaridropswaprwt: "ETH + Yield + Spins for Points",
      yaridropcopyy: "Invite friends to unlock exclusive rewards!",
      yaridropcopyt: "COPY",
      yaridropcopythr: "COPYED",
      yaridropcopyf:
        "Please send the code to your friends. You'll get 5 points perfriend and 5% of their weekly points when they complete thetasks.",
    },
  },
  mutations: {
    changeyy(state, str) {
      state.txt = state[str];
    },
  },
  actions: {
    // incrementAsync({ commit }) {
    //   setTimeout(() => {
    //     commit("increment");
    //   }, 1000);
    // },
  },
  getters: {},
});

export default store;