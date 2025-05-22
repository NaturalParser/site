
# 底层及逻辑 MMs

#### match [#match]

```js
  { "name": "match",
    "desc": "`[seed]`||匹配",
    "def": ({params: [seed], vars: {transFormFn}, env: {agent}}) => {
      return (it_=>{
        const it = transFormFn(it_);
        return (agent.seedToMatchFn(seed))(it);
      });
    },
  },
```

#### notMatch [#notMatch]

```js
  { "name": "notMatch",
    "desc": "`[seed]`||不匹配",
    "def": ({params: [seed], vars: {transFormFn}, env: {agent}}) => {
      return (it_=>{
        const it = transFormFn(it_);
        return !(agent.seedToMatchFn(seed))(it);
      });
    },
  },
```

#### and | all [#and]

```js
  { "name": "fnAll",
    "alias": ["all", "and", "every"],
    "desc": "`[fnConfigs]`||所有都满足",
    "def": ({params: [fnConfigs], vars: {transFormFn}, env: {agent}}) => {
      return (async (it_, ...otherDetails)=>{
        const it = transFormFn(it_);

        for await (const fnConfig of fnConfigs) {
          const tester = await agent.makeTester(...fnConfig);
          if (tester) {
            const result = await tester(it, ...otherDetails);
            if (!result) {
              // console.log("\n\n\n!!!!!!!!!!!!\n",{fnConfig, result, text: it?.text});
              return false;
            }
          } else {
            // console.warn("[[[[fnAll: tester for fnConfig is null]]]]:\n", fnConfig, "\n\n\n");
            return false;
          }
        }
        return true;

      });
    },
  },
```

#### any | or | some [#any]

```js
  { "name": "fnAny",
    "alias": ["any", "or", "some"],
    "desc": "`[fnConfigs]`||任意一个满足",
    "def": ({params: [fnConfigs], vars: {transFormFn}, env: {agent}}) => {
      return (async (it_, ...otherDetails)=>{
        const it = transFormFn(it_);

        for await (const fnConfig of fnConfigs) {
          const tester = await agent.makeTester(...fnConfig);
          if (tester) {
            const result = await tester(it, ...otherDetails);
            if (result===true) {return true;}
          } else {
            // console.warn("[[[[fnAny: tester is null]]]]");
            // return false;
          }
        }
        return false;

      });
    },
  },
```

#### none [#none]

```js
  { "name": "fnNone",
    "alias": ["none"],
    "desc": "`[fnConfigs]`||所有都不满足",
    "def": ({params: [fnConfigs], vars: {transFormFn}, env: {agent}}) => {
      return (async (it_, ...otherDetails)=>{
        const it = transFormFn(it_);

        for await (const fnConfig of fnConfigs) {
          const tester = await agent.makeTester(...fnConfig);
          if (tester) {
            const result = await tester(it, ...otherDetails);
            if (result===true) {return false;}
          } else {
            // console.warn("[[[[fnNone: tester is null]]]]");
            // return false;
          }
        }
        return true;

      });
    },
  },
```

#### not [#not]

```js
  { "name": "fnNot",
    "alias": ["not"],
    "desc": "`[fnConfig]`||取反",
    "def": ({params: [fnConfig], vars: {transFormFn}, env: {agent}}) => {
      return (async (it_, ...otherDetails)=>{
        const it = transFormFn(it_);
        const tester = await await agent.makeTester(...fnConfig);
        const result = !(await tester?.(it, ...otherDetails));
        // console.log({fnConfig, result, token: it?.token});
        return result;
      });
    }
  },
```

#### hit [#hit]

```js
  { "name": "fnHit",
    "alias": ["hit"],
    "desc": "用于在匹配器中调用，用于标记匹配成功",
    "def": ({params: [fnConfig], vars: {transFormFn}, env: {agent}}) => {
      return (async (it_, ...otherDetails)=>{
        const it = transFormFn(it_);
        const tester = await await agent.makeTester(...fnConfig);
        return await tester?.(it, ...otherDetails);
      });
    }
  },
```

#### true [#true]

```js
  { "name": "true",
    "desc": "总是返回true",
    "def": () => {
      return (async ()=>{
        return true;
      });
    }
  },
```

#### false [#false]

```js
  { "name": "false",
    "desc": "总是返回false",
    "def": () => {
      return (async ()=>{
        return false;
      });
    }
  },
```







