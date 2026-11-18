import rx78HeroImg from '../assets/images/gundam_rx78_hero_1794966435768.jpg';
import zakuRedImg from '../assets/images/zaku_ms06s_red_1794966436180.jpg';
import nuGundamImg from '../assets/images/gundam_nu_rx93_1794966436553.jpg';
import unicornImg from '../assets/images/gundam_unicorn_rx0_1794966436296.jpg';
import freedomImg from '../assets/images/gundam_freedom_strike_1794966437601.jpg';
import barbatosImg from '../assets/images/gundam_barbatos_frame_1794966437976.jpg';

export type EraCategory = 'all' | 'uc' | 'ce' | 'pd';

export interface Armament {
  name: string;
  spec: string;
}

export interface MobileSuit {
  id: string;
  accessionNo: string;
  modelNumber: string;
  nameZh: string;
  nameEn: string;
  eraCategory: Exclude<EraCategory, 'all'>;
  timelineLabel: string;
  yearNumeric: number;
  faction: string;
  manufacturer: string;
  pilot: string;
  heightMeters: number;
  weightTons: number;
  reactorOutputKw: number;
  thrusterKg: number;
  sensorRadiusM: number;
  armorMaterial: string;
  image: string;
  caption: string;
  summary: string;
  engineeringNote: string;
  armaments: Armament[];
}

export interface HistoricalEra {
  id: string;
  index: string;
  eraCode: string;
  title: string;
  subtitle: string;
  span: string;
  leadQuote: string;
  essayLead: string;
  essayBody: string;
  keyTurningPoints: { year: string; event: string }[];
  casualtyOrScaleNote: string;
  featuredSuitIds: string[];
}

export interface EngineeringPillar {
  id: string;
  index: string;
  title: string;
  eraOrigin: string;
  summary: string;
  mechanism: string;
  specifications: { label: string; value: string }[];
}

export const HERO_FEATURE_IMAGE = rx78HeroImg;

export const MOBILE_SUITS: MobileSuit[] = [
  {
    id: 'rx-78-2',
    accessionNo: 'MS-ARC-001',
    modelNumber: 'RX-78-2',
    nameZh: '初代鋼彈',
    nameEn: 'Gundam',
    eraCategory: 'uc',
    timelineLabel: 'U.C. 0079',
    yearNumeric: 79,
    faction: '地球聯邦軍 (E.F.S.F.)',
    manufacturer: '地球聯邦軍 V 作戰開發團隊',
    pilot: '阿姆羅·雷 (Amuro Ray)',
    heightMeters: 18.0,
    weightTons: 60.0,
    reactorOutputKw: 1380,
    thrusterKg: 55500,
    sensorRadiusM: 5700,
    armorMaterial: '月神鈦合金 (Luna Titanium)',
    image: rx78HeroImg,
    caption: 'Fig. 01 — RX-78-2 初代鋼彈 · Side 7 整備格納庫實機檔案',
    summary: '地球聯邦軍「V 作戰」的核心結晶，首度在機動戰士上搭載戰艦等級光束步槍與核心戰機脫出系統。',
    engineeringNote:
      '採用教育型電腦（Learning Computer）紀錄實戰機動數據，並透過月神鈦合金有效抵禦薩克機槍的實彈貫穿。後期更施作磁氣覆膜（Magnetic Coating）以跟上新人類駕駛員的反應速度。',
    armaments: [
      { name: '60mm 頭部火神砲 ×2', spec: '近距離牽制與飛彈攔截用實彈火砲' },
      { name: 'XBR-M-79-07G 光束步槍', spec: '搭載 E-Cap 技術，具備媲美戰艦主砲的貫穿力' },
      { name: '光束軍刀 ×2', spec: '利用 I 力場約束高熱米諾夫斯基電漿體' },
      { name: 'BLASH·XHB-L-03/N-STD 超絕火箭砲', spec: '380mm 實彈高爆武裝，對要塞與艦艇專用' },
      { name: 'RX·M-Sh-008/S-01025 專用盾牌', spec: '月神鈦合金複合防禦層板' },
    ],
  },
  {
    id: 'ms-06s',
    accessionNo: 'MS-ARC-002',
    modelNumber: 'MS-06S',
    nameZh: '夏亞專用薩克 II',
    nameEn: "Char's Zaku II Commander Type",
    eraCategory: 'uc',
    timelineLabel: 'U.C. 0079',
    yearNumeric: 79,
    faction: '吉翁公國軍 (Principality of Zeon)',
    manufacturer: '吉翁尼克公司 (Zeonic)',
    pilot: '夏亞·阿茲納布爾 (Char Aznable)',
    heightMeters: 17.5,
    weightTons: 74.5,
    reactorOutputKw: 976,
    thrusterKg: 51600,
    sensorRadiusM: 3200,
    armorMaterial: '超高張力鋼 (Super Hard Steel Alloy)',
    image: zakuRedImg,
    caption: 'Fig. 02 — MS-06S 指揮官機 · 魯烏姆戰役後深空整備記錄',
    summary: '在量產型 MS-06F 基礎上取消出力限制器並強化推進系統的指揮官特化機，憑藉「紅色彗星」的戰績震懾聯邦艦隊。',
    engineeringNote:
      '透過將發電機與姿態制御推進器重新校準，加速性能較標準型提升約 30%，對機體結構與駕駛員體能造成極高負荷。頭部天線兼任強化型通信中繼器。',
    armaments: [
      { name: 'ZMP-50D 120mm 薩克機槍', spec: '彈鼓供彈式實彈步槍，泛用性極高' },
      { name: 'H&L-SB25K/280mmA-P 薩克火箭砲', spec: '配備對艦高爆彈頭的肩扛式火砲' },
      { name: '熱能斧 (Heat Hawk)', spec: '刃部通電加熱至高溫以熔斷裝甲' },
      { name: '肩部衝撞尖刺裝甲', spec: '配合高推力進行近距離衝撞突擊' },
    ],
  },
  {
    id: 'rx-93',
    accessionNo: 'MS-ARC-003',
    modelNumber: 'RX-93',
    nameZh: 'ν 鋼彈',
    nameEn: 'ν Gundam (Nu Gundam)',
    eraCategory: 'uc',
    timelineLabel: 'U.C. 0093',
    yearNumeric: 93,
    faction: '地球聯邦軍 隆德·貝爾隊',
    manufacturer: '亞納海姆電子公司 (Anaheim Electronics)',
    pilot: '阿姆羅·雷 (Amuro Ray)',
    heightMeters: 23.0,
    weightTons: 63.0,
    reactorOutputKw: 2980,
    thrusterKg: 97800,
    sensorRadiusM: 21300,
    armorMaterial: '鋼彈尼姆合金 (Gundarium Alloy)',
    image: nuGundamImg,
    caption: 'Fig. 03 — RX-93 ν 鋼彈 · 不對稱翼狀感應砲搭載架構',
    summary: '阿姆羅·雷親自參與基礎設計的集大成之作，首次在骨架中導入「精神感應框架」，實現高可靠性與新人類兵器技術的融合。',
    engineeringNote:
      '背部左翼掛載 6 具獨立核融合發電型「翼狀感應砲（Fin Funnel）」，不僅能進行多角度遠距光束齊射，更可展開三角形 I 力場護盾抵禦敵方光束兵器。',
    armaments: [
      { name: '翼狀感應砲 (Fin Funnel) ×6', spec: '內建獨立發電爐的遠距無線光束與防禦屏障系統' },
      { name: '專用光束步槍', spec: '可切換連射與高出力狙擊模式的精密步槍' },
      { name: '新超絕火箭砲 (New Hyper Bazooka)', spec: '可掛載於背包並支援無線遙控擊發' },
      { name: '大型光束軍刀 & 預備軍刀', spec: '高出力雙刃型格鬥兵器' },
    ],
  },
  {
    id: 'rx-0',
    accessionNo: 'MS-ARC-004',
    modelNumber: 'RX-0',
    nameZh: '獨角獸鋼彈',
    nameEn: 'Unicorn Gundam',
    eraCategory: 'uc',
    timelineLabel: 'U.C. 0096',
    yearNumeric: 96,
    faction: '畢斯特財團 / 地球聯邦軍',
    manufacturer: '亞納海姆電子公司 (UC 計畫)',
    pilot: '巴納吉·林克斯 (Banagher Links)',
    heightMeters: 21.7,
    weightTons: 42.7,
    reactorOutputKw: 3480,
    thrusterKg: 142600,
    sensorRadiusM: 22000,
    armorMaterial: '鋼彈尼姆合金 / 全精神感應框架',
    image: unicornImg,
    caption: 'Fig. 04 — RX-0 獨角獸鋼彈 · NT-D 毀滅模式展開形態展示',
    summary: '「UC 計畫」的核心實驗機，全機內部骨架完全採用精神感應框架打造，作為開啟「拉普拉斯之盒」的鑰匙。',
    engineeringNote:
      '在偵測到敵方新人類或強化人腦波時啟動 NT-D（Newtype Destroyer）系統，純白裝甲滑移展開露出紅光骨架，同時接管敵機的精神感應武裝。',
    armaments: [
      { name: '光束麥格農 (Beam Magnum)', spec: '單發耗費整支 E-Pack，具備一擊蒸發目標的極限威力' },
      { name: '感應盾牌 (Shield) ×1', spec: '內藏 I 力場發生器並具精神感應獨立飛行能力' },
      { name: '光束軍刀 ×4', spec: '前腕內藏光束拐與背包標準軍刀' },
      { name: '60mm 火神砲 ×2', spec: '頭部內藏式近接防禦火砲' },
    ],
  },
  {
    id: 'zgmf-x10a',
    accessionNo: 'MS-ARC-005',
    modelNumber: 'ZGMF-X10A',
    nameZh: '自由鋼彈',
    nameEn: 'Freedom Gundam',
    eraCategory: 'ce',
    timelineLabel: 'C.E. 71',
    yearNumeric: 71,
    faction: '三艦同盟 (克萊茵派 / 永恆號)',
    manufacturer: 'P.L.A.N.T. 統合設計局',
    pilot: '煌·大和 (Kira Yamato)',
    heightMeters: 18.03,
    weightTons: 71.5,
    reactorOutputKw: 8826,
    thrusterKg: 124000,
    sensorRadiusM: 18500,
    armorMaterial: '相轉移裝甲 (Phase Shift Armor)',
    image: freedomImg,
    caption: 'Fig. 05 — ZGMF-X10A 自由鋼彈 · 高機動空戰翼與齊射火控系統',
    summary: '搭載「反中子干擾器」與核動力爐的次世代機體，擁有近乎無限的相轉移裝甲續航力與同時鎖定多目標的火控能力。',
    engineeringNote:
      '配備五對高機動空戰翼（HiMAT Mode），配合多重鎖定系統（Multi-Lock-On System）與背部電漿收束光束砲、腰部磁軌砲構成「全砲門齊射」戰術。',
    armaments: [
      { name: 'M100 鯨式電漿收束光束砲 ×2', spec: '收納於雙翼之間的高威力長程光束主砲' },
      { name: 'MMI-M15 旗魚式磁軌砲 ×2', spec: '折疊於腰際，無須耗費大量電力的電磁加速實彈砲' },
      { name: 'MA-M20 狼式光束步槍', spec: '核動力直供的高出力標準光束步槍' },
      { name: 'MA-M01 蜥式光束軍刀 ×2', spec: '可雙頭連結成光束長矛使用' },
    ],
  },
  {
    id: 'asw-g-08',
    accessionNo: 'MS-ARC-006',
    modelNumber: 'ASW-G-08',
    nameZh: '獵魔鋼彈',
    nameEn: 'Gundam Barbatos',
    eraCategory: 'pd',
    timelineLabel: 'P.D. 323',
    yearNumeric: 323,
    faction: '鐵華團 (Tekkadan)',
    manufacturer: '末日號角 (300年前厄祭戰開發)',
    pilot: '三日月·奧古斯 (Mikazuki Augus)',
    heightMeters: 18.0,
    weightTons: 28.5,
    reactorOutputKw: 2450,
    thrusterKg: 76000,
    sensorRadiusM: 9800,
    armorMaterial: '奈米積層裝甲 (Nano-Laminate Armor)',
    image: barbatosImg,
    caption: 'Fig. 06 — ASW-G-08 獵魔鋼彈 · 火星地下發掘亞哈雙爐骨架展示',
    summary: '歷經三百年厄祭戰仍保持機能的 72 架鋼彈骨架之一，透過阿賴耶識系統實現人機神經直連與極限近接格鬥。',
    engineeringNote:
      '雙胸搭載兩具可產生人工重力與推進力的亞哈反應爐（Ahab Reactor）。摒棄光束武器，利用超硬質錘矛與大太刀以純物理動能粉碎覆蓋奈米積層裝甲的敵機。',
    armaments: [
      { name: '大型戰錘 (Mace)', spec: '使用稀有金屬製成，先端內藏可貫穿骨架的衝擊長針' },
      { name: '太刀 (Katana)', spec: '輕量化高硬度實刃，專攻敵機裝甲間隙與關節' },
      { name: '300mm 滑膛砲', spec: '折疊收納於背包的長程實彈支援火砲' },
      { name: '腕部 200mm 砲 / 裝甲護爪', spec: '因應多場戰役現場改裝的模組化近接武裝' },
    ],
  },
];

export const HISTORICAL_ERAS: HistoricalEra[] = [
  {
    id: 'uc-0079',
    index: '01',
    eraCode: 'U.C. 0079',
    title: '一年戰爭與 V 作戰',
    subtitle: '機動戰士登上星際戰場主舞台的關鍵元年',
    span: 'U.C. 0079.01 — U.C. 0080.01',
    leadQuote: '「機動戰士的出現，徹底改寫了宇宙艦隊決戰的物理距離與戰術邏輯。」',
    essayLead:
      '宇宙世紀 0079 年 1 月，吉翁公國對地球聯邦發動獨立戰爭。由於米諾夫斯基粒子廣泛散布使長程雷達與誘導飛彈失效，戰爭重新回歸目視距離內的格鬥與砲擊。吉翁軍憑藉先發量產的 MS-06 薩克 II 在魯烏姆戰役擊潰聯邦大艦隊；而地球聯邦則於 Side 7 秘密推進「V 作戰」，開發出搭載光束步槍與月神鈦合金裝甲的 RX-78-2 鋼彈。',
    essayBody:
      '隨著白色基地部隊橫跨歐亞與北美大陸，並在年底的所羅門攻略戰與阿·巴瓦·空要塞決戰中突破極限，人型機動兵器正式取代傳統宇宙戰艦，成為往後半世紀星際政治與軍事平衡的唯一基準。',
    keyTurningPoints: [
      { year: 'U.C. 0079.01', event: '魯烏姆戰役爆發，吉翁軍薩克部隊展現壓倒性機動戰力' },
      { year: 'U.C. 0079.09', event: 'Side 7 遇襲，民間少年阿姆羅·雷首次啟動 RX-78-2 鋼彈' },
      { year: 'U.C. 0079.11', event: '奧德薩反攻戰勝利，聯邦軍量產機吉姆 (RGM-79) 全面投入' },
      { year: 'U.C. 0079.12', event: '阿·巴瓦·空要塞最終決戰，一年戰爭於元旦簽署終戰協定' },
    ],
    casualtyOrScaleNote: '一年戰爭造成地球圈半數以上人口殞落，並催生後續多世代可變形與新人類專用機體。',
    featuredSuitIds: ['rx-78-2', 'ms-06s'],
  },
  {
    id: 'uc-0093',
    index: '02',
    eraCode: 'U.C. 0093',
    title: '第二次新吉翁抗爭',
    subtitle: '阿克西斯墜落危機與精神感應框架的誕生',
    span: 'U.C. 0093.02 — U.C. 0093.03',
    leadQuote: '「承載人類意志的光芒，首次在物理力場層面扭轉了小行星的軌道。」',
    essayLead:
      '歷經格里普斯戰役與第一次新吉翁動亂後，曾化名潛伏的夏亞·阿茲納布爾再度現身並統率新生新吉翁，試圖藉由將小行星阿克西斯推落地球來強制促成全人類移居宇宙。面對聯邦高層的綏靖態度，獨立治安部隊隆德·貝爾隊緊急委託亞納海姆電子公司趕工製造 RX-93 ν 鋼彈。',
    essayBody:
      '亞納海姆在 ν 鋼彈開發末期意外取得由新吉翁流出的「精神感應框架」基礎技術，將其整合進駕駛艙周圍結構。最終阿姆羅與夏亞在阿克西斯地表展開宿命對決，精神感應框架產生超越機械極限的「阿克西斯衝擊」共鳴現象，將墜落中的巨大岩塊推離地球軌道。',
    keyTurningPoints: [
      { year: 'U.C. 0093.03.03', event: '新吉翁艦隊占領小行星第五月神並將其墜落於地球拉薩基地' },
      { year: 'U.C. 0093.03.06', event: '隆德·貝爾隊於月神二號周邊接收已完成測試的 RX-93 ν 鋼彈' },
      { year: 'U.C. 0093.03.12', event: '阿克西斯攻防戰爆發，翼狀感應砲與沙薩比展開高密度對決' },
    ],
    casualtyOrScaleNote: '阿克西斯共鳴現象令聯邦軍高層深感恐懼，進而促使 RX-0 獨角獸計畫於 U.C. 0094 年秘密凍結與重構。',
    featuredSuitIds: ['rx-93'],
  },
  {
    id: 'uc-0096',
    index: '03',
    eraCode: 'U.C. 0096',
    title: '拉普拉斯事變',
    subtitle: '封存近百年的聯邦憲章與獨角獸鋼彈覺醒',
    span: 'U.C. 0096.04 — U.C. 0096.05',
    leadQuote: '「唯有具備可能性之獸，方能開啟宇宙世紀誕生之初的禁忌篇章。」',
    essayLead:
      '宇宙世紀 0096 年，握有聯邦誕生秘辛「拉普拉斯之盒」的畢斯特財團試圖將盒中真相交還給袖付（新吉翁殘黨），卻引來地球聯邦軍特殊部隊隆德·貝爾與洛德·貝爾的攔截。於工業七號殖民地內部，少年巴納吉·林克斯在危機中受託駕駛全精神感應框架實驗機 RX-0 獨角獸鋼彈。',
    essayBody:
      '不同於僅在駕駛艙局部採用的 ν 鋼彈，獨角獸鋼彈全身可動骨架皆以精神感應材料鑄造，並透過拉普拉斯程式引導駕駛員前往揭開元號憲章第七章第 15 條「承認新人類優先參與政府權力」的歷史鐵證，重新定義人與宇宙的共處之道。',
    keyTurningPoints: [
      { year: 'U.C. 0096.04', event: '工業七號交戰，獨角獸鋼彈首次觸發 NT-D 毀滅模式擊退剎帝利' },
      { year: 'U.C. 0096.05', event: '特林頓基地攻防與迦樓羅運輸機高空奪還戰' },
      { year: 'U.C. 0096.05.17', event: '墨瓦臘泥加最終決戰，衛星雷射「格里普斯 2」被全裝甲感應力場阻擋' },
    ],
    casualtyOrScaleNote: '事變結束後，聯邦與亞納海姆將 RX-0 系列機體視為危險技術予以全面封存管理。',
    featuredSuitIds: ['rx-0'],
  },
  {
    id: 'ce-71',
    index: '04',
    eraCode: 'C.E. 71',
    title: '宇宙紀元與自由降臨',
    subtitle: '相轉移裝甲與反中子干擾器的技術躍進',
    span: 'C.E. 70 — C.E. 71',
    leadQuote: '「當核能突破反中子干擾的封鎖，戰場上便誕生了超越單一陣營的機動火力。」',
    essayLead:
      '在宇宙紀元（Cosmic Era），基因調整者組成的 P.L.A.N.T. 與自然人主導的地球聯合軍爆發全面衝突。P.L.A.N.T. 在戰火中投入了中子干擾器（N-Jammer），導致地球陷入能源枯竭與核武器失效；然而雙方隨即在機動戰士領域展開「G 兵器」與「ZGMF-X」核動力試驗機的軍備競賽。',
    essayBody:
      '搭載反中子干擾器的 ZGMF-X10A 自由鋼彈在被託付給煌·大和後，立即投入阿拉斯加與歐普防衛戰。憑藉幾乎無限的電力供應與高機動空戰翼系統，自由鋼彈以非致死精準射擊癱瘓敵機武裝，開創了異於傳統毀滅戰術的新型武力介入模式。',
    keyTurningPoints: [
      { year: 'C.E. 71.05.05', event: '阿拉斯加基地防衛戰，自由鋼彈首度突破大氣層降臨戰場' },
      { year: 'C.E. 71.06', event: '大天使號與永恆號會合，形成超越陣營的三艦同盟' },
      { year: 'C.E. 71.09.27', event: '第二次雅金·杜威攻防戰，成功阻止「創世紀」伽馬射線砲發射' },
    ],
    casualtyOrScaleNote: '戰後簽署《尤尼烏斯條約》，明文禁止在軍事兵器上繼續搭載反中子干擾器與幻象粒子。',
    featuredSuitIds: ['zgmf-x10a'],
  },
  {
    id: 'pd-323',
    index: '05',
    eraCode: 'P.D. 323',
    title: '災厄戰後三百年',
    subtitle: '亞哈雙爐骨架與火星鐵華團的孤高突擊',
    span: 'P.D. 323 — P.D. 325',
    leadQuote: '「光束早已沉睡於歷史灰燼，決定勝負的是鋼鐵重量與神經直連的執念。」',
    essayLead:
      '距離毀滅性的「厄祭戰（Calamity War）」已過去三百年，宇宙治安由掌握雙亞哈爐技術的「末日號角」維持。在資源遭壓榨的火星克里斯市，少年武裝組織鐵華團為了護送追求獨立的少女古荻莉亞前往地球，啟動了埋藏在民間警備公司地下、作為基地發電設備使用的古老機體——ASW-G-08 獵魔鋼彈。',
    essayBody:
      '受惠於三百年前為對抗無人兵器 MA（Mobile Armor）而開發的「鋼彈骨架」與神經移植介面「阿賴耶識系統」，獵魔鋼彈捨棄華麗的遠程光束兵器，在一次次近身搏殺中奪取敵機裝甲與零件進行現場改裝，寫下極具工業粗獷美感的實彈近戰傳奇。',
    keyTurningPoints: [
      { year: 'P.D. 323', event: 'CGS 基地襲擊事件，三日月·奧古斯以獵魔鋼彈第一形態擊退格雷茲' },
      { year: 'P.D. 323', event: '多特殖民地工人暴動與艾德蒙頓議會外圍決戰' },
      { year: 'P.D. 325', event: '火星發掘出封印中的遠古大型無人機哈斯蒙，揭開鋼彈骨架誕生原點' },
    ],
    casualtyOrScaleNote: '全系列僅存 72 架鋼彈骨架編號，每架皆以所羅門七十二柱魔神命名。',
    featuredSuitIds: ['asw-g-08'],
  },
];

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    id: 'minovsky',
    index: '01',
    title: '米諾夫斯基物理與超小型核融合爐',
    eraOrigin: 'U.C. 0047 — U.C. 0079',
    summary: '改變宇宙戰爭型態的基礎粒子理論，使 18 公尺級人型兵器具備高出力自主發電與低電磁可偵測性。',
    mechanism:
      '在氦-3（³He）與氘進行核融合的過程中，反應爐會大量釋放具有正負電交互排斥排列特性的「米諾夫斯基粒子（M-Particle）」。當粒子散布於戰場空間時，會形成屏蔽微波、長波雷達與紅外線導引系統的干擾網，迫使雙方退回光學目視接戰；同時利用高密度 I 力場約束電漿，更催生了能縮小至背包尺寸的米諾夫斯基-伊約涅斯科型熱核反應爐與光束兵器。',
    specifications: [
      { label: '核心反應燃料', value: '氦-3 (³He) + 重氫 (²H)' },
      { label: '關鍵衍生防護', value: 'I 力場屏障 (I-Field Barrier)' },
      { label: '戰場電磁影響', value: '阻斷雷達 / 傳統無線電通訊' },
      { label: '代表性推進突破', value: '米諾夫斯基飄浮系統 (重力下浮空)' },
    ],
  },
  {
    id: 'metallurgy',
    index: '02',
    title: '月神鈦合金與鋼彈尼姆 γ 冶金學',
    eraOrigin: 'U.C. 0078 — U.C. 0096',
    summary: '為了在減輕機體質量的同時抵禦實彈與部分熱能衝擊而開發的超低比重高強度複合裝甲材料。',
    mechanism:
      '最初於月球礦脈低重力真空環境下提煉出的鈦合金基底（Luna Titanium），其密度遠低於傳統超高張力鋼，卻能完全彈開一年戰爭時期標準 120mm 實彈。至格里普斯戰役期間，亞納海姆電子公司進一步結合多種稀有金屬與陶瓷複合層，精煉出兼具輕量化與抗光束擴散塗層適應性的「鋼彈尼姆 γ（Gundarium Gamma）」，成為第二世代以後可變形與高機動鋼彈的標準外殼。',
    specifications: [
      { label: '初代表記名稱', value: '月神鈦合金 (Luna Titanium)' },
      { label: '抗衝擊指標', value: '可耐受 120mm 穿甲實彈近距離直擊' },
      { label: '二世代演化材', value: '鋼彈尼姆 γ 複合陶瓷合金' },
      { label: '替代塗層技術', value: '抗光束耐高溫塗層 (Anti-Beam Coating)' },
    ],
  },
  {
    id: 'psycho-frame',
    index: '03',
    title: '精神感應框架 (Psycho-Frame)',
    eraOrigin: 'U.C. 0093 — U.C. 0096',
    summary: '將奈米級感應晶片直接鑄造於金屬構造晶格之內的終極人機感應介面。',
    mechanism:
      '早期塞可謬系統（Psycommu）體積龐大，難以搭載於標準尺寸機動戰士。亞納海姆透過微米乃至奈米製程，將感應腦波的受體與傳導晶片封裝於高強度金屬骨架原子層之間，令整個機體結構本身化作巨大天線。此設計讓駕駛員只需透過思考便能精細操控高達 6 具翼狀感應砲或引發跨物理維度的 I 力場共振。',
    specifications: [
      { label: '微縮技術層級', value: '金屬晶格嵌入式感應晶片' },
      { label: '首次實戰搭載', value: 'MSN-04 沙薩比 / RX-93 ν 鋼彈' },
      { label: '全骨架特化機', value: 'RX-0 獨角獸鋼彈系列 (NT-D)' },
      { label: '光學共鳴色譜', value: '紅光（標準閾值）→ 綠光（覺醒高維共鳴）' },
    ],
  },
  {
    id: 'ahab-nano',
    index: '04',
    title: '亞哈雙爐與奈米積層裝甲',
    eraOrigin: 'P.D. 000 — P.D. 323',
    summary: '捨棄光束依賴，透過相變重力反應爐與分子級蒸鍍塗層構築的純物理高強度作戰體系。',
    mechanism:
      '亞哈反應爐透過內部真空相轉移釋放的「亞哈波」提供近乎半永久的能量與人工重力緩衝（令駕駛員免於高 G 力暈厥）。同時外裝甲表面覆蓋與亞哈波連動結晶化的「奈米積層裝甲（Nano-Laminate Armor）」，能將光束能量高速擴散反射，使得戰場全面回歸重裝甲破甲槌、實刃太刀與大口徑滑膛砲的肉搏時代。',
    specifications: [
      { label: '雙爐同步率', value: '唯有鋼彈骨架能達成雙亞哈爐並聯輸出' },
      { label: '裝甲失效條件', value: '重擊剝離塗層或極高熱長時灼燒' },
      { label: '神經直連裝置', value: '阿賴耶識系統 (Alaya-Vijnana)' },
      { label: '核心戰術特徵', value: '無光束兵器、高動能實彈與近接格鬥' },
    ],
  },
];
