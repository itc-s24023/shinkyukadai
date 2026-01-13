import React, { useState, useEffect } from 'react';
import { Timer, Trophy, Target, Zap, ArrowRight, RotateCcw, Star } from 'lucide-react';

// 型定義
type GameMode = 'title' | 'select' | 'category' | 'quiz' | 'shiritori' | 'result' | 'ranking';
type QuizCategory = 'random' | 'basic' | 'geography' | 'science' | 'math' | 'animals' | 'history' | 'sports' | 'food' | 'language' | 'life';
type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  timeLimit: number;
  category: QuizCategory;
};

// クイズ問題データ(100問)
const QUIZ_DATA_POOL: QuizQuestion[] = [
  // 基礎知識
  { id: 1, question: "日本で一番高い山は?", options: ["富士山", "北岳", "槍ヶ岳", "立山"], correct: 0, timeLimit: 10, category: 'basic' },
  { id: 2, question: "地球の衛星は?", options: ["火星", "金星", "月", "太陽"], correct: 2, timeLimit: 10, category: 'basic' },
  { id: 3, question: "日本の首都は?", options: ["大阪", "京都", "東京", "名古屋"], correct: 2, timeLimit: 10, category: 'basic' },
  { id: 4, question: "1年は何日?", options: ["364日", "365日", "366日", "360日"], correct: 1, timeLimit: 10, category: 'basic' },
  { id: 5, question: "太陽系で最も大きい惑星は?", options: ["土星", "木星", "天王星", "海王星"], correct: 1, timeLimit: 10, category: 'basic' },
  { id: 6, question: "猫の鳴き声は?", options: ["ワンワン", "モーモー", "ニャーニャー", "コケコッコー"], correct: 2, timeLimit: 10, category: 'basic' },
  { id: 7, question: "1 + 1 = ?", options: ["1", "2", "3", "4"], correct: 1, timeLimit: 8, category: 'basic' },
  { id: 8, question: "赤と青を混ぜると?", options: ["緑", "紫", "オレンジ", "黄色"], correct: 1, timeLimit: 10, category: 'basic' },
  { id: 9, question: "1週間は何日?", options: ["5日", "6日", "7日", "8日"], correct: 2, timeLimit: 8, category: 'basic' },
  { id: 10, question: "日本の国旗の色は?", options: ["赤と白", "青と白", "赤と青", "緑と白"], correct: 0, timeLimit: 10, category: 'basic' },
  
  // 地理
  { id: 11, question: "太陽が昇る方角は?", options: ["西", "東", "南", "北"], correct: 1, timeLimit: 10, category: 'geography' },
  { id: 12, question: "世界で一番大きい国は?", options: ["中国", "アメリカ", "ロシア", "カナダ"], correct: 2, timeLimit: 10, category: 'geography' },
  { id: 13, question: "エジプトのピラミッドがある都市は?", options: ["カイロ", "アレクサンドリア", "ルクソール", "アスワン"], correct: 0, timeLimit: 12, category: 'geography' },
  { id: 14, question: "オーストラリアの首都は?", options: ["シドニー", "メルボルン", "キャンベラ", "ブリスベン"], correct: 2, timeLimit: 12, category: 'geography' },
  { id: 15, question: "日本で一番長い川は?", options: ["利根川", "信濃川", "石狩川", "北上川"], correct: 1, timeLimit: 12, category: 'geography' },
  { id: 16, question: "世界最大の海は?", options: ["大西洋", "太平洋", "インド洋", "北極海"], correct: 1, timeLimit: 10, category: 'geography' },
  { id: 17, question: "富士山は何県にある?", options: ["静岡県", "山梨県", "静岡県と山梨県", "長野県"], correct: 2, timeLimit: 12, category: 'geography' },
  { id: 18, question: "北海道の県庁所在地は?", options: ["函館市", "旭川市", "札幌市", "小樽市"], correct: 2, timeLimit: 10, category: 'geography' },
  { id: 19, question: "世界一長い川は?", options: ["ナイル川", "アマゾン川", "長江", "ミシシッピ川"], correct: 0, timeLimit: 12, category: 'geography' },
  { id: 20, question: "日本の都道府県の数は?", options: ["45", "46", "47", "48"], correct: 2, timeLimit: 10, category: 'geography' },
  
  // 理科
  { id: 21, question: "水の沸点は?", options: ["50度", "100度", "150度", "200度"], correct: 1, timeLimit: 10, category: 'science' },
  { id: 22, question: "虹は何色?", options: ["5色", "6色", "7色", "8色"], correct: 2, timeLimit: 10, category: 'science' },
  { id: 23, question: "人間の骨の数は約何本?", options: ["約100本", "約200本", "約300本", "約400本"], correct: 1, timeLimit: 12, category: 'science' },
  { id: 24, question: "光の速さは?", options: ["約30万km/秒", "約3万km/秒", "約300km/秒", "約3000km/秒"], correct: 0, timeLimit: 12, category: 'science' },
  { id: 25, question: "地球から月までの距離は?", options: ["約38万km", "約3.8万km", "約380万km", "約3800万km"], correct: 0, timeLimit: 12, category: 'science' },
  { id: 26, question: "水の化学式は?", options: ["O2", "H2O", "CO2", "H2O2"], correct: 1, timeLimit: 10, category: 'science' },
  { id: 27, question: "人間の血液型は何種類?", options: ["2種類", "4種類", "6種類", "8種類"], correct: 1, timeLimit: 10, category: 'science' },
  { id: 28, question: "1日は何時間?", options: ["12時間", "24時間", "36時間", "48時間"], correct: 1, timeLimit: 8, category: 'science' },
  { id: 29, question: "地球の公転周期は?", options: ["約365日", "約30日", "約7日", "約180日"], correct: 0, timeLimit: 10, category: 'science' },
  { id: 30, question: "植物が光合成で作るのは?", options: ["窒素", "酸素", "二酸化炭素", "水素"], correct: 1, timeLimit: 10, category: 'science' },
  
  // 算数
  { id: 31, question: "三角形の角の数は?", options: ["2個", "3個", "4個", "5個"], correct: 1, timeLimit: 8, category: 'math' },
  { id: 32, question: "10 × 10 = ?", options: ["10", "100", "1000", "10000"], correct: 1, timeLimit: 8, category: 'math' },
  { id: 33, question: "円周率の最初の2桁は?", options: ["2.1", "3.1", "4.1", "5.1"], correct: 1, timeLimit: 10, category: 'math' },
  { id: 34, question: "100 ÷ 4 = ?", options: ["20", "25", "30", "35"], correct: 1, timeLimit: 8, category: 'math' },
  { id: 35, question: "5 + 5 × 2 = ?", options: ["15", "20", "25", "30"], correct: 0, timeLimit: 10, category: 'math' },
  { id: 36, question: "1kmは何m?", options: ["10m", "100m", "1000m", "10000m"], correct: 2, timeLimit: 10, category: 'math' },
  { id: 37, question: "正方形の辺の数は?", options: ["3本", "4本", "5本", "6本"], correct: 1, timeLimit: 8, category: 'math' },
  { id: 38, question: "12 - 7 = ?", options: ["4", "5", "6", "7"], correct: 1, timeLimit: 8, category: 'math' },
  { id: 39, question: "1000 ÷ 10 = ?", options: ["10", "100", "1000", "10000"], correct: 1, timeLimit: 8, category: 'math' },
  { id: 40, question: "3 × 9 = ?", options: ["21", "24", "27", "30"], correct: 2, timeLimit: 8, category: 'math' },
  
  // 動物
  { id: 41, question: "最も速く走る陸上動物は?", options: ["ライオン", "チーター", "シマウマ", "カンガルー"], correct: 1, timeLimit: 10, category: 'animals' },
  { id: 42, question: "世界最大の動物は?", options: ["アフリカゾウ", "シロナガスクジラ", "キリン", "ホッキョクグマ"], correct: 1, timeLimit: 10, category: 'animals' },
  { id: 43, question: "カンガルーはどこの国の動物?", options: ["インド", "ブラジル", "オーストラリア", "南アフリカ"], correct: 2, timeLimit: 10, category: 'animals' },
  { id: 44, question: "パンダの主食は?", options: ["肉", "魚", "竹", "果物"], correct: 2, timeLimit: 10, category: 'animals' },
  { id: 45, question: "ペンギンが住む場所は?", options: ["北極", "南極", "赤道", "砂漠"], correct: 1, timeLimit: 10, category: 'animals' },
  { id: 46, question: "キリンの首の骨の数は人間と同じ?", options: ["はい", "いいえ", "キリンの方が多い", "キリンの方が少ない"], correct: 0, timeLimit: 12, category: 'animals' },
  { id: 47, question: "イルカは何類?", options: ["魚類", "両生類", "爬虫類", "哺乳類"], correct: 3, timeLimit: 10, category: 'animals' },
  { id: 48, question: "コアラの主食は?", options: ["竹", "バナナ", "ユーカリ", "アカシア"], correct: 2, timeLimit: 10, category: 'animals' },
  { id: 49, question: "ライオンのオスの特徴は?", options: ["たてがみ", "しっぽが長い", "耳が大きい", "牙が長い"], correct: 0, timeLimit: 10, category: 'animals' },
  { id: 50, question: "鳥類で飛べないのは?", options: ["スズメ", "ペンギン", "カラス", "ハト"], correct: 1, timeLimit: 10, category: 'animals' },
  
  // 歴史
  { id: 51, question: "日本の初代内閣総理大臣は?", options: ["西郷隆盛", "大久保利通", "伊藤博文", "木戸孝允"], correct: 2, timeLimit: 12, category: 'history' },
  { id: 52, question: "日本の元号で最も長く使われたのは?", options: ["明治", "大正", "昭和", "平成"], correct: 2, timeLimit: 10, category: 'history' },
  { id: 53, question: "江戸幕府を開いたのは?", options: ["織田信長", "豊臣秀吉", "徳川家康", "徳川吉宗"], correct: 2, timeLimit: 10, category: 'history' },
  { id: 54, question: "日本の首都が東京になったのはいつ?", options: ["江戸時代", "明治時代", "大正時代", "昭和時代"], correct: 1, timeLimit: 12, category: 'history' },
  { id: 55, question: "第二次世界大戦が終わった年は?", options: ["1943年", "1944年", "1945年", "1946年"], correct: 2, timeLimit: 12, category: 'history' },
  
  // 文化・スポーツ
  { id: 56, question: "オリンピックは何年ごと?", options: ["2年", "4年", "5年", "6年"], correct: 1, timeLimit: 10, category: 'sports' },
  { id: 57, question: "サッカーは1チーム何人?", options: ["9人", "10人", "11人", "12人"], correct: 2, timeLimit: 10, category: 'sports' },
  { id: 58, question: "野球の投手を英語で?", options: ["キャッチャー", "ピッチャー", "バッター", "ランナー"], correct: 1, timeLimit: 8, category: 'sports' },
  { id: 59, question: "相撲の最高位は?", options: ["大関", "横綱", "関脇", "小結"], correct: 1, timeLimit: 10, category: 'sports' },
  { id: 60, question: "将棋の駒は何種類?", options: ["6種類", "7種類", "8種類", "9種類"], correct: 2, timeLimit: 12, category: 'sports' },
  { id: 61, question: "トランプは何枚?", options: ["50枚", "52枚", "54枚", "56枚"], correct: 1, timeLimit: 10, category: 'sports' },
  { id: 62, question: "マラソンの距離は?", options: ["40.195km", "41.195km", "42.195km", "43.195km"], correct: 2, timeLimit: 12, category: 'sports' },
  { id: 63, question: "日本の国技は?", options: ["柔道", "剣道", "相撲", "空手"], correct: 2, timeLimit: 10, category: 'sports' },
  { id: 64, question: "バスケットボールは1チーム何人?", options: ["4人", "5人", "6人", "7人"], correct: 1, timeLimit: 10, category: 'sports' },
  { id: 65, question: "ゴルフのパーとは?", options: ["基準打数", "ホールインワン", "2打", "3打"], correct: 0, timeLimit: 10, category: 'sports' },
  
  // 食べ物
  { id: 66, question: "お寿司のネタで赤身といえば?", options: ["サーモン", "マグロ", "エビ", "イカ"], correct: 1, timeLimit: 10, category: 'food' },
  { id: 67, question: "パスタの本場は?", options: ["フランス", "スペイン", "イタリア", "ギリシャ"], correct: 2, timeLimit: 10, category: 'food' },
  { id: 68, question: "カレーの本場は?", options: ["タイ", "インド", "ネパール", "スリランカ"], correct: 1, timeLimit: 10, category: 'food' },
  { id: 69, question: "納豆の原料は?", options: ["小豆", "大豆", "黒豆", "えんどう豆"], correct: 1, timeLimit: 10, category: 'food' },
  { id: 70, question: "醤油の主な原料は?", options: ["米", "麦", "大豆", "とうもろこし"], correct: 2, timeLimit: 10, category: 'food' },
  { id: 71, question: "チョコレートの原料は?", options: ["カカオ", "コーヒー", "ナッツ", "バニラ"], correct: 0, timeLimit: 10, category: 'food' },
  { id: 72, question: "ワインの原料は?", options: ["りんご", "ぶどう", "もも", "いちご"], correct: 1, timeLimit: 10, category: 'food' },
  { id: 73, question: "豆腐の原料は?", options: ["小豆", "大豆", "黒豆", "えんどう豆"], correct: 1, timeLimit: 10, category: 'food' },
  { id: 74, question: "ケチャップの主な原料は?", options: ["トマト", "にんじん", "パプリカ", "いちご"], correct: 0, timeLimit: 10, category: 'food' },
  { id: 75, question: "うどんの原料は?", options: ["米", "小麦", "そば", "とうもろこし"], correct: 1, timeLimit: 10, category: 'food' },
  
  // 言葉・漢字
  { id: 76, question: "「山」の読み方でないのは?", options: ["やま", "さん", "せん", "ざん"], correct: 2, timeLimit: 10, category: 'language' },
  { id: 77, question: "「犬」の読み方は?", options: ["いぬ", "ねこ", "とり", "うま"], correct: 0, timeLimit: 8, category: 'language' },
  { id: 78, question: "反対語:上⇔?", options: ["左", "右", "下", "前"], correct: 2, timeLimit: 8, category: 'language' },
  { id: 79, question: "「ありがとう」の丁寧語は?", options: ["ありがとうございます", "どうも", "すみません", "こんにちは"], correct: 0, timeLimit: 10, category: 'language' },
  { id: 80, question: "四字熟語:一石○○", options: ["一鳥", "二鳥", "三鳥", "四鳥"], correct: 1, timeLimit: 10, category: 'language' },
  
  // 生活・常識
  { id: 81, question: "信号機の色の順番(上から)は?", options: ["赤黄青", "青黄赤", "赤青黄", "黄赤青"], correct: 0, timeLimit: 10, category: 'life' },
  { id: 82, question: "119番は何を呼ぶ?", options: ["警察", "消防車・救急車", "海上保安庁", "電話相談"], correct: 1, timeLimit: 8, category: 'life' },
  { id: 83, question: "110番は何を呼ぶ?", options: ["警察", "消防車", "救急車", "タクシー"], correct: 0, timeLimit: 8, category: 'life' },
  { id: 84, question: "1時間は何分?", options: ["30分", "60分", "90分", "120分"], correct: 1, timeLimit: 8, category: 'life' },
  { id: 85, question: "日本の通貨単位は?", options: ["ドル", "円", "ウォン", "元"], correct: 1, timeLimit: 8, category: 'life' },
  { id: 86, question: "郵便番号は何桁?", options: ["5桁", "6桁", "7桁", "8桁"], correct: 2, timeLimit: 10, category: 'life' },
  { id: 87, question: "成人年齢は?", options: ["18歳", "20歳", "22歳", "25歳"], correct: 0, timeLimit: 10, category: 'life' },
  { id: 88, question: "1年の始まりの月は?", options: ["12月", "1月", "2月", "3月"], correct: 1, timeLimit: 8, category: 'life' },
  { id: 89, question: "クリスマスは何月?", options: ["11月", "12月", "1月", "2月"], correct: 1, timeLimit: 8, category: 'life' },
  { id: 90, question: "バレンタインデーは何月何日?", options: ["2月14日", "3月14日", "12月25日", "1月1日"], correct: 0, timeLimit: 10, category: 'life' },
  
  // その他
  { id: 91, question: "ピアノの鍵盤は白黒合わせて?", options: ["76鍵", "88鍵", "100鍵", "120鍵"], correct: 1, timeLimit: 12, category: 'basic' },
  { id: 92, question: "時計の針が12時を指すときの角度は?", options: ["0度", "90度", "180度", "360度"], correct: 0, timeLimit: 10, category: 'math' },
  { id: 93, question: "日本の国花は?", options: ["桜", "梅", "菊", "椿"], correct: 0, timeLimit: 10, category: 'basic' },
  { id: 94, question: "七夕は何月何日?", options: ["6月7日", "7月7日", "8月7日", "9月7日"], correct: 1, timeLimit: 10, category: 'life' },
  { id: 95, question: "十二支の最初は?", options: ["牛", "虎", "兎", "鼠"], correct: 3, timeLimit: 10, category: 'basic' },
  { id: 96, question: "富士山の標高は約何m?", options: ["約2776m", "約3776m", "約4776m", "約5776m"], correct: 1, timeLimit: 12, category: 'geography' },
  { id: 97, question: "太陽系の惑星の数は?", options: ["6個", "7個", "8個", "9個"], correct: 2, timeLimit: 10, category: 'science' },
  { id: 98, question: "日本の三大都市は?", options: ["東京・大阪・福岡", "東京・大阪・名古屋", "東京・京都・大阪", "東京・横浜・大阪"], correct: 1, timeLimit: 12, category: 'geography' },
  { id: 99, question: "オリンピックの五輪マークの色は?", options: ["4色", "5色", "6色", "7色"], correct: 1, timeLimit: 10, category: 'sports' },
  { id: 100, question: "富士山は何県と何県にまたがる?", options: ["東京都と神奈川県", "静岡県と山梨県", "長野県と山梨県", "静岡県と長野県"], correct: 1, timeLimit: 12, category: 'geography' }
];

// クイズ問題をシャッフルして選択肢もシャッフルする関数
const prepareQuizData = (category: QuizCategory = 'random'): QuizQuestion[] => {
  // カテゴリーでフィルタリング
  let filteredQuestions = category === 'random' 
    ? QUIZ_DATA_POOL 
    : QUIZ_DATA_POOL.filter(q => q.category === category);
  
  // 問題をランダムに15問選択
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(15, filteredQuestions.length));
  
  // 各問題の選択肢をシャッフル
  return selected.map(q => {
    const correctAnswer = q.options[q.correct];
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
    
    return {
      ...q,
      options: shuffledOptions,
      correct: newCorrectIndex
    };
  });
};

// カテゴリー情報
const CATEGORY_INFO: Record<QuizCategory, { name: string; emoji: string; color: string }> = {
  random: { name: 'ランダム', emoji: '🎲', color: 'purple' },
  basic: { name: '基礎知識', emoji: '📚', color: 'blue' },
  geography: { name: '地理', emoji: '🌍', color: 'green' },
  science: { name: '理科', emoji: '🔬', color: 'cyan' },
  math: { name: '算数', emoji: '🔢', color: 'indigo' },
  animals: { name: '動物', emoji: '🐾', color: 'orange' },
  history: { name: '歴史', emoji: '📜', color: 'amber' },
  sports: { name: 'スポーツ', emoji: '⚽', color: 'red' },
  food: { name: '食べ物', emoji: '🍱', color: 'pink' },
  language: { name: '言葉', emoji: '✏️', color: 'violet' },
  life: { name: '生活', emoji: '🏠', color: 'teal' }
};

// しりとり辞書(100語以上)
const SHIRITORI_DICT = new Set([
  // あ行
  "あめ", "あり", "あし", "あさ", "あき", "あお", "あか",
  "いぬ", "いす", "いえ", "いし", "いか", "いと", "いも",
  "うま", "うし", "うみ", "うえ", "うた", "うで", "うさぎ",
  "えび", "えき", "えん", "えほん",
  "おに", "おと", "おかし", "おり", "おんがく",
  
  // か行
  "かめ", "かに", "かき", "かぜ", "かさ", "かお", "かみ", "かえる",
  "きつね", "きのこ", "きく", "きって", "きもの",
  "くま", "くも", "くつ", "くち", "くるま", "くじら",
  "けむし", "けいと", "けん",
  "こい", "こま", "こあら", "こおり",
  
  // さ行
  "さかな", "さる", "さくら", "さとう", "さいふ",
  "しか", "しお", "しま", "しんぶん",
  "すいか", "すし", "すずめ", "すな",
  "せみ", "せっけん",
  "そら", "そば",
  
  // た行
  "たこ", "たぬき", "たいこ", "たまご", "たけ",
  "ちず", "ちょうちょ",
  "つき", "つくえ", "つる", "つち",
  "てがみ", "てんき",
  "とら", "とり", "とけい", "とんぼ",
  
  // な行
  "なす", "なつ", "なべ",
  "にわとり", "にんじん", "にく",
  "ぬいぐるみ",
  "ねこ", "ねずみ",
  "のり",
  
  // は行
  "はな", "はし", "はと", "はち",
  "ひつじ", "ひよこ",
  "ふね", "ふく",
  "へび", "へや",
  "ほし", "ほん",
  
  // ま行
  "まくら", "まど", "まんが",
  "みかん", "みず", "みそ", "みち",
  "むし", "むぎ",
  "めがね", "めだか", "めろん",
  "もも", "もち", "もぐら",
  
  // や行
  "やま", "やぎ",
  "ゆき", "ゆび",
  "よる",
  
  // ら行
  "らいおん", "らっこ", "らくだ", "らっぱ", "らじお", "らーめん",
  "りす", "りんご", "りく",
  "れもん",
  "ろうそく",
  
  // わ行
  "わに",
  
  // が行
  "がっこう", "がま",
  "ぎたー", "ぎゅうにゅう",
  "ごま", "ごりら", "ごはん",
  
  // ざ行
  "ざる",
  "じゃがいも",
  "ずぼん", "ずっく",
  
  // だ行
  "だいこん", "だんご", "だちょう",
  "どあ", "どんぐり",
  
  // ば行
  "ばった", "ばなな",
  "びーる",
  "ぶた", "ぶどう",
  "べっど",
  "ぼーる", "ぼうし",
  
  // ぱ行
  "ぱんだ", "ぱん",
  "ぴあの",
  "ぷーる",
  "ぺんぎん",
  "ぽすと",
  
  // その他
  "まんぼう", "るびー", "こんぶ", "ばす", "たす", "すーぷ"
]);

interface RankingData {
  mode: 'quiz' | 'shiritori';
  playerName: string;
  correctCount?: number;
  total?: number;
  accuracy?: string;
  avgTime: string;
  finalScore: number;
  timestamp: string;
  wordCount?: number;
  missCount?: number;
  uniqueWords?: number;
  maxCombo?: number;
}

const App = () => {
  const [mode, setMode] = useState<GameMode>('title');
  const [playerName, setPlayerName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory>('random');
  
  // クイズ用状態
  const [quizData, setQuizData] = useState<QuizQuestion[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<boolean[]>([]);
  const [quizTimes, setQuizTimes] = useState<number[]>([]);
  const [quizTimer, setQuizTimer] = useState(10);
  const [quizStartTime, setQuizStartTime] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  // しりとり用状態
  const [currentChar, setCurrentChar] = useState('');
  const [shiritoriInput, setShiritoriInput] = useState('');
  const [usedWords, setUsedWords] = useState<string[]>([]);
  const [shiritoriCombo, setShiritoriCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [missCount, setMissCount] = useState(0);
  const [shiritoriTimer, setShiritoriTimer] = useState(30);
  const [shiritoriTimes, setShiritoriTimes] = useState<number[]>([]);
  const [shiritoriStartTime, setShiritoriStartTime] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  // ランキングデータ(メモリ内保存)
  const [rankings, setRankings] = useState<RankingData[]>([]);

  // クイズタイマー
  useEffect(() => {
    if (mode === 'quiz' && !showResult && quizTimer > 0) {
      const timer = setTimeout(() => setQuizTimer(quizTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (mode === 'quiz' && quizTimer === 0 && !showResult) {
      handleQuizAnswer(-1);
    }
  }, [mode, quizTimer, showResult]);

  // しりとりタイマー
  useEffect(() => {
    if (mode === 'shiritori' && shiritoriTimer > 0) {
      const timer = setTimeout(() => setShiritoriTimer(shiritoriTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (mode === 'shiritori' && shiritoriTimer === 0) {
      endShiritoriGame();
    }
  }, [mode, shiritoriTimer]);

  // ゲーム開始
  const startQuiz = (category: QuizCategory = 'random') => {
    const newQuizData = prepareQuizData(category);
    setQuizData(newQuizData);
    setQuizIndex(0);
    setQuizAnswers([]);
    setQuizTimes([]);
    setQuizTimer(newQuizData[0].timeLimit);
    setQuizStartTime(Date.now());
    setSelectedAnswer(null);
    setShowResult(false);
    setSelectedCategory(category);
    setMode('quiz');
  };

  const startShiritori = () => {
    const startChars = ['り', 'か', 'さ', 'た', 'な', 'は', 'ま', 'あ'];
    const randomChar = startChars[Math.floor(Math.random() * startChars.length)];
    setCurrentChar(randomChar);
    setShiritoriInput('');
    setUsedWords([]);
    setShiritoriCombo(0);
    setMaxCombo(0);
    setMissCount(0);
    setShiritoriTimer(30);
    setShiritoriTimes([]);
    setShiritoriStartTime(Date.now());
    setErrorMessage('');
    setMode('shiritori');
  };

  // クイズ回答処理
  const handleQuizAnswer = (answerIndex: number) => {
    if (showResult) return;
    
    const responseTime = (Date.now() - quizStartTime) / 1000;
    const isCorrect = answerIndex === quizData[quizIndex].correct;
    
    setSelectedAnswer(answerIndex);
    setQuizAnswers([...quizAnswers, isCorrect]);
    setQuizTimes([...quizTimes, responseTime]);
    setShowResult(true);

    setTimeout(() => {
      if (quizIndex < quizData.length - 1) {
        setQuizIndex(quizIndex + 1);
        setQuizTimer(quizData[quizIndex + 1].timeLimit);
        setQuizStartTime(Date.now());
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        showQuizResult();
      }
    }, 1500);
  };

  // しりとり送信
  const handleShiritoriSubmit = () => {
    const word = shiritoriInput.trim();
    setErrorMessage('');

    if (!word) return;

    if (!word.startsWith(currentChar)) {
      setErrorMessage(`「${currentChar}」で始まる言葉を入力してください`);
      setMissCount(missCount + 1);
      setShiritoriCombo(0);
      return;
    }

    if (usedWords.includes(word)) {
      setErrorMessage('その言葉は既に使われています');
      setMissCount(missCount + 1);
      setShiritoriCombo(0);
      return;
    }

    if (!SHIRITORI_DICT.has(word)) {
      setErrorMessage('辞書に存在しない言葉です');
      setMissCount(missCount + 1);
      setShiritoriCombo(0);
      return;
    }

    const lastChar = word.charAt(word.length - 1);
    if (lastChar === 'ん') {
      setErrorMessage('「ん」で終わる言葉は使えません');
      setMissCount(missCount + 1);
      setShiritoriCombo(0);
      return;
    }

    // 成功
    const responseTime = (Date.now() - shiritoriStartTime) / 1000;
    setUsedWords([...usedWords, word]);
    setShiritoriTimes([...shiritoriTimes, responseTime]);
    setCurrentChar(lastChar);
    setShiritoriInput('');
    setShiritoriTimer(30);
    setShiritoriStartTime(Date.now());
    
    const newCombo = shiritoriCombo + 1;
    setShiritoriCombo(newCombo);
    setMaxCombo(Math.max(maxCombo, newCombo));

    if (missCount >= 3) {
      endShiritoriGame();
    }
  };

  const endShiritoriGame = () => {
    showShiritoriResult();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleShiritoriSubmit();
    }
  };

  // 結果表示
  const showQuizResult = () => {
    const correctCount = quizAnswers.filter(a => a).length;
    const accuracy = (correctCount / quizData.length) * 100;
    const avgTime = quizTimes.reduce((a, b) => a + b, 0) / quizTimes.length;
    const finalScore = Math.round(correctCount * 100 + Math.max(0, (10 - avgTime) * 10));

    const result: RankingData = {
      mode: 'quiz',
      playerName: playerName || 'プレイヤー',
      correctCount,
      total: quizData.length,
      accuracy: accuracy.toFixed(1),
      avgTime: avgTime.toFixed(2),
      finalScore,
      timestamp: new Date().toLocaleString('ja-JP')
    };

    setRankings([...rankings, result].sort((a, b) => b.finalScore - a.finalScore).slice(0, 10));
    setMode('result');
  };

  const showShiritoriResult = () => {
    const avgTime = shiritoriTimes.length > 0 
      ? shiritoriTimes.reduce((a, b) => a + b, 0) / shiritoriTimes.length 
      : 0;
    const uniqueWords = new Set(usedWords).size;
    const finalScore = Math.round(usedWords.length * 50 + maxCombo * 20 - missCount * 10);

    const result: RankingData = {
      mode: 'shiritori',
      playerName: playerName || 'プレイヤー',
      wordCount: usedWords.length,
      avgTime: avgTime.toFixed(2),
      missCount,
      uniqueWords,
      maxCombo,
      finalScore,
      timestamp: new Date().toLocaleString('ja-JP')
    };

    setRankings([...rankings, result].sort((a, b) => b.finalScore - a.finalScore).slice(0, 10));
    setMode('result');
  };

  // リセット
  const resetGame = () => {
    setMode('select');
  };

  // 画面レンダリング
  if (mode === 'title') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4 animate-bounce drop-shadow-lg">
            🎮 クイズ & しりとり
          </h1>
          <p className="text-2xl text-white mb-8 font-semibold drop-shadow-md">頭脳を鍛えよう!</p>
          <input
            type="text"
            placeholder="プレイヤー名を入力"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="px-6 py-3 rounded-lg text-lg mb-4 w-64 text-center text-gray-800 font-semibold"
          />
          <div className="space-y-4">
            <button
              onClick={() => setMode('select')}
              className="block mx-auto px-8 py-4 bg-white text-purple-600 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              スタート →
            </button>
            <button
              onClick={() => setMode('ranking')}
              className="block mx-auto px-8 py-4 bg-yellow-400 text-gray-800 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all shadow-lg"
            >
              <Trophy className="inline mr-2" />
              ランキング
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'select') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">モードを選択</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* クイズモード */}
            <div 
              onClick={() => setMode('category')}
              className="bg-white rounded-2xl p-8 cursor-pointer transform hover:scale-105 transition-all hover:shadow-2xl"
            >
              <div className="text-6xl mb-4 text-center">📝</div>
              <h3 className="text-3xl font-bold text-blue-600 mb-4 text-center">クイズ</h3>
              <ul className="space-y-2 text-gray-700 font-medium">
                <li className="flex items-center">
                  <Target className="mr-2 text-blue-500" size={20} />
                  カテゴリー別出題
                </li>
                <li className="flex items-center">
                  <Timer className="mr-2 text-blue-500" size={20} />
                  制限時間あり
                </li>
                <li className="flex items-center">
                  <Star className="mr-2 text-blue-500" size={20} />
                  選択肢がランダム!
                </li>
              </ul>
              <button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600">
                プレイ開始
              </button>
            </div>

            {/* しりとりモード */}
            <div 
              onClick={startShiritori}
              className="bg-white rounded-2xl p-8 cursor-pointer transform hover:scale-105 transition-all hover:shadow-2xl"
            >
              <div className="text-6xl mb-4 text-center">🔤</div>
              <h3 className="text-3xl font-bold text-green-600 mb-4 text-center">しりとり</h3>
              <ul className="space-y-2 text-gray-700 font-medium">
                <li className="flex items-center">
                  <Zap className="mr-2 text-green-500" size={20} />
                  単語をつなげよう
                </li>
                <li className="flex items-center">
                  <Timer className="mr-2 text-green-500" size={20} />
                  1単語30秒制限
                </li>
                <li className="flex items-center">
                  <Star className="mr-2 text-green-500" size={20} />
                  コンボでスコアUP
                </li>
              </ul>
              <button className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600">
                プレイ開始
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'category') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">カテゴリーを選択</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {(Object.keys(CATEGORY_INFO) as QuizCategory[]).map((cat) => {
              const info = CATEGORY_INFO[cat];
              return (
                <button
                  key={cat}
                  onClick={() => startQuiz(cat)}
                  className={`bg-white rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all hover:shadow-2xl text-center`}
                >
                  <div className="text-5xl mb-2">{info.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-800">{info.name}</h3>
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setMode('select')}
            className="block mx-auto px-8 py-3 bg-white text-indigo-600 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
          >
            ← 戻る
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'quiz') {
    const currentQ = quizData[quizIndex];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl p-8 shadow-2xl">
          {/* ヘッダー */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-bold text-gray-800">
              問題 {quizIndex + 1} / {quizData.length}
            </div>
            <div className={`text-3xl font-bold ${quizTimer <= 3 ? 'text-red-500 animate-pulse' : 'text-blue-600'}`}>
              <Timer className="inline mr-2" />
              {quizTimer}
            </div>
          </div>

          {/* カテゴリー表示 */}
          <div className="text-center mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">
              {CATEGORY_INFO[selectedCategory].emoji} {CATEGORY_INFO[selectedCategory].name}
            </span>
          </div>

          {/* 問題文 */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{currentQ.question}</h3>
          </div>

          {/* 選択肢 */}
          <div className="space-y-3">
            {currentQ.options.map((option, index) => {
              let bgColor = 'bg-gray-100 hover:bg-gray-200 text-gray-900';
              
              if (showResult) {
                if (index === currentQ.correct) {
                  bgColor = 'bg-green-500 text-white';
                } else if (index === selectedAnswer && selectedAnswer !== currentQ.correct) {
                  bgColor = 'bg-red-500 text-white';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-lg text-left font-bold transition-all transform hover:scale-102 ${bgColor}`}
                >
                  <span className="text-lg">{String.fromCharCode(65 + index)}. {option}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'shiritori') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl p-8 shadow-2xl">
          {/* ヘッダー */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-100 rounded-lg p-3 text-center">
              <div className="text-sm text-gray-700 font-semibold">続いた回数</div>
              <div className="text-2xl font-bold text-blue-600">{usedWords.length}</div>
            </div>
            <div className="bg-purple-100 rounded-lg p-3 text-center">
              <div className="text-sm text-gray-700 font-semibold">コンボ</div>
              <div className="text-2xl font-bold text-purple-600">{shiritoriCombo}</div>
            </div>
            <div className="bg-red-100 rounded-lg p-3 text-center">
              <div className="text-sm text-gray-700 font-semibold">ミス</div>
              <div className="text-2xl font-bold text-red-600">{missCount}/3</div>
            </div>
          </div>

          {/* タイマー */}
          <div className="text-center mb-6">
            <div className={`text-5xl font-bold ${shiritoriTimer <= 5 ? 'text-red-500 animate-pulse' : 'text-green-600'}`}>
              <Timer className="inline mr-2" />
              {shiritoriTimer}
            </div>
          </div>

          {/* 現在の文字 */}
          <div className="bg-green-50 rounded-lg p-8 mb-6 text-center border-2 border-green-200">
            <div className="text-gray-700 mb-2 font-semibold">次は...</div>
            <div className="text-8xl font-bold text-green-600">「{currentChar}」</div>
            <div className="text-gray-700 mt-2 font-semibold">で始まる言葉</div>
          </div>

          {/* 入力フォーム */}
          <div>
            <input
              type="text"
              value={shiritoriInput}
              onChange={(e) => setShiritoriInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`「${currentChar}」で始まる言葉を入力`}
              className="w-full p-4 border-2 border-green-300 rounded-lg text-xl mb-4 focus:border-green-500 focus:outline-none text-gray-900 font-semibold"
              autoFocus
            />
            <button
              onClick={handleShiritoriSubmit}
              className="w-full bg-green-500 text-white py-4 rounded-lg text-xl font-bold hover:bg-green-600 transition-all shadow-lg"
            >
              送信 <ArrowRight className="inline ml-2" />
            </button>
          </div>

          {/* エラーメッセージ */}
          {errorMessage && (
            <div className="mt-4 bg-red-100 border-2 border-red-400 text-red-800 px-4 py-3 rounded font-bold">
              {errorMessage}
            </div>
          )}

          {/* 使用済み単語 */}
          {usedWords.length > 0 && (
            <div className="mt-6">
              <div className="text-sm text-gray-700 mb-2 font-semibold">使った言葉:</div>
              <div className="flex flex-wrap gap-2">
                {usedWords.slice(-10).map((word, index) => (
                  <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (mode === 'result') {
    const lastResult = rankings[rankings.length - 1];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2 drop-shadow-sm">結果発表!</h2>
            <p className="text-xl text-gray-800 font-semibold">{lastResult.playerName}</p>
          </div>

          {lastResult.mode === 'quiz' ? (
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 flex justify-between border-2 border-blue-200">
                <span className="text-gray-800 font-semibold">正答数</span>
                <span className="font-bold text-blue-600 text-xl">{lastResult.correctCount} / {lastResult.total}</span>
              </div>
              <div className="bg-green-50 rounded-lg p-4 flex justify-between border-2 border-green-200">
                <span className="text-gray-800 font-semibold">正答率</span>
                <span className="font-bold text-green-600 text-xl">{lastResult.accuracy}%</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 flex justify-between border-2 border-purple-200">
                <span className="text-gray-800 font-semibold">平均回答時間</span>
                <span className="font-bold text-purple-600 text-xl">{lastResult.avgTime}秒</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 flex justify-between border-2 border-blue-200">
                <span className="text-gray-800 font-semibold">続いた回数</span>
                <span className="font-bold text-blue-600 text-xl">{lastResult.wordCount}回</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 flex justify-between border-2 border-purple-200">
                <span className="text-gray-800 font-semibold">最長コンボ</span>
                <span className="font-bold text-purple-600 text-xl">{lastResult.maxCombo}</span>
              </div>
              <div className="bg-red-50 rounded-lg p-4 flex justify-between border-2 border-red-200">
                <span className="text-gray-800 font-semibold">ミス数</span>
                <span className="font-bold text-red-600 text-xl">{lastResult.missCount}</span>
              </div>
            </div>
          )}

          <div className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-6 text-center shadow-lg">
            <div className="text-white text-sm mb-1 font-semibold">最終スコア</div>
            <div className="text-5xl font-bold text-white drop-shadow-md">{lastResult.finalScore}</div>
          </div>

          <div className="mt-8 space-y-3">
            <button
              onClick={resetGame}
              className="w-full bg-blue-500 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-600 transition-all shadow-lg"
            >
              <RotateCcw className="inline mr-2" />
              もう一度プレイ
            </button>
            <button
              onClick={() => setMode('ranking')}
              className="w-full bg-yellow-500 text-white py-4 rounded-lg text-xl font-bold hover:bg-yellow-600 transition-all shadow-lg"
            >
              <Trophy className="inline mr-2" />
              ランキングを見る
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'ranking') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white rounded-2xl p-8 shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 drop-shadow-sm">
            <Trophy className="inline mr-2 text-yellow-500" />
            ランキング
          </h2>

          {rankings.length === 0 ? (
            <div className="text-center text-gray-600 py-12 font-semibold text-lg">
              まだ記録がありません
            </div>
          ) : (
            <div className="space-y-3">
              {rankings.map((rank, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg flex items-center justify-between ${
                    index === 0 ? 'bg-yellow-100 border-2 border-yellow-400' :
                    index === 1 ? 'bg-gray-100 border-2 border-gray-400' :
                    index === 2 ? 'bg-orange-100 border-2 border-orange-400' :
                    'bg-gray-50 border border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-2xl font-bold ${
                      index === 0 ? 'text-yellow-600' :
                      index === 1 ? 'text-gray-600' :
                      index === 2 ? 'text-orange-600' :
                      'text-gray-400'
                    }`}>
                      #{index + 1}
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">{rank.playerName}</div>
                      <div className="text-sm text-gray-700 font-medium">
                        {rank.mode === 'quiz' ? '🎯 クイズ' : '🔤 しりとり'} | {rank.timestamp}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{rank.finalScore}</div>
                    <div className="text-xs text-gray-600 font-semibold">pts</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => setMode('title')}
            className="w-full mt-8 bg-purple-500 text-white py-4 rounded-lg text-xl font-bold hover:bg-purple-600 transition-all shadow-lg"
          >
            タイトルに戻る
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default App;
