

## API 速查手册

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


### 常用 API





#### `Main`

##### `Main.split`

`Main.split(text: string, options?: NPSplitOptions, splitter?: LongTextSplitter): TextFragment[]{:ts}`

##### `Main.tokenize`

`Main.tokenize(text: string, options?: NPTokenizeOptions, tokenizer?: Tokenizer): SpanNodeGraph{:ts}`

##### `Main.parse`

`Main.parse(text: string, options?: NPParseOptions, parser?:Parser): SpanNodeGraph{:ts}`

##### `Main.parse`

`Main.parse(graph: SpanNodeGraph, options?: NPParseOptions): SpanNodeGraph{:ts}`








#### `Matcher`

##### `Matcher.exec`

`Matcher.exec(span: SpanNode, history?: MatchStepHistory, context?: Context, graph?: SpanNodeGraph, rule?: Rule): Promise<MatcherExecResult>{:ts}`

##### `Matcher.Test`

`Matcher.Test(span: SpanNode, history?: MatchStepHistory, context?: Context, graph?: SpanNodeGraph, rule?: Rule): Promise<MatcherTestResult>{:ts}`



#### `MatchingRule`

##### `MatchRule.match`

`MatchRule.match(graph: SpanNodeGraph, context: Context): MatchResult{:ts}`



#### `Operator`



#### `OperatingRule`






#### `RuleSet`

##### `RuleSet.load`

##### `RuleSet.add`

##### `RuleSet.remove`

##### `RuleSet.find`

##### `RuleSet.filter`

##### `RuleSet.standardize`








#### `Parser`

##### `Parser.parse`

`Parser.parse(graph: SpanNodeGraph, options?: NPParseOptions): SpanNodeGraph{:ts}`




### 高级 API

#### `MakerManager`










### 深层 API





