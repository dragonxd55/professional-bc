const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });



    client.on('message' , message => {
      var prefix = "*";
      if(message.author.bot) return;
    
      if(message.content.startsWith(prefix + "bcrole")) {
        let args = message.content.split(" ").slice(1);
    
        if(!args[0]) {
          message.channel.send("قم بمنشنة الرتبة | #bcrole @everyone message")
            return;
        }
        if(!args[1]) {
          message.channel.send("قم بكتابة الرسالة | #bcrole @everyone message")
            return;
        }
    
          if(args[0] == "@everyone") {
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`)
            message.guild.members.forEach(m => {
              m.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${args[1]}` + "**"
              )
            })
            return;
          }
    
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${args[1]}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });


  client.on('message', message => {
    if (message.content.split(' ')[0] == '*bc2')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   client.on("message", message => {
       var prefix = "#";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "ظظظظظ")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});


client.on('message', message => {
    var prefix = "+";
    
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 358499171810148372) return;
    
    
    if (message.content.startsWith(prefix + 'playing')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
    } else
    
     
    if (message.content.startsWith(prefix + 'streem')) {
    if (message.author.id !== '368456032399392768') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult, "http://twitch.tv/HP");
        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
    } else
    
    if (message.content.startsWith(prefix + 'setname')) {
    if (message.author.id !== '368456032399392768') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
    } else
        
    if (message.content.startsWith(prefix + 'setavatar')) {
    if (message.author.id !== '368456032399392768') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
    } else
    
    
    if (message.content.startsWith(prefix + 'watching')) {
    if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setActivity(argresult, {type : 'watching'});
     message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
    }
    
     });


          client.on('message', message => {
            if(!message.channel.guild) return;
  var prefix = "*";
  if(message.content.startsWith(prefix + 'bc')) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
  let copy = ".";
  let request = `Requested By ${message.author.username}`;
  if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
  msg.react('✅')
  .then(() => msg.react('❌'))
  .then(() =>msg.react('✅'))
  
  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  
  let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
  let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
  
  reaction1.on("collect", r => {
  message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
  message.guild.members.forEach(m => {
  var bc = new
     Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle('Broadcast')
     .addField('Server', message.guild.name)
     .addField('Sender', message.author.username)
     .addField('Message', args)
     .setThumbnail(message.author.avatarURL)
     .setFooter(copy, client.user.avatarURL);
  m.send({ embed: bc })
  msg.delete();
  })
  })
  reaction2.on("collect", r => {
  message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
  msg.delete();
  })
  })
  }
  });


                client.on("message", message => {
                     var prefix = "*";
                    if (message.content.startsWith(prefix + "bc3")) {
                                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
          let args = message.content.split(" ").slice(1);
          var argresult = args.join(' '); 
          message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
         m.send(`${argresult}\n ${m}`);
        })
         message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
         message.delete(); 
        };     
        });

        client.on('message', message => {
            if (true) {
          if (message.content === '+invite') {
                message.author.send(' رابط البوت |  https://discordapp.com/oauth2/authorize?client_id=426827600166518798&scope=bot&permissions=1937243255 ').catch(e => console.log(e.stack));
          
              }
             } 
            });

client.login(process.env.BOT_TOKEN);
