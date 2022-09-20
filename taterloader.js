let url = window.location.href
url = url.replace("https://", "")
url = url.replace("github.io", "")
console.log(url)

const alerts () => {
  console.log('🥔 Taters are delicious!')
  console.log('⚙️ Config Loaded From: https://github.com/' + url + "/blo" )
}
