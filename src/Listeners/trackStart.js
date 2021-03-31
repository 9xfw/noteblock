const { Listener } = require('discord-akairo');
const { CreateEmbed } = require('../Utility/CreateEmbed');

module.exports = class trackStart extends Listener {
  constructor() {
    super('trackStart', {
      event: 'trackStart',
      emitter: 'erela',
    });
  }

  exec(player, track) {
    const QueueChannel = this.client.channels.cache.get(player.textChannel);
    QueueChannel.send(CreateEmbed('info', `▶ | Now playing \`${track.title}\` [${track.requester}]`));
  }
};
