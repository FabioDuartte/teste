window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.MutualAuth = window.blockly.js.blockly.MutualAuth || {};

/**
 * @function login
 *
 * MutualAuth
 *
 *
 * @author Fábio Duarte Freitas
 * @since 15/12/2022 10:21:43
 *
 */
window.blockly.js.blockly.MutualAuth.loginArgs = [];
window.blockly.js.blockly.MutualAuth.login = async function() {
 var item;
  //
  this.cronapi.util.getURLFromOthers('POST', 'application/x-www-form-urlencoded', String(this.cronapi.util.getBaseUrl()) + String('/mutual/login'), null, null, async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.util.setLocalStorage('_u', this.cronapi.object.serializeObject(item));
    //
    this.cronapi.screen.changeView("#/home/logged/home",[  ]);
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    if (this.cronapi.object.getProperty(item, 'status') == '403' || this.cronapi.object.getProperty(item, 'status') == '401') {
      //
      this.cronapi.screen.notify('error',this.cronapi.i18n.translate("Login.view.invalidPassword",[  ]));
    } else if (this.cronapi.object.getProperty(item, 'status') == '502') {
      //
      this.cronapi.screen.notify('error',this.cronapi.i18n.translate("Login.view.ServerOff",[  ]));
    } else if (this.cronapi.object.getProperty(item, 'status') == '404') {
      //
      this.cronapi.screen.notify('error',this.cronapi.i18n.translate("Login.view.HostAppOff",[  ]));
    } else {
      //
      this.cronapi.screen.notify('error',this.cronapi.object.getProperty(item, 'responseJSON.message'));
    }
  }.bind(this));
}

/**
 * @function signup
 *
 * Descreva esta função...
 *
 *
 * @author Fábio Duarte Freitas
 * @since 15/12/2022 10:21:43
 *
 */
window.blockly.js.blockly.MutualAuth.signupArgs = [];
window.blockly.js.blockly.MutualAuth.signup = async function() {
 var item;
  //
  this.cronapi.util.getURLFromOthers('POST', 'application/x-www-form-urlencoded', String(this.cronapi.util.getBaseUrl()) + String('/mutual/register'), this.cronapi.object.createObjectFromString(['{ \"token\": \"',this.cronapi.util.getUserToken(),'\" } '].join('')), null, async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('info',this.cronapi.i18n.translate("Home.view.tokenRegistered",[  ]));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error',this.cronapi.object.getProperty(item, 'responseJSON.message'));
  }.bind(this));
}
