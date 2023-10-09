const outputVectorTiles = require('@koopjs/output-vector-tiles');
const koopProvider = require('@sllynn/koop-provider');
const outputs = [{
  instance: outputVectorTiles
}];
const auths = [];
const caches = [];
const plugins = [{
  instance: koopProvider
}];
module.exports = [...outputs, ...auths, ...caches, ...plugins];