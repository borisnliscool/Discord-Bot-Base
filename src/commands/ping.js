module.exports.run = function (client, message, args) {
    message.channel.send('Checking Latency!').then(msg => {
        msg.edit(`Pong! Latency: ${msg.createdTimestamp - message.createdTimestamp}ms`);   
    });
}