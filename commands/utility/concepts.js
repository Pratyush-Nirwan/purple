module.exports = {
    name: 'concepts',
    description:"get links to a documentation on basic photography concepts.",
    usage: '(concept)',
    execute(message, args, client, Discord){
      if(args.slice(0).length === 0){
        let part1 = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('Photography Concepts')
	.addFields(
		{ name: 'Results Page 1', value: "**[Exposure](https://capturetheatlas.com/photography-basics/#exposure)**\n**[Aperture](https://capturetheatlas.com/photography-basics/#aperture)**\n**[Shutter Speed](https://capturetheatlas.com/photography-basics/#shutterspeed)**\n**[ISO](https://capturetheatlas.com/photography-basics/#iso)**\n**[Exposure Triangle](https://capturetheatlas.com/photography-basics/#triangle)**\n**[Depth of field](https://capturetheatlas.com/photography-basics/#dof)**\n**[Focal Length](https://capturetheatlas.com/photography-basics/#focallength)**\n**[Sensor Size](https://capturetheatlas.com/photography-basics/#sensorsize)**\n**[Focus](https://capturetheatlas.com/photography-basics/#focus)**\n**[Sharpness](https://capturetheatlas.com/photography-basics/#sharpness)**"},
  )
 let part2 = new Discord.MessageEmbed()
  .setColor('#2F3136')
  .addFields(
    {name: 'Results Page 2', value: "**[Camera settings](https://capturetheatlas.com/photography-basics/#settings)**\n**[Camera Modes](https://capturetheatlas.com/photography-basics/#modes)**\n**[Metering modes](https://capturetheatlas.com/photography-basics/#metering)**\n**[Focus modes &areas](https://capturetheatlas.com/photography-basics/#areas)**\n**[White balance](https://capturetheatlas.com/photography-basics/#wb)**\n**[Histogram](https://capturetheatlas.com/photography-basics/#histogram)**\n**[Compostion](https://capturetheatlas.com/photography-basics/#composition)**\n**[Photography gear](https://capturetheatlas.com/photography-basics/#gear)**\n**[Editing](https://capturetheatlas.com/photography-basics/#editing)**\n**[Photography tips for beginners](https://capturetheatlas.com/photography-basics/#tips)**"}
  )
	.setFooter("Powered by www.capturetheatlas.com");
message.channel.send({embeds:[part1]});
message.channel.send({embeds:[part2]});
return;
  } else {
    const targetConcept = args.slice(0).join(' ');
    var fieldValue;
    var title;
    if(targetConcept.toLowerCase() === 'exposure'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#exposure)**';
      title = 'Exposure';
    } else if(targetConcept.toLowerCase() === 'aperture'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#aperture)**';
      title = 'Aperture';
    } else if(targetConcept.toLowerCase() === 'shutter speed'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#shutterspeed)**';
      title = 'Shutter Speed';
    } else if(targetConcept.toLowerCase() === 'iso'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#iso)**';
      title = 'ISO';
    } else if(targetConcept.toLowerCase() === 'exposure triangle'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#triangle)**';
      title = 'Exposure Triangle';
    } else if(targetConcept.toLowerCase() === 'depth of field' || targetConcept.toLowerCase() === 'dof'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#dof)**';
      title = 'Depth Of Field';
    } else if(targetConcept.toLowerCase() === 'focal length'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#focallength)**';
      title = 'Focal Length';
    } else if(targetConcept.toLowerCase() === 'sensor size'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#sensorsize)**';
      title = 'Sensor Size';
    } else if(targetConcept.toLowerCase() === 'focus'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#focus)**';
      title = 'Focus';
    } else if(targetConcept.toLowerCase() === 'sharpness'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#sharpness)**';
      title = 'Sharpness';
    } else if(targetConcept.toLowerCase() === 'camera settings'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#settings)**';
      title = 'Camera Settings';
    } else if(targetConcept.toLowerCase() === 'camera modes'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#modes)**';
      title = 'Camera Modes';
    } else if(targetConcept.toLowerCase() === 'metering modes'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#metering)**';
      title = 'Metering Modes';
    } else if(targetConcept.toLowerCase() === 'focus modes & areas' || targetConcept.toLowerCase() === 'focus modes and areas' || targetConcept.toLowerCase() === 'focus modes' || targetConcept.toLowerCase() === 'areas'){
      fieldValue = '"**[CLICK ME](https://capturetheatlas.com/photography-basics/#areas)**';
      title = 'Focus Modes and Areas';
    } else if(targetConcept.toLowerCase() === 'white balance'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#wb)**';
      title = 'White Balance';
    } else if(targetConcept.toLowerCase() === 'histogram'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#histogram)**';
      title = 'Histogram';
    } else if(targetConcept.toLowerCase() === 'compostion'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#composition)**';
      title = 'Composition';
    } else if(targetConcept.toLowerCase() === 'photography gear' || targetConcept.toLowerCase() === 'gear'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#gear)**';
      title = 'Photography Gear';
    } else if(targetConcept.toLowerCase() === 'editing'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#editing)**';
      title = 'Editing';
    } else if(targetConcept.toLowerCase() === 'tips'){
      fieldValue = '**[CLICK ME](https://capturetheatlas.com/photography-basics/#tips)**';
      title = 'Photography Tips For Beginners';
    } else {
      message.channel.send({content:'Invalid Argument!'});
      return;
    }

    let embed = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setTitle('Photography Concept')
	.addFields(
		{ name: title, value: fieldValue},
  )
	.setFooter("Powered by www.capturetheatlas.com");

message.channel.send({embeds: [embed]})
return;
  }
    }   
}