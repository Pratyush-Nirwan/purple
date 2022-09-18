const randomWords = require('random-words');
module.exports = {
    name: 'hack',
    description: 'play a prank on others by fake hacking them!',
    usage: '<@person>',
    cooldown: '',
    execute(message, args, client, Discord) {
        if(!message.mentions.users.first()) return message.channel.send({content : "Mentions someone who you want to hack!"});
        if(message.mentions.users.first().bot) return message.channel.send({content : "I will not betray my kind!"});
        if(message.mentions.users.first().id == '727559089835737150') return message.channel.send({content :"You dare ask me to hack my own master!"})
        const victim = message.mentions.users.first()

        function getRandomInRange(from, to, fixed) {
            return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
        }

        const latitude = getRandomInRange(-180, 180, 3);
        const longitude = getRandomInRange(-180, 180, 3);

        
        var email = ['123', 'abc', 'thebest', 'sucks', 'lol', 'bruh', '148', 'noob', 'pro', 'best', 'hi', '14856', '238', '78921', 'sick', 'poor', 'rich',Math.floor(Math.random() * 99999)];
        email = email[Math.floor(Math.random() * email.length - 1)];
        const password = `${randomWords(2).join('')}${Math.floor(Math.random() * 99999)}`
        const ipaddress = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
        let loading1 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription('```diff\n+Loading Terminal.```')
        let loading2 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription('```diff\n+Loading Terminal..```')
        let loading3 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription('```diff\n+Loading Terminal...```')


        let initialising = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription('```diff\n+Loading Terminal...\n+Initialising Packages```')
        let ip = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription('```diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address```')
        let scriptsbg = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription('```diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts```')
        let finished = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription('```diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished```')


        let executing1 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription('```diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script.```')
        let executing2 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription('```diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script..```')
        let executing3 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription('```diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...```')

        let script1 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\`\`\``)
        let script2 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\`\`\``)
        let script3 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\`\`\``)
        let script4 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\`\`\``)
        let script5 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\`\`\``)

            let gps1 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location.\`\`\``)    

            let gps2 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location..\`\`\``) 

            let gps3 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location...\`\`\``) 
        
            let gps4 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location...\n+Located!\`\`\``) 
        
            let gps5 = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location...\n+Located!\n+Latitude:${latitude} Longitude:${longitude}\`\`\``) 
            
            let dns = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location...\n+Located!\n+Latitude:${latitude} Longitude:${longitude}\n\n+Flushing DNS\`\`\``) 
            
            let network = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location...\n+Located!\n+Latitude:${latitude} Longitude:${longitude}\n\n+Flushing DNS\n+Re-routing Network\`\`\``) 
            
            let ipscan = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location...\n+Located!\n+Latitude:${latitude} Longitude:${longitude}\n\n+Flushing DNS\n+Re-routing Network\n+Running IP Scan\`\`\``)
            
            let tracker = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location...\n+Located!\n+Latitude:${latitude} Longitude:${longitude}\n\n+Flushing DNS\n+Re-routing Network\n+Running IP Scan\n+Added ${Math.floor(Math.random() * 100)} trackers to victims network.\`\`\``)
            
            let virus = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location...\n+Located!\n+Latitude:${latitude} Longitude:${longitude}\n\n+Flushing DNS\n+Re-routing Network\n+Running IP Scan\n+Added ${Math.floor(Math.random() * 100)} trackers to victims network.\n+Injecting Viruses\`\`\``)

            let malware = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location...\n+Located!\n+Latitude:${latitude} Longitude:${longitude}\n\n+Flushing DNS\n+Re-routing Network\n+Running IP Scan\n+Added ${Math.floor(Math.random() * 100)} trackers to victims network.\n+Injecting Viruses\n+Installing Malware\`\`\``)
            
            let trojan = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location...\n+Located!\n+Latitude:${latitude} Longitude:${longitude}\n\n+Flushing DNS\n+Re-routing Network\n+Running IP Scan\n+Added ${Math.floor(Math.random() * 100)} trackers to victims network.\n+Injecting Viruses\n+Installing Malware\n+Hiding Trojans\`\`\``)
            
            let keylogger = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location...\n+Located!\n+Latitude:${latitude} Longitude:${longitude}\n\n+Flushing DNS\n+Re-routing Network\n+Running IP Scan\n+Added ${Math.floor(Math.random() * 100)} trackers to victims network.\n+Injecting Viruses\n+Installing Malware\n+Hiding Trojans\n+Installing Keylogger\`\`\``)
            
            let end = new Discord.MessageEmbed()
            .setTitle('TERMINAL v28.03                                                                                     -  □  x')
            .setColor('#2F3136')
            .setDescription(`\`\`\`diff\n+Loading Terminal...\n+Initialising Packages\n+Masking IP Address\n+Running background scripts\n+Finished\n\n+Executing discord_Hack.script...\n+Victim identified!\n+${victim.username}#${victim.discriminator}\n+${victim.id}\n+Password Hash:${victim.avatar}\n+Public IP Address:${ipaddress}\n\n+Performing Attack!\n+SUCCESS\n+Access Granted\n\n+Email: ${victim.username.toLowerCase().replace(' ','')}${email}@gmail.com\n+Password:${password}\n\n+Locating Current Location...\n+Located!\n+Latitude:${latitude} Longitude:${longitude}\n\n+Flushing DNS\n+Re-routing Network\n+Running IP Scan\n+Added ${Math.floor(Math.random() * 100)} trackers to victims network.\n+Injecting Viruses\n+Installing Malware\n+Hiding Trojans\n+Installing Keylogger\n+Script End\`\`\``)
            message.channel.send({embeds:[loading1]})
            .then(msg => {
                setTimeout(() => {
                    msg.edit({embeds:[loading2]})
                }, 1000);
                setTimeout(() => {
                    msg.edit({embeds:[loading3]})
                }, 3000);

                setTimeout(() => {
                    msg.edit({embeds:[initialising]})
                }, 5000);
                setTimeout(() => {
                    msg.edit({embeds:[ip]})
                }, 7000);
                setTimeout(() => {
                    msg.edit({embeds:[scriptsbg]})
                }, 9000);
                setTimeout(() => {
                    msg.edit({embeds:[finished]})
                }, 11000);

                setTimeout(() => {
                    msg.edit({embeds:[executing1]})
                }, 13000);
                setTimeout(() => {
                    msg.edit({embeds:[executing2]})
                }, 15000);
                setTimeout(() => {
                    msg.edit({embeds:[executing3]})
                }, 17000);

                setTimeout(() => {
                    msg.edit({embeds:[script1]})
                }, 19000);
                setTimeout(() => {
                    msg.edit({embeds:[script2]})
                }, 21000);
                setTimeout(() => {
                    msg.edit({embeds:[script3]})
                }, 23000);
                setTimeout(() => {
                    msg.edit({embeds:[script4]})
                }, 25000);
                setTimeout(() => {
                    msg.edit({embeds:[script5]})
                }, 27000);

                setTimeout(() => {
                    msg.edit({embeds:[gps1]})
                }, 29000);
                setTimeout(() => {
                    msg.edit({embeds:[gps2]})
                }, 31000);
                setTimeout(() => {
                    msg.edit({embeds:[gps3]})
                }, 33000);
                setTimeout(() => {
                    msg.edit({embeds:[gps4]})
                }, 35000);
                setTimeout(() => {
                    msg.edit({embeds:[gps5]})
                }, 37000);

                setTimeout(() => {
                    msg.edit({embeds:[dns]})
                }, 39000);
                setTimeout(() => {
                    msg.edit({embeds:[network]})
                }, 41000);
                setTimeout(() => {
                    msg.edit({embeds:[ipscan]})
                }, 43000);
                setTimeout(() => {
                    msg.edit({embeds:[tracker]})
                }, 45000);
                setTimeout(() => {
                    msg.edit({embeds:[virus]})
                }, 47000);
                setTimeout(() => {
                    msg.edit({embeds:[malware]})
                }, 49000);
                setTimeout(() => {
                    msg.edit({embeds:[trojan]})
                }, 51000);
                setTimeout(() => {
                    msg.edit({embeds:[keylogger]})
                }, 53000);
                setTimeout(() => {
                    msg.edit({embeds:[end]})
                }, 55000);
            })
    }
}