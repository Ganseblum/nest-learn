const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options, webpack) {
  return {
    ...options,
    // 1. 入口：必须先引入 HMR 轮询模块（顺序不能错！）
    entry: ['webpack/hot/poll?1000', options.entry],
    // 2. 模式：强制为开发模式（避免生产模式压缩代码，移除 module.hot）
    mode: 'development',
    // 3. 目标：明确为 Node.js（Webpack 会针对 Node 环境注入 module.hot）
    target: 'node',
    // 4. 外部依赖：放行 HMR 模块（否则会被排除在打包外）
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?1000'], // 必须放行，否则 HMR 模块不打包
      }),
    ],
    // 5. 插件：HMR 核心插件必须存在
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(), // 没有这个插件，module.hot 一定是 undefined
      new RunScriptWebpackPlugin({
        name: options.output.filename,
        autoRestart: true,
      }),
    ],
    // 6. 优化：禁用压缩（开发模式默认禁用，但显式配置更保险）
    optimization: {
      minimize: false,
    },
  };
};
