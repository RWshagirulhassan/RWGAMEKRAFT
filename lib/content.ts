export type Offering = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: string[];
};

export type Highlight = {
  title: string;
  description: string;
};

export type Stat = {
  label: string;
  value: string;
};
export enum Platform {
  CrazyGames = "CRAZY_GAMES",
  JioGames = "JIO_GAMES",
  GooglePlay = "GOOGLE_PLAY",
}
export type PlatformMeta = {
  name: string;
  iconUrl: string;
  href: string;
};
export const PLATFORM_META: Record<Platform, PlatformMeta> = {
  [Platform.CrazyGames]: {
    name: "CrazyGames",
    iconUrl: "https://www.crazygames.com/images/logo/logo-ziggy.svg",
    href: "https://www.crazygames.com",
  },

  [Platform.JioGames]: {
    name: "JioGames",
    iconUrl: "https://jiogames.com/assets/logo.png",
    href: "https://jiogames.com",
  },

  [Platform.GooglePlay]: {
    name: "Google Play",
    iconUrl: "https://www.gstatic.com/android/market_images/web/favicon_v3.ico",
    href: "https://play.google.com/store/apps/developer?id=Ready+Wealth",
  },
};

export const OFFERINGS: Offering[] = [
  {
    id: "Our Philosophy",
    label: "Our Philosophy",
    title: "Player-First Worlds",
    description:
      "We design games that feel great in the first 30 seconds and stay interesting for the next 30 hours. Every decision—from controls to camera to UI—is made to keep players curious, empowered, and smiling.",
    items: [],
  },
  {
    id: "How We Build",
    label: "How We Build",
    title: "Craft Over Chaos",
    description:
      "We move fast, but never blindly. We prototype, test, and refine in tight loops—tuning game feel, performance, and clarity—until every punch, jump, and interaction lands exactly how it should.",
    items: [],
  },
  {
    id: "What Makes Us Different",
    label: "What Makes Us Different",
    title: "Bold, Watchable, Shareable",
    description:
      "Our games are built to be as fun to watch as they are to play: expressive characters, memeable moments, and clean visual systems that pop on streams, shorts, and social feeds.",
    items: [],
  },
];

export type PortfolioPlatformLink = {
  platform: Platform;
  href?: string; // override per game (e.g. exact store page)
};

export type PortfolioItem = {
  title: string;
  tag: string;
  imageUrl?: string;
  platforms: PortfolioPlatformLink[];
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Investors Run Pune",
    tag: "Endless Runner",
    imageUrl: "https://i.ibb.co/SW8zTvB/qlo1ehno6neopusekuty.webp",
    platforms: [
      {
        platform: Platform.GooglePlay,
        href: "https://play.google.com/store/apps/details?id=com.readywealth.investorsrunpune",
      },

      {
        platform: Platform.JioGames,
        href: "",
      },
    ],
  },
  {
    title: "Annoying Uncle punch the Meme",
    tag: "Action",
    imageUrl: "https://i.ibb.co/1YR23MZV/yczjrg7ba7psbwrcofxm.webp",
    platforms: [
      {
        platform: Platform.CrazyGames,
        href: "https://www.crazygames.com/game/annoying-uncle-punch-the-meme-vfd",
      },
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  fun: string;
  title: String;
  avatarUrl?: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Aria",
    role: "Game Designer",
    fun: "Turns coffee into boss fights and dopamine loops.",
    avatarUrl: "/images/team/aria.jpg",
    title: "champian of fun",
  },
  {
    name: "Kunal",
    role: "Unity Engineer",
    fun: "Ships buttery controls… then optimizes them again.",
    avatarUrl: "/images/team/kunal.jpg",
    title: "champian of fun",
  },
  {
    name: "Mei",
    role: "3D Artist",
    fun: "Makes pixels feel expensive.",
    avatarUrl: "/images/team/mei.jpg",
    title: "champian of fun",
  },
  {
    name: "Rohit",
    role: "Tech Artist",
    fun: "Shaders so clean you can eat off them.",
    avatarUrl: "/images/team/rohit.jpg",
    title: "champian of fun",
  },
  {
    name: "Sana",
    role: "Producer",
    fun: "Calendar whisperer. Chaos-resistant.",
    avatarUrl: "/images/team/sana.jpg",
    title: "champian of fun",
  },
  {
    name: "Jay",
    role: "UI/UX",
    fun: "Clicks that feel illegal (in a good way).",
    avatarUrl: "/images/team/jay.jpg",
    title: "champian of fun",
  },
];
