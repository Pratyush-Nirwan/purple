const { APIMessage, Structures } = require('discord.js');

class Message extends Structures.get("Message") {
    async reply(content, options) {
        const mentionRepliedUser = typeof ((options || content || {}).allowedMentions || {}).repledUser === 'undefined' ? true : ((options || content).allowedMentions).repledUser;
        delete ((options || content || {}).allowedMentions || {}).repledUser;

        const apiMessage = content instanceof APIMessage ? content.resolveData() : APIMessage.create(this.channel, content, options).resolveData();
        Object.assign(apiMessage.data, {message_reference: {message_id: this.id}});

        if (!apiMessage.data.allowed_mentions || Object.keys(apiMessage.data.allowed_mentions).length === 0) {
            apiMessage.data.allowed_mentions = { parse: ["users", "roles", "everyone"] };
        };

        if (typeof apiMessage.data.allowed_mentions.repled_user === 'undefined') {
            Object.assign(apiMessage.data.allowed_mentions, {repled_user: mentionRepliedUser});
        };

        if (Array.isArray(apiMessage.data.content)) {
            return Promise.all(apiMessage.split().map(x => {
                x.data.allowed_mentions = apiMessage.data.allowed_mentions;
                return x;
            }).map(this.reply.bind(this)));
        };

        const {data, files} = await apiMessage.resolveFiles();
        return this.client.api.channels[this.channel.id].messages
        .post({data, files})
        .then(x => this.client.actions.MessageCreate.handle(x).messages);
    };
};
Structures.extend("Message", () => Message);