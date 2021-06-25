## Related
[@vue/babel-preset-app](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/babel-preset-app#readme)


## tips

### polyfills
Default: ['es.array.iterator', 'es.promise', 'es.object.assign', 'es.promise.finally']  
A list of core-js polyfills to pre-include when using useBuiltIns: 'usage'. These polyfills are automatically excluded if they are not needed for your target environments.

> Use this option when you have 3rd party dependencies that are not processed by Babel but have specific polyfill requirements (e.g. Axios and Vuex require Promise support).