var expressions = {
    yawn: {
        emotions: {
            angry: 0.27768,
            sad: 0.108,
            surprised: 0.407,
            happy: 0.072
        },
        templates: ['surprised', 'happy'],
        phrase: 'yawn. imagine a long day.',
        image: '/images/yawn.png'
    },
    neutral: {
        emotions: {
            angry: 0.01,
            sad: 0.937,
            surprised: 0.1229,
            happy: 0.0148
        },
        templates: [],
        phrase: 'Neutral. imagine writing an email.',
        image: '/images/neutral.png'
    },
    awake: {
        emotion: {
            angry: 0.001885,
            sad: 0.8422231,
            surprised: 0.8269,
            happy: 0.0193167
        },
        templates: ['sad', 'surprised'],
        phrase: 'Imagine that you just drank caffeine',
        image: '/images/awake.png'
    },
    perform1: {
        emotions: {
            angry: 0.83,
            sad: 0.062,
            surprised: 0.00661,
            happy: 0.0003673
        },
        templates: ['angry'],
        phrase: 'Imagine that you\'re entertaining a small child.',
        image: '/images/perform1.png'
    },
    perform2: {
        emotions: {
            angry: 0.04081,
            sad: 0.102,
            surprised: 0.358,
            happy: 0.801
        },
        templates: ['happy'],
        phrase: 'Imagine that you\'re entertaining a small child.',
        image: '/images/perform2.png'
    },
    neutralOpenMouth: {
        emotions: {
            angry: 0.410222,
            sad: 0.532,
            surprised: 0.1151,
            happy: 0.0001
        },
        templates: ['sad'],
        phrase: '+++ make a noise for bonus points +++',
        image: '/images/neutralOpenMouth.png'
    },
    surprise: {
        emotions: {
            angry: 0.0772,
            sad: 0.3195,
            surprised: 0.05553,
            happy: 0.022
        },
        templates: ['surprised'],
        phrase: 'Imagine that you just saw a pink elephant!!',
        image: '/images/surprise.png'
    }
};

var data = {
    name: '/story/1',
    audio: '/audio/theBallWithMusic.mp3',
    colors: {
        '0.0':"f4e8cd",
        '15.0':"a1acb9",
        '15.5':"adb8c7",
        '16.0':"b6c2d0",
        '16.5':"bfcbdb",
        '17.0':"cad7e7",
        '17.5':"d3e0f1",
        '18.0':"deebfb",
        '18.5':"e8f0fb",
        '19.0':"f1f4f9",
        '19.5':"ffffff",
        '20.0':"ffffff",
        '25.0':"ff8a43",
        '26.0':"ff43d5",
        '27.0':"ff4343",
        '28.0':"fff843",
        '29.0':"46ff1b",
        '30.0':"ff43d5",
        '31.0':"ff8a43",
        '32.0':"4ca2d9",
        '47.0':"f3f8ff"
    },
    expressions: {
        '0.0':expressions.yawn,
        '5.0':expressions.neutral,
        '8.0':expressions.awake,
        '13.0':expressions.neutral,
        '15.0':expressions.awake,
        '20.0':expressions.awake,
        '25.0':expressions.perform1,
        '27.0':expressions.perform2,
        '29.0':expressions.perform1,
        '31.0':expressions.perform2,
        '32.0':expressions.neutral,
        '41.0':expressions.neutralOpenMouth,
        '47.0':expressions.surprise,
    }
};
