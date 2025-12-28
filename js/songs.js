// js/songs.js

const songDatabase = {
    // ■ URLの ?id=bluehaze で呼び出されるデータ
    "bluehaze": {
        title: "BlueHaze",
        credit: "<span class='credit-label'>Music & Lyrics:</span>kazu",
        image: "images/bluehaze_photo.png",
        // バッククォート ( ` ) で囲むと改行がそのまま反映されます
        lyricsJa: `
なかったことにはしたくない
今の僕はそれを経た僕だから
顔あげなくたって良いでしょう
一歩ずつ足元を見ながら
確かめて歩きたいんだ

探して見つけたら教えてよ
探していたものじゃなくても
その目に映るもの教えてよ
心に触れたこと教えてよ

ブルーヘイズ
とりあえず
出来る事しか出来ないから

僕の心がいつも僕の
思い通りになる訳じゃない
でもいつも僕が僕の
心の司令塔でありたい
どこにも行かない慰安旅行の末
喜怒哀楽の真ん中に
帰ってきたいんだ

探して見つけたら教えてよ
探していたものじゃなくても
見つからなくても教えてよ
見つからなかったそのことを

探して見つけたら教えてよ
探していたものじゃなくても
その目に映るもの教えてよ
心に触れたこと教えてよ

ブルーヘイズ
抗えず
流されていくだけでも

ブルーヘイズ
とりあえず
出来る事なら出来るはずさ
出来る事しか出来ないから
`,
        // 翻訳データ（ない場合は空文字 "" にすればボタンが出ません）
        lyricsEn: `
I don't want to pretend it didn't happen
Cuz it's a part of who I am now
Isn't it fine if I don't hold my head up?
One step at a time, my eyes on my feet,
I just want to watch where I’m going

Tell me if you found something
Even if it wasn't what you were looking for
Tell me the things that are reflected in your eyes
Tell me the things that touch your heart

BlueHaze, 
in the meantime
I can only do the things I can do

My heart might not always follow my mind
But I’d like to stay in charge 
of the direction of my heart 

After a long vacation of wandering
I just want to come right back to 
the center of my emotions

Tell me if you found something
Even if it wasn’t what you were looking for
Tell me even if you couldn’t find it
You can tell me that you couldn’t find it

Tell me if you found something
Even if it wasn’t what you were looking for
Tell me the things that are reflected in your eyes
Tell me the things that touch your heart

BlueHaze, 
even if you are just 
getting swept away without resisting

BlueHaze, 
in the meantime
You should be able to do the things you can
Cuz I can only do the things I can do
`,
        transCredit: "English translation: Nathania Nah"
    },

    // ■ 2曲目 Torch
    "torch": {
        title: "Torch",
        credit: "<span class='credit-label'>Music & Lyrics:</span> kazu",
        image: "images/Torch_photo_20251218.jpg", // 仮画像
        lyricsJa: `
空っぽだって思ってた
夢中だった それだけ
忘れようと思ってた
うずくまった狭い部屋

ただ
見えない
掴めない
でも
消えない
消えてくれない

どうしようもないな
ああ こんな時間か
出かけなきゃ

確かにそこにあった灯火
忘れた振りしかできなかった日々
わずかに燃え上がった灯火
君が見つけたなら閃く灯り

似た痛みを並べて
慰め合えず
落ち込み合った
並んで歩いて眺めた
知ってる景色と
知らない気持ち

まだ
見えない
掴めない
でも
消えない
消えてくれない

役に立たない宝物
でも、君が笑ってくれたから

確かにそこにあった灯火
君と話したから消えない灯り
はじめからそこにあった灯火
君が薪をくべた大事な灯り

確かにここに立った記憶が
君にも僕にもそれぞれあるなら
種も仕掛けも無かったツナガリ
いつかの誰かを照らす灯火
`,
        lyricsEn: `
I’d thought it was meaningless
That it was just a fixation
Something to be forgotten
Tucked up in a narrow room

Just 
Something unseen 
Something intangible
But
Something that won’t disappear 
Something that can’t disappear

What to do
Ah, the time has gone
But things need to be done

A torch that was there after all
On days where it’s hard to plead ignorance
A torch with a meager flame
A light that glows when you find it

Exchanging the same kind of pains
That can’t be consoled
And wear us down
Then walked together and gazed
From a familiar viewpoint
With unfamiliar emotions

Still
Something unseen
Something intangible
But
Something that won’t disappear
Something that can’t disappear

A pointless treasure
But, because it made you smile

A torch that was there after all
A light that won’t go out since we talked
A torch that had been there from the beginning
A light so precious whose fire you stoked

The memory of standing here
Both you and I have our own after all
A sincere connection with no smoke or mirrors
A torch that will shine on one day for another
`,
        transCredit: "English translation: Nathania Nah"
    },

    // ■ 3曲目 Episode
    "episode": {
        title: "Episode",
        credit: "<span class='credit-label'>Music & Lyrics:</span> kazu",
        image: "images/bluehaze_photo.png",
        lyricsJa: `
トンネル
遠くに光
届きそう  
たどり着いて抜けてもまだ
トンネル
光は見えてるけど
届くのかな
気が遠くなる

堪えた涙の行方も
貼り付けた笑顔の役目も
覚えた強がりの全部を
必死で振り回す最新話

あてがわれたその役目も
耳塞いで信じた宿命と
でも世界は素知らぬ顔
ああまた列車は過ぎてく
「それもそうだな」
時間が過ぎていく


あふれた涙の役目も
こぼれた笑顔の一瞬も
覚えた痛みと一緒に
必死で抱きしめる最新話

堪えた涙の行方も
貼り付けた笑顔の役目も
僕だけが知り得る最新話
ほらまだ拳は握れてる
目が眩んだ、光が見える
`,
        lyricsEn: "", 
        transCredit: ""
    },
"12": {
        title: "12",
        credit: "<span class='credit-label'>Music & Lyrics:</span> kazu",
        image: "images/bluehaze_photo.png",
        lyricsJa: `
何でも出来る気がした
取り急ぎを海に流した
両の目に映る世界が
僕の為に在ると思った
手に負えないあれこれが
いつの間に友達になってた
何でも出来る気がした
気がしてるだけだった
妄想だけが膨らんで
我に返るとしょうもなくて
気付くと日は落ちていて
何もできてなくて
やるせなくて
仕方なくて

怖いものなんて無かった
夢中で前に進めていた
両の目が輝いてた
ホントウを知るまでは
漠然と不安になって
気付くと壊れていて
ただ横になるしかなくて
眠るしかなくて
やるせなくて
仕方なくて

何でも出来る気がした
取り急ぎを海に流した
両の目に映る世界の
全てが光り輝いてた
積み重ねたあれこれの
点と点が線になってた
何でも出来る気がした
気がしてたんだ
`,
        lyricsEn: "", 
        transCredit: ""
    },
"forest": {
        title: "Forest",
        credit: "<span class='credit-label'>Music:</span> kazu&nbsp;/&nbsp;<span class='credit-label'>Lyrics:</span> kazu, octa",
        image: "images/bluehaze_photo.png",
        lyricsJa: `
ありふれた日々の
隙間で自分を探してみても
伸びかけた爪で
なぞって傷つけるだけ

雨上がりの空に架かる虹は
写真でしか見たことないし
人がバナナの皮で転ぶのも
見たことないけど

どこでなにしてるの ぼく
どこでなにしてるの おれ
どこでなにしてるの わたし
もうやめた

悲しいわけじゃない
ただ ここじゃないどこかへ
連れて行ってほしい
体は重たくて
笑ってる 機械みたいに

どこでなにしてるの ぼく
どこでなにしてるの ねえ
どこでなにしてるの わたし

君と見たいんだ
林が森になる瞬間を
君と見たいんだ
灯りが奪われたとしても
君と見たいんだ
`,
        lyricsEn: "", 
        transCredit: ""
    },

"smile": {
        title: "Smile",
        credit: "<span class='credit-label'>Music & Lyrics:</span> kazu",
        image: "images/bluehaze_photo.png",
        lyricsJa: `
笑って過ごしたいのはそう
でも笑えない時だってある
そんな夜でもちゃんと食って寝て
次の日、同じ僕を生きるよ

笑って過ごしたいのはそう
でも笑えない事だってある
そんな時にはちゃんと笑わずに
言葉で、その場で、伝えたいよ
`,
        lyricsEn: "", 
        transCredit: ""
    },
"曲名(すべて小文字で)": {
        title: "曲名(大文字可)",
        credit: "Music & Lyrics: kazu",
        image: "images/bluehaze_photo.png",
        lyricsJa: `

`,
        lyricsEn: "", 
        transCredit: ""
    },
"曲名(すべて小文字で)": {
        title: "曲名(大文字可)",
        credit: "<span class='credit-label'>Music & Lyrics:</span> kazu",
        image: "images/bluehaze_photo.png",
        lyricsJa: `

`,
        lyricsEn: "", 
        transCredit: ""
    },
"曲名(すべて小文字で)": {
        title: "曲名(大文字可)",
        credit: "<span class='credit-label'>Music & Lyrics:</span> kazu",
        image: "images/bluehaze_photo.png",
        lyricsJa: `

`,
        lyricsEn: "", 
        transCredit: ""
    },

};