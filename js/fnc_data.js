// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 25;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 9;
var ary_TitleData = [
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "Brand New Day (SCOOPERS) -2010 Nendo-",                                              [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],
  [1, "Chime -2010 Nendo-",                                                                 [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],
  [1, "Dear Mr. Socrates (Twinklestars) -2010 Nendo-",                                      [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],
  [1, "FLY AWAY -2010 Nendo-",                                                              [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],
  [1, "Happy Birthday (Mini-Pati) -2010 Nendo-",                                            [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],
  [1, "Hello! IVY -2010 Nendo-",                                                            [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"], 
  [1, "Medaka no Kyoudai (Sleepiece) -2010 Nendo-",                                         [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],   
  [1, "Message -2010 Nendo-",                                                               [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],   
  [1, "Princess a la mode (Mini-Pati) -2010 Nendo-",                                        [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],
  [1, "Sakura Gakuin Dance Club -2010 Nendo-",                                              [1,0,0,0,0,0,0,0,0], "Albums/Dance_Club_2010.jpg"],
  [1, "School Days -2010 Nendo-",                                                           [1,0,0,0,0,0,0,0,0], "Albums/Yume_ni_Mukatte_Hello!_IVY_2010.jpg"],
  [1, "Yume ni Mukatte -2010 Nendo-",                                                       [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],    
  [1, "3.a.m (Seniors) -2011 Nendo-",                                                       [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"], 
  [1, "Doki Doki Morning (Shuffle Units) -2011 Nendo-",                                     [0,1,0,0,0,0,0,0,0], "Albums/Shuffle_2011.jpg"],  
  [1, "FRIENDS -2011 Nendo-",                                                               [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"], 
  [1, "Hashire Shoujiki Mono (Sleepiece) -2011 Nendo-",                                     [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Ningen tte Iina (Sleepiece) -2011 Nendo-",                                           [0,1,0,0,0,0,0,0,0], "Albums/Houkago_Anthology_from_Sakura_Gakuin_2011.jpg"],
  [1, "Otomegokoro -2011 Nendo-",                                                           [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"], 
  [1, "Pictogram -2011 Nendo-",                                                             [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Planet Episode 008 -2011 Nendo-",                                                    [0,1,0,0,0,0,0,0,0], "Albums/Tabidachi_no_Hi_ni_2011.jpg"],
  [1, "Please! Please! Please! (Twinklestars) -2011 Nendo-",                                [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Rapikamu (Twinklestars) -2011 Nendo-",                                               [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Sakura Hyakunin Isshu -2011 Nendo-",                                                 [0,1,0,0,0,0,0,0,0], "Albums/Verishuvi_2011.jpg"],
  [1, "School Days -2011 Nendo-",                                                           [0,1,0,0,0,0,0,0,0], "Albums/School_Days_2011.jpg"],
  [1, "See you... -2011 Nendo-",                                                            [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "See you... (Live) -2011 Nendo-",                                                     [0,1,0,0,0,0,0,0,0], "Albums/School_Days_2011.jpg"],
  [1, "Tabidachi no Hi ni -2011 Nendo-",                                                    [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Tabidachi no Hi ni ~J-MIX~ -2011 Nendo-",                                            [0,1,0,0,0,0,0,0,0], "Albums/Tabidachi_no_Hi_ni_2011.jpg"],
  [1, "Tenshi to Akuma (Twinklestars) -2011 Nendo-",                                        [0,1,0,0,0,0,0,0,0], "Albums/Twinklestars_2011.jpg"],
  [1, "Verishuvi -2011 Nendo-",                                                             [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Yokubari Feuille (Mini-Pati) -2011 Nendo-",                                          [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Delta (Logica) -2012 Nendo-",                                                        [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Ima Element (Logica) -2012 Nendo-",                                                  [0,0,1,0,0,0,0,0,0], "Albums/Logica_2012.jpg"],
  [1, "Magic Melody -2012 Nendo-",                                                          [0,0,1,0,0,0,0,0,0], "Albums/My_Graduation_Toss_2012.jpg"],
  [1, "Marshmallow-iro no Kimi to -2012 Nendo-",                                            [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Mezase! Super Lady -2012 Nendo-",                                                    [0,0,1,0,0,0,0,0,0], "Albums/My_Graduation_Toss_2012.jpg"],
  [1, "Miracle Patiful Hamburger (Mini-Pati) -2012 Nendo-",                                 [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "My Graduation Toss -2012 Nendo-",                                                    [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Sakura-iro no Avenue (Nakamoto Suzuka) -2012 Nendo-",                                [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Science Girl Silence Boy (Logica) -2012 Nendo-",                                     [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Scoreboard ni Love ga Aru (Pastel Wind) -2012 Nendo-",                               [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Sleep Wonder -2012 Nendo-",                                                          [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Song for Smiling -2012 Nendo-",                                                      [0,0,1,0,0,0,0,0,0], "Albums/WONDERFUL_JOURNEY_2012.jpg"],
  [1, "Suimin Busoku (Sleepiece) -2012 Nendo-",                                             [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Tabidachi no Hi ni (J-MIX 2012) -2012 Nendo-",                                       [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "WONDERFUL JOURNEY -2012 Nendo-",                                                     [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Yume wo Hodoku Riron (Logica) -2012 Nendo-",                                         [0,0,1,0,0,0,0,0,0], "Albums/Logica_2012.jpg"],
  [1, "Acha! Cha! Kari! (Mini-Pati) -2013 Nendo-",                                          [0,0,0,1,0,0,0,0,0], "Albums/Mini_Pati_2013.jpg"],
  [1, "Capsule Scope -2013 Nendo-",                                                         [0,0,0,1,0,0,0,0,0], "Albums/Jump_Up_2013.jpg"],
  [1, "Day Dream Believer (Seniors) -2013 Nendo-",                                          [0,0,0,1,0,0,0,0,0], "Albums/Jump_Up_2013.jpg"],
  [1, "FRIENDS ~Unplugged~ (Seniors) -2013 Nendo-",                                         [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Ganbare!! -2013 Nendo-",                                                             [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Hana*Hana -2013 Nendo-",                                                             [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "| . J . | -2013 Nendo-",                                                             [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Jump Up -2013 Nendo-",                                                               [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Makeruna! Seishun Hizakozou -2013 Nendo-",                                           [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Mezase! Super Lady -2013 Nendo-",                                                    [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Mikansei Silhouette -2013 Nendo-",                                                   [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Non-stop Go Home Club Heave Ho!! (Me-Mix Bonus Track) (Sleepiece) -2013 Nendo-",     [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Pumpkin Parade -2013 Nendo-",                                                        [0,0,0,1,0,0,0,0,0], "Albums/Ganbare!!_2013.jpg"],
  [1, "Shanari Hannari Dorayaki Hime (Mini-Pati) -2013 Nendo-",                             [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Welcome To My Computer (Logica) -2013 Nendo-",                                       [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Yosoijo no Smash (Pastel Wind) -2013 Nendo-",                                        [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Animal Rhythm -2014 Nendo-",                                                         [0,0,0,0,1,0,0,0,0], "Albums/Kimi_ni_Todoke_2014.jpg"],
  [1, "Aogeba Toutoshi -2014 Nendo-",                                                       [0,0,0,0,1,0,0,0,0], "Albums/Kimi_ni_Todoke_2014.jpg"],
  [1, "Gokigen! Mr. Tropicalories -2014 Nendo-",                                            [0,0,0,0,1,0,0,0,0], "Albums/Kimi_ni_Todoke_2014.jpg"],
  [1, "Heart no Hoshi -2014 Nendo-",                                                        [0,0,0,0,1,0,0,0,0], "Albums/Kimi_ni_Todoke_2014.jpg"],
  [1, "Hirari! Kira Kira Yami Yami Museum (Mini-Pati) -2014 Nendo-",                        [0,0,0,0,1,0,0,0,0], "Albums/Kimi_ni_Todoke_2014.jpg"],
  [1, "Kimi ni Todoke -2014 Nendo-",                                                        [0,0,0,0,1,0,0,0,0], "Albums/Kimi_ni_Todoke_2014.jpg"],
  [1, "Mezase! Super Lady -2014 Nendo-",                                                    [0,0,0,0,1,0,0,0,0], "Albums/Kimi_ni_Todoke_2014.jpg"],
  [1, "Piece de Check! (Purchasing Club) -2014 Nendo-",                                     [0,0,0,0,1,0,0,0,0], "Albums/Kimi_ni_Todoke_2014.jpg"],
  [1, "Sayonara, Namida. -2014 Nendo-",                                                     [0,0,0,0,1,0,0,0,0], "Albums/Kimi_ni_Todoke_2014.jpg"],
  [1, "Spin in the Wind (Wrestling Club) -2014 Nendo-",                                     [0,0,0,0,1,0,0,0,0], "Albums/Kimi_ni_Todoke_2014.jpg"],
  [1, "Takaramono (Seniors) -2014 Nendo-",                                                  [0,0,0,0,1,0,0,0,0], "Albums/Kimi_ni_Todoke_2014.jpg"],
  [1, "Tenshi to Akuma (Twinklestars) -2014 Nendo-",                                        [0,0,0,0,1,0,0,0,0], "Albums/Kimi_ni_Todoke_2014.jpg"],
  [1, "Chime -2015 Nendo-",                                                                 [0,0,0,0,0,1,0,0,0], "Albums/Kirameki_no_Kakera_2015.jpg"],
  [1, "Jacapara Goo Goo Omurice (Mini-Pati) -2015 Nendo-",                                  [0,0,0,0,0,1,0,0,0], "Albums/Kirameki_no_Kakera_2015.jpg"],
  [1, "Kirameki no Kakera -2015 Nendo-",                                                    [0,0,0,0,0,1,0,0,0], "Albums/Kirameki_no_Kakera_2015.jpg"],
  [1, "Let's Dance -2015 Nendo-",                                                           [0,0,0,0,0,1,0,0,0], "Albums/Lets_Dance_2015.jpg"],
  [1, "Mathematica! -2015 Nendo-",                                                          [0,0,0,0,0,1,0,0,0], "Albums/Kirameki_no_Kakera_2015.jpg"],
  [1, "Mezase! Super Lady -2015 Nendo-",                                                    [0,0,0,0,0,1,0,0,0], "Albums/Kirameki_no_Kakera_2015.jpg"],
  [1, "Michishirube (Seniors) -2015 Nendo-",                                                [0,0,0,0,0,1,0,0,0], "Albums/Kirameki_no_Kakera_2015.jpg"],
  [1, "Piece de Check! (Purchasing Club) -2015 Nendo-",                                     [0,0,0,0,0,1,0,0,0], "Albums/Kirameki_no_Kakera_2015.jpg"],
  [1, "School Days -2015 Nendo-",                                                           [0,0,0,0,0,1,0,0,0], "Albums/Kirameki_no_Kakera_2015.jpg"],
  [1, "Science Girl Silence Boy (Logica) -2015 Nendo-",                                     [0,0,0,0,0,1,0,0,0], "Albums/Kirameki_no_Kakera_2015.jpg"],
  [1, "Suimin Busoku (Sleepiece) -2015 Nendo-",                                             [0,0,0,0,0,1,0,0,0], "Albums/Kirameki_no_Kakera_2015.jpg"],
  [1, "Yakusoku no Mirai -2015 Nendo-",                                                     [0,0,0,0,0,1,0,0,0], "Albums/Kirameki_no_Kakera_2015.jpg"],
  [1, "Yume ni Mukatte -2015 Nendo-",                                                       [0,0,0,0,0,1,0,0,0], "Albums/Kirameki_no_Kakera_2015.jpg"],
  [1, "Dabada Salad C'est bon Avenue (Mini-Pati) -2016 Nendo-",                             [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Delta (Logica) -2016 Nendo-",                                                        [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Hashire Shoujiki Mono (Sleepiece) -2016 Nendo-",                                     [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Identity -2016 Nendo-",                                                              [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Makeruna! Seishun Hizakozou (Band Ver.) -2016 Nendo-",                               [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Marshmallow-iro no Kimi to (Band Ver.) -2016 Nendo-",                                [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Melodic Solfege -2016 Nendo-",                                                       [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Mezase! Super Lady -2016 Nendo-",                                                    [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Mikansei Silhouette (Band Ver.) -2016 Nendo-",                                       [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Otomegokoro (Band Ver.) -2016 Nendo-",                                               [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Piece de Check! (Purchasing Club) -2016 Nendo-",                                     [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Song for Smiling (Band Ver.) -2016 Nendo-",                                          [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Yubikiri (Seniors) -2016 Nendo-",                                                    [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Yume ni Mukatte -2016 Nendo-",                                                       [0,0,0,0,0,0,1,0,0], "Albums/Yakusoku_2016.jpg"],
  [1, "Akindo Soul (Purchasing Club) -2017 Nendo-",                                         [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "Capsule Scope -2017 Nendo-",                                                         [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "Fly Away (Band Ver.) -2017 Nendo-",                                                  [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "Futari Kotoba (Yamaide Aiko) -2017 Nendo-",                                          [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "| . J . | (Band Ver.) -2017 Nendo-",                                                 [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "Magic Melody -2017 Nendo-",                                                          [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "Message -2017 Nendo-",                                                               [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "Mezase! Super Lady -2017 Nendo-",                                                    [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "Mirai Dokei (Seniors) -2017 Nendo-",                                                 [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "My Road -2017 Nendo-",                                                               [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "Nee -2017 Nendo-",                                                                   [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "Sayonara, Namida. -2017 Nendo-",                                                     [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "Sleep Wonder (Band Ver.) -2017 Nendo-",                                              [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "Yume ni Mukatte -2017 Nendo-",                                                       [0,0,0,0,0,0,0,1,0], "Albums/My_Road_2017.jpg"],
  [1, "Carry On -2018 Nendo",                                                               [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
  [1, "C'est la vie (Trico Dolls) -2018 Nendo-",                                            [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
  [1, "Clover (Seniors) -2018 Nendo-",                                                      [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
  [1, "Fairy Tale -2018 Nendo-",                                                            [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
  [1, "Friends -2018 Nendo-",                                                               [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
  [1, "Gokigen! Mr. Tropicalories -2018 Nendo-",                                            [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
  [1, "Heart no Hoshi -2018 Nendo-",                                                        [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
  [1, "Jump Up -2018 Nendo-",                                                               [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
  [1, "Mezase! Super Lady -2018 Nendo-",                                                    [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
  [1, "Verishuvi -2018 Nendo-",                                                             [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
  [1, "Wonderful Journey -2018 Nendo-",                                                     [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
  [1, "Yakusoko no Mirai -2018 Nendo-",                                                     [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
  [1, "Yume ni Mukatte -2018 Nendo-",                                                       [0,0,0,0,0,0,0,0,1], "Albums/Life_Iro_Asenai_Hibi_2018.jpg"],
];
