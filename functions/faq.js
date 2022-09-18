const similarity = require('similarity')
module.exports = {
    async isFaq(message, args, Discord) {
        var ans;
        const faq1 = similarity('where to send photos?', args.join(' ').toLowerCase() );
        const faq2 = similarity('where to get roles?', args.join(' ').toLowerCase() );
        const faq3 = similarity('where to report someone?', args.join(' ').toLowerCase() );
        const faq4 = similarity('where can i see rules?', args.join(' ').toLowerCase() );
        if(faq1 >= 0.65){
            ans = 'You can send photos in <#776384176001777691> or in any photography type specific category! and <#793142905727352852> is mostly for discussion.';
        }else if(faq2 >= 0.65){
            ans = 'You can get the roles in <#776301149271752734>';
        }else if(faq3 >= 0.65){
           ans ='You can DM any online staff or create a ticket in <#808305970030968873>';
        }else if(faq4 >= 0.65){
            ans ='You can check the rules in <#776140199829831733>'
        } else {
            return;
        }

        let embed = new Discord.MessageEmbed()
        .setDescription(ans)
        .setColor('#2F3136')
        message.channel.send({embeds:[embed]})
    }
}