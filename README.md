<p align="center">
  <img src="./webfluencer_logo.jpg" width="100" />
</p>

<h1 align="center">The Web Newsfeed</h1>

The web is constantly changing. As developers, designers, and as users, we have a responsibility to keep up with all the new things. But it's hard to follow the right organizations, newsletters, and people. This repository is an attempt to simplify the struggle of keeping up with the web.

This repository features a Twitter feed of influential web developers, web browsers, and web organizations to help you keep up to date about everything happening on the world wide web.

I am running this website on [Now](https://zeit.co/now) and the Twitter bot is running [Huginn](https://github.com/huginn/huginn) on a Heroku dyno with a [filter on individuals' tweets](#keyword-filters-on-individuals).

## Viewing

Can be viewed on **[Twitter](https://twitter.com/Webfluencers)** or at the **[website](https://w3.now.sh)**.

## The List

In no particular order!

### Organizations

- [W3C](https://twitter.com/w3c)
- [CSS Working Group](https://twitter.com/csswg)
- [W3C Developers](https://twitter.com/w3cdevs)
- [The Web Foundation](https://twitter.com/webfoundation)
- [React](https://twitter.com/reactjs)
- [Vue JS](https://twitter.com/vuejs)

### Browsers

- [Google Chrome](https://twitter.com/googlechrome)
- [Firefox](https://twitter.com/firefox)
- [Microsoft Edge](https://twitter.com/MicrosoftEdge)
- [Opera](https://twitter.com/opera)
- [Brave](https://twitter.com/brave)
- [Chromium](https://twitter.com/ChromiumDev)
- [Chrome DevTools](https://twitter.com/ChromeDevTools)
- [Firefox Devtools](https://twitter.com/FirefoxDevTools)
- [Firefox Nightly](https://twitter.com/FirefoxNightly)
- [Microsoft Edge Dev](https://twitter.com/MSEdgeDev)

### Resource/Docs

- [CSS-Tricks](https://twitter.com/css)
- [MDN Web Docs](https://twitter.com/MozDevNet)

### People

- [Tim Berners-Lee](https://twitter.com/timberners_lee)
- [Brendan Eich](https://twitter.com/BrendanEich)
- [Chris Lilley](https://twitter.com/svgeesus)
- [Jen Simmons](https://twitter.com/jensimmons)
- [Rachel Andrew](https://twitter.com/rachelandrew)
- [Sara Soueidan](https://twitter.com/SaraSoueidan)
- [Sarah Drasner](https://twitter.com/sarah_edo)
- [Chris Coyier](https://twitter.com/chriscoyier)
- [Lee Verou](https://twitter.com/LeaVerou)
- [Eric Meyer](https://twitter.com/meyerweb)
- [Paul Irish](https://twitter.com/paul_irish)
- [fantasai](https://twitter.com/fantasai)
- [Nicole Sullivan](https://twitter.com/stubbornella)
- [Estelle Weyl](https://twitter.com/estellevw) - [Standardista](https://twitter.com/standardista)
- [Rossen Atanassov](https://twitter.com/cssrossen)
- [Benjamin De Cock](https://twitter.com/bdc)
- [Addy Osmani](https://twitter.com/addyosmani)
- [Axel Rauschmayer](https://twitter.com/rauschma)
- [getify](https://twitter.com/getify)
- [Dan Abramov](https://twitter.com/dan_abramov)
- [Nicholas C. Zakas](https://twitter.com/slicknet)
- [Harry Roberts](https://twitter.com/csswizardry)
- [Ben Alman](https://twitter.com/cowboy)
- [Brad Frost](https://twitter.com/brad_frost)
- [Evan You](https://twitter.com/youyuxi)
- [Chris Heilmann](https://twitter.com/codepo8)
- [rem](https://twitter.com/rem)
- [John Resig](https://twitter.com/jeresig)
- [Bruce Lawson](https://twitter.com/brucel)
- [cody lindley](https://twitter.com/codylindley)
- [David Walsh](https://twitter.com/davidwalshblog)
- [Kent C. Dodds](https://twitter.com/kentcdodds)
- [Eric Bidelman](https://twitter.com/ebidel)
- [Hakim El Hattab](https://twitter.com/hakimel)
- [Ilya Grigorik](https://twitter.com/igrigorik)
- [Jake Archibald](https://twitter.com/jaffathecake)
- [Luke Wroblewski](https://twitter.com/lukew)
- [Mathias Bynens](https://twitter.com/mathias)
- [Zeno Rocha](https://twitter.com/zenorocha)
- [Thomas Fuchs](https://twitter.com/thomasfuchs)
- [DHH](https://twitter.com/dhh)
- [angus](https://twitter.com/angustweets)
- [Steve Souders](https://twitter.com/Souders)
- [Sindre Sorhus](https://twitter.com/sindresorhus)
- [Rebecca Murphey](https://twitter.com/rmurphey)
- [Alex Sexton](https://twitter.com/SlexAxton)
- [Nicolas](https://twitter.com/necolas)
- [Stoyan Stefanov](https://twitter.com/stoyanstefanov)
- [Robin Rendle](https://twitter.com/robinrendle)

## Filters on People

Any tweet with `"retweet_count" >= 50` will be tweeted.

### Words (regex)

- web
- browser
- html
- css
- javascript
- specification
- standard
- svg
- animation
- performance
- lighthouse
- render
- internet
- w3c
- develop
- open
- dev
- package
- tool
- app
- program
- tip
- code
- design
- doc
- safari
- chrome
- firefox
- technique
- feature
- deprecate
- react
- vue
- modern

### Words (match full word)

- js
- spec
- ui
- perf
- url
- new

## Contributing

I'm sure I missed a lot of worthy Webfluencers and keywords. Help the Twitter feed by submitting a [PR](https://github.com/thomaswangio/w3/pulls) with additions to the README. Revisions and removals also welcome, with explanation.
