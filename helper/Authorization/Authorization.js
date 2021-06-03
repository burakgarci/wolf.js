const Helper = require('../Helper');

const validator = require('@dawalters1/validator');

module.exports = class Authorized extends Helper {
  constructor (bot) {
    super(bot);

    this._cache = [];
  }

  list () {
    return this._cache;
  }

  isAuthorized (subscriberId) {
    if (!validator.isValidNumber(subscriberId)) {
      throw new Error('subscriberId must be a valid number');
    } else if (validator.isLessThanOrEqualZero(subscriberId)) {
      throw new Error('subscriberId cannot be less than or equal to 0');
    }

    return this.list().includes(subscriberId);
  }

  clear () {
    this._cache = [];
  }

  authorize (subscriberIds) {
    if (validator.isValidArray(subscriberIds)) {
      for (const subscriberId of subscriberIds) {
        if (!validator.isValidNumber(subscriberId)) {
          throw new Error('subscriberId must be a valid number');
        } else if (validator.isLessThanOrEqualZero(subscriberId)) {
          throw new Error('subscriberId cannot be less than or equal to 0');
        }
      }
    } else {
      if (!validator.isValidNumber(subscriberIds)) {
        throw new Error('subscriberIds must be a valid number');
      } else if (validator.isLessThanOrEqualZero(subscriberIds)) {
        throw new Error('subscriberIds cannot be less than or equal to 0');
      }
    }

    this._cache.push(...(validator.isValidArray(subscriberIds) ? subscriberIds : [subscriberIds]));
  }

  unauthorize (subscriberIds) {
    if (validator.isValidArray(subscriberIds)) {
      for (const subscriberId of subscriberIds) {
        if (!validator.isValidNumber(subscriberId)) {
          throw new Error('subscriberId must be a valid number');
        } else if (validator.isLessThanOrEqualZero(subscriberId)) {
          throw new Error('subscriberId cannot be less than or equal to 0');
        }
      }
    } else {
      if (!validator.isValidNumber(subscriberIds)) {
        throw new Error('subscriberIds must be a valid number');
      } else if (validator.isLessThanOrEqualZero(subscriberIds)) {
        throw new Error('subscriberIds cannot be less than or equal to 0');
      }
    }

    this._cache = this._cache.filter((authorized) => validator.isValidArray(subscriberIds) ? subscriberIds.includes(authorized) : authorized === subscriberIds);
  }
};
