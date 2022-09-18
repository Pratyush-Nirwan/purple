const { Configuration, OpenAIApi } = require("openai");
module.exports = {
    async execute(message, client, Discord) {
        if (!message.guild || message.author.bot) return;
        if (message.channel.id !== '841963108414259241') return;
        const configuration = new Configuration({
            apiKey: `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`,
        });
        const openai = new OpenAIApi(configuration);
        let prompt = message.content;
        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
        });
        message.reply((`${response.data.choices[0].text.substring(5)}`));
        prompt += `${response.data.choices[0].text}\n`;

    }
}