var BLUELIPS = $.extend(true, {
    init: function() {
        this.initVars();
        this.initPlugins();
        this.bindEventHandlers();
        this.setupVideo();
        this.initClm();
        this.initEmotion();
        this.initd3();
        this.data = data;
        console.log(this.data);
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

    initAudio: function() {
        this.audio = document.getElementById('myAudio');
        this.audio.play();
        // console.log(this.audio);
        var context = this;
        this.audio.ontimeupdate = function() {
            context.audioPositionChanged()
        };

        this.audioPos = 0;

        this.audio.onended = function() {
            document.body.style.backgroundColor = 'white';
        };

    },

    // get position of the audio
    // change the background color of the document based off the position
    audioPositionChanged: function() {
        // Display the current position of the video in a p element with id="demo"
        this.audioPos = this.audio.currentTime
        // console.log(this.audioPos);
        this.colorChange('red', 1);
        this.colorChange('blue', 2);
    },

    colorChange: function(color, position) {
        if (this.audioPos > position){
            document.body.style.backgroundColor = color;
        }
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
        //start audio
        this.initAudio();

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
            for (var i = 0;i < er.length;i++) {
                if (er[i].value > 0.4) {
                    document.getElementById('icon'+(i+1)).style.visibility = 'visible';
                } else {
                    document.getElementById('icon'+(i+1)).style.visibility = 'hidden';
                }
            }
        }
    },

    initEmotion: function() {
        this.ec = new emotionClassifier();
        this.ec.init(emotionModel);
        this.emotionData = this.ec.getBlank();
    },

    updateData: function(data) {
        // for (var i = 0; i < data.length; i++) {
        //     console.log(data[i]);
        // }

        // update
        var context = this;
        var rects = this.svg.selectAll("rect")
            .data(data)
            .attr("y", function(datum) { return context.height - context.y(datum.value); })
            .attr("height", function(datum) { return context.y(datum.value); });
        var texts = this.svg.selectAll("text.labels")
            .data(data)
            .attr("y", function(datum) { return context.height - context.y(datum.value); })
            .text(function(datum) { return datum.value.toFixed(1);});
        // enter
        rects.enter().append("svg:rect");
        texts.enter().append("svg:text");
        // exit
        rects.exit().remove();
        texts.exit().remove();
    },

    updatePos: function(positions) {
        for (var i = 0; i < positions.length; i++) {
            // console.log(positions[i]);
        }
    },

    initd3: function() {
        var margin = {top : 20, right : 20, bottom : 10, left : 40},
            width = 400 - margin.left - margin.right,
            height = 100 - margin.top - margin.bottom;
        var barWidth = 30;
        var formatPercent = d3.format(".0%");

        this.margin = margin;
        this.width = width;
        this.height = height;
        this.barWidth = barWidth;
        this.formatPercent = formatPercent;

        var x = d3.scale.linear()
            .domain([0, this.ec.getEmotions().length]).range([margin.left, width+margin.left]);
        var y = d3.scale.linear()
            .domain([0,1]).range([0, height]);

        this.x = x;
        this.y = y;

        this.svg = d3.select("#emotion-chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)

        this.svg.selectAll("rect").
            data(this.emotionData).
            enter().
            append("svg:rect").
            attr("x", function(datum, index) { return x(index) - barWidth; }).
            attr("y", function(datum) { return height - y(datum.value); }).
            attr("height", function(datum) { return y(datum.value); }).
            attr("width", barWidth).
            attr("fill", "#2d578b");

        this.svg.selectAll("text.labels").
            data(this.emotionData).
            enter().
            append("svg:text").
            attr("x", function(datum, index) { return x(index); }).
            attr("y", function(datum) { return height - 10 - y(datum.value); }).
            attr("dx", -barWidth/2).
            attr("dy", "1.2em").
            attr("text-anchor", "middle").
            text(function(datum) { return datum.value;}).
            attr("fill", "white").
            attr("class", "labels");

        this.svg.selectAll("text.yAxis").
            data(this.emotionData).
            enter().append("svg:text").
            attr("x", function(datum, index) { return x(index); }).
            attr("y", height + 7).
            attr("dx", -barWidth/2).
            attr("text-anchor", "middle").
            attr("style", "font-size: 13px").
            text(function(datum) { return datum.emotion;}).
            attr("transform", "translate(0, 18)").
            attr("class", "yAxis");
    }

}, window.BLUELIPS || (window.BLUELIPS = {}));

BLUELIPS.init();
