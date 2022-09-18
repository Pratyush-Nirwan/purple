module.exports = {
    name: 'types',
    description:"get links for documentation for diffrent types of photography.",
	usage: '(type)',
    execute(message, args, client, Discord){
	if(args.slice(0).length === 0){
        let alltypes = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('Types of Photography')
	.addFields(
		{ name: 'Results', value: "**[Landscape Photography](https://www.pixpa.com/blog/landscape-photography-tips)**\n**[portrait Photography](https://www.pixpa.com/blog/master-portrait-photography)**\n**[Sports Photography](https://www.pixpa.com/blog/sports-photography-tips)**\n**[Macro Photography](https://www.pixpa.com/blog/macro-photography)**\n**[Astro Photography](https://www.pixpa.com/blog/guide-to-astrophotography)**\n**[Product Photography](https://www.pixpa.com/blog/product-photography)**\n**[Travel Photography](https://www.pixpa.com/blog/travel-photography-tips)**\n**[Aerial Photography](https://www.pixpa.com/blog/aerial-photography-using-drones)**\n**[Wildlife Photography](https://www.pixpa.com/blog/wildlife-photography)**"},
  )
	.setFooter("Powered www.pixpa.com");
message.channel.send({embeds:[alltypes]});
	} else {
		const targetConcept = args.slice(0).join(' ');
    var fieldValue;
    var title;
		if(args.slice(0).includes('photography')) return message.channel.send({content:'You dont need to include photography'});
	if(targetConcept.toLowerCase() === 'landscape'){
		fieldValue = '**[CLICK ME](https://www.pixpa.com/blog/landscape-photography-tips)**';
		title = 'Landscape';
	  } else if(targetConcept.toLowerCase() === 'portrait'){
		fieldValue = '**[CLICK ME](https://www.pixpa.com/blog/master-portrait-photography)**';
		title = 'Portrait';
	  } else if(targetConcept.toLowerCase() === 'sports'){
		fieldValue = '**[CLICK ME](https://www.pixpa.com/blog/sports-photography-tips)**';
		title = 'Sports';
	  } else if(targetConcept.toLowerCase() === 'macro'){
		fieldValue = '**[CLICK ME](https://www.pixpa.com/blog/macro-photography)**';
		title = 'Macro';
	  } else if(targetConcept.toLowerCase() === 'astro'){
		fieldValue = '**[CLICK ME](https://www.pixpa.com/blog/guide-to-astrophotography)**';
		title = 'Astro';
	  } else if(targetConcept.toLowerCase() === 'product'){
		fieldValue = '**[CLICK ME](https://www.pixpa.com/blog/product-photography)**';
		title = 'Product';
	  } else if(targetConcept.toLowerCase() === 'travel'){
		fieldValue = '**[CLICK ME](https://www.pixpa.com/blog/travel-photography-tips)**';
		title = 'Travel';
	  } else if(targetConcept.toLowerCase() === 'aerial'){
		fieldValue = '**[CLICK ME](https://www.pixpa.com/blog/aerial-photography-using-drones)**';
		title = 'Aerial';
	  } else if(targetConcept.toLowerCase() === 'wildlife'){
		fieldValue = '**[CLICK ME](https://www.pixpa.com/blog/wildlife-photography)**';
		title = 'Wildlife';
	}else {
	 message.channel.send({content:"Invalid argument"})
	 return;
	}
	let embed = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('Photography Type')
	.addFields(
		{ name: title, value: fieldValue},
  )
	.setFooter("Powered by www.pixpa.com");

message.channel.send({embeds: [embed]})
return;
   }
  }
}