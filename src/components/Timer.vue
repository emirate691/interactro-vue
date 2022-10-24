<template>
 <div class="timer">
    <div class="col-sm d-flex">
        <div class="text-center w-100" v-for="time in times" :key="time.time">
            <div class="">{{ time.text}}</div>
            <div class="card mx-5 w-50">
                <h4 class="card-title mt-3">{{ time.time }}</h4>
            </div>

        </div>
    </div>
 </div>
   
</template>

<script>
export default {
    props: [ "time" ],
    data() {
        return {
            starTime:"september 1, 2022 12:03:00",
            endTime:"December 31, 2022 14:55:00",
            times: [
                { id: 0, text: "Days", time: 1},
                { id: 1, text: "Hours", time: 1},
                { id: 2, text: "Minutes", time: 1},
                { id: 3, text: "Seconds", time: 1},
            ],
            progress: 100,
            timeinterval:undefined
        }
    },
    methods: {
        updateTimer: function() {
            if (
                this.times[3] ,
                this.times[2], 
                this.times[1], 
                this.times[0] 
            ) {
                this.getTimeRemainig();
                this.updateProgressBar();
            } else {
                clearTimeout(this.timeinterval);
                this.progress = 0;
            }
            
        },
        getTimeRemainig: function() {
            let t = Date.parse(new Date(this.endTime)) - Date.parse(new Date());
            if( t >= 0) {
                this.times[3].time = Math.floor(t / 1000 % 60); // seconds
                this.times[2].time = Math.floor(t / 1000 / 60 % 60); // minutes
                this.times[1].time = Math.floor(t / (1000 * 60 * 60) % 24); // hours
                this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24 )); // days
            } else {
                this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
                this.progress = 0;
            }
        },
        updateProgressBar: function() {
            let startTime = Date.parse(new Date(this.starTime));
            let currentTime = Date.parse(new Date());
            let endTime = Date.parse(new Date(this.endTime));
            let interval = parseFloat( (currentTime - startTime) / (endTime - startTime) * 100).toFixed(2);
            this.progress = 100 - interval
        }
    },
    created: function() {
        this.updateTimer();
        this.timeinterval = setInterval(this.updateTimer, 1000);
    }


}
</script>