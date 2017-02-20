<template>
    <div class="section-schedule">
        <h2>Schedule</h2>
        <!-- waypoint handler functions -->
        <v-waypoint
            @waypoint-in="$store.dispatch('updateSticky')"
            @waypoint-out="$store.dispatch('updateSticky')"
        ></v-waypoint>
        <section class="cd-container"  id="cd-timeline">
            <timelineblock v-for="(timelineblock, index) in timelineblocks" :day="index + 1" :cd_cls="timelineblock.cd_cls" :schedules="timelineblock.schedule"></timelineblock>
        </section> <!-- cd-timeline -->
        <!-- waypoint handler functions -->
        <v-waypoint
            @waypoint-in="$store.dispatch('updateSticky')"
            @waypoint-out="$store.dispatch('updateSticky')"
        ></v-waypoint>
    </div>
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
                            content: '开幕式',
                            time: '8:00'
                        },
                        {
                            content: '多维度体验内容概览',
                            time: '10:00'
                        },
                        {
                            content: '香港投资市场',
                            time: '14:00'
                        },
                        {
                            content: '香港投资产品',
                            time: '15:00'
                        },
                        {
                            content: '个人理财规划',
                            time: '16:00'
                        },
                        {
                            content: '理财金字塔',
                            time: '17:00'
                        },
                        {
                            content: '理财五定律',
                            time: '18:00'
                        }
                    ]
                },
                {
                    cd_cls: 'cd-movie',
                    schedule: [
                        {
                            content: '参观香港大学',
                            time: '8:00'
                        },
                        {
                            content: '商务礼仪深层解读',
                            time: '14:00'
                        },
                        {
                            content: '国际资本运作投资',
                            time: '16:00'
                        },
                        {
                            content: '工具与资产管理应用',
                            time: '18:00'
                        }
                    ]
                },
                {
                    cd_cls: 'cd-location',
                    schedule: [
                        {
                            content: '现金流竞赛',
                            time: '9:00'
                        },
                        {
                            content: '商务礼仪进阶',
                            time: '14:00'
                        },
                        {
                            content: '基金指标分析全攻略',
                            time: '16:00'
                        },
                        {
                            content: '投资组合理论',
                            time: '18:00'
                        },
                    ]
                },
                {
                    cd_cls: 'cd-picture',
                    schedule: [
                        {
                            content: '参观香港交易所',
                            time: '8:00'
                        },
                        {
                            content: '街头问卷实战',
                            time: '10:00'
                        },
                        {
                            content: '股票模拟投资大赛',
                            time: '14:00'
                        },
                        {
                            content: '境内外医疗融资',
                            time: '16:00'
                        },
                        {
                            content: '离岸外汇资产户口',
                            time: '18:00'
                        }
                    ]
                },
                {
                    cd_cls: 'cd-location',
                    schedule: [
                        {
                            content: '参观香港会计师楼',
                            time: '8:00'
                        },
                        {
                            content: '商业投资策划书讲解',
                            time: '10:00'
                        },
                        {
                            content: '商业策划演练交流',
                            time: '12:00'
                        },
                        {
                            content: '策划报告比赛模拟',
                            time: '14:00'
                        },
                        {
                            content: '高层考核',
                            time: '16:00'
                        },
                        {
                            content: '职业潜力学员甄选',
                            time: '18:00'
                        }
                    ]
                },
                {
                    cd_cls: 'cd-movie',
                    schedule: [
                        {
                            content: '闭幕仪式',
                            time: '8:00'
                        },
                        {
                            content: '颁发实训证明',
                            time: '10:00'
                        },
                        {
                            content: '公司高层个人推荐信',
                            time: '11:00'
                        },
                        {
                            content: '颁发公司正式实训信',
                            time: '12:00'
                        },
                        {
                            content: '职业发展分享沙龙',
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
.section-schedule {
    background-color: #f4f4f4;
    padding-top: 3em;
}

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
