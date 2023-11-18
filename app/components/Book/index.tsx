export default () => {
  return (
    <>
      <section className="rounded-sm px-6 pb-12 max-w-6xl mx-auto md:px-12 bg-stone-200">
        <header className="overflow-hidden pt-6 pb-6 md:pt-12">
          <div className="pt-4 md:pt-6">
            <h1
              id="article-title"
              className="heti--serif text-[2rem] font-bold leading-snug mb-4 md:mb-6 md:text-[2.6rem]"
            >
              <span>Code Highlight Style test</span>
            </h1>
            <div className="grid grid-cols-9 gap-2 text-xs">
              <div className="col-span-3 flex flex-col justify-center md:flex-row">
                <span
                  title="View all posts by ROYIANS"
                  rel="author"
                  className="font-bold"
                >
                  ROYIANS
                </span>
                <span className="hidden px-2 md:block">/</span>
                <span>
                  <span title="16:41" rel="bookmark">
                    <time dateTime="2023-08-13T16:41:13+08:00">2023-08-13</time>
                  </span>
                </span>
              </div>
              <div className="col-span-2 flex flex-col justify-center md:flex-row">
                <span>文章热度</span>
                <span className="hidden pr-2 md:block"></span>
                <span>
                  <i className="ri-fire-fill"></i>
                  <span id="busuanzi_value_page_pv">2061</span>
                  <span>℃</span>
                </span>
              </div>
              <div className="col-span-2 flex flex-col justify-center md:flex-row">
                <span>本文共计</span>
                <span className="hidden pr-2 md:block"></span>
                <span>
                  <i className="ri-text"></i>
                  822 字
                </span>
              </div>
              <div className="col-span-2 flex flex-col justify-center md:flex-row">
                <span>预计阅读</span>
                <span className="hidden pr-2 md:block"></span>
                <span>
                  <i className="ri-book-open-fill"></i>5 分钟
                </span>
              </div>
            </div>
          </div>

          <article className="heti text-lg post-content mt-10 prose dark:prose-invert post-content heti--serif ">
            <p>This is a Chinese test post.</p>
            <p>
              善我王上魚、產生資西員合兒臉趣論。畫衣生這著爸毛親可時，安程幾？合學作。觀經而作建。都非子作這！法如言子你關！手師也。
            </p>
            <p>
              以也座論頭室業放。要車時地變此親不老高小是統習直麼調未，行年香一？
            </p>
            <p>
              就竟在，是我童示讓利分和異種百路關母信過明驗有個歷洋中前合著區亮風值新底車有正結，進快保的行戰從：弟除文辦條國備當來際年每小腳識世可的的外的廣下歌洲保輪市果底天影；全氣具些回童但倒影發狀在示，數上學大法很，如要我……月品大供這起服滿老？應學傳者國：山式排只不之然清同關；細車是！停屋常間又，資畫領生，相們制在？公別的人寫教資夠。資再我我！只臉夫藝量不路政吃息緊回力之；兒足灣電空時局我怎初安。意今一子區首者微陸現際安除發連由子由而走學體區園我車當會，經時取頭，嚴了新科同？很夫營動通打，出和導一樂，查旅他。坐是收外子發物北看蘭戰坐車身做可來。道就學務。
            </p>
            <p>國新故。</p>
            <blockquote>
              <p>
                工步他始能詩的，裝進分星海演意學值例道……於財型目古香亮自和這乎？化經溫詩。只賽嚴大一主價世哥受的沒有中年即病行金拉麼河。主小路了種就小為廣不？
              </p>
            </blockquote>
            <p>
              <em>
                From{' '}
                <a
                  target="_blank"
                  rel="noopener"
                  href="http://www.richyli.com/tool/loremipsum/"
                >
                  亂數假文產生器 - Chinese Lorem Ipsum
                </a>
              </em>
            </p>
          </article>
        </header>
      </section>
    </>
  );
};
