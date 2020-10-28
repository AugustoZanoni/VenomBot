// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const axios = require('axios');

venom
    .create()
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    client.onMessage(async (message) => {
        // if (message.body === 'Hi' && message.isGroupMsg === false) {
            var gifURL;
        client
            .sendText(message.from, 'Aqui está seu sticker aleatório')
            .then((result) => {
                //console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                //console.error('Error when sending: ', erro); //return object error
            });


        // Make a request for a user with a given ID
        await axios.get('https://api.giphy.com/v1/gifs/random?api_key=0UTRbFtkMxAplrohufYco5IY74U8hOes&tag=stickers&rating=pg-13')
            .then(function (response) {
                // handle success
                
                gifURL = response.data.data.image_original_url
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        await client

            //  https://api.giphy.com/v1/gifs/random?api_key=0UTRbFtkMxAplrohufYco5IY74U8hOes&tag=stickers&rating=pg-13
            .sendImageAsStickerGif(message.from, gifURL)
            .then((result) => {
                //console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                //console.error('Error when sending: ', erro); //return object error
            });




    });



}


