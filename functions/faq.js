const similarity = require('similarity')
module.exports = {
    async isFaq(message, args, Discord) {
        var ans;
        const faq1 = similarity('where to send photos?', args.join(' ').toLowerCase() );
        const faq2 = similarity('where to get roles?', args.join(' ').toLowerCase() );
        const faq3 = similarity('where to report someone?', args.join(' ').toLowerCase() );
        const faq4 = similarity('where can i see rules?', args.join(' ').toLowerCase() );
        const faq5 = similarity('What camera should i buy?', args.join(' ').toLowerCase());
        const faq6 = similarity('Which is the best camera?', args.join(' ').toLowerCase());
        if(faq1 >= 0.65){
            ans = 'You can send photos in <#776384176001777691> or in any photography type specific category! and <#793142905727352852> is mostly for discussion.';
        }else if(faq2 >= 0.65){
            ans = 'You can get the roles in <#776301149271752734>';
        }else if(faq3 >= 0.65){
           ans ='You can DM any online staff or create a ticket in <#808305970030968873>';
        }else if(faq4 >= 0.65){
            ans ='You can check the rules in <#776140199829831733>'
        }else if(faq5 >= 0.65){
            ans='1. What is your currency and budget?\n2. What gear do you currently have?\n3. Do you want to just take pictures or video or both?\n4. What genres of photography and or videography are you most interested in?\n5. How is your current gear limiting you?\n6. What do you want this new gear to be able to do for you?\n7. Do you have any experience with/friends within any particular camera system.';
        }else if(faq6 >= 0.65){
            ans='1. What is your currency and budget?\n2. What gear do you currently have?\n3. Do you want to just take pictures or video or both?\n4. What genres of photography and or videography are you most interested in?\n5. How is your current gear limiting you?\n6. What do you want this new gear to be able to do for you?\n7. Do you have any experience with/friends within any particular camera system.';
        }
        else {
            return;
        }

        let embed = new Discord.MessageEmbed()
        .setDescription(ans)
        .setColor('#2F3136')
        message.channel.send({embeds:[embed]})
    }
}