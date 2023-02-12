import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />

      <section id="about" className="container mx-auto mt-16 max-w-7xl px-4">
        <h1 className="border-b-4 border-solid border-b-violet-400 pb-2 text-3xl font-bold text-violet-400">
          About / 私について
        </h1>
        <div className="flex max-w-5xl flex-col justify-center px-4">
          <div className="mr-auto w-[55%]">
            <h2 className="mt-8 text-3xl text-teal-800">自己紹介🧏</h2>
            <p className="mt-4 text-lg leading-8">
              東京でフロントエンドエンジニアとして働いておりますKaiです。
              <br />
              マークアップが好きです。
              <br />
              Visual Studio Codeも好きです。
              <br />
              最近興味があるものはTurbopackです。
              <br />
              好きなWebサイトは「阿部寛のホームページ」です。
              <br />
              <span className="underline  decoration-amber-200  decoration-4  underline-offset-4">
                React.js
              </span>
              の学習目的として、当サイトを作成しました。
            </p>
            <h2 className="mt-4 text-xl text-teal-700">
              ◎このサイトで使用してる技術
            </h2>
            <ul className="mt-2 leading-8 [&_li]:text-lg [&_li]:text-gray-600">
              <li className="">React</li>
              <li className="">TypeScript</li>
              <li>ESLint</li>
              <li>Prettier</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="ml-auto w-[50%]">
            <h2 className="mt-4 text-3xl text-teal-700">人物🧍</h2>
            <p className="mt-4 text-lg leading-8">
              おとなしく人見知りな性格ですが、好奇心旺盛な面もあります。
            </p>
            <p className="mt-4 text-xl text-teal-700">◎趣味</p>
            <ul className="mt-2 leading-8 [&_li]:text-lg [&_li]:text-gray-600">
              <li className="">サッカー中継観戦、</li>
              <li>漫画/アニメ/映画鑑賞</li>
              <li>ギター</li>
              <li>など</li>
            </ul>
          </div>
          <figure className="mt-8 block">
            <img src="/public/ph_01.jpg" width="" height="" alt="" />
            <figcaption className="text-right text-green-600">
              本人写真じゃありません。
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="skills" className="container mx-auto mt-20 max-w-7xl px-4">
        <h1 className="border-b-4 border-solid border-b-violet-400 pb-2 text-3xl font-bold text-violet-400">
          Skills / 技術的能力
        </h1>
        <ul className=" mt-8 [&_li]:text-lg [&_li]:leading-8 [&_li]:text-gray-600">
          <li className="flex">
            <h2 className=" min-w-[5.5em] text-xl font-bold text-gray-600">
              React:
            </h2>
            <p className="ml-2 flex-1">
              勉強中で、StateやPropsについてざっくり理解しただけです。
            </p>
          </li>
          <li className="flex">
            <h2 className=" min-w-[5.5em] text-xl font-bold text-gray-600">
              TypeScript:
            </h2>
            <p className="ml-2 flex-1">
              構文における型の扱いについてある程度理解していますが、まだ勉強中です。
            </p>
          </li>
          <li className="flex">
            <h2 className=" min-w-[5.5em] text-xl font-bold text-gray-600">
              JavaScript:
            </h2>
            <p className="ml-2 flex-1">
              ES6の基本構文は抑えているつもりですが、応用的な部分がまだまだ足りないので勉強中です。
              <br />
              他は、正規表現はまだ深く理解できていません。
              <br />
              Webサイトでよく使うようなUIライブラリ（モーダル、スライダー、タブ切り替え、パララックス）はある程度抑えています。
            </p>
          </li>
          <li className="flex">
            <h2 className=" min-w-[5.5em] text-xl font-bold text-gray-600">
              HTML:
            </h2>
            <p className="ml-2 flex-1">
              セマンティックな、そしてサイトパフォーマンスやアクセシビリティを意識したマークアップができます。
            </p>
          </li>
          <li className="flex">
            <h2 className=" min-w-[5.5em] text-xl font-bold text-gray-600">
              CSS:
            </h2>
            <p className="ml-2 flex-1">
              Tailwindを実践しつつ習得中です。
              Sassも多く使ってきたので問題なく使えます。
              命名規則については、FLOCSS,BEMを使えます。
            </p>
          </li>
          <li className="flex">
            <h2 className=" min-w-[5.5em] text-xl font-bold text-gray-600">
              WordPress:
            </h2>
            <p className="ml-2 flex-1">
              WordPressサイトは多く経験してきたので、基本的な記事などのループ、Advanced
              Custom
              Fieldsなどを駆使したオリジナルテーマでのカスタマイズが可能です。
              <br />
              サイトの移行や、目的により使うべきプラグインもある程度理解しています。
            </p>
          </li>
          <li className="flex">
            <h2 className=" min-w-[5.5em] text-xl font-bold text-gray-600">
              その他:
            </h2>
            <p className="ml-2 flex-1">
              PHPは、WordPressテーマのコーディングをする上での基本的な構文は理解しています。
              <br />
              htaccessでのリダイレクトもよくある方法は可能です。
            </p>
          </li>
        </ul>
      </section>
      <section id="gallery" className="container mx-auto mt-20 max-w-7xl px-4">
        <h1 className="border-b-4 border-solid border-b-violet-400 pb-2 text-3xl font-bold text-violet-400">
          Gallery / ギャラリー
        </h1>
        <p className="mt-8">
          ここでは、Reactで作成した画像ギャラリーを設置しています。
        </p>
        <p className="mt-4">使用API: XXX</p>

        <div className="mt-8 "></div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
