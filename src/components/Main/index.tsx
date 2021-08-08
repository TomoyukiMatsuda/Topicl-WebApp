import { useCallback, useState } from "react";
import Head from "next/head";

export const Main = () => {
  const [topic, setTopic] = useState("なにをやねん");
  const [member, setMember] = useState("だれがやねん");

  // todo 話題の切り替え機能
  const topics: Array<string> = [
    "最近あった面白いこと",
    "最近ハッピーだったこと",
    "最近失敗したこと",
    "１ヶ月の休みが会ったらなにする？",
    "１億円あったらどうする？",
    "休日はどう過ごしている？",
    "こういう人は許せない",
    "朝起きて最初にすること",
    "人生で最も乗っていたときの話",
    "無人島に持っていくもの３つ",
    "もう一度人生をやるとしたらなにになる？",
    "50歳のときにどうなっていたい？",
    "人生最大の失敗",
    "最後に泣いたのは？",
    "１年前の今頃なにしてた？",
    "５年前の今頃なにしてた？",
    "３年前の今頃なにしてた？",
    "なぞに覚えている一番小さい頃の思い出",
    "小さい頃の夢",
    "最近買った高価なもの",
    "子供に付けたい名前",
    "すべらない話",
    "今ハマっていること",
    "永遠の何歳でいたい？",
    "今の生活の中での一番の楽しみ",
    "昔学校で流行った遊び",
    "大学時代に戻ったらやりたいこと",
    "職場にいるおもろい人",
    "最近感じた青春",
    "自分の中での流行語",
    "最近「自分天才か!」と感じたこと",
    "自分の好きなところ",
    "もう一度新卒就活するとしたらどこにいく？",
    "自由に職業選べるとしたらなにやる",
    "自分に子供ができたらなにになって欲しい？",
    "何か新しく始めたいことは？",
    "無人島に持っていくもの１つ",
  ];

  const q36: Array<string> = [
    "この世界の誰でもディナーに呼べるとしたら、誰を招待しますか？",
    "有名になりたいですか？　どんな方法で？",
    "電話をかける前に、何を話すかリハーサルすることがありますか？　なぜ？",
    "あなたにとって「完璧な日」とはどんな日ですか？",
    "最後に1人で歌を歌ったのはいつですか？　また、誰かに対して歌ったのはいつですか？",
    "あなたは90才まで生きられ、その上、最後の60年間を「30才の肉体」か、「30才の精神」を保つことができます。どちらを選びますか？",
    "自分がどんな死に方をするか、何か予感はありますか？",
    "自分と相手の共通点を、3つ挙げてください。",
    "人生で最も感謝していることはなんですか？",
    "自分の成長過程の一部を修正することができるなら、どんなことを変えたいですか？",
    "4分間、あなたがこれまでどんな人生を歩んできたのか、できるだけ克明に説明して下さい。",
    "明日の朝、目が覚めたときに何らかの才能や能力が身についています。どんな能力がいいですか？",
    "もしも、「真実のあなた」や「あなたの人生」「将来」などを教えてくれる水晶があったら、どんなことが知りたいですか？",
    "ずっと夢に見てきたことがありますか？　あるなら、なぜ実現させていないのでしょう？",
    "これまでの人生で達成した、一番の偉業は何ですか？",
    "友情において、もっとも価値のあることは何ですか？",
    "一番大切な思い出は何ですか？",
    "一番最悪な思い出は何ですか？",
    "1年後に死ぬことが分かったとしたら、今の生き方を変えますか？　その理由は？",
    "あなたにとって「友情」とはなんですか？",
    "あなたの人生の中で、「愛・愛情」はどのような役割を果たしていますか？",
    "相手の長所を、5つ挙げてください。お互い順番に、1つずつ述べて下さい。",
    "あなたは家族と仲が良いですか？　子供時代は、他の人よりも幸せだと感じていましたか？",
    "母親との関係をどう感じていますか？",
    "「私たちは」で始まる文章で、今の状況を3回描写して下さい。例えば、「私たちはこの部屋にいて……と感じている」など。",
    "「……を、共感できる人がいればいいのに」という文章を完成させてください。",
    "もしも、今話している相手とより深い関係になるとして、あなたについて相手が知っておくべき重要なことは何ですか？",
    "相手の良いところは何ですか？　初対面の人には言わないようなことを、挙げて下さい。",
    "恥ずかしかった体験を、相手に話してみて下さい。",
    "最後に、他人の前で泣いたのはいつですか？　1人で泣いたのはいつですか？",
    "相手のどんなところが好きですか？",
    "とても冗談にはできないほど、深刻なことは何ですか？",
    "今夜死ぬとしたら、誰かに何かを告げなかったことで、一番の心残りは何ですか？　なぜ、そのことを言わなかったのですか？",
    "大切なものが全て詰まった家が火事になってしまいました。家族とペットを助け出した後、何か一つだけ取りに行くことができます。何を取りに行きますか？　その理由は？",
    "家族の中で、誰の死が一番悲しいですか？　その理由は？",
    "個人的な問題を打ち明けて、相手からアドバイスを受けて下さい。また、その問題を抱えるあなたがどんな気持ちでいるのか、相手に想像・描写してもらって下さい。",
  ];

  // 山岸、竹下くんバージョン
  const members: Array<string> = ["まつだ氏", "こーきくん", "やまぎしパイセン"];

  // 小池たちバージョン
  // const members: Array<string> = [
  //   "池氏",
  //   "松本くん",
  //   "小池（♀）",
  //   "ゆめち",
  //   "まつにい",
  // ];

  // キャンプメンツ
  // const members: Array<string> = ["よっしーパイセン", "アサイ君", "まつだ氏"];

  const onClickShuffle = useCallback(() => {
    // シャッフルされた話題を表示させる
    let topicNum = Math.floor(Math.random() * topics.length);
    let memberNum = Math.floor(Math.random() * members.length);

    setTopic(topics[topicNum]);
    setMember(members[memberNum]);
  }, [topics, members]);

  return (
    <div className="mt-5 justify-center flex flex-col">
      {/* TODO: レイアウトをきれいにする */}
      <Head>
        <title>トピっくる</title>
      </Head>

      <p className="text-gray-600 text-2xl font-bold font-mono m-5 max-w-lg mt-12">
        {member === "だれがやねん" ? member : `だれが話す？： ${member}`}
      </p>
      <p className="text-gray-600 text-2xl font-bold  font-mono m-5 max-w-lg mb-5">
        {topic === "なにをやねん" ? topic : `なにを？： ${topic}`}
      </p>

      <br />
      <button
        className="font-bold text-2xl bg-blue-400 py-2 px-4 rounded-xl text-white hover:bg-blue-300 m-5 mt-11"
        onClick={onClickShuffle}
      >
        ぷっしゅ
      </button>
      {q36.map((q) => {
          <p>{q}</p>
        })
      }
    </div>
  );
};
