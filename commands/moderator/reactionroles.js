const { MessageButton, MessageActionRow , MessageSelectMenu } = require('discord.js')
module.exports = {
    name: 'reactionroles',
    execute(message, args, client, Discord) {
        if(message.author.id !== '727559089835737150') return message.delete();
        message.delete();
        message.channel.send({ content: 'https://i.imgur.com/Q8C3mEr.png'}) 

        let descriptionEmbed = new Discord.MessageEmbed()
            .setColor('#2F3136')
            .setDescription('These roles are like something that describes you, you can get any role you want.')
        
        //dms
        let dmsPhoto = new Discord.MessageEmbed()
            .setImage('https://i.imgur.com/gPj6BfL.png')
            .setColor('#75e1f8')

        let dms = new Discord.MessageEmbed()
            .setColor('#75e1f8')
            .setDescription('Are your DMs opened or closed?');

        let open = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🔓Open')
            .setCustomId('open_dm');

        let closed = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🔒Closed')
            .setCustomId('closed_dm');
        
        let askfirst = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🔐Ask First')
            .setCustomId('askfirst_dm');

        let dmRow = new MessageActionRow()    
            .addComponents(open, closed, askfirst);

         message.channel.send({ components: [dmRow], embeds: [dmsPhoto,dms]});
       
        //profession
        let professionPhoto = new Discord.MessageEmbed()
            .setImage('https://i.imgur.com/OZQhmxB.png')
            .setColor('#9B59B6')

        let profession = new Discord.MessageEmbed()
	        .setColor('#9B59B6')
	        .setDescription('What are you?');

        let photographer = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('📷Photographer')
            .setCustomId('photographer');

        let videographer = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🎥Videographer')
            .setCustomId('videographer');    

        let professionRow = new MessageActionRow()    
            .addComponents(photographer, videographer)
            

        message.channel.send({ components: [professionRow], embeds: [professionPhoto,profession]})
        //device roles

        let devicePhoto = new Discord.MessageEmbed()
            .setImage('https://i.imgur.com/IXYEsJ5.png')
            .setColor('#9B59B6')

        let device = new Discord.MessageEmbed()
	        .setColor('#9B59B6')
	        .setDescription('What device do you use?');

        let mobile = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('📱Mobile')
            .setCustomId('mobile');

        let dslr = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('📸DSLR')
            .setCustomId('dslr');

        let mirrorless = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('📷Mirrorless')
            .setCustomId('mirrorless');
        
        let cinema_camera = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🎥Cinema Camera')
            .setCustomId('cinema_camera');

        let analog = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🎞Analog/Film')
            .setCustomId('analog');    
        
        let otherdevice = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('❓Others')
            .setCustomId('otherdevice');

        let deviceRow = new MessageActionRow()    
            .addComponents(mobile, dslr, mirrorless, cinema_camera, analog)

        let deviceRow2 = new MessageActionRow()
             .addComponents(otherdevice)    

            message.channel.send({ components: [deviceRow,deviceRow2] , embeds: [devicePhoto,device]})

        //region
        let regionPhoto = new Discord.MessageEmbed()
            .setImage('https://i.imgur.com/rDH3059.png')
            .setColor('#AD1457')

        let region = new Discord.MessageEmbed()
            .setColor('#AD1457')
            .setDescription('Where are you from?');

        let north_america = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🌎North America')
            .setCustomId('north_america');
        
        let south_america = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🌎South America')
            .setCustomId('south_america'); 
        
        let asia = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🌏Asia')
            .setCustomId('asia');  
            
        let europe = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🌍Europe')
            .setCustomId('europe'); 
         
        let africa = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🌍Africa')
            .setCustomId('africa');
        
        let australia = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🌏Australia')
            .setCustomId('australia');    
        let regionRow1 = new MessageActionRow()
            .addComponents(north_america, south_america, asia, europe, africa)
        let regionRow2 = new MessageActionRow()
            .addComponents(australia);  

        message.channel.send({ components:[regionRow1,regionRow2], embeds: [regionPhoto,region]})

        //pronoun
        let pronounPhoto = new Discord.MessageEmbed()
            .setImage('https://i.imgur.com/lW0CUXh.png')
            .setColor('#6FA5D4')

        let pronoun = new Discord.MessageEmbed()
            .setColor('#6FA5D4')
            .setDescription('Your Pronouns?');

        let male = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('He/Him')
            .setCustomId('male');
        let female = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('She/Her')
            .setCustomId('female');
        let trans = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('They/Them')
            .setCustomId('trans');   

        let pronounRow = new MessageActionRow()
            .addComponents(male, female, trans)

        message.channel.send({ components: [pronounRow], embeds: [pronounPhoto,pronoun]})    
        
        //types
        let typesPhoto = new Discord.MessageEmbed()
            .setImage('https://i.imgur.com/rk92eCo.png')
            .setColor('#E67E22')

        let type = new Discord.MessageEmbed()
            .setColor('#E67E22')
            .setDescription('What genres of photography are you into?');

        let landscape = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🌄Landscape')
            .setCustomId('landscape');

        let portrait = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🤵Portrait')
            .setCustomId('portrait');

        let action = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🏌️‍♀️Action')
            .setCustomId('action');    

        let street = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🚶‍♂️Street')
            .setCustomId('street');
            
        let macro = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🐞Macro')
            .setCustomId('macro'); 
            
        let nature = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🍃Nature')
            .setCustomId('nature');
            
        let wildlife = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🐯Wildlife')
            .setCustomId('wildlife'); 
            
        let astro = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🌌Astro')
            .setCustomId('astro');  
            
        let product = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🛍Product')
            .setCustomId('product');
         
        let travel = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🚗Travel')
            .setCustomId('travel');    
            
        let aerial = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🛩Aerial')
            .setCustomId('aerial'); 
            
        let videogame = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🎮Videogame')
            .setCustomId('videogame');  
        
        let automotive = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🚘Automotive')
            .setCustomId('automotive');
        let typeRow1 = new MessageActionRow()
            .addComponents(landscape, portrait, action, street, macro)

        let typeRow2 = new MessageActionRow()
            .addComponents(nature, wildlife, astro, product, travel)

        let typeRow3 = new MessageActionRow()
            .addComponents(aerial, videogame, automotive)


        message.channel.send({components: [typeRow1,typeRow2,typeRow3], embeds: [typesPhoto,type]})

        //skill
        let skillPhoto = new Discord.MessageEmbed()
            .setImage('https://i.imgur.com/oKoSTQr.png')
            .setColor('#1ABC9C')

        let skill = new Discord.MessageEmbed()
            .setColor('#1ABC9C')
            .setDescription('Your skill level?');

        let beginner = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Beginner')
            .setCustomId('beginner');

        let intermediate = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Intermediate')
            .setCustomId('intermediate');
        
        let professional = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('Professional')
            .setCustomId('professional');    
        
        let skillRow = new MessageActionRow()
            .addComponents(beginner, intermediate, professional)

        message.channel.send({components: [skillRow], embeds: [skillPhoto,skill]})       
        
        //pings
        let pingsPhoto = new Discord.MessageEmbed()
            .setImage('https://i.imgur.com/zSTFmi8.png')
            .setColor('#B9BBBE')

        let ping = new Discord.MessageEmbed()
            .setColor('#B9BBBE')
            .setDescription('When do you want to get notified?');

        let announcements = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('📢Announcements')
            .setCustomId('announcement');

        let events = new MessageButton() 
            .setStyle('SECONDARY')
            .setLabel('🎉Events')
            .setCustomId('event')    

        let giveaways = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🎁Giveaways')
            .setCustomId('giveaways');  
            
        let bumpreminder = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🤜Bump Reminder')
            .setCustomId('bumpreminder');
            
        let chatreviver = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🩺Chatreviver')
            .setCustomId('chatreviver'); 
        
        let welcomer = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('👋Welcomer')
            .setCustomId('welcomer');
            
        let botupdates = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('🟣BokehUtils updates')
            .setCustomId('botupdates');
        
        let pingRow1 = new MessageActionRow()
            .addComponents(announcements,events,giveaways,bumpreminder,chatreviver)

        let pingRow2 = new MessageActionRow()
            .addComponents(welcomer,botupdates)

        message.channel.send({ components: [pingRow1,pingRow2], embeds: [pingsPhoto,ping]})

        //misc
        let miscPhoto = new Discord.MessageEmbed()
            .setImage('https://i.imgur.com/SJD8f4t.png')
            .setColor('#B9BBBE')
            
        let misc = new Discord.MessageEmbed()
            .setColor('#B9BBBE')
            .setDescription('Here are some misc roles that you might like.')

        let betatester = new MessageButton()
            .setStyle('SECONDARY')
            .setLabel('⚙️Beta Tester for Purple bot')
            .setCustomId('betatester');

        let miscRow1 = new MessageActionRow()
            .addComponents(betatester)
            
        message.channel.send({ components: [miscRow1], embeds: [miscPhoto,misc]})    
    
        //color roles
        let colorPhoto = new Discord.MessageEmbed()
            .setImage('https://i.imgur.com/Ecr0y8b.png')
            .setColor('#ffffff')

        let color = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setDescription(`What color role do you want?`)

        let colormenu = new MessageSelectMenu()
					.setCustomId('colormenu')
					.setPlaceholder('Pick a color')
					.addOptions([
                    {
                        label: 'None',
						value: 'nocolor',
                    },
                    {
                        label: 'Pink',
						value: 'pink',
                        emoji: '<:pink:878170196760739881> ',
                    },
                    {
                        label: 'Dark Pink',
						value: 'darkpink',
                        emoji: '<:darkpink:878170196915945512> ',
                    },
                    {
                        label: 'Red',
						value: 'red',
                        emoji: '<:red:878170196832034816> ',
                    },
                    {
                        label: 'Dark Red',
						value: 'darkred',
                        emoji: '<:darkred:878170196127416371>',
                    },
                    {
                        label: 'Orange',
						value: 'orange',
                        emoji: '<:orange:878170196370657290>',
                    },
                    {
                        label: 'Dark Orange',
						value: 'darkorange',
                        emoji: '<:darkorange:878170196416819250>',
                    },
                    {
                        label: 'Yellow',
						value: 'yellow',
                        emoji: '<:yellow:878170196756529152>',
                    },
                    {
                        label: 'Dark Yellow',
						value: 'darkyellow',
                        emoji: '<:darkyellow:878170196714610688> ',
                    },
                    {
                        label: 'Green',
						value: 'green',
                        emoji: '<:green:878170196471341076> ',
                    },
                    {
                        label: 'Dark Green',
						value: 'darkgreen',
                        emoji: '<:darkgreen:878170196651696158> ',
                    },
                    {
                        label: 'Blue',
						value: 'blue',
                        emoji: '<:blue:878170196425195520>',
                    },
                    {
                        label: 'Dark Blue',
						value: 'darkblue',
                        emoji: '<:darkblue:878170196462931998>',
                    },
                    {
                        label: 'Purple',
						value: 'purple',
                        emoji: '<:purple:878170196920123413> ',
                    },
                    {
                        label: 'Dark Purple',
						value: 'darkpurple',
                        emoji: '<:darkpurple:878170196412612608>',
                    }
                ])

                  

        let colorRow = new MessageActionRow()
            .addComponents(colormenu)
            
        message.channel.send({  components: [colorRow], embeds: [color,colorPhoto]})  
        
    }

}