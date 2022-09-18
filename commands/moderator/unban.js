const nodemailer = require("nodemailer");

module.exports = {
    name: 'unban',
    description:"This sends the unban email to a person",
    usage: '<email>',
    async execute(message, args, client, Discord){
        const targetMail = args[0]; 
        const targetName = args[1];
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "mail.photographerssupport.xyz",
          port: 465,
          secure: true,
          auth: {
            user: "support@photographerssupport.xyz", 
            pass: "k@8auFeo6vBV", 
        }
    });
    const emailTxt = `<html>
    <head>
        <title></title>
        <link href="https://svc.webspellchecker.net/spellcheck31/lf/scayt3/ckscayt/css/wsc.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
    <div><span style="font-family:tahoma,geneva,sans-serif"><span style="font-size:26px"><strong>Hello ${targetName},</strong></span></span><br />
    <br />
    <span style="color:#000000"><span style="font-family:tahoma,geneva,sans-serif">We are happy to tell you that you have been unbanned from our server!<br />
    <br />
    If the Ban was wrong, we are very sorry for the inconvenience that happened,<br />
    But if it was justified We hope you have learned your lesson.<br />
    You are now unbanned and welcome back to the server!<br />
    Click&nbsp;<a href="https://discord.gg/RmUr3Bd6ww">here</a>&nbsp;to get back in the server!</span></span><br />
    &nbsp;</div>
    </body>
    </html>
    `

    let mail = await transporter.sendMail({
        from: `Photographer's Support support@photographerssupport.xyz`, // sender address
        to: `${targetMail}`, // list of receivers
        subject: "UNBANNED", // Subject line
        html: emailTxt,
      });
      message.channel.send({content: "Email sent!"})
 }
}