const { Command } = require('discord-akairo');
const { CreateEmbed } = require('../../Utility/CreateEmbed');

module.exports = class StopCommand extends Command {
  constructor() {
    super('stop', {
      aliases: ['stop'],
      description: {
        content: 'Stop playing music',
      },
      category: 'Music',
      cooldown: 3000,
    });
  }

  async exec(msg) {
    try {
      const GuildPlayers = this.client.erela.players.get(msg.guild.id);
      if (!GuildPlayers) return msg.channel.send(CreateEmbed('info', '⛔ | There no music playing in this guild'));
      GuildPlayers.destroy();
      return msg.channel.send(CreateEmbed('info', '👌 | Stopped guild queue'));
    } catch (e) {
      this.client.logger.error(e.message);
      return msg.channel.send(CreateEmbed('warn', '⛔ | An error occured'));
    }
  }
};
