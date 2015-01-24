var BLUELIPS = {
    init: function() {
        this.initVars();
        this.initPlugins();
        this.bindEventHandlers();
        this.setupVideo();
        this.initClm();
        this.initEmotion();
    },

    initVars: function() {
        this.$vid = $('#video-el');
        this.vid = this.$vid[0];

        this.$overlay = $('#overlay');
        this.overlay = this.$overlay[0];

        this.overlayCC = this.overlay.getContext('2d');

        this.$startBtn = $('#start-button');
    },

    initPlugins: function() {

    },

    bindEventHandlers: function() {
        this.$startBtn.on('click', this.startVideo.bind(this));
    },

    setupVideo: function() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;

        // check for camerasupport
        if (navigator.getUserMedia) {
            // set up stream
            var videoSelector = {video : true};
            if (window.navigator.appVersion.match(/Chrome\/(.*?) /)) {
                var chromeVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
                if (chromeVersion < 20) {
                    videoSelector = "video";
                }
            };

            var context = this;
            navigator.getUserMedia(videoSelector, function( stream ) {
                if (context.vid.mozCaptureStream) {
                    context.vid.mozSrcObject = stream;
                } else {
                    context.vid.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
                }
                context.vid.play();
            }, function() {
                alert("There was some problem trying to fetch video from your webcam. If you have a webcam, please make sure to accept when the browser asks for access to your webcam.");
            });
        } else {
            alert("This demo depends on getUserMedia, which your browser does not seem to support. :(");
        }

        this.$vid.on('canplay', this.enableStart.bind(this));
    },

    enableStart: function() {
        this.$startBtn.attr('value', 'start');
        this.$startBtn.attr('disabled', null);
    },

    initClm: function() {
        this.ctrack = new clm.tracker({useWebGL: true});
        this.ctrack.init(pModel);
    },

    startVideo: function() {
        //start video
        this.vid.play();

        //start tracking
        this.ctrack.start(this.vid);

        //start loop to draw face
        this.drawLoop();
    },

    drawLoop: function() {
        requestAnimFrame(this.drawLoop.bind(this));
        this.overlayCC.clearRect(0, 0, 400, 300);

        var cpos = this.ctrack.getCurrentPosition();
        if (cpos) {
            this.ctrack.draw(this.overlay);
            this.updatePos(cpos);
        }

        var cparam = this.ctrack.getCurrentParameters();
        var er = this.ec.meanPredict(cparam);
        if (er) {
            this.updateData(er);
        }
    },

    initEmotion: function() {
        this.ec = new emotionClassifier();
        this.ec.init(emotionModel);
        this.emotionData = this.ec.getBlank();
    },

    updateData: function(data) {
        for (var i = 0; i < data.length; i++) {
            $('#' + data[i].emotion).html(data[i].emotion + ': ' + data[i].value);
        }
    },

    updatePos: function(positions) {
        for (var i = 0; i < positions.length; i++) {
            // console.log(positions[i]);
        }
    }

}

BLUELIPS.init();
