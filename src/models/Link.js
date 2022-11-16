import Base from './Base.js';

class Link extends Base {
  constructor (client, data) {
    super(client);

    this.start = data.start;
    this.end = data.end;

    this.link = data.link;
  }

  toJSON () {
    return {
      start: this.start,
      end: this.end,
      link: this.link
    };
  }
}

export default Link;
