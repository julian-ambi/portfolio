export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  filterClass: string;
  thumbnailImage: string;
  lightboxImage: string;
  detailImages: string[];
  projectUrl: string;
  client?: string;
  date?: string;
  description: string;
  hasVideo?: boolean;
  videoEmbed?: string;
}

export const projects: PortfolioProject[] = [
  {
    slug: "stella-ai",
    title: "Stella AI プラットフォーム",
    category: "Web",
    filterClass: "filter-web",
    thumbnailImage: "/img/portfolio/stellaai.png",
    lightboxImage: "/img/portfolio/stellaai.png",
    detailImages: [],
    projectUrl: "https://stella-ai.net/home",
    description:
      "ユーザーがAIモーダルを作成・カスタマイズできるプラットフォーム。Next.js、Go、LangChainを使用し、GCPインフラ上で運用。",
  },
  {
    slug: "wasabi-switch",
    title: "WASABI SWITCH",
    category: "Web",
    filterClass: "filter-web",
    thumbnailImage: "/img/portfolio/wasabi.png",
    lightboxImage: "/img/portfolio/wasabi.png",
    detailImages: [],
    projectUrl: "https://wasabi-inc.biz/",
    description:
      "EC統合管理システム。複数ECモールへの商品一括登録・自動翻訳・POS連携機能を搭載。React、PHP／Laravelで構築。",
  },
  {
    slug: "edream",
    title: "ECサイト・ホテル予約システム",
    category: "Web",
    filterClass: "filter-web",
    thumbnailImage: "/img/portfolio/edream.png",
    lightboxImage: "/img/portfolio/edream.png",
    detailImages: [],
    projectUrl: "https://www.edreams.com/hotels/country/hk/",
    description:
      "ECサイトおよびホテル予約システムの開発。Ruby on Rails、Node.js、MySQLを用いたバックエンドとReactフロントエンド。",
  },
  {
    slug: "miroom",
    title: "Miroom",
    category: "Web",
    filterClass: "filter-web",
    thumbnailImage: "/img/portfolio/miroom.png",
    lightboxImage: "/img/portfolio/miroom.png",
    detailImages: [],
    projectUrl: "https://miroom.com/",
    description:
      "オンライン習い事プラットフォーム。動画配信・予約管理・決済機能を備えたWebアプリケーション。",
  },
  {
    slug: "price-system",
    title: "料金管理システム",
    category: "Web",
    filterClass: "filter-web",
    thumbnailImage: "/img/portfolio/price.png",
    lightboxImage: "/img/portfolio/price.png",
    detailImages: [],
    projectUrl: "https://www.price.com.hk/",
    description:
      "料金計算・管理システム。複雑な料金体系の自動計算と管理機能を実装。",
  },
  {
    slug: "bibico",
    title: "Bibico",
    category: "アプリ",
    filterClass: "filter-app",
    thumbnailImage: "/img/portfolio/bibico.png",
    lightboxImage: "/img/portfolio/bibico.png",
    detailImages: [],
    projectUrl: "https://play.google.com/store/apps/details?id=jp.bibin.bibiconative&hl=en&pli=1",
    description:
      "子供の成長記録・写真管理モバイルアプリ。写真・動画の整理、成長日記、家族間共有機能を搭載したAndroidネイティブアプリ。",
  },
];

export const detailProjects: PortfolioProject[] = [
  {
    slug: "best-of-swiss-gastro",
    title: "Best of Swiss Gastro",
    category: "Web design",
    filterClass: "filter-web",
    thumbnailImage: "/img/portfolio/p3.jpg",
    lightboxImage: "/img/portfolio/p3.jpg",
    detailImages: [
      "/img/portfolio/p2-1.jpg",
      "/img/portfolio/p2-2.jpg",
      "/img/portfolio/p2-3.jpg",
    ],
    projectUrl: "https://bestofswissgastro.ch/",
    client: "ASU Company",
    date: "01 March, 2020",
    description:
      "This is An online Guide for restaurants, bars and cafes in Switzerland.",
  },
  {
    slug: "tine-k-home",
    title: "Tine K Home",
    category: "Web",
    filterClass: "filter-web",
    thumbnailImage: "/img/portfolio/p4.jpg",
    lightboxImage: "/img/portfolio/p4.jpg",
    detailImages: [
      "/img/portfolio/p4-1.jpg",
      "/img/portfolio/p4-2.jpg",
      "/img/portfolio/p3-3.jpg",
    ],
    projectUrl: "https://www.tinekhome.com/",
    date: "01 March, 2020",
    description:
      "Tine K Home is an exclusive universe. Known for our natural and handmade products as well as unique finds that express history, culture, and traditional ...",
  },
];
