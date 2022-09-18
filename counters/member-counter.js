module.exports = async (client) =>{
    const guild = client.guilds.cache.get('776107860694007808');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const botCount = guild.members.cache.filter(member => member.user.bot).size;
        const humanCount = memberCount;
        const channel = guild.channels.cache.get('776383046583582751');
        if(channel.name === `Members: ${humanCount.toLocaleString()}`) return;
        channel.setName(`Members: ${humanCount.toLocaleString()}`);
    }, 20*1000);
} 