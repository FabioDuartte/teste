window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Maps = window.blockly.js.blockly.Maps || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Maps.ObterGeocodificaacaoArgs = [];
window.blockly.js.blockly.Maps.ObterGeocodificaacao = async function() {
 var item;
  this.cronapi.maps.geocoder(this.cronapi.maps.createLatLngPoint('-23.63272263402366', '-46.71216632788516'), this.cronapi.maps.createLatLngPoint('-12.874023735235728', '-38.58878507585867'), null, async function(sender_item) {
      item = sender_item;
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Maps.DesenhaPoligonoArgs = [];
window.blockly.js.blockly.Maps.DesenhaPoligono = async function() {
 var item;
  this.cronapi.maps.drawPolygon("crn-ion-header-bar-home-logged", 'IdPoligono', '', '', '', '', '', '');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Maps.GerarRotaArgs = [];
window.blockly.js.blockly.Maps.GerarRota = async function() {
 var item;
  saida = this.cronapi.screen.getScopeVariable('saida');
  destino = this.cronapi.screen.getScopeVariable('destino');
  this.cronapi.maps.directionRoute(this.cronapi.maps.createRequestDirection(this.cronapi.maps.createLatLngPoint(this.cronapi.maps.getPropertyFromAutoComplete(saida, 'latitude'), this.cronapi.maps.getPropertyFromAutoComplete(saida, 'longitude')), this.cronapi.maps.createLatLngPoint(this.cronapi.maps.getPropertyFromAutoComplete(destino, 'latitude'), this.cronapi.maps.getPropertyFromAutoComplete(destino, 'longitude')), 'DRIVING', '{\"avoidHighways\": true}'), async function(sender_item) {
      item = sender_item;
    this.cronapi.maps.drawRoute("map6124", item, '{\"avoidHighways\": true}', async function(sender_item) {
        item = sender_item;
    }.bind(this));
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Maps.GerarRotaaArgs = [];
window.blockly.js.blockly.Maps.GerarRotaa = async function() {
 var item;
  this.cronapi.maps.drawLine("map6124", '1', [this.cronapi.maps.createLatLngPoint('-8.378841019583016', '-56.21177530938497'), this.cronapi.maps.createLatLngPoint('6.879995144419558', '-65.52796396851399'), this.cronapi.maps.createLatLngPoint('23.923430031877146', '-102.09046311091437'), this.cronapi.maps.createLatLngPoint('40.87815794986896', '-101.7389006191605')], '#FF0000', '0.5', '');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Maps.AutoCompletarSaidaArgs = [];
window.blockly.js.blockly.Maps.AutoCompletarSaida = async function() {
 var item;
  this.cronapi.maps.createAutoComplete("map6124", "crn-input6614", 'address', this.cronapi.maps.createLatLngBounds(this.cronapi.maps.createLatLngPoint('-13.0193736', '-38.5480934'), this.cronapi.maps.createLatLngPoint('-12.7513579', '-38.1534927')), 'false', '{\"avoidHighways\": true}', async function(sender_item) {
      item = sender_item;
    this.cronapi.screen.createScopeVariable('saida', item);
    item2 = this.cronapi.maps.getPropertyFromAutoComplete(null, 'latitude');
    console.log(item2);
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Maps.Autocompletar2Args = [];
window.blockly.js.blockly.Maps.Autocompletar2 = async function() {
 var item;
  this.cronapi.maps.createAutoComplete("map6124", "crn-input6614", 'address', this.cronapi.maps.createLatLngBounds(this.cronapi.maps.createLatLngPoint('-13.0193736', '-38.5480934'), this.cronapi.maps.createLatLngPoint('-12.7513579', '-38.1534927')), 'false', '{\"avoidHighways\": true}', async function(sender_item) {
      item = sender_item;
    this.cronapi.screen.createScopeVariable('saida', item);
  }.bind(this));
}

/**
 * maps
 */
window.blockly.js.blockly.Maps.mapsArgs = [];
window.blockly.js.blockly.Maps.maps = async function() {
 var item;
  item = this.cronapi.maps.isInitialized("map6124");
  if (!item) {
    this.cronapi.maps.init("map6124", 'roadmap', this.cronapi.maps.createLatLngPoint('-3.7722775', '-38.5592914'), '18', async function(sender_item) {
        item = sender_item;
      (await this.blockly.js.blockly.Maps.AutoCompletarSaida());
      (await this.blockly.js.blockly.Maps.AutoCompletarEntrada());
    }.bind(this));
  }
  console.log(item);
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Maps.AutoCompletarEntradaArgs = [];
window.blockly.js.blockly.Maps.AutoCompletarEntrada = async function() {
 var item;
  this.cronapi.maps.createAutoComplete("map6124", "crn-input1267", 'address', this.cronapi.maps.createLatLngBounds(this.cronapi.maps.createLatLngPoint('-13.0193736', '-38.5480934'), this.cronapi.maps.createLatLngPoint('-12.7513579', '-38.1534927')), 'false', '', async function(sender_item) {
      item = sender_item;
    this.cronapi.screen.createScopeVariable('destino', item);
  }.bind(this));
}
