import express from 'express'
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';

let app = express();

const compliler = webpack(webpackConfig);

const config = {
  port: 3000
};

app.use(webpackMiddleware(compliler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compliler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(config.port,
  () => console.log(`Running on localhost:${config.port}`));
