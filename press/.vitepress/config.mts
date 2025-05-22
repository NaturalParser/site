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
        text: '概述',
        items: [
          { text: '快速上手', link: '/introduction/start' },
          { text: '工作原理', link: '/introduction/mechanism' },
          { text: '如何编写规则', link: '/introduction/writeRules' },
          {
            text: '自定义功能',
            items: [
              { text: '自定义 LongTextSplitter', link: '/introduction/custom/LongTextSplitter' },
              { text: '自定义 Tokenizer', link: '/introduction/custom/Tokenizer' },
              { text: '自定义 Matcher', link: '/introduction/custom/Matcher' },
              { text: '自定义 Operator', link: '/introduction/custom/Operator' },
            ]
          },
          { text: 'API速查', link: '/introduction/API' }
        ]
      },
      {
        text: 'MMs - 匹配方式',
        items: [
          { text: '底层及逻辑MMs', link: '/matcher-methods/basic-and-logical' },
          { text: '内容特征MMs', link: '/matcher-methods/content-features' },
          { text: 'AI智能MMs', link: '/matcher-methods/ai' }
        ]
      },
      {
        text: 'Modules - 模块',
        items: [
          { text: 'LongTextSplitter 长文本分割器', link: '/modules/LongTextSplitter' },
          { text: 'Tokenizer 符号提取器', link: '/modules/Tokenizer' },
          { text: 'Parser 解析器', link: '/modules/Parser' },
          { text: 'ActionAgent 行为代理', link: '/modules/ActionAgent' },
          { text: 'NPService 服务', link: '/modules/NPService' },
          { text: 'NPEngine 引擎', link: '/modules/NPEngine' },
          { text: 'NPRanch 牧场', link: '/modules/NPRanch' }
        ]
      },
      {
        text: 'Classes - 类',
        items: [
          { text: 'SpanNodeGraph 片段节点图', link: '/classes/SpanNodeGraph' },
          { text: 'ParseTask 解析任务', link: '/classes/ParseTask' },
          { text: 'ItemMatcher 项目匹配器', link: '/classes/ItemMatcher' },
          { text: 'ItemOperator 项目操作器', link: '/classes/ItemOperator' },
          { text: 'RuleStuff 规则工具', link: '/classes/RuleStuff' },
          { text: 'NPAnimal 牧场动物', link: '/classes/NPAnimal' }
        ]
      },
      {
        text: 'Types - 数据类型',
        items: [
          { text: '基础类型', link: '/types/Basic' },
          { text: 'Span 片段', link: '/types/Span' },
          { text: 'MatchStep 匹配步骤', link: '/types/MatchStep' },
          { text: 'ParseTask 匹配任务', link: '/types/ParseTask' },
          { text: 'Context 上下文', link: '/types/Context' },
          { text: 'Rule 规则', link: '/types/Rule' },
          { text: 'Ranch 牧场相关', link: '/types/Ranch' }
        ]
      },
      {
        text: 'UI 组件',
        items: [
          { text: 'Annotator', link: '/ui-components/Annotator' },
          // AutoFold and ButtonGroup are not top-level items in _meta.json
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
