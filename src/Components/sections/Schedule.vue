<template>
    <section class="cd-container"  id="cd-timeline">
        <timelineblock v-for="(timelineblock, index) in timelineblocks" :day="index + 1" :cd_cls="timelineblock.cd_cls" :schedules="timelineblock.schedule"></timelineblock>
    </section> <!-- cd-timeline -->
</template>

<script>
import TimelineBlock from './Schedule/TimelineBlock.vue';

export default {
    data() {
        return {
            timelineblocks: [
                {
                    cd_cls: 'cd-movie',
                    schedule: [
                        {
                            content: 'Check in',
                            time: '14:00'
                        },
                        {
                            content: '项目导向会议',
                            time: '15:00'
                        },
                        {
                            content: '团队建设与破冰',
                            time: '16:00'
                        }
                    ]
                },
                {
                    cd_cls: 'cd-picture',
                    schedule: [
                        {
                            content: 'Check in',
                            time: '14:00'
                        }
                    ]
                },
                {
                    cd_cls: 'cd-movie',
                    schedule: [
                        {
                            content: 'Check in',
                            time: '14:00'
                        }
                    ]
                },
                {
                    cd_cls: 'cd-location',
                    schedule: [
                        {
                            content: 'Check in',
                            time: '14:00'
                        }
                    ]
                },
                {
                    cd_cls: 'cd-picture',
                    schedule: [
                        {
                            content: 'Check in',
                            time: '14:00'
                        }
                    ]
                },
                {
                    cd_cls: 'cd-location',
                    schedule: [
                        {
                            content: 'Check in',
                            time: '14:00'
                        }
                    ]
                },
                {
                    cd_cls: 'cd-movie',
                    schedule: [
                        {
                            content: 'Check in',
                            time: '14:00'
                        }
                    ]
                }
            ]
        }
    },
    components: {
        'timelineblock': TimelineBlock
    }
}
</script>

<style>
#cd-timeline {
    position: relative;
    padding: 3em 7em;
    margin-top: 2em;
    margin-bottom: 2em;
}
#cd-timeline::before {
    /* this is the vertical line */
    content: '';
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    background: #d7e4ed;
}
@media only screen and (min-width: 1170px) {
    #cd-timeline {
        margin-top: 3em;
        margin-bottom: 3em;
    }
    #cd-timeline::before {
        left: 50%;
        margin-left: -2px;
    }
}

</style>
