console.log('this is loaded');

// exports.twitter = {
//     consumer_key: '7HIZL7sVStUYusMSnx7nLQalo',

//     consumer_secret: 'N6r8YdQQC2JkedNM91TC0VBlcsOha9iP9EjYD59OgcpNLe5Cmi',

//     access_token_key: '1004128179064311809-KvN0qWc9zXbcOHts7cHYiFymgVEb1H',

//     access_token_secret: 'ojW7whdLIGNtPO4x9JPIjI909DKj1cmUNA1FuyZvgOyYC',
// };

// exports.spotify = {
//     id: process.env.SPOTIFY_ID,

//     secret: process.env.SPOTIFY_SECRET
// };

exports.twitter = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};
