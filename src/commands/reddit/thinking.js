const { RandomRedditPostCommand } = require('../../')

module.exports = class Thinking extends RandomRedditPostCommand {
  constructor (client) {
    super(client, {
      name: 'thinking',
      aliases: ['thonk', 'thonking', 'thonkang'],
      category: 'memes',
      subreddit: 'thinking',
      addTitle: false
    })
  }
}
