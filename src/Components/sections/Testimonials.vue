<template>
    <section class="section-testimonials">
        <div class="row">
            <h2>Our reputations</h2>
        </div>
        <div class="row">
            <div class="col span-1-of-3">
                <blockquote>
                    7月份参加的IHD7天项目，是充实繁忙的7天。短短的7天教会了我太多东西。导师们给我们讲解了许多关于金融方面的基本知识；
                    <cite><img src="../assets/resources/img/customer-1.jpg" alt="Customer 1 photo">Alberto Duncan</cite>
                </blockquote>
            </div>
            <div class="col span-1-of-3">
                <blockquote>
                    通过为期一周的香港实训，了解了香港保险行业的一些模式，以及在香港的worker的生活方式，比起那些具体的保险项目，学到的更多是香港人的生活方式，也进一步确定了自己的工作方向。
                    <cite><img src="../assets/resources/img/customer-2.jpg" alt="Customer 2 photo">Joana Silva</cite>
                </blockquote>
            </div>
            <div class="col span-1-of-3">
                <blockquote>
                    回想起一开始我系里的朋友把IHD这个实训项目介绍给我的时候我就在想，我是金融数学专业的学生，无论是接下来的学习或者是以后的就业都需要深入了解金融领域的知识。
                    <cite><img src="../assets/resources/img/customer-3.jpg" alt="Customer 3 photo">Milton Chapman</cite>
                </blockquote>
            </div>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
.section-testimonials {
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../assets/resources/img/back-customers.jpg);
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../assets/resources/img/back-customers.jpg);
    background-size: cover;
    color: #fff;
    background-attachment: fixed;
    height: 80vh;
}

blockquote {
    padding: 2%;
    font-style: italic;
    line-height: 145%;
    position: relative;
    text-align: left;
    margin-top: 40px;
}

blockquote:before {
    content: "\201C";
    font-size: 500%;
    display: block;
    position: absolute;
    top: -5px;
    left: -5px;
}

cite {
    font-size: 90%;
    margin-top: 25px;
    display: block;
}

cite img {
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
}
</style>
