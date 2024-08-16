import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hello BoostedMC",
  description: "BMC 团队下所有产品的 Wiki",

  themeConfig: {
    logo: "/logo.svg",
    head: ["link", { rel: "icon", href: "/favicon.ico" }],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "玩法详解", link: "/gameplay/ji-chu-ru-men-zhi-nan" },
      { text: "规则详情", link: "/gamerule/zhi-din-mu-di" },
    ],

    sidebar: {
      "/gameplay/": [
        {
          text: "玩法详解",
          items: [
            { text: "基础入门指南", link: "/gameplay/ji-chu-ru-men-zhi-nan" },
            { text: "登录详情", link: "/gameplay/deng-lu-xiang-qing" },
          ],
        },
      ],
      "/gamerule/": [
        {
          text: "规则详情",
          items: [
            { text: "制定目的", link: "/gamerule/zhi-din-mu-di" },
            { text: "聊天", link: "/gamerule/liao-tian" },
            { text: "游戏", link: "/gamerule/you-xi" },
            { text: "管理员", link: "/gamerule/guan-li-yuan" },
            { text: "其他", link: "/gamerule/qi-ta" },
          ],
        },
        {
          text: "处罚方式",
          items: [{ text: "违规处罚", link: "/gamerule/wei-gui-chu-fa" }],
        },
      ],
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg t="1723802093288" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8036" width="200" height="200"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="8037"></path></svg>',
        },
        link: "https://qm.qq.com/q/lve6ky8JK8",
      },
    ],

    footer: {
      message: "Made by Steve29794 with ♥",
      copyright: 'Copyright© 2024 BoostedMC - Icons by <a target="_blank" href="https://icons8.com">Icons8</a>',
    },

    search: {
      provider: "local",
    },
  },
});
