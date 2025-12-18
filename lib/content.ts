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

export type TeamTag = "Management" | "Design" | "Web" | "Game";

export type TeamMember = {
  name: string;
  role: string;
  fun: string;
  avatarUrl: string;
  title: string;
  tag: TeamTag;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Sajdin",
    role: "Studio Director",
    tag: "Management",
    fun: "Keeps the vision ambitious, the scope sane, and the builds moving forward.",
    avatarUrl: "https://i.ibb.co/k6Sk7QN4/gv10zaekcwdnat1hdnk1.webp",
    title: "Studio Captain",
  },
  {
    name: "Prasad",
    role: "3D Artist",
    tag: "Design",
    fun: "Turns boring grey cubes into characters and environments with real personality.",
    avatarUrl: "https://i.ibb.co/LX4WQ464/gyzzdho4sfxsf2hpug7v.webp",
    title: "3D Worldbuilder",
  },
  {
    name: "Anzal",
    role: "Web Developer",
    tag: "Web",
    fun: "Ships web builds that load fast and never fall apart on launch day.",
    avatarUrl: "https://i.ibb.co/7tRj5m0d/nq0llrnsfrq7cvblddve.webp",
    title: "Web Pipeline Wizard",
  },
  {
    name: "Om",
    role: "Game Developer",
    tag: "Game",
    fun: "Breaks the game in the morning, fixes it by night, and makes it fun.",
    avatarUrl: "https://i.ibb.co/BHnG2CYv/oguybsfijvqr30hhwnig.webp",
    title: "Gameplay Engineer",
  },
  {
    name: "Aditya",
    role: "UI/UX & Product Designer",
    tag: "Design",
    fun: "Obsessed with interfaces where players never wonder, “Where do I click next?”",
    avatarUrl: "https://i.ibb.co/23Qw86cN/qdmyej0yw8jjjzmnolak.webp",
    title: "Experience Architect",
  },
  {
    name: "Arti",
    role: "Game Developer",
    tag: "Game",
    fun: "Builds the systems and pipelines that keep our games stable, scalable, and fun to work on.",
    avatarUrl: "https://i.ibb.co/mC3ZZBLf/vvktlyk6lyoimuc9aqya.webp",
    title: "Gameplay Tech Architect",
  },
  {
    name: "Shagirul",
    role: "Web Developer",
    tag: "Web",
    fun: "Connects our games, tools, and data so everything quietly works together.",
    avatarUrl: "https://i.ibb.co/Ps2jm4SG/ycxscgjai5e4kcgranw0.webp",
    title: "Systems Connector",
  },
];
