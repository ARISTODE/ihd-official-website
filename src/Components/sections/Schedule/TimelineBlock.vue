<template lang="html">
    <div class="cd-timeline-block">
        <div class="cd-timeline-img" :class="[cd_cls]">

        </div> <!-- cd-timeline-img -->

        <div class="cd-timeline-content">
            <h2>Day {{ day }} <i class="ion-arrow-down-b"></i></h2>
            <ul class="list-group">
                <li v-for="schedule in schedules" class="list-group-item">
                    <a>{{ schedule.content }}</a><span class="badge">{{ schedule.time }}</span>
                </li>
            </ul>
        </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->
</template>

<script>
export default {
    props: ['day', 'cd_cls', 'schedules']
}
</script>

<style lang="css">
.cd-timeline-block {
    position: relative;
    margin: 2em 0;
}
.cd-timeline-block:after {
    content: "";
    display: table;
    clear: both;
}
.cd-timeline-block:first-child {
    margin-top: 0;
}
.cd-timeline-block:last-child {
    margin-bottom: 0;
}
@media only screen and (min-width: 1170px) {
    .cd-timeline-block {
        margin: 4em 0;
    }
    .cd-timeline-block:first-child {
        margin-top: 0;
    }
    .cd-timeline-block:last-child {
        margin-bottom: 0;
    }
}

.cd-timeline-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}
.cd-timeline-img img {
    display: block;
    width: 24px;
    height: 24px;
    position: relative;
    left: 50%;
    top: 50%;
    margin-left: -12px;
    margin-top: -12px;
}
.cd-timeline-img.cd-picture {
    background: #75ce66;
}
.cd-timeline-img.cd-movie {
    background: #c03b44;
}
.cd-timeline-img.cd-location {
    background: #f0ca45;
}
@media only screen and (min-width: 1170px) {
    .cd-timeline-img {
        width: 60px;
        height: 60px;
        left: 50%;
        margin-left: -30px;
        /* Force Hardware Acceleration in WebKit */
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;
    }
}
.cd-timeline-content {
    position: relative;
    margin-left: 60px;
    background: white;
    border-radius: 0.25em;
    padding: 1em;
    box-shadow: 0 3px 0 #d7e4ed;
}
.cd-timeline-content:after {
    content: "";
    display: table;
    clear: both;
}
.cd-timeline-content h2 {
    color: #303e49;
}
.cd-timeline-content p, .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
    font-size: 13px;
    font-size: 0.8125rem;
}
.cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
    display: inline-block;
}
.cd-timeline-content p {
    margin: 1em 0;
    line-height: 1.6;
}
.cd-timeline-content .cd-read-more {
    float: right;
    padding: .8em 1em;
    background: #acb7c0;
    color: white;
    border-radius: 0.25em;
}
.no-touch .cd-timeline-content .cd-read-more:hover {
    background-color: #bac4cb;
}
.cd-timeline-content .cd-date {
    float: left;
    padding: .8em 0;
    opacity: .7;
}
.cd-timeline-content::before {
    content: '';
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid white;
}
@media only screen and (min-width: 768px) {
    .cd-timeline-content h2 {
        font-size: 20px;
        font-size: 1.25rem;
    }
    .cd-timeline-content p {
        font-size: 16px;
        font-size: 1rem;
    }
    .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
        font-size: 14px;
        font-size: 0.875rem;
    }
}
@media only screen and (min-width: 1170px) {
    .cd-timeline-content {
        margin-left: 0;
        padding: 1.6em;
        width: 45%;
    }
    .cd-timeline-content::before {
        top: 24px;
        left: 100%;
        border-color: transparent;
        border-left-color: white;
    }
    .cd-timeline-content .cd-read-more {
        float: left;
    }
    .cd-timeline-content .cd-date {
        position: absolute;
        width: 100%;
        left: 122%;
        top: 6px;
        font-size: 16px;
        font-size: 1rem;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content {
        float: right;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
        top: 24px;
        left: auto;
        right: 100%;
        border-color: transparent;
        border-right-color: white;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
        float: right;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
        left: auto;
        right: 122%;
        text-align: right;
    }
}

/*schedule style*/


.list-group {
    list-style: none;
    width: 75%;
    margin-left: 15%;
}

.list-group li {
    display: block;
    border-bottom: 1px solid lightgray;
    height: 35px;
    position: relative;
}

.list-group li:last-child {
    border-bottom: 0px;
}

.list-group-item a {
    text-decoration: none;
    font-size: 110%;
    font-weight: 200;
    display: inline-block;
    padding: 4px 20px 0;
}

.badge {
    float: right;
    border: 1px solid #2980b9;
    border-radius: 5%;
    background-color: #2980b9;
    color: white;
    height: 100%;
    width: 15%;
    text-align: center;
    font-size: 120%;
    line-height: 35px;
}

</style>
