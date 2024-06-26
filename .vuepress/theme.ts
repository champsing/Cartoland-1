import { hopeTheme } from "vuepress-theme-hope";
import { Page } from "vuepress";

import { enNavbar, zhtwNavbar } from "./navbar/index.js";
import { enSidebar, zhtwSidebar } from "./sidebar/index.js";

export default hopeTheme({
  // hostname: "https://Cartoland.github.io/",

  iconAssets: "fontawesome-with-brands",
  logo: "https://avatars.githubusercontent.com/u/116450397",
  repo: "Cartoland/Cartoland.github.io",
  contributors: true,
  lastUpdated: true,
  darkmode: "enable",
  favicon: "https://avatars.githubusercontent.com/u/116450397",

  locales: {
    "/zh-tw/": {
      navbar: zhtwNavbar,
      sidebar: zhtwSidebar,

      author: {
        name: "Cartoland",
        url: "https://github.com/Cartoland",
      },

      blog: {
        description: "一個圍繞 Minecraft 地圖製作的社區",
        medias: {
          Discord: "https://www.discord.com/invite/UMYxwHyRNE",
          GitHub: "https://github.com/Cartoland/",
        },
        name: "Cartoland",
        avatar: "https://avatars.githubusercontent.com/u/116450397",
      },

      metaLocales: {
        editLink: "在 GitHub 上編輯此頁面",
      },
    },
    "/en-us/": {
      navbar: enNavbar,
      sidebar: enSidebar,

      author: {
        name: "Cartoland",
        url: "https://github.com/Cartoland",
      },

      blog: {
        description: "A community focussed around Minecraft map making",
        medias: {
          Discord: "https://www.discord.com/invite/UMYxwHyRNE",
          GitHub: "https://github.com/Cartoland/",
        },
        name: "Cartoland",
        avatar: "https://avatars.githubusercontent.com/u/116450397",
      },
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: {
      filter: ({ frontmatter, filePathRelative }: Page) =>
        !!(frontmatter.article ?? (!!filePathRelative && !frontmatter.home)),
      excerptLength: 100,
    },

    redirect: {
      switchLocale: "modal",
      defaultBehavior: "homepage",
      defaultLocale: "/en-us/",
      config: {
        "/": "/en-us/",
      }
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
  },
});
