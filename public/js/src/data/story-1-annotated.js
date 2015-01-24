var expressions = {
    yawn: {
        emotions: {
            angry: 0.27768,
            sad: 0.108,
            surprised: 0.407,
            happy: 0.072
        },
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
        phrase: 'Imagine that you just saw a pink elephant!!',
        image: '/images/surprise.png'
    }
};

var data = {
    audio: '/audio/theBallWithMusic.mp3',
    colors: {
    	//I was tired and didn't want to go out.
    	//dull grey?
    	'0.0':"f4e8cd",
    	// I know how to look alert
    	// when You can't speak you have to look full of energy.
    	//brighten up- on second thought, don't change
    	//'6.0':""
    	// I only felt truly awake as I entered through the back way of the giant house into the brightly lit kitchen.”
    	// color change and increase brightness with time d
    	//do change on the word "entered"
    	//'13.0':""
    	// fade from grey/blue to white
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
    	//“When I entered the cocktail party I immediately began my usual routine.”
    	// flashy lights
    	'20.0':"ffffff",
    	//orange
    	'25.0':"ff8a43",
    	//pink
    	'26.0':"ff43d5",
    	//red
    	'27.0':"ff4343",
    	// yellow
    	'28.0':"fff843",
    	// green
    	'29.0':"46ff1b",
    	//pink
    	'30.0':"ff43d5",
    	//orange
    	'31.0':"ff8a43",
    	//“after an hour or so I slipped into the large study for my fifteen minute break. I felt strangely detached. I let out a little sound to remind myself I could speak.”
    	// cool darkness
    	'32.0':"4ca2d9",
    	//“then suddenly I realized that I wasn’t alone.”
    	// sudden brightness
    	'47.0':"f3f8ff"
    },
    expressions: {
        //I was tired and didn't want to go out.
        // big yawn
    	'0.0':expressions.yawn,
    	// I know how to look alert
    	// when You can't speak you have to look full of energy.
    	//neutral
    	//raise eyebrows like that sikh trying to stay awake in class
    	'5.0':expressions.neutral,
    	'8.0':expressions.awake,
    	// I only felt truly awake as I entered through the back way of the giant house into the brightly lit kitchen.”
    	//neutral
    	'13.0':expressions.neutral,
    	'15.0':expressions.awake,
    	//“When I entered the cocktail party I immediately began my usual routine.”
    	// big - small - big -small
    	'20.0':expressions.awake,
    	'25.0':expressions.perform1,
    	'27.0':expressions.perform2,
    	'29.0':expressions.perform1,
    	'31.0':expressions.perform2,
    	//“after an hour or so I slipped into the large study for my fifteen minute break. I felt strangely detached.
    	//neutral
    	'32.0':expressions.neutral,
    	//I let out a little sound to remind myself I could speak.”
    	//mouth slightly open
    	'41.0':expressions.neutralOpenMouth,
    	//“then suddenly I realized that I wasn’t alone.”
    	//surprise
    	'47.0':expressions.surprise,
    }
};
