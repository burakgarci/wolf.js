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

  const oldAudioConfig = new models.GroupAudioConfig(client, group.audioConfig);

  group.audioConfig = new models.GroupAudioConfig(client, body);

  return client.emit(
    Event.GROUP_AUDIO_UPDATE,
    oldAudioConfig,
    group.audioConfig
  );
};
