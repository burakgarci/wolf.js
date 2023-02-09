import Base from './Base.js';

class GroupStatsActive extends Base {
  constructor (client, data) {
    super(client);

    this.actionCount = data?.actionCount;
    this.emoticonCount = data?.emoticonCount;
    this.groupId = data?.groupId;
    this.happyEmoticonCount = data?.happyEmoticonCount;
    this.imageCount = data?.imageCount;
    this.lineCount = data?.lineCount;
    this.message = data?.message;
    this.nickname = data?.nickname;
    this.randomQuote = data?.randomQuote;
    this.packCount = data?.packCount;
    this.sadEmoticonCount = data?.sadEmoticonCount;
    this.subId = data?.subId;
    this.swearCount = data?.swearCount;
    this.textCount = data?.textCount;
    this.voiceCount = data?.voiceCount;
    this.wordCount = data?.wordCount;
  }

  async subscriber () {
    return await this.client.subscriber.getById(this.subId);
  }
}

export default GroupStatsActive;
