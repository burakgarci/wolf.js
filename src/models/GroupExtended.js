import Base from './Base.js';

class GroupExtended extends Base {
  constructor (client, data) {
    super(client);
    this.id = data?.id;
    this.longDescription = data?.longDescription;
    this.discoverable = data?.discoverable;
    this.language = data?.language;
    this.category = data?.category;
    this.advancedAdmin = data?.advancedAdmin;
    this.questionable = data?.questionable;
    this.locked = data?.locked;
    this.closed = data?.closed;
    this.passworded = data?.passworded;
    this.entryLevel = data?.entryLevel;
  }

  async update ({ longDescription, discoverable, language, category, advancedAdmin, questionable, locked, closed, entryLevel }) {
    return await this.client.group.update(this.id, { longDescription, discoverable, language, category, advancedAdmin, questionable, locked, closed, entryLevel });
  }
}

export default GroupExtended;
