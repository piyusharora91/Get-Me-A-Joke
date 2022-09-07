const newJokeButton = document.querySelector('#button');
const audioElement = document.querySelector('#audio');

const disableEnableButtonUponUsage = () => {
    newJokeButton.disabled = !button.disabled;
}

const speakJoke = (joke) => {
    VoiceRSS.speech({
        key: '233d35f804144dd9b0ba67c5df8a1065',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

const getNewJoke = async () => {
    let joke = '';
    const API_URL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist';

    try {
        const response = await fetch(API_URL);
        const text = await response.json();
        if (text.setup) {
            joke = `${text.setup} ... ${text.delivery}`;
        } else {
            joke = text.joke;
        }
        speakJoke(joke);
        disableEnableButtonUponUsage();
    } catch (error) {
        console.log(error);
    }
}

const handleKnifeAnimation = () => {
    navContainer.classList.toggle('handleKnifeAnimation');
}


newJokeButton.addEventListener('click', getNewJoke);
audioElement.addEventListener('ended', disableEnableButtonUponUsage);