import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NaturalParser",
  description: "Parse Natural Language in a Natural way.",
  appearance: "dark",

  base: '/site/',
  outDir: '../docs',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Coming soon',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
          { text: 'Coming soon', link: '/list' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NaturalParser' }
    ]
  },
  markdown: {
    math: true
  },
})
