const BaseEvent = require('../BaseEvent');

/**
 * {@hideconstructor}
 */
module.exports = class MessageUpdate extends BaseEvent {
  async process (data) {
    this._api.on._emit(this._command, data);
  }
};
