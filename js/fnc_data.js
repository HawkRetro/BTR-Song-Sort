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
  [1, "24/Seven",                                              [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],
  [1, "Like Nobody's Around",                                                                 [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],
  [1, "Get Up",                                      [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],
  [1, "Song For You (feat. Karmin)",                                                              [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],
  [1, "Run Wild",                                            [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],
  [1, "Crazy For U",                                                            [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"], 
  [1, "Picture This",                                         [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],   
  [1, "Confetti Falling",                                                               [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],   
  [1, "Amazing",                                        [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],
  [1, "We Are",                                              [1,0,0,0,0,0,0,0,0], "Albums/Dance_Club_2010.jpg"],
  [1, "Love Me Again",                                                           [1,0,0,0,0,0,0,0,0], "Albums/Yume_ni_Mukatte_Hello!_IVY_2010.jpg"],
  [1, "Just Getting Started",                                                       [1,0,0,0,0,0,0,0,0], "Albums/Message_2010.jpg"],    
  [1, "Untouchable",                                                       [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"], 
  [1, "Lost in Love (feat. Jake Miller)",                                     [0,1,0,0,0,0,0,0,0], "Albums/Shuffle_2011.jpg"],  
  [1, "Na Na Na",                                                               [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"], 
  [1, "Any Kind of Guy",                                     [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Stuck",                                           [0,1,0,0,0,0,0,0,0], "Albums/Houkago_Anthology_from_Sakura_Gakuin_2011.jpg"],
  [1, "This is Our Someday",                                                           [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"], 
  [1, "The Giant Turd Song",                                                             [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Shot in the Dark",                                                    [0,1,0,0,0,0,0,0,0], "Albums/Tabidachi_no_Hi_ni_2011.jpg"],
  [1, "Boyfriend (feat. New Boyz)",                                [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Boyfriend (feat. Snoop Dogg)",                                               [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Til I Forget About You",                                                 [0,1,0,0,0,0,0,0,0], "Albums/Verishuvi_2011.jpg"],
  [1, "Boyfriend",                                                           [0,1,0,0,0,0,0,0,0], "Albums/School_Days_2011.jpg"],
  [1, "City is Ours",                                                            [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Nothing Even Matters",                                                     [0,1,0,0,0,0,0,0,0], "Albums/School_Days_2011.jpg"],
  [1, "Worldwide",                                                    [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Halfway There",                                            [0,1,0,0,0,0,0,0,0], "Albums/Tabidachi_no_Hi_ni_2011.jpg"],
  [1, "Big Night",                                        [0,1,0,0,0,0,0,0,0], "Albums/Twinklestars_2011.jpg"],
  [1, "Oh Yeah",                                                             [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "Count on You (feat. Jordin Sparks)",                                          [0,1,0,0,0,0,0,0,0], "Albums/FRIENDS_2011.jpg"],
  [1, "I Know You Know (feat. Cymphonique)",                                                        [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Big Time Rush",                                                  [0,0,1,0,0,0,0,0,0], "Albums/Logica_2012.jpg"],
  [1, "Help",                                                          [0,0,1,0,0,0,0,0,0], "Albums/My_Graduation_Toss_2012.jpg"],
  [1, "Revolution",                                            [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "A Hard Day's Night",                                                    [0,0,1,0,0,0,0,0,0], "Albums/My_Graduation_Toss_2012.jpg"],
  [1, "Epic",                                 [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Paralyzed",                                                    [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Blow Your Speakers",                                [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "I Wanna Hold Your Hand",                                     [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "We Can Work It Out",                               [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Can't Buy Me Love",                                                          [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Music Sounds Better (feat. Mann)",                                                      [0,0,1,0,0,0,0,0,0], "Albums/WONDERFUL_JOURNEY_2012.jpg"],
  [1, "Show Me",                                             [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "All Over Again",                                       [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "No Idea",                                                     [0,0,1,0,0,0,0,0,0], "Albums/My_Generation_2012.jpg"],
  [1, "Cover Girl",                                         [0,0,1,0,0,0,0,0,0], "Albums/Logica_2012.jpg"],
  [1, "Love Me Love Me",                                          [0,0,0,1,0,0,0,0,0], "Albums/Mini_Pati_2013.jpg"],
  [1, "If I Ruled the World (feat. Iyaz)",                                                         [0,0,0,1,0,0,0,0,0], "Albums/Jump_Up_2013.jpg"],
  [1, "Invisible",                                          [0,0,0,1,0,0,0,0,0], "Albums/Jump_Up_2013.jpg"],
  [1, "Time of Our Life",                                         [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Superstar",                                                             [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "You're Not Alone",                                                             [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Elevate",                                                             [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Windows Down",                                                               [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Famous",                                           [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "All I Want for Christmas",                                                    [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Beautiful Christmas",                                                   [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Yardsquirrel's Christmas",     [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
  [1, "Let's Stay in Our PJs (All Night Long)",                                                        [0,0,0,1,0,0,0,0,0], "Albums/Ganbare!!_2013.jpg"],
  [1, "12 Days of Christmas (feat. Snoop Dogg)",                             [0,0,0,1,0,0,0,0,0], "Albums/Kizuna_2013.jpg"],
];
