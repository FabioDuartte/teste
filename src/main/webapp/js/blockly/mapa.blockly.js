window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Mapa = window.blockly.js.blockly.Mapa || {};

/**
 * @function ObterGeocodificacao
 *
 * Descreva esta função...
 *
 *
 * @author Fábio Duarte Freitas
 * @since 16/12/2022 13:50:18
 *
 */
window.blockly.js.blockly.Mapa.ObterGeocodificacaoArgs = [];
window.blockly.js.blockly.Mapa.ObterGeocodificacao = async function() {
 var item, teste;
  //
  this.cronapi.maps.geocoder('Av. Alfredo Egídio de Souza Aranha, 100', null, null, async function(sender_item) {
      item = sender_item;
    //
    console.log(this.cronapi.maps.getPropertyFromGeocoder(item, 'placeId'));
  }.bind(this));
}

/**
 * @function OpcoesAvancadas
 *
 * Descreva esta função...
 *
 *
 * @author Fábio Duarte Freitas
 * @since 16/12/2022 13:50:18
 *
 */
window.blockly.js.blockly.Mapa.OpcoesAvancadasArgs = [];
window.blockly.js.blockly.Mapa.OpcoesAvancadas = async function() {
 var item, teste;
  //
  this.cronapi.maps.setAdvancedMapOptions("map7068", '{\"zoomControl\": false}');
}

/**
 * @function DesenhaPoligono
 *
 * Descreva esta função...
 *
 *
 * @author Fábio Duarte Freitas
 * @since 16/12/2022 13:50:18
 *
 */
window.blockly.js.blockly.Mapa.DesenhaPoligonoArgs = [];
window.blockly.js.blockly.Mapa.DesenhaPoligono = async function() {
 var item, teste;
  //
  this.cronapi.maps.drawLine("map7068", 'IdLinha', [this.cronapi.maps.createLatLngPoint('-3.7722775', '-38.5592914'), this.cronapi.maps.createLatLngPoint('-12.8845715', '-38.2853121'), this.cronapi.maps.createLatLngPoint('-15.721387', '-48.0774442'), this.cronapi.maps.createLatLngPoint('-5.3373634', '-49.1710494'), this.cronapi.maps.createLatLngPoint('-3.7722775', '-38.5592914')], 'red', '0.5', '{ \"editable\": false}');
}

/**
 * @function DesenhaCirculo
 *
 * Descreva esta função...
 *
 *
 * @author Fábio Duarte Freitas
 * @since 16/12/2022 13:50:18
 *
 */
window.blockly.js.blockly.Mapa.DesenhaCirculoArgs = [];
window.blockly.js.blockly.Mapa.DesenhaCirculo = async function() {
 var item, teste;
  //
  this.cronapi.maps.drawCircle("map7068", 'IdCirculo', this.cronapi.maps.createLatLngPoint(' -12.999463258116128', '-38.468713765169326'), '250', 'gray', 'black', '0.4', '{\"editable\": true}');
}

/**
 * @function InicializaMapa
 *
 * maps
 *
 *
 * @author Fábio Duarte Freitas
 * @since 16/12/2022 13:50:18
 *
 */
window.blockly.js.blockly.Mapa.InicializaMapaArgs = [];
window.blockly.js.blockly.Mapa.InicializaMapa = async function() {
 var item, teste;
  //
  if (!this.cronapi.maps.isInitialized("map7068")) {
    //
    this.cronapi.maps.init("map7068", 'roadmap', this.cronapi.maps.createLatLngPoint('-3.7722775', '-38.5592914'), '10', async function(sender_item) {
        item = sender_item;
      //
      this.cronapi.maps.setAdvancedMapOptions("map7068", '{\"zoomControl\": false}');
      //
      (await this.blockly.js.blockly.Mapa.AutoCompletarSaida());
      //
      (await this.blockly.js.blockly.Mapa.AutoCompletarEntrada());
    }.bind(this));
  }
}

/**
 * @function mapaCidade
 *
 * maps2
 *
 *
 * @author Fábio Duarte Freitas
 * @since 16/12/2022 13:50:18
 *
 */
window.blockly.js.blockly.Mapa.mapaCidadeArgs = [];
window.blockly.js.blockly.Mapa.mapaCidade = async function() {
 var item, teste;
  //
  this.cronapi.maps.changeMapZoom("map7068", '10');
}

/**
 * @function CriarMarcador
 *
 * Descreva esta função...
 *
 *
 * @author Fábio Duarte Freitas
 * @since 16/12/2022 13:50:18
 *
 */
window.blockly.js.blockly.Mapa.CriarMarcadorArgs = [];
window.blockly.js.blockly.Mapa.CriarMarcador = async function() {
 var item, teste;
  //
  this.cronapi.maps.createMarker("map7068", 'IdMarcador', 'Sede', this.cronapi.maps.createLatLngPoint('-23.632725991744984', '-46.71215853068809'), '../../public/assets/logo2.png', '<h2 style=\"text-align: center;\">Sede do Cronapp</h2>', '{\"opacity\": 0.35}');
  //
  item = this.cronapi.maps.getPropertyFromMarker("map7068", 'IdMarcador', 'infoWindow');
  //
  console.log(item);
}

/**
 * @function mapaLocal
 *
 * Descreva esta função...
 *
 *
 * @author Fábio Duarte Freitas
 * @since 16/12/2022 13:50:18
 *
 */
window.blockly.js.blockly.Mapa.mapaLocalArgs = [];
window.blockly.js.blockly.Mapa.mapaLocal = async function() {
 var item, teste;
}
