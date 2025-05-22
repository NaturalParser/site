
# 内容特征 MMs


## 文本MMs

#### textOp [#textOp]

#### textIs [#textIs]

#### textIn [#textIn]

#### textContains [#textContains]

#### textRegEx [#textRegEx]



## 位置MMs

#### positionIsStart [#positionIsStart]

"alias": ["positionStart", "isStart", "isSeqStart", "seqStart", "seqIsStart"],

#### positionIsEnd [#positionIsEnd]

"alias": ["positionEnd", "isEnd", "isSeqEnd", "seqEnd", "seqIsEnd"],

#### positionNotStart [#positionNotStart]

"alias": ["positionNotStart", "notStart", "isNotStart", "notSeqStart", "seqNotStart"],

#### positionNotEnd [#positionNotEnd]

"alias": ["positionNotEnd", "NotEnd", "isNotEnd", "NotSeqNotEnd", "seqNotEnd"],



## 层次MMs

#### levelOp | level [#levelOp]

```js
  { "name": "levelOp",
    "alias": ["level", "levelOpt"],
    "def": ({params: [opt, val], vars: {NumOptMap, transFormFn}}) => {
      // console.log("levelOpt", {opt, val});
      return (it=>NumOptMap?.[opt]?.(transFormFn(it)?.level??1, val));
    },
    "desc": "`[opt, val]`||level满足opt与val的关系",
  },
```

## 文本长度MMs

#### textLengthOp [#textLengthOp]

#### textLengthIs [#textLengthIs]

#### textLengthGreaterThan1 [#textLengthGreaterThan1]

#### textLengthIs1 [#textLengthIs1]

#### textLengthIs2 [#textLengthIs2]

#### textLengthIs3 [#textLengthIs3]

#### textLengthIs4 [#textLengthIs4]


