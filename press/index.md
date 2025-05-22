---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "NaturalParser"
  text: "Powerful Natural Language Processing Library"
  tagline: "Parse Natural Language in a Natural way."
  image:
    src: /logo.svg
    alt: NaturalParser Logo
  actions:
    - theme: brand
      text: Start Now
      link: /list
    - theme: alt
      text: API Reference
      link: /list

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---


<!-- # NaturalParser -->

<br/><br/>

<center>

![NaturalParser Logo](/icon/Parser-icon-bg-128grey.svg)

**NaturalParser**\
Powerful Natural Language Parsing **Framework**

</center>


## 什么是 NaturalParser {#what-is-natural-parser}

NaturalParser 是一个功能强大的**自然语言解析器框架**。它提供了一种简单易用的方法，帮助用户构建规则驱动的自然语言解析器，以用于句法解析、语义表示、事件抽取、知识抽取等任务。
更重要的是，它可以帮助语言学研究者根据自己的理论快速构建解析器，将理论观点迅速转化为实验结果。

快速使用：

::: code-group

```js [preset-usecase.js]
import { sampleChineseParser as parser } from "natural-parser";

const parsed = parser.parse('NaturalParser诞生于2023年。');

console.log(parsed.bestResult);
```

:::

使用自定义模块：

::: code-group

```js [custom-parser-usecase.js]
import Parser, {
  sampleChineseSplitter, sampleChineseTokenizer,
  sampleChineseEntries,
} from "natural-parser";
import myRules from "./my-rules";  // your custom rules

const parser = new Parser({
  splitter: sampleChineseSplitter,
  tokenizer: sampleChineseTokenizer,
  entries: sampleChineseEntries,
  rules: myRules,
});

const parsed = parser.parse('NaturalParser诞生于2023年。');

console.log(parsed.bestResult);
```

:::


<!-- - **规则驱动**: NaturalParser 采用规则驱动的方法，用户可以通过编写规则来构建自然语言解析器。
- **高度可定制**: NaturalParser 提供了丰富的API，用户可以根据自己的需求定制解析器的行为。 -->



### 特性 {#features}


## 为什么需要 NaturalParser {#why}

### 对于研究人员 {#for-researchers}

- **符合直觉的组合式规则**: NaturalParser 提供了一种符合直觉的组合式规则元语言。不同于传统CFG文法，NaturalParser 的规则编写规范更加直观，更容易理解。
- **无需训练，所想即所得**: 招募人员建立标注语料库？购置GPU训练模型？统统不需要！你可以直接编写规则，快速构建解析器验证想法。
- **为全新句法语义理论量身定制**: NaturalParser 不依赖任何既有的句法语义理论体系，你可以根据自己的观点创建全新的理论，并且直接构建解析器！


### 对于开发人员 {#for-developers}

- **简单易用**: NaturalParser 提供了简单易用的API，你可以快速构建规则驱动的自然语言解析器。
- **高度可定制**: NaturalParser 提供了丰富的API，你可以根据自己的需求定制解析器的行为。





虽然深度学习技术在自然语言处理领域取得了巨大的成功，但是对于一些特定的自然语言处理任务，规则驱动的方法仍然是一种有效的解决方案。

编写规则驱动的解析器程序对于语言学及计算语言学研究而言是一项重要的工作。然而，这种工作通常需要花费大量的时间和精力。NaturalParser 旨在提供一个简单易用的框架，帮助用户快速构建自然语言解析器。

<!-- #### 规则驱动的解析器 {#rule-driven-parser} -->



所谓**规则驱动的解析器**，是指通过编写一系列规则来解析自然语言文本。这些规则可以是**面向语法**的规则，也可以是**面向语义**的规则。



<!-- ## 相关工作 {#related-works} -->



