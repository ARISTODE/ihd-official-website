<template>
    <section class="section-features " id="features">
        <div class="row">
            <h2>Learn Faster &mdash; Think Deeper</h2>
            <p class="long-copy">
                International Horizon Developer 项目（简称IHD）源自 DezCorporation 《香港国际精英实训交流》课程，以其创新实用的形式，专业而灵活的课程设置， 以及强大的企业联合、行业资源，带给参与者巨大的职场能力提升。 截至目前，已有清华大学、浙江大学、武汉大学、中山大学、UIC 等高校学子选择 IHD 项目。
            </p>
        </div>
        <div class="row">
            <div class="col span-1-of-4 box">
                <i class="ion-ios-lightbulb-outline icon-big"></i>
                <h3>IHD独家洞察</h3>
                <p>
                    由IHD独家提供的最前沿的全球商业信息，拓展全球视野；真实角色扮演，分析情景，博弈交易，增强决策能力；战略人脉运营，提升有效社交，助力个人目标实现；个人品牌管理，管理自我个人形象，积累更多助推资本。
                </p>
            </div>
            <div class="col span-1-of-4 box">
                <i class="ion-android-globe icon-big"></i>
                <h3>企业管培生体验计划</h3>
                <p>
                    管理培训生体验计划由国际跨国企业HR联合其他各部门举办， 按照企业管理培训生标准来培育学员的策划，组织和领导能力。 通过接受世界500强企业标准化的管理培训与实训，在提升国际视野的同时， 为今后的毕业工作打好牢固的基础。
                </p>
            </div>
            <div class="col span-1-of-4 box">
                <i class="ion-social-usd-outline icon-big"></i>
                <h3>环球资金投资大赛</h3>
                <p>
                    参每个学员小组需要模拟管理个人、企业财富， 在给定市场信息下做好 Fund management 基金管理。 比赛将由Cash flow现金流游戏、Fund基金模拟、Stock股票模拟三个板块组成。 学员通过深度运作上述金融工具，全方位渗透学员所习得的金融及理财知识， 加深记忆，提高财富管理能力。
                </p>
            </div>
            <div class="col span-1-of-4 box">
                <i class="ion-ios-briefcase-outline icon-big"></i>
                <h3>全英商业竞赛</h3>
                <p>
                    直面金融企业顶级大牛，Present出自己的Business plan， 挑战全英Presentation。 提前适应国外学习工作模式，为海外申请做好能力与资质上的准备。
                </p>
            </div>
        </div>
        <!-- waypoint handler functions -->
        <v-waypoint
        @waypoint-in="$store.dispatch('updateSticky')"
        @waypoint-out="$store.dispatch('updateSticky')"
        ></v-waypoint>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
p {
    text-align: left;
}
.section-features .long-copy {
    margin-bottom: 30px;
}
</style>
