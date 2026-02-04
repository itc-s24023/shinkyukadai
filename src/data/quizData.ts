import { QuizQuestion } from '../types';

// クイズ問題データ(100問)
export const QUIZ_DATA_POOL: QuizQuestion[] = [
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
  { id: 100, question: "富士山は何県と何県にまたがる?", options: ["東京都と神奈川県", "静岡県と山梨県", "長野県と山梨県", "静岡県と長野県"], correct: 1, timeLimit: 12, category: 'geography' },
  
  // 音楽
  { id: 101, question: "ピアノの白鍵の数は?", options: ["52個", "60個", "88個", "100個"], correct: 2, timeLimit: 10, category: 'music' },
  { id: 102, question: "バイオリンの弦の本数は?", options: ["3本", "4本", "5本", "6本"], correct: 1, timeLimit: 10, category: 'music' },
  { id: 103, question: "ギターの標準的な弦の本数は?", options: ["4本", "5本", "6本", "7本"], correct: 2, timeLimit: 10, category: 'music' },
  { id: 104, question: "音階の基本は何ファ?", options: ["5ファ", "7ファ", "8ファ", "12ファ"], correct: 1, timeLimit: 10, category: 'music' },
  { id: 105, question: "交響曲第5番の作曲者は?", options: ["モーツァルト", "ベートーヴェン", "バッハ", "チャイコフスキー"], correct: 1, timeLimit: 12, category: 'music' },
  { id: 106, question: "オペラの本場は?", options: ["フランス", "ドイツ", "イタリア", "スペイン"], correct: 2, timeLimit: 10, category: 'music' },
  { id: 107, question: "クラシック音楽で用いられる楽器でないのは?", options: ["ハープ", "トランペット", "ギター", "ウクレレ"], correct: 3, timeLimit: 10, category: 'music' },
  { id: 108, question: "音楽の強弱記号pはどういう意味?", options: ["速く", "弱く", "強く", "遅く"], correct: 1, timeLimit: 10, category: 'music' },
  { id: 109, question: "シンバルは何類の楽器?", options: ["弦楽器", "管楽器", "打楽器", "鍵盤楽器"], correct: 2, timeLimit: 10, category: 'music' },
  { id: 110, question: "フルートは何でできている?", options: ["木", "金属", "プラスチック", "象牙"], correct: 1, timeLimit: 10, category: 'music' }
];
