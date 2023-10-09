const welcomePage = require('./request-handlers/welcome-page')
const mapboxDemo = require('./request-handlers/mapbox-demo')

module.exports = [
  {
    path: '/',
    methods: ['get'],
    handler: welcomePage
  },  {
    path: '/demo',
    methods: ['get'],
    handler: mapboxDemo
  }
]
