export type Lang = "ko" | "en" | "ja" | "zh" | "vi";

type LocaleText = Record<Lang, string>;

export const LANG_OPTIONS: { key: Lang; label: string }[] = [
  { key: "en", label: "EN" },
  { key: "ja", label: "JP" },
  { key: "zh", label: "ZH" },
  { key: "vi", label: "VI" }
];

export const t = (lang: Lang, value: LocaleText) => value[lang] || value.en;

export const content = {
  nav: {
    about: { ko: "소개", en: "About", ja: "紹介", zh: "介绍", vi: "Giới thiệu" },
    products: { ko: "제품", en: "Products", ja: "製品", zh: "产品", vi: "Sản phẩm" },
    services: { ko: "서비스", en: "Services", ja: "サービス", zh: "服务", vi: "Dịch vụ" },
    projects: { ko: "프로젝트", en: "Projects", ja: "プロジェクト", zh: "项目", vi: "Dự án" },
    sustainability: { ko: "지속가능성", en: "Sustainability", ja: "持続可能性", zh: "可持续性", vi: "Bền vững" },
    contact: { ko: "문의", en: "Contact", ja: "お問い合わせ", zh: "联系", vi: "Liên hệ" }
  },
  hero: {
    title: {
      ko: "당신의 제품, 우리의 종이 전문성.",
      en: "Your Product, Our Paper Expertise.",
      ja: "あなたの製品、私たちの紙の専門性。",
      zh: "您的产品，我们的纸张专业知识。",
      vi: "Sản phẩm của bạn, Chuyên môn giấy của chúng tôi."
    },
    subtitle: {
      ko: "40년 글로벌 종이 소싱 노하우를 바탕으로 한 한국의 ODM 제조 파트너",
      en: "Korea-based ODM manufacturer backed by 40 years of global paper sourcing.",
      ja: "40年のグローバルな紙の調達実績を持つ、韓国のODMメーカー。",
      zh: "韩国ODM制造商，拥有40年全球纸张采购经验。",
      vi: "Nhà sản xuất ODM tại Hàn Quốc với 40 năm kinh nghiệm thu mua giấy toàn cầu."
    },
    ctaPrimary: {
      ko: "ODM 서비스 보기",
      en: "Explore ODM Services",
      ja: "ODMサービスを見る",
      zh: "查看ODM服务",
      vi: "Xem dịch vụ ODM"
    },
    ctaSecondary: {
      ko: "문의하기",
      en: "Contact Us",
      ja: "お問い合わせ",
      zh: "联系我们",
      vi: "Liên hệ"
    }
  },
  about: {
    heading: {
      ko: "DS Retail 소개",
      en: "About DS Retail",
      ja: "DS Retailについて",
      zh: "关于DS Retail",
      vi: "Về DS Retail"
    },
    body: {
      ko: "디에스리테일은 문구류, 노트, 맞춤형 패키징, 브랜드 지제품 등 종이 기반 제품을 전문으로 하는 한국의 ODM 제조사입니다. 모회사인 두성종이(한국 최대 수입지 유통사)의 40여 년 전문성을 기반으로, 유럽·아시아·미주의 주요 제지사에서 엄선된 고품질 종이 포트폴리오를 직접 확보하고 있습니다. 단순 제조를 넘어, 글로벌 브랜드와 바이어가 최적의 소재를 찾고 제품을 개발하여 시장에 선보일 수 있도록 정밀하고 신뢰할 수 있는 파트너십을 제공합니다.",
      en: "DS Retail is a Korea-based ODM manufacturer specializing in paper-based products — from stationery and notebooks to custom packaging and branded paper goods. Backed by over 40 years of expertise through our parent company, Doosung Paper — Korea's largest importer and distributor of fine paper — we have direct access to a curated portfolio of high-quality papers sourced from leading mills across Europe, Asia, and the Americas. We don't just manufacture. We help global brands and buyers find the right paper, develop the right product, and bring it to market — with precision, reliability, and design sensibility built in.",
      ja: "ディーエスリテールは、文具、ノート、カスタムパッケージ、ブランド紙製品など、紙を素材とした製品を専門とする韓国のODMメーカーです。韓国最大の輸入紙流通会社である親会社・斗星紙の40年以上の専門知識をもとに、ヨーロッパ・アジア・南北アメリカの主要製紙工場から厳選した高品質な紙のポートフォリオを直接確保しています。単なる製造にとどまらず、世界のブランドやバイヤーが最適な素材を見つけ、製品を開発し、市場に届けられるよう、精密で信頼性の高いパートナーシップを提供します。",
      zh: "DS Retail是一家韩国ODM制造商，专注于纸质产品，包括文具、笔记本、定制包装及品牌纸制品。依托母公司斗星纸业（韩国最大进口纸张分销商）40余年的专业积累，我们可直接获取来自欧洲、亚洲及美洲顶级造纸厂的精选高品质纸张组合。我们不仅仅是制造商，更致力于帮助全球品牌和采购商找到合适的纸张、开发合适的产品，并以精准、可靠、富有设计感的方式推向市场。",
      vi: "DS Retail là nhà sản xuất ODM tại Hàn Quốc, chuyên về các sản phẩm từ giấy — từ văn phòng phẩm, sổ tay đến bao bì tùy chỉnh và sản phẩm giấy thương hiệu. Được hỗ trợ bởi hơn 40 năm kinh nghiệm từ công ty mẹ Doosung Paper — nhà phân phối giấy nhập khẩu lớn nhất Hàn Quốc — chúng tôi có quyền tiếp cận trực tiếp danh mục giấy chất lượng cao được tuyển chọn từ các nhà máy giấy hàng đầu tại châu Âu, châu Á và châu Mỹ."
    }
  },
  sectionTitles: {
    why: { ko: "왜 DS Retail인가", en: "Why DS Retail", ja: "DS Retailを選ぶ理由", zh: "为什么选择DS Retail", vi: "Vì sao chọn DS Retail" },
    featured: { ko: "추천 용지: TIRAMISU", en: "Featured Paper: TIRAMISU", ja: "注目用紙: TIRAMISU", zh: "精选纸张: TIRAMISU", vi: "Giấy nổi bật: TIRAMISU" },
    services: { ko: "ODM 서비스", en: "ODM Services", ja: "ODMサービス", zh: "ODM服务", vi: "Dịch vụ ODM" },
    how: { ko: "진행 방식", en: "How It Works", ja: "進行フロー", zh: "合作流程", vi: "Quy trình làm việc" },
    projects: { ko: "프로젝트", en: "Projects", ja: "プロジェクト", zh: "项目案例", vi: "Dự án" },
    sustainability: { ko: "책임감 있는 소싱을 기반으로", en: "Built on Responsible Sourcing", ja: "責任ある調達を基盤に", zh: "以负责任采购为基础", vi: "Xây dựng trên nguồn cung có trách nhiệm" },
    contact: { ko: "함께 만들어 갑시다", en: "Let's Work Together", ja: "一緒に作りましょう", zh: "让我们一起合作", vi: "Hãy cùng hợp tác" },
    location: { ko: "오시는 길", en: "Find Us", ja: "アクセス", zh: "来访路线", vi: "Tìm chúng tôi" }
  },
  contact: {
    subtitle: {
      ko: "문의를 남겨주시면 영업일 기준 2일 이내에 답변드립니다.",
      en: "Send us your inquiry and our team will get back to you within 2 business days.",
      ja: "お問い合わせいただくと、2営業日以内にご返信します。",
      zh: "提交咨询后，我们将在2个工作日内回复您。",
      vi: "Gửi yêu cầu và đội ngũ sẽ phản hồi trong vòng 2 ngày làm việc."
    },
    form: {
      name: { ko: "이름", en: "Full Name", ja: "お名前", zh: "姓名", vi: "Họ và tên" },
      company: { ko: "회사명", en: "Company Name", ja: "会社名", zh: "公司名", vi: "Tên công ty" },
      country: { ko: "국가", en: "Country", ja: "国", zh: "国家", vi: "Quốc gia" },
      email: { ko: "이메일", en: "Email Address", ja: "メール", zh: "邮箱", vi: "Email" },
      message: { ko: "문의 내용", en: "Message", ja: "お問い合わせ内容", zh: "咨询内容", vi: "Nội dung" },
      submit: { ko: "문의 보내기", en: "Send Inquiry", ja: "送信する", zh: "发送询问", vi: "Gửi yêu cầu" },
      sending: { ko: "전송 중...", en: "Sending...", ja: "送信中...", zh: "发送中...", vi: "Đang gửi..." },
      success: {
        ko: "문의가 접수되었습니다. 영업일 기준 2일 이내 답변드리겠습니다.",
        en: "Your inquiry has been received. We will reply within 2 business days.",
        ja: "お問い合わせを受け付けました。2営業日以内にご返信します。",
        zh: "您的咨询已提交，我们将在2个工作日内回复。",
        vi: "Đã tiếp nhận yêu cầu. Chúng tôi sẽ phản hồi trong 2 ngày làm việc."
      },
      error: {
        ko: "전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
        en: "Submission failed. Please try again in a moment.",
        ja: "送信に失敗しました。しばらくしてから再度お試しください。",
        zh: "发送失败，请稍后再试。",
        vi: "Gửi thất bại. Vui lòng thử lại sau."
      }
    }
  },
  common: {
    close: { ko: "닫기", en: "Close", ja: "閉じる", zh: "关闭", vi: "Đóng" },
    footerTagline: {
      ko: "당신의 제품, 우리의 종이 전문성.",
      en: "Your Product, Our Paper Expertise.",
      ja: "あなたの製品、私たちの紙の専門性。",
      zh: "您的产品，我们的纸张专业知识。",
      vi: "Sản phẩm của bạn, Chuyên môn giấy của chúng tôi."
    }
  },
  howSteps: [
    {
      title: { ko: "비전 공유", en: "Share Your Vision", ja: "ビジョン共有", zh: "分享您的愿景", vi: "Chia sẻ tầm nhìn" },
      body: {
        ko: "제품 아이디어, 타깃, 요구사항을 알려주세요.",
        en: "Tell us your product idea, target market, and requirements.",
        ja: "製品アイデア、ターゲット、市場要件を共有してください。",
        zh: "告诉我们您的产品概念、目标市场和需求。",
        vi: "Hãy chia sẻ ý tưởng sản phẩm, thị trường mục tiêu và yêu cầu."
      }
    },
    {
      title: { ko: "소재 선정 & 개발", en: "Source & Develop", ja: "素材選定と開発", zh: "选材与开发", vi: "Chọn giấy & phát triển" },
      body: {
        ko: "최적 용지를 선정하고 맞춤 샘플을 제작합니다.",
        en: "We select the ideal paper and develop a custom prototype.",
        ja: "最適な用紙を選定し、カスタムサンプルを開発します。",
        zh: "我们选择合适纸张并制作定制样品。",
        vi: "Chúng tôi chọn loại giấy tối ưu và phát triển mẫu thử tùy chỉnh."
      }
    },
    {
      title: { ko: "완제품 납품", en: "Deliver Worldwide", ja: "完成品納品", zh: "全球交付", vi: "Giao hàng toàn cầu" },
      body: {
        ko: "품질 검수 후 전 세계로 납품합니다.",
        en: "Quality-checked products, shipped to your door.",
        ja: "品質検査後、世界中へ納品します。",
        zh: "经品质检验后交付至全球。",
        vi: "Sản phẩm được kiểm định chất lượng trước khi giao toàn cầu."
      }
    }
  ],
  sustainabilityPoints: [
    {
      ko: "♻ 재생 펄프 & 비목재 펄프 용지 옵션",
      en: "♻ Recycled & Non-wood Pulp Options",
      ja: "♻ 再生パルプ・非木材パルプオプション",
      zh: "♻ 再生浆与非木材浆选项",
      vi: "♻ Tùy chọn giấy bột tái chế & phi gỗ"
    },
    {
      ko: "🏅 FSC 등 국제 환경 인증 취득 용지 취급",
      en: "🏅 Internationally Certified Papers (FSC & more)",
      ja: "🏅 FSCなど国際環境認証紙に対応",
      zh: "🏅 提供FSC等国际环保认证纸张",
      vi: "🏅 Giấy đạt chứng nhận quốc tế (FSC và hơn thế)"
    },
    {
      ko: "🌿 친환경 경영을 실천하는 제조 파트너",
      en: "🌿 Eco-conscious Manufacturing Partner",
      ja: "🌿 環境配慮経営を実践する製造パートナー",
      zh: "🌿 践行环保经营的制造合作伙伴",
      vi: "🌿 Đối tác sản xuất theo định hướng sinh thái"
    }
  ]
};
