这是一个纯净的前端架构，前端服务层采用Express，JS框架采用Vue，使用Vue-Cli集成了Webpack等前端工具。

服务层代码在server下，前端代码在views下，server起在3000端口上，vue起在8080端口上，中间通过cors配置了跨域访问。

分别进入两个路径下npm install，然后npm start和npm run dev即可测试。