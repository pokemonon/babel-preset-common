## Included
- @babel/preset-env
- @babel/plugin-syntax-dynamic-import
- @babel/plugin-proposal-decorators
- @babel/plugin-proposal-class-properties
- @babel/plugin-transform-runtime

## Options
```js
const {
    env = 'production',
    loose = false,
    debug = false,
    useBuiltIns = 'usage',
    modules = false,
    bugfixes = true,
    spec,
    ignoreBrowserslistConfig,
    configPath,
    include,
    exclude,
    shippedProposals,
    forceAllTransforms,
    decoratorsBeforeExport,
    decoratorsLegacy,
    setPublicClassFields = true,

    absoluteRuntime,

    // https://github.com/babel/babel/issues/10261
    version = runtimeVersion,
} = opts;
```