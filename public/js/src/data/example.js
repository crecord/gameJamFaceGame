var expressions = {
    angry: {
        emotions: {
            angry: 1.0,
            sad: 0.0,
            surprised: 0.0,
            happy: 0.0
        },
        phrase: 'imagine that you\'re angry',
        image: '/images/angry.png'
    },
    sad: {
        emotions: {
            angry: 0.0,
            sad: 1.0,
            surprised: 0.0,
            happy: 0.0
        },
        phrase: 'imagine that you\'re sad',
        image: '/images/sad.png'
    },
    surprised: {
        emotion: {
            angry: 0.0,
            sad: 1.0,
            surprised: 0.0,
            happy: 0.0
        },
        phrase: 'imagine that you\'re surprised',
        image: '/images/surprised.png'
    },
    happy: {
        emotions: {
            angry: 0.0,
            sad: 0.0,
            surprised: 0.0,
            happy: 1.0
        },
        phrase: 'imagine that you\'re happy',
        image: '/images/happy.png'
    },
    mixed: {
        emotions: {
            angry: 0.0,
            sad: 0.0,
            surprised: 0.4,
            happy: 0.8
        },
        phrase: 'imagine that you\'re surprised and happy',
        image: '/images/happy.png'
    }
};

var data = {
    audio: '/audio/the-ball.mp3',
    colors: {
        '2.53': '#ff0',
        '4.24': '#0f0',
        '6.39': '#0ff'
    },
    expressions: {
        '1.42': expressions.angry,
        '2.81': expressions.sad,
        '4.09': expressions.surprised,
        '6.27': expressions.happy,
        '8.30': expressions.mixed
    }
};
