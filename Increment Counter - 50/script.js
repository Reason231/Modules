
const twitterMax = 12000;
const youtubeMax = 5000;
const facebookMax = 7500;

const totalDuration = 590; // Total duration in ms

const twitter = () => {
    for (let i = 0; i <= twitterMax; i++) {
        setTimeout(() => {
            const p = document.querySelector("#Twitter");
            p.innerHTML = i;
            // this down formulate proprotionally give the time to make its loading
            // And at last it will be stopped at the 590ms
            // (12000/12000) * 590 = 590ms so it would be stopped at 590ms
        }, (i / twitterMax) * totalDuration);
    }
};

const youtube = () => {
    for (let i = 0; i <= youtubeMax; i++) {
        setTimeout(() => {
            const p = document.querySelector("#Youtube");
            p.innerHTML = i;
        }, (i / youtubeMax) * totalDuration);
    }
};

const facebook = () => {
    for (let i = 0; i <= facebookMax; i++) {
        setTimeout(() => {
            const p = document.querySelector("#Facebook");
            p.innerHTML = i;
        }, (i / facebookMax) * totalDuration);
    }
};

// Start all counters simultaneously
twitter();
youtube();
facebook();

