const BaseUtility = require('../BaseUtility');
const validator = require('@dawalters1/validator');

module.exports = class ToReadableTime extends BaseUtility {
  constructor (bot) {
    super(bot, 'toReadableTime');
  }

  _func (...args) {
    const language = args[0];

    const milliseconds = args[1];

    if (typeof (language) !== 'string') {
      throw new Error('language must be a string');
    } else if (validator.isNullOrWhitespace(language)) {
      throw new Error('language cannot be null or empty');
    }

    if (!validator.isValidNumber(milliseconds)) {
      throw new Error('milliseconds must be a valid number');
    } else if (validator.isLessThanZero(milliseconds)) {
      throw new Error('milliseconds cannot be less than 0');
    }

    let seconds = milliseconds / 1000;

    // 2- Extract hours:
    const hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours

    // 3- Extract minutes:
    const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute

    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;

    if (hours > 0) {
      return `${hours}${this._bot.phrase().getByLanguageAndName(language, `${this._bot.config.keyword}_time_type_hour`)} ${minutes}${this._bot.phrase().getByLanguageAndName(language, `${this._bot.config.keyword}_time_type_minute`)} ${seconds}${this._bot.phrase().getByLanguageAndName(language, `${this._bot.config.keyword}_time_type_second`)} `;
    } else if (minutes > 0) {
      return `${minutes}${this._bot.phrase().getByLanguageAndName(language, `${this._bot.config.keyword}_time_type_minute`)} ${seconds}${this._bot.phrase().getByLanguageAndName(language, `${this._bot.config.keyword}_time_type_second`)} `;
    }
    return `${seconds}${this._bot.phrase().getByLanguageAndName(language, `${this._bot.config.keyword}_time_type_second`)} `;
  }
};