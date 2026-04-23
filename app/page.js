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
    title: { ko: "글로벌 소싱 파워", en: "Global Sourcing Power", ja: "Global Sourcing Power", zh: "Global Sourcing Power", vi: "Global Sourcing Power" },
    body: { ko: "유럽·아시아·미주 주요 제지사 직접 연결", en: "Direct access to premium paper mills across 3 continents", ja: "Direct access to premium paper mills across 3 continents", zh: "Direct access to premium paper mills across 3 continents", vi: "Direct access to premium paper mills across 3 continents" }
  },
  {
    title: { ko: "종이 전문성", en: "Paper Expertise at Scale", ja: "Paper Expertise at Scale", zh: "Paper Expertise at Scale", vi: "Paper Expertise at Scale" },
    body: { ko: "한국 최대 규모의 수입지 포트폴리오 보유", en: "Korea's most extensive imported paper portfolio", ja: "Korea's most extensive imported paper portfolio", zh: "Korea's most extensive imported paper portfolio", vi: "Korea's most extensive imported paper portfolio" }
  },
  {
    title: { ko: "엔드투엔드 ODM", en: "End-to-End ODM", ja: "End-to-End ODM", zh: "End-to-End ODM", vi: "End-to-End ODM" },
    body: { ko: "소재 선정부터 완제품까지 일괄 처리", en: "From paper selection to finished product, all in one place", ja: "From paper selection to finished product, all in one place", zh: "From paper selection to finished product, all in one place", vi: "From paper selection to finished product, all in one place" }
  },
  {
    title: { ko: "지속 가능성", en: "Sustainability Ready", ja: "Sustainability Ready", zh: "Sustainability Ready", vi: "Sustainability Ready" },
    body: { ko: "FSC 인증 및 친환경 용지 옵션 제공", en: "FSC-certified and eco-friendly paper options available", ja: "FSC-certified and eco-friendly paper options available", zh: "FSC-certified and eco-friendly paper options available", vi: "FSC-certified and eco-friendly paper options available" }
  },
  {
    title: { ko: "수출 가능 소재", en: "Export-Eligible Materials", ja: "Export-Eligible Materials", zh: "Export-Eligible Materials", vi: "Export-Eligible Materials" },
    body: { ko: "자체 보유 수출용 용지로 글로벌 납품 가능", en: "Proprietary paper available for international orders", ja: "Proprietary paper available for international orders", zh: "Proprietary paper available for international orders", vi: "Proprietary paper available for international orders" }
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
      ko: "브랜드의 세계관을 종이 한 장에 담아낸 팝업·시딩용 쇼핑백 프로젝트",
      en: "Brand identity in every fold for pop-up and seeding use.",
      ja: "Brand identity in every fold for pop-up and seeding use.",
      zh: "Brand identity in every fold for pop-up and seeding use.",
      vi: "Brand identity in every fold for pop-up and seeding use."
    },
    image: "/images/project1-main.jpg",
    gallery: ["/images/project1-1.jpg", "/images/project1-2.jpg", "/images/project1-3.jpg", "/images/project1-4.jpg", "/images/project1-5.jpg", "/images/project1-6.jpg", "/images/project1-7.jpg"]
  },
  {
    client: "Ttanjee Group",
    category: { ko: "노트", en: "Notebook", ja: "Notebook", zh: "Notebook", vi: "Notebook" },
    badge: "Stationery",
    description: {
      ko: "실용성과 브랜드 정체성의 균형을 담은 노트 굿즈",
      en: "Function meets identity through careful paper and finish choices.",
      ja: "Function meets identity through careful paper and finish choices.",
      zh: "Function meets identity through careful paper and finish choices.",
      vi: "Function meets identity through careful paper and finish choices."
    },
    image: "/images/project2-main.jpg",
    gallery: ["/images/project2-1.jpg", "/images/project2-2.jpg", "/images/project2-3.jpg", "/images/project2-4.jpg", "/images/project2-5.jpg", "/images/project2-6.jpg", "/images/project2-7.jpg"]
  },
  {
    client: "Korea Environmental Industry Association",
    category: { ko: "다이어리·포켓수첩", en: "Diary & Pocket Notebook", ja: "Diary & Pocket Notebook", zh: "Diary & Pocket Notebook", vi: "Diary & Pocket Notebook" },
    badge: "Corporate Gift",
    description: {
      ko: "연초 파트너사 선물용 다이어리·포켓수첩 프로젝트",
      en: "Clean and practical set designed for everyday use.",
      ja: "Clean and practical set designed for everyday use.",
      zh: "Clean and practical set designed for everyday use.",
      vi: "Clean and practical set designed for everyday use."
    },
    image: "/images/project3-main.jpg",
    gallery: ["/images/project3-1.jpg", "/images/project3-2.jpg", "/images/project3-3.jpg", "/images/project3-4.jpg", "/images/project3-5.jpg", "/images/project3-6.jpg", "/images/project3-7.jpg"]
  },
  {
    client: "Arte Museum",
    category: { ko: "스케치북·미니노트", en: "Sketchbook & Mini Notebook", ja: "Sketchbook & Mini Notebook", zh: "Sketchbook & Mini Notebook", vi: "Sketchbook & Mini Notebook" },
    badge: "Museum Goods",
    description: {
      ko: "전시의 분위기를 담은 뮤지엄 에디션 굿즈",
      en: "Museum edition goods designed for daily emotional recall.",
      ja: "Museum edition goods designed for daily emotional recall.",
      zh: "Museum edition goods designed for daily emotional recall.",
      vi: "Museum edition goods designed for daily emotional recall."
    },
    image: "/images/project4-main.jpg",
    gallery: ["/images/project4-1.jpg", "/images/project4-2.jpg", "/images/project4-3.jpg", "/images/project4-4.jpg", "/images/project4-5.jpg", "/images/project4-6.jpg", "/images/project4-7.jpg"]
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
        ko: "레이저·잉크젯 인쇄 모두 호환되는 프리미엄 펄 광택 용지입니다. 국제 수출이 가능한 자체 보유 용지입니다.",
        en: "A premium pearl-finish paper compatible with both laser and inkjet printing. Available for international export.",
        ja: "A premium pearl-finish paper compatible with both laser and inkjet printing. Available for international export.",
        zh: "A premium pearl-finish paper compatible with both laser and inkjet printing. Available for international export.",
        vi: "A premium pearl-finish paper compatible with both laser and inkjet printing. Available for international export."
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
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur shadow-nav">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <img src="/images/ds_logo.jpg" alt="DS Retail logo" className="h-10 w-auto" />
          </a>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
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

      <section id="home" className="paper-texture bg-cover bg-center bg-[url('/images/project1-main.jpg')]">
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
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-gray-100 bg-white p-5">
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
              <span key={badge.en} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm">{t(lang, badge)}</span>
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
          {submitState === "success" && <p className="text-sm text-green-700 md:col-span-2">{t(lang, content.contact.form.success)}</p>}
          {submitState === "error" && <p className="text-sm text-red-600 md:col-span-2">{t(lang, content.contact.form.error)}</p>}
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
            <img src="/images/ds_logo.jpg" alt="DS Retail logo" className="h-9 w-auto" />
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
