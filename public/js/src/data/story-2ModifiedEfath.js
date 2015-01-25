var expressions = {
    img1: {
        emotions: {
            angry: 0,
            sad: 0,
            surprised: 0,
            happy: 0
        },
        templates: [],
        phrase: 'Keep your composure! Stone face.',
        image: '/images/img1.png'
    },
    img2: {
        emotions: {
            angry: 0,
            sad: 0,
            surprised: 0,
            happy: 1
        },
        templates: [],
        phrase: 'Officer!  Is this about those parking tickets?  Listen, I paid, my check is in the mail....',
        image: '/images/img2.png'
    },
    img3: {
        emotions: {
            angry: 0,
            sad: 0,
            surprised: 0,
            happy: 0
        },
        templates: [],
        phrase: 'Keep a straight face!  Do not be intimidated!',
        image: '/images/img3.png'
    },
    img4: {
        emotions: {
            angry: 0,
            sad: 0,
            surprised: 1,
            happy: 0
        },
        templates: [],
        phrase: 'The 23rd...was that last Monday?? I was, let me see, I was in a movie!',
        image: '/images/img4.png'
    },
    img5: {
        emotions: {
            angry: 0,
            sad: 0,
            surprised: 0,
            happy: 0
        },
        templates: [],
        phrase: 'Straight face!  Keep it together.  You do not know anything.',
        image: '/images/img5.png'
    },
    img6: {
        emotions: {
            angry: 1,
            sad: 0,
            surprised: 0,
            happy: 0
        },
        templates: [],
        phrase: 'The bank?  Oh yeah, I was at the bank, but I can explain!  I was framed!',
        image: '/images/img6.png'
    },
    img7: {
        emotions: {
            angry: 0,
            sad: 0,
            surprised: 0,
            happy: 0
        },
        templates: [],
        phrase: 'You are an unreadable book.',
        image: '/images/img7.png'
    },
    img8: {
        emotions: {
            angry: 0,
            sad: 1,
            surprised: 0,
            happy: 0
        },
        templates: [],
        phrase: 'I was going to the bank and it was so cold, I had a ski mask on...this guy who looked just like me and wearing the same mask came running out of the bank, gets into a car, and drives away!',
        image: '/images/img8.png'
    },
    img9: {
        emotions: {
            angry: 0,
            sad: 0,
            surprised: 0,
            happy: 0
        },
        templates: [],
        phrase: 'Stone face!  No expression!',
        image: '/images/img9.png'
    },
    img10: {
        emotions: {
            angry: 1,
            sad: 0,
            surprised: 1,
            happy: 0
        },
        templates: [],
        phrase: 'No, no!  I said give me all of my money!  I was yelling because I had an ear infection that day, I could not hear a thing!',
        image: '/images/img10.png'
    },

};

var data = {
    name: '/story/1',
    audio: '/audio/Test2.m4a',
    colors: {
        '0.0':'000000',
        '4.0':'ffff00',
        '10.0':'000000',
        '15.0':'ff9900',
        '21.0':'000000',
        '26.0':'ff0000',
        '33.0':'000000',
        '36.0':'0099ff',
        '52.0':'000000',
        '60.0':'ff6600',
    },
    expressions: {
        '0.0':expressions.img1,
        '4.0':expressions.img2,
        '10.0':expressions.img3,
        '15.0':expressions.img4,
        '21.0':expressions.img5,
        '26.0':expressions.img6,
        '33.0':expressions.img7,
        '36.0':expressions.img8,
        '52.0':expressions.img9,
        '60.0':expressions.img10,
    }
};
