import config from "../config.json" assert { type: "json" };
import fs from "fs";

let html = `<!DOCTYPE html>
<head>
  <title>${config.page.title}</title>
  <meta content="${config.embed.title}" property="og:title" />
  <meta content="${config.embed.description}" property="og:description" />
  <meta content="${config.embed.url}" property="og:url" />
  <meta content="${config.embed.image}" property="og:image"/>
  <meta content="${config.embed.color}" data-react-helmet="true" name="theme-color" />
  <style>
    .body { width: 100vw; height: 100vh; padding: 0px; margin: 0px; overflow: hidden;};
  </style>
</head>

<body class="body">
  <script async>
    setTimeout(() => {
     window.location.replace("${config.redirect}")
    }, ${config.delay});
  </script>

  <iframe src="${config.iframe}" style="box-shadow: none !important; width: 100vw; height: 100vh;"></iframe>
</body>
`;

console.log(html)
