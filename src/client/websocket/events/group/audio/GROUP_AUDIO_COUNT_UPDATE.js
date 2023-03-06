import { Event } from '../../../../../constants/index.js';
import models from '../../../../../models/index.js';

/**
 * @param {import('../../../../WOLF.js').default} client
 */
export default async (client, body) => {
  const group = client.group.groups.find((group) => group.id === body.id);

  if (!group) {
    return Promise.resolve();
  }

  const oldAudioCount = new models.GroupAudioCounts(client, group.audioCounts);

  group.audioCounts = new models.GroupAudioCounts(client, body);

  return client.emit(
    Event.GROUP_AUDIO_COUNT_UPDATE,
    oldAudioCount,
    group.audioCounts
  );
};
