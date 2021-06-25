const path = require('path');

/**
 * 
 * @param {*} ctx 
 * @param {*} opts
 * @param {string} opts.env [development|production]
 */
module.exports = (ctx, opts = {}) => {
    const runtimeVersion = require('@babel/runtime/package.json').version;

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

    const isProd = env === 'production';
    const absoluteRuntimePath = absoluteRuntime && path.dirname(require.resolve('@babel/runtime/package.json'));

    const envOpts = {
        bugfixes,
        corejs: useBuiltIns ? require('core-js/package.json').version : false,
        spec,
        loose,
        debug,
        modules,
        useBuiltIns,
        ignoreBrowserslistConfig,
        configPath,
        include,
        exclude,
        shippedProposals,
        forceAllTransforms,
    };

    return {
        assumptions: {
            // https://babeljs.io/docs/en/assumptions#setpublicclassfields
            // ? 需要结合proposal-class-properties
            setPublicClassFields,
        },
        presets: [
            [require('@babel/preset-env'), envOpts],
        ],
        plugins: [
            require('@babel/plugin-syntax-dynamic-import'),
            [require('@babel/plugin-proposal-decorators'), {
                decoratorsBeforeExport,
                legacy: decoratorsLegacy !== false,
            }],
            require('@babel/plugin-proposal-class-properties'),
            [require('@babel/plugin-transform-runtime'), {
                // ? regenerator：默认以模块的形式使用generator
                // ? helpers：默认导入形式
                version,
                corejs: false,
                absoluteRuntime: absoluteRuntimePath,
            }],
        ],
    };
};