let client = require('../index').GetClient();

function CreateEmbed(title, description, color, footer, url, timestamp) {
    return {
        title: title,
        description: description,
        footer: {
            text: footer ? footer : client.user.username,
        },
        url: url ? url : '',
        color: color,
        timestamp: timestamp ? timestamp : new Date()
    };
}

module.exports = {
    CreateEmbed: CreateEmbed
}