const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

// SPA 路由回退到 index.html，确保前端路由可用
app.use(history({
  index: '/index.html',
}));

// 提供打包后的静态资源
app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`LeanCloud-compatible server listening on port ${port}`);
});