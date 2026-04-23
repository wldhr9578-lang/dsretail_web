"use client";

import { useMemo, useState } from "react";
import { LANG_OPTIONS, content, t } from "@/lib/translations";

const stats = [
  { value: "40+", label: "Years of Expertise" },
  { value: "3", label: "Continents Sourced" },
  { value: "7+", label: "Product Categories" },
  { value: "Est. 1982", label: "Founded" }
];

const whyCards = [
  {
    title: { ko: "글로벌 소싱 파워", en: "Global Sourcing Power", ja: "グローバル調達力", zh: "全球采购能力", vi: "Năng lực nguồn cung toàn cầu" },
    body: { ko: "유럽·아시아·미주 주요 제지사 직접 연결", en: "Direct access to premium paper mills across 3 continents", ja: "3大陸の製紙工場に直接アクセス", zh: "直连三大洲优质纸厂", vi: "Kết nối trực tiếp nhà máy giấy cao cấp tại 3 châu lục" }
  },
  {
    title: { ko: "종이 전문성", en: "Paper Expertise at Scale", ja: "紙の専門性", zh: "纸张专业能力", vi: "Chuyên môn giấy quy mô lớn" },
    body: { ko: "한국 최대 규모의 수입지 포트폴리오 보유", en: "Korea's most extensive imported paper portfolio", ja: "韓国最大級の輸入紙ポートフォリオ", zh: "韩国最大规模进口纸组合", vi: "Danh mục giấy nhập khẩu lớn nhất Hàn Quốc" }
  },
  {
    title: { ko: "엔드투엔드 ODM", en: "End-to-End ODM", ja: "エンドツーエンドODM", zh: "端到端ODM", vi: "ODM trọn gói" },
    body: { ko: "소재 선정부터 완제품까지 일괄 처리", en: "From paper selection to finished product, all in one place", ja: "素材選定から完成品まで一括対応", zh: "从选纸到成品一站式完成", vi: "Từ chọn giấy đến thành phẩm tại một nơi" }
  },
  {
    title: { ko: "지속 가능성", en: "Sustainability Ready", ja: "サステナビリティ対応", zh: "可持续准备", vi: "Sẵn sàng bền vững" },
    body: { ko: "FSC 인증 및 친환경 용지 옵션 제공", en: "FSC-certified and eco-friendly paper options available", ja: "FSC認証や環境配慮紙に対応", zh: "提供FSC及环保纸选项", vi: "Có các lựa chọn giấy FSC và thân thiện môi trường" }
  },
  {
    title: { ko: "수출 가능 소재", en: "Export-Eligible Materials", ja: "輸出対応素材", zh: "可出口材料", vi: "Vật liệu đủ điều kiện xuất khẩu" },
    body: { ko: "자체 보유 수출용 용지로 글로벌 납품 가능", en: "Proprietary paper available for international orders", ja: "自社保有の輸出向け用紙で対応", zh: "自有出口级纸张支持全球交付", vi: "Giấy độc quyền sẵn sàng cho đơn hàng quốc tế" }
  }
];

const serviceCards = [
  ["노트 & 다이어리", "Notebooks & Diaries", "브랜드 아이덴티티를 담은 맞춤형 필기 제품", "Custom writing products that embody your brand identity"],
  ["스케치북", "Sketchbooks", "다양한 용지 옵션의 아티스트·브랜드용 스케치북", "Artist and brand sketchbooks with diverse paper options"],
  ["패키징 박스", "Packaging Boxes", "소재·구조·후가공까지 세밀하게 설계한 맞춤 박스", "Custom boxes designed down to material, structure, and finish"],
  ["쇼핑백", "Shopping Bags", "브랜드 감성과 내구성을 동시에 잡은 종이 쇼핑백", "Paper shopping bags balancing brand aesthetics and durability"],
  ["고급 봉투", "Premium Envelopes", "컬러·질감·규격 모두 맞춤 제작 가능한 프리미엄 봉투", "Premium envelopes fully customizable in color, texture, and size"],
  ["달력", "Calendars (Monthly & Daily)", "연간 브랜드 굿즈로 활용 가능한 맞춤형 달력", "Custom calendars designed as year-round brand merchandise"]
].map(([koTitle, enTitle, koBody, enBody]) => ({
  title: { ko: koTitle, en: enTitle, ja: enTitle, zh: enTitle, vi: enTitle },
  body: { ko: koBody, en: enBody, ja: enBody, zh: enBody, vi: enBody }
}));

const projects = [
  {
    client: "NE:AR",
    category: { ko: "쇼핑백", en: "Shopping Bag", ja: "Shopping Bag", zh: "Shopping Bag", vi: "Shopping Bag" },
    badge: "Packaging",
    description: {
      ko: "브랜드의 세계관을 종이 한 장에 — 컬러, 질감, 구조까지 브랜드 아이덴티티를 온전히 담아낸 팝업·시딩용 쇼핑백 프로젝트",
      en: "Brand identity in every fold — color, texture, and structure all crafted to reflect NE:AR's aesthetic for pop-up and seeding use.",
      ja: "Brand identity in every fold — color, texture, and structure all crafted to reflect NE:AR's aesthetic for pop-up and seeding use.",
      zh: "Brand identity in every fold — color, texture, and structure all crafted to reflect NE:AR's aesthetic for pop-up and seeding use.",
      vi: "Brand identity in every fold — color, texture, and structure all crafted to reflect NE:AR's aesthetic for pop-up and seeding use."
    },
    image: "https://postfiles.pstatic.net/MjAyNTA2MjhfOTcg/MDAxNzUxMTExODIzMDQy.BCmUEz-xjw3glXLMn4_ouRJTCKCpA5hxfViu87odnq0g.tzf8zdCw0nrFzc_DieTyG9ptfxo6qbNHzsLusgaCIQYg.JPEG/WOO00979.jpg?type=w966",
    gallery: [
      "https://postfiles.pstatic.net/MjAyNTA2MThfMTc2/MDAxNzUwMjAyNDMzNTgy.Te-dtSkQtMQBxNg1ykFO3Okyv9XYQPfrpYthZ7386b0g.uqz1DoGOk5UyCszkCJXenwEO0Yu4Ow9SZ_aPPCp_wR0g.JPEG/SE-aba8b656-736f-43ed-884b-e4650526cee9.jpg?type=w466",
      "https://postfiles.pstatic.net/MjAyNTA2MThfMjc1/MDAxNzUwMjAyNDM1NDQw.xwXZlxATsJ0WXLvkhWblxsekqOZmMncicyVU0KgLiF8g.9mTTtGufcNvypMRYdqbXYyHhWvfbu7wTHQA0A4GnB1kg.JPEG/SE-162f0774-6ab9-4179-a3b6-62d31bfe416e.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNTA2MThfMTk3/MDAxNzUwMjAyNjkyNTA0.nU2QNlFeOvnDSgOX4XhGHGW-jtF3zU_adfjx6VVPJYsg.tu5aMViuvoX0hh7pa7oovtgRbjpZV1gqc9RJofcsOqsg.JPEG/SE-650c888d-670f-4068-ae03-7b424858a426.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNTA2MThfMTk3/MDAxNzUwMjI2Mjg0NzM2.VwLbT-4zzJuHZXjI-LhZhD045ujFLXf8rCFRRhvNbrUg.8JNF67GanfjIbQvizpg5snLnk7HHCiZt49LAZnz3oLEg.JPEG/WOO00943.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNTA2MjhfOTcg/MDAxNzUxMTExODIzMDQy.BCmUEz-xjw3glXLMn4_ouRJTCKCpA5hxfViu87odnq0g.tzf8zdCw0nrFzc_DieTyG9ptfxo6qbNHzsLusgaCIQYg.JPEG/WOO00979.jpg?type=w966"
    ]
  },
  {
    client: "Ttanjee Group",
    category: { ko: "노트", en: "Notebook", ja: "Notebook", zh: "Notebook", vi: "Notebook" },
    badge: "Stationery",
    description: {
      ko: "실용성과 브랜드 정체성의 균형 — 만년필 사용자까지 세심하게 고려한 용지 선택과 컬러 배색, 후가공이 돋보이는 노트 굿즈 3종",
      en: "Function meets identity — 3 notebook goods crafted with fountain pen users in mind, refined through careful paper selection, color, and finishing.",
      ja: "Function meets identity — 3 notebook goods crafted with fountain pen users in mind, refined through careful paper selection, color, and finishing.",
      zh: "Function meets identity — 3 notebook goods crafted with fountain pen users in mind, refined through careful paper selection, color, and finishing.",
      vi: "Function meets identity — 3 notebook goods crafted with fountain pen users in mind, refined through careful paper selection, color, and finishing."
    },
    image: "https://postfiles.pstatic.net/MjAyNTA2MTlfMTY4/MDAxNzUwMjk5NTMzNzc4.-9pkdOKoKdMeeMhW1wtnbFAmafLn-zKoMwYFFMdvresg.f2ZIYZNqIOxIjXdvzuD5S_T64YUmGGUJzq-07wSmbkAg.JPEG/WOO01468.jpg?type=w966",
    gallery: [
      "https://postfiles.pstatic.net/MjAyNTA2MTlfMTYx/MDAxNzUwMzAzOTc5OTQz.zygk4ZDqRikg_4wbRc_pyAbU3IHOGIPnR4WqfnMu8v0g.x4TqQVvNjq5_WjJeEE8T4qEIEILwHeKYT9LbBJVOhzQg.JPEG/WOO00847.jpg?type=w466",
      "https://postfiles.pstatic.net/MjAyNTA2MTlfODMg/MDAxNzUwMzA0NzcyODc1.15ZUTKZ5b71JkP31WdgNGZfwyKzh1OzBmZMQGk-E4UQg.rHHkRgUZD0WKun_frLGyre-hnMFC0_05xbBk6KXTl0Qg.JPEG/SE-6aed009e-9b1c-41f9-ad10-c94572aa7e88.jpg?type=w466",
      "https://postfiles.pstatic.net/MjAyNTA2MTlfMTkz/MDAxNzUwMzA1NTE4OTMz.-AaI0I2MqaKM6NP22zSA9kTMF0mSVb9b23F_Q6ITezIg.zoUHa3FEUHTY6gbWzyf9wG0vNCjHlS8xkYKnsqvp6D4g.JPEG/WOO00870.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNTA2MTlfMTc5/MDAxNzUwMzIxMDkyODky.v36XrYyvUr9LZ0RodA2Y7w6cKsQhwakjfMiAOdIj7msg.EIQNOeHTIcjFn-45wm0amHOZ-pHl16_xWYohi99YstUg.JPEG/WOO01445.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNTA2MTlfMTY4/MDAxNzUwMjk5NTMzNzc4.-9pkdOKoKdMeeMhW1wtnbFAmafLn-zKoMwYFFMdvresg.f2ZIYZNqIOxIjXdvzuD5S_T64YUmGGUJzq-07wSmbkAg.JPEG/WOO01468.jpg?type=w966"
    ]
  },
  {
    client: "Korea Environmental Industry Association",
    category: { ko: "다이어리·포켓수첩", en: "Diary & Pocket Notebook", ja: "Diary & Pocket Notebook", zh: "Diary & Pocket Notebook", vi: "Diary & Pocket Notebook" },
    badge: "Corporate Gift",
    description: {
      ko: "연초 파트너사 선물용으로 기획된 다이어리·포켓수첩 — 깔끔한 디자인과 실용적인 구성으로 일상 속에서 자연스럽게 활용할 수 있도록 제작",
      en: "New year corporate gift set designed for partner distribution — clean design and practical layout crafted for everyday use.",
      ja: "New year corporate gift set designed for partner distribution — clean design and practical layout crafted for everyday use.",
      zh: "New year corporate gift set designed for partner distribution — clean design and practical layout crafted for everyday use.",
      vi: "New year corporate gift set designed for partner distribution — clean design and practical layout crafted for everyday use."
    },
    image: "https://postfiles.pstatic.net/MjAyNTA2MjNfMTU4/MDAxNzUwNjY1MzM0MDcx.e7A3Xlj4ym0uusEgJiQE6aIH6MR_RaB9qU84xc87m1Yg.OaADhO6qoMs-IC77MVi0dratnCWNGSHfxlS3xirdhLQg.JPEG/000034.jpg?type=w966",
    gallery: [
      "https://postfiles.pstatic.net/MjAyNTA2MjRfMTI2/MDAxNzUwNzQ1MTgwMjA4.2skrGA5kAUhnVhtg3DhC_MZ3s-H_Vlnm2k1cT4JyPhUg.TyJNsBfbOGKL5FAfOgbZjQkFPhMNURbtoQI8Bp5Q87Qg.JPEG/WOO00501.jpg?type=w466",
      "https://postfiles.pstatic.net/MjAyNTA2MjRfNDIg/MDAxNzUwNzQ1MTA4Mjgw.4X1ScoLunD75EiLQamcBP_I2t5nx4wyocqulNBfTaJwg.O45u6cxnTgoj_vZUfratYEhviocCtR6wY7IG7HIk8Skg.JPEG/WOO00456.jpg?type=w466",
      "https://postfiles.pstatic.net/MjAyNTA2MjRfNTAg/MDAxNzUwNzQ1OTI3Mjgx.OOO-FmG34I9MjpiNn2reIESyJanY-t5Oejs23B0dlPQg.G4lyuXq2VBVnPRuDEYNl13uhOvoQY5fHuuEL0_iRSiYg.JPEG/WOO00512.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNTA2MjVfNjEg/MDAxNzUwODMzMTE1Nzkx.GOpNaVIt7h-nrs2qvTBKMh-JDSO-DncHApj9-mkWjUwg.QlTNRhgNQHwsL6Xa64P4_e4UJSpAS6NljVdYXdQuVYkg.JPEG/WOO00529.jpg?type=w466",
      "https://postfiles.pstatic.net/MjAyNTA2MjNfMTU4/MDAxNzUwNjY1MzM0MDcx.e7A3Xlj4ym0uusEgJiQE6aIH6MR_RaB9qU84xc87m1Yg.OaADhO6qoMs-IC77MVi0dratnCWNGSHfxlS3xirdhLQg.JPEG/000034.jpg?type=w966"
    ]
  },
  {
    client: "Arte Museum",
    category: { ko: "스케치북·미니노트", en: "Sketchbook & Mini Notebook", ja: "Sketchbook & Mini Notebook", zh: "Sketchbook & Mini Notebook", vi: "Sketchbook & Mini Notebook" },
    badge: "Museum Goods",
    description: {
      ko: "전시 공간의 색감과 질감을 그대로 담아낸 뮤지엄 에디션 — 방문객이 일상 속에서도 전시의 여운을 오래도록 간직할 수 있도록 설계된 굿즈 4종",
      en: "Museum edition goods that capture the exhibition's atmosphere — designed so visitors can carry the emotion of the space into their everyday lives.",
      ja: "Museum edition goods that capture the exhibition's atmosphere — designed so visitors can carry the emotion of the space into their everyday lives.",
      zh: "Museum edition goods that capture the exhibition's atmosphere — designed so visitors can carry the emotion of the space into their everyday lives.",
      vi: "Museum edition goods that capture the exhibition's atmosphere — designed so visitors can carry the emotion of the space into their everyday lives."
    },
    image: "https://postfiles.pstatic.net/MjAyNTA2MjZfMTI1/MDAxNzUwODk3MjAzNDc0.P6UQHamh-LlYEJAoWHwuMtisCEU7fGrbqI74nbz421wg._YBRfQ0YIRjxJRe0xMYyVp2LTj36avpzgnq30ValSOgg.JPEG/WOO01104.jpg?type=w966",
    gallery: [
      "https://postfiles.pstatic.net/MjAyNTA2MjZfMTgw/MDAxNzUwODk3MjAzMjMx.Ulxb3g1MNebliJOtbdX4979zlwUHfs2YdqVSLLPJHIAg.DpxWmrfYRciti40bQZZT2J6kNaHHQTRAINVDCksC0Eg.JPEG/WOO01147.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNTA2MjZfMjEy/MDAxNzUwOTAyNzg5ODIx.DUbDLO9T4Wi4nrYkeQ6whXgLiT2aMYUKIgYP9h8rP5wg.Zivp5qvgFaTXM2dp4_Nj8nSA1UzYDucnRpM-EhWUg.JPEG/WOO00136.jpg?type=w466",
      "https://postfiles.pstatic.net/MjAyNTA2MjZfMTc0/MDAxNzUwOTAyOTAwMDM0.07W95eM9qDgUQq3ZY4nLhhqHZGIeLRGmQ--R7Dn0_Ig.UEW1MLjmpF16hv2Gf9NWX7l4tPDoHIzyLTil7Z8WjAwg.JPEG/WOO00191.jpg?type=w466",
      "https://postfiles.pstatic.net/MjAyNTA2MjZfODgg/MDAxNzUwOTAyOTAwMzQy.__8S7Q7HYcgZEEP4iqEQdUrr-AABwNAYgCgyqJXGTEgg.7gRX7UCYHo9-EAmI9y_NZObxmMB-HyuGMI7vIvL_SV8g.JPEG/WOO00180.jpg?type=w466",
      "https://postfiles.pstatic.net/MjAyNTA2MjZfMTI1/MDAxNzUwODk3MjAzNDc0.P6UQHamh-LlYEJAoWHwuMtisCEU7fGrbqI74nbz421wg._YBRfQ0YIRjxJRe0xMYyVp2LTj36avpzgnq30ValSOgg.JPEG/WOO01104.jpg?type=w966"
    ]
  }
];

const navItems = [
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "sustainability", href: "#sustainability" },
  { key: "contact", href: "#contact" }
];

export default function Home() {
  const [lang, setLang] = useState("ko");
  const [lightbox, setLightbox] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState(null);

  const paperText = useMemo(
    () => ({
      body: {
        ko: "레이저·잉크젯 인쇄 모두 호환되는 프리미엄 펄 광택 용지입니다. 인쇄물에 은은한 광택감을 더해 럭셔리 문구류, 브랜드 홍보물, 패키징 인서트, 고급 봉투 등에 적합합니다. 국제 수출이 가능한 자체 보유 용지입니다.",
        en: "A premium pearl-finish paper compatible with both laser and inkjet printing. Tiramisu brings a distinctive shimmer to any printed piece — ideal for luxury stationery, brand collateral, packaging inserts, and premium envelopes. Available for international export.",
        ja: "A premium pearl-finish paper compatible with both laser and inkjet printing. Tiramisu brings a distinctive shimmer to any printed piece — ideal for luxury stationery, brand collateral, packaging inserts, and premium envelopes. Available for international export.",
        zh: "A premium pearl-finish paper compatible with both laser and inkjet printing. Tiramisu brings a distinctive shimmer to any printed piece — ideal for luxury stationery, brand collateral, packaging inserts, and premium envelopes. Available for international export.",
        vi: "A premium pearl-finish paper compatible with both laser and inkjet printing. Tiramisu brings a distinctive shimmer to any printed piece — ideal for luxury stationery, brand collateral, packaging inserts, and premium envelopes. Available for international export."
      },
      badges: [
        { ko: "펄 광택 마감", en: "Pearl Finish", ja: "Pearl Finish", zh: "Pearl Finish", vi: "Pearl Finish" },
        { ko: "레이저·잉크젯 호환", en: "Laser & Inkjet Compatible", ja: "Laser & Inkjet Compatible", zh: "Laser & Inkjet Compatible", vi: "Laser & Inkjet Compatible" },
        { ko: "수출 가능", en: "Export Available", ja: "Export Available", zh: "Export Available", vi: "Export Available" }
      ],
      cta: { ko: "샘플 요청하기", en: "Request Samples", ja: "Request Samples", zh: "Request Samples", vi: "Request Samples" }
    }),
    []
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      country: formData.get("country"),
      email: formData.get("email"),
      message: formData.get("message"),
      _subject: "DS Retail 웹사이트 문의"
    };

    try {
      const response = await fetch("https://formspree.io/f/mdaaolly", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Failed");
      setSubmitState("success");
      e.currentTarget.reset();
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-nav">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <img src="https://blogpfthumb-phinf.pstatic.net/MjAyNTA3MDlfOTUg/MDAxNzUyMDE3ODQxMjg1.KwNdY4E-7Og9zbV6FIHeXgIDNESWl4jSSdXAGnoMMLQg.pd1FT9KXgLR5ftfFFMiCAr9F0qz3TzyT8Yx7SLjo-nog.JPEG/ds_logo.jpg/ds_logo.jpg?type=w161" alt="DS Retail logo" className="h-10 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="hover:text-black">
                {t(lang, content.nav[item.key])}
              </a>
            ))}
          </nav>
          <div className="fixed right-4 top-3 z-50 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-semibold shadow-sm">
            <div className="flex items-center gap-2">
              {LANG_OPTIONS.map((item) => (
                <button key={item.key} onClick={() => setLang(item.key)} className={lang === item.key ? "text-black" : "text-gray-400"} type="button">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="paper-texture bg-[url('https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
        <div className="bg-black/55">
          <div className="mx-auto max-w-7xl px-4 py-28 text-white md:px-6 md:py-40">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{t(lang, content.hero.title)}</h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-200">{t(lang, content.hero.subtitle)}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#services" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900">{t(lang, content.hero.ctaPrimary)}</a>
              <a href="#contact" className="rounded-md border border-white px-6 py-3 text-sm font-semibold">{t(lang, content.hero.ctaSecondary)}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <h2 className="text-3xl font-semibold">{t(lang, content.about.heading)}</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-5">
          <p className="lg:col-span-3 leading-8 text-gray-700">{t(lang, content.about.body)}</p>
          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-white p-5 border border-gray-100">
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="mt-1 text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <h2 className="text-3xl font-semibold">{t(lang, content.sectionTitles.why)}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((card) => (
            <article key={card.title.en} className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-lg font-semibold">{t(lang, card.title)}</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">{t(lang, card.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="paper-texture bg-[#fbf8f0]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <h2 className="text-3xl font-semibold">{t(lang, content.sectionTitles.featured)}</h2>
          <p className="mt-5 max-w-3xl leading-7 text-gray-700">{t(lang, paperText.body)}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {paperText.badges.map((badge) => (
              <span key={badge.en} className="rounded-full bg-white px-4 py-2 text-sm border border-gray-200">{t(lang, badge)}</span>
            ))}
          </div>
          <a href="#contact" className="mt-8 inline-block rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white">{t(lang, paperText.cta)}</a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <h2 className="text-3xl font-semibold">{t(lang, content.sectionTitles.services)}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card) => (
            <article key={card.title.en} className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-lg font-semibold">{t(lang, card.title)}</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">{t(lang, card.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <h2 className="text-3xl font-semibold">{t(lang, content.sectionTitles.how)}</h2>
        <div className="relative mt-10 grid gap-4 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-11 hidden h-px bg-gray-200 md:block" />
          {content.howSteps.map((step, idx) => (
            <article key={step.title.en} className="relative rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">{idx + 1}</div>
              <p className="font-semibold">{t(lang, step.title)}</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">{t(lang, step.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <h2 className="text-3xl font-semibold">{t(lang, content.sectionTitles.projects)}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <button key={project.client} onClick={() => setLightbox(project)} type="button" className="overflow-hidden rounded-xl border border-gray-200 bg-white text-left">
              <img src={project.image} alt={project.client} className="h-60 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{project.client}</p>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">{project.badge}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{t(lang, project.category)}</p>
                <p className="mt-3 text-sm text-gray-700">{t(lang, project.description)}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="sustainability" className="bg-[#eef4ed]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <h2 className="text-3xl font-semibold">{t(lang, content.sectionTitles.sustainability)}</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {content.sustainabilityPoints.map((point) => (
              <li key={point.en} className="rounded-xl bg-white p-6">{t(lang, point)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <h2 className="text-3xl font-semibold">{t(lang, content.sectionTitles.contact)}</h2>
        <p className="mt-3 text-gray-600">{t(lang, content.contact.subtitle)}</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <input name="name" required placeholder={t(lang, content.contact.form.name)} className="rounded-md border border-gray-300 bg-white px-4 py-3" />
          <input name="company" required placeholder={t(lang, content.contact.form.company)} className="rounded-md border border-gray-300 bg-white px-4 py-3" />
          <input name="country" required placeholder={t(lang, content.contact.form.country)} className="rounded-md border border-gray-300 bg-white px-4 py-3" />
          <input name="email" type="email" required placeholder={t(lang, content.contact.form.email)} className="rounded-md border border-gray-300 bg-white px-4 py-3" />
          <textarea name="message" required rows={5} placeholder={t(lang, content.contact.form.message)} className="rounded-md border border-gray-300 bg-white px-4 py-3 md:col-span-2" />
          <button type="submit" disabled={isSubmitting} className="rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 md:w-fit">
            {isSubmitting ? t(lang, content.contact.form.sending) : t(lang, content.contact.form.submit)}
          </button>
          {submitState === "success" && <p className="md:col-span-2 text-sm text-green-700">{t(lang, content.contact.form.success)}</p>}
          {submitState === "error" && <p className="md:col-span-2 text-sm text-red-600">{t(lang, content.contact.form.error)}</p>}
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <h2 className="text-3xl font-semibold">{t(lang, content.sectionTitles.location)}</h2>
        <div className="mt-6 grid gap-3 text-sm text-gray-700">
          <p>경기도 파주시 광인사길 226 (문발동)</p>
          <p>02-3470-0002</p>
          <p>02-588-2012</p>
        </div>
        <iframe
          title="DS Retail map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.5!2d126.7227!3d37.7091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9a4b5e6c7d8f%3A0x1!2z6rK96riw64-ZIOuwsOyViCDqtIDsnbTsl5Agwqb47J6QIDIyNg!5e0!3m2!1sko!2skr"
          className="mt-6 h-[450px] w-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </section>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="flex flex-col gap-3">
            <img src="https://blogpfthumb-phinf.pstatic.net/MjAyNTA3MDlfOTUg/MDAxNzUyMDE3ODQxMjg1.KwNdY4E-7Og9zbV6FIHeXgIDNESWl4jSSdXAGnoMMLQg.pd1FT9KXgLR5ftfFFMiCAr9F0qz3TzyT8Yx7SLjo-nog.JPEG/ds_logo.jpg/ds_logo.jpg?type=w161" alt="DS Retail logo" className="h-9 w-auto" />
            <p className="text-sm text-gray-600">{t(lang, content.common.footerTagline)}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {navItems.map((item) => (
                <a key={item.key} href={item.href} className="text-gray-600 hover:text-black">
                  {t(lang, content.nav[item.key])}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-600">경기도 파주시 광인사길 226 (문발동)</p>
            <p className="text-sm text-gray-600">Tel: 02-3470-0002 | Fax: 02-588-2012</p>
            <p className="text-xs text-gray-400">© 2025 DS Retail Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 p-4" role="dialog" aria-modal="true">
          <div className="mx-auto max-w-6xl">
            <button onClick={() => setLightbox(null)} type="button" className="mb-3 rounded bg-white px-3 py-1 text-sm">{t(lang, content.common.close)}</button>
            <div className="grid gap-3 md:grid-cols-3">
              {lightbox.gallery.map((src, idx) => (
                <img key={`${lightbox.client}-${idx}`} src={src} alt={`${lightbox.client} ${idx + 1}`} className="h-64 w-full rounded object-cover" />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
