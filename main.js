const Insta = require('./insta.js');
const express=require('express')
const client = new Insta.Client();
const chatbot = require("node-fetch").default;
require('dotenv').config()
const app=express()
client.on('connected', () => {
    console.log(`${client.user.username} Is Ready Now For Chats`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return
    message.markSeen();

    if(message.content){ 
        return message.chat.sendMessage('این لیست کالاهای ماست:');
    } else
    chatbot(`https://brv-chat.vercel.app/api?message=${encodeURIComponent(message.content)}`)
    .then(res => res.json())
    .then(json => {
      message.chat.sendMessage('salma man mehrdad hastam');
    }).catch(err => {});
});

client.login('akbardadi1400@gmail.com', 'saw123$@SAW123$@');
app.get('/',(req,res)=>{
    res.send('hello')
})
const PORT=process.env.PORT||8000;
const host = '0.0.0.0';
app.listen(PORT,host,()=>{
    console.log('server is run');
})   