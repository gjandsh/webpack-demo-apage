app.get('/index.html', function (req, res) {

  res.send('index.html') // 模拟加载
})
var json = {
  "url": [
    "https://i.loli.net/2017/11/30/5a1f64e277747.png",
    "https://i.loli.net/2017/11/30/5a1f618d2048d.png",
    "https://i.loli.net/2017/11/30/5a1f653e27bf9.png",
    "https://i.loli.net/2017/11/30/5a1f666c79780.png",
    "https://i.loli.net/2017/11/30/5a1f657882ac3.png",
    "https://i.loli.net/2017/11/30/5a1f65c5bb4dc.png",
    "https://i.loli.net/2017/11/30/5a1f660e08382.png",
    "https://i.loli.net/2017/11/30/5a1f66c4764e6.png",
    "https://i.loli.net/2017/11/30/5a1f66d2765b5.png",
    "https://i.loli.net/2017/11/30/5a1f66e0c8d8a.png",
    "https://i.loli.net/2017/11/30/5a1f668817f2c.png",
    "https://i.loli.net/2017/11/30/5a1f66b0b2f7a.png"

  ],
  "title": ["The Demogorgon", "The Missing Boy", "The Kids", "The Missing Boy", "The Mother", "The Sheriff", "The Siblings",
    "The Mother", "The Sheriff", "The Siblings", "The Demogorgon", "The Kids"
  ],
  "content": [
    "Who am I? Where am I going to do?",
    "I'm in here, Mom! Can anybody hear me? I'm so scared, please somebody bring me out!",
    "We are the best, we are fighting for our friend!",
    "I'm in here, Mom! Can anybody hear me? I'm so scared, please somebody bring me out!",
    "I just want my son back!",
    "What happened to my town?",
    "We are young, but we are not that bold.",
    "I just want my son back!",
    "What happened to my town?",
    "We are young, but we are not that bold.",
    "Who am I? Where am I going to do?",
    "We are the best, we are fighting for our friend!"
  ]
}
app.get('/loadMore.json', function (req, res) {

  res.json(json) // 模拟加载
})