let url = window.location.href
url = url.replace("https://", "")
url = url.replace(".github.io", "")
console.log(url)

function alerts() {
  console.log('🥔 Taters are delicious!')
  console.log('⚙️ Config Loaded From: https://github.com/' + url + "blob/master/config.json" )
  console.log('🍴 Forked from https://github.com/bluefalconhd/tatertot')
}

setTimeout(alert, 10)
