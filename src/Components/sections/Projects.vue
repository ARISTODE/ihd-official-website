<template>
    <section class="section-meals">
        <ul class="projects-showcase clearfix">
            <li>
                <figure class="project-photo">
                    <img src="../assets/resources/img/1.jpg" alt="Korean bibimbap with egg and vegetables">
                </figure>
            </li>
            <li>
                <figure class="project-photo">
                    <img src="../assets/resources/img/2.jpg" alt="Simple italian pizza with cherry tomatoes">
                </figure>
            </li>
            <li>
                <figure class="project-photo">
                    <img src="../assets/resources/img/3.jpg" alt="Chicken breast steak with vegetables">
                </figure>
            </li>
            <li>
                <figure class="project-photo">
                    <img src="../assets/resources/img/4.jpg" alt="Autumn pumpkin soup">
                </figure>
            </li>
        </ul>
        <ul class="projects-showcase clearfix">
            <li>
                <figure class="project-photo">
                    <img src="../assets/resources/img/5.jpg" alt="Paleo beef steak with vegetables">
                </figure>
            </li>
            <li>
                <figure class="project-photo">
                    <img src="../assets/resources/img/6.jpg" alt="Healthy baguette with egg and vegetables">
                </figure>
            </li>
            <li>
                <figure class="project-photo">
                    <img src="../assets/resources/img/7.jpg" alt="Burger with cheddar and bacon">
                </figure>
            </li>
            <li>
                <figure class="project-photo">
                    <img src="../assets/resources/img/8.jpg" alt="Granola with cherries and strawberries">
                </figure>
            </li>
        </ul>
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

<style>
.section-meals {
    padding: 0;
}

.projects-showcase {
    list-style: none;
    width: 100%;
}

.projects-showcase li {
    display: block;
    float: left;
    width: 25%;
}

.project-photo {
    width: 100%;
    margin: 0;
    overflow: hidden;
    background-color: #000;
}

.project-photo img {
    opacity: 0.7;
    width: 100%;
    height: auto;
    -webkit-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
    -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
    transition: transform 0.5s, opacity 0.5s;
}

.project-photo img:hover {
    opacity: 1;
    -webkit-transform: scale(1.03);
    -ms-transform: scale(1.03);
    transform: scale(1.03);
}
</style>
