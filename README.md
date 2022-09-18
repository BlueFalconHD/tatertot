<!-- Tatertot - @bluefalconhd/tatertot -->

<!-- Top section -->
<p align="center">
  <img src="./assets/logo.png" height="175px">
  <br>
  <h1 align="center" >tatertot</h1>
  <h3 align="center" >🎤 rickroll in style</h3>
</p>

<br>

<!-- Table of contents -->
# 🧂 Table of Contents
- [🧂 Table of Contents](#-table-of-contents)
- [⚙️ Usage](#️-usage)
- [🍡 How it Works](#-how-it-works)
- [📂 Configuration](#-configuration)
  - [🌆 Embed](#-embed)
    - [Title](#title)
    - [Description](#description)
    - [URL](#url)
    - [Image](#image)
    - [Color](#color)
  - [🧾 Page](#-page)
    - [Title](#title-1)
  - [🔁 Redirect](#-redirect)
  - [⏲ Delay](#-delay)
  - [🖼 IFrame](#-iframe)

# ⚙️ Usage
1. Fork this repository
2. Modify config.json with your desired settings.
3. Enable github pages on the master branch.
4. Profit.

# 🍡 How it Works
This uses a GitHub action that runs a NodeJS script, found in `src`. This then commits the finished HTML to `index.html`, and then GitHub Pages will build that HTML file, allowing you to rickroll your friends.

# 📂 Configuration
This has all possible configuration values predefined in `config.js`, but here is an explanation for each.
```json
{
  "embed": {
    "title": "Tatertot Title",
    "description": "Tatertot Description",
    "url": "https://bluefalconhd.github.io/tatertot",
    "image": "https://github.com/BlueFalconHD/tatertot/raw/master/assets/logo.png",
    "color": "#FFFFFF"
  },
  "page": {
    "title": "Tatertot Page Title"
  },

  "redirect": "https://shattereddisk.github.io/rickroll/rickroll.mp4",
  "delay": 10000,
  "iframe": "https://bluefalconhd.github.io/Bento/"
}
```
## 🌆 Embed
### Title
The title of the embed that shows in discord or twitter.
### Description
The description of the embed that shows in discord or twitter.
### URL
The url discord or twitter will send you to on click of the embed.
### Image
A link to the thumbnail image.
### Color
A hex color code like `#FFFFFF` that shows on the side of the embed in discord.

## 🧾 Page
### Title
The tab title of the website.

## 🔁 Redirect
The website to redirect to after the delay

## ⏲ Delay
The delay in between when somebody visits the website and when it redirects to the link chosen.

## 🖼 IFrame
The dummy website to show inside an iframe.
> **Note**: This might not work in some cases due to browser security features.

<!-- Footer  -->
<p align="center" ><img src="./assets/seperator.png" height="75px"></p>

<p align="center">
  <span>
    👼
    <a href="https://github.com/readmeify">@readmeify</a>
  </span>
  ⁄
  <span>
    <a href="https://github.com/readmeify/docs">docs</a>
  </span>
  •
  <span>👮 MIT License</span>
  •
  <span><a href="#-table-of-contents">Jump to Top</a></span>
</p>
