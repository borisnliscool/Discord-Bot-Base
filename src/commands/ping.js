const index = require('../index');
const client = index.GetClient();
const utils = index.GetUtils();

module.exports.run = function(message, args) {
    message.channel.send({ embeds: [utils.CreateEmbed('Ping', `Checking latency!`, '#ff0000')] }).then(msg => {
        msg.edit({embeds: [utils.CreateEmbed('Ping', `Latency: ${msg.createdTimestamp - message.createdTimestamp}ms`, '#00ff00')]});   
    });
}