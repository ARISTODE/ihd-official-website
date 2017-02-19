<template>
    <div id="app">
        <app-header></app-header>
        <app-features></app-features>
        <app-projects></app-projects>
        <app-video></app-video>
        <app-testimonials></app-testimonials>
        <app-skills></app-skills>
        <app-companies></app-companies>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './sections/Header.vue';
import Features from './sections/Features.vue';
import Projects from './sections/Projects.vue';
import Testimonials from './sections/Testimonials.vue';
import Video from './sections/Video.vue';
import Skills from './sections/Skills.vue';
import Companies from './sections/Companies.vue';
import Footer from './sections/Footer.vue';

export default {
    name: 'app',
    data () {
        return {

        }
    },
    components: {
        'appHeader': Header,
        'appFeatures': Features,
        'appProjects': Projects,
        'appVideo': Video,
        'appTestimonials': Testimonials,
        'appSkills': Skills,
        'appCompanies': Companies,
        'appFooter': Footer
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

/* ----------------------------------------------- */
/* BASIC SETUP */
/* ----------------------------------------------- */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    background-color: #fff;
    color: #555;
    font-family: 'Lato', 'Arial', 'Microsoft YaHei', 'STXihei', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
}

.clearfix {zoom: 1;}
.clearfix:after {
    content: '.';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
}

/* ----------------------------------------------- */
/* REUSABLE COMPONENTS */
/* ----------------------------------------------- */


.row {
    max-width: 1140px;
    margin: 0 auto;
}

section {
    padding: 80px 0;
}

.box {
    padding: 1%;
}

/* ----- HEADINGS ----- */
h1,
h2,
h3 {
    font-weight: 300;
    text-transform: uppercase;
}

h1 {
    margin-top: 0;
    margin-bottom: 20px;
    color: #fff;
    font-size: 240%;
    word-spacing: 4px;
    letter-spacing: 1px;
}

h2 {
    font-size: 180%;
    word-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px;
}

h3 {
    font-size: 110%;
    margin-bottom: 15px;
}

h2:after {
    display: block;
    height: 2px;
    background-color: #2980b9;
    content: " ";
    width: 100px;
    margin: 0 auto;
    margin-top: 30px;
}

/* ----- PARAGRAPHS ----- */
.long-copy {
    line-height: 145%;
    width: 70%;
    margin-left: 15%;
}

.box p {
    font-size: 90%;
    line-height: 145%;
}


/* ----- ICONS ----- */
.icon-big {
    font-size: 350%;
    display: block;
    color: #2980b9;
    margin-bottom: 10px;
}

.icon-small {
    display: inline-block;
    width: 30px;
    text-align: center;
    color: #2980b9;
    font-size: 120%;
    margin-right: 10px;

    /*secrets to align text and icons*/
    line-height: 120%;
    vertical-align: middle;
    margin-top: -5px;
}

/* ----- LINKS ----- */

a:link,
a:visited {
    color: #2980b9;
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: 1px solid #2980b9;
    -webkit-transition: border-bottom 0.2s, color 0.2s;
    transition: border-bottom 0.2s, color 0.2s;
}

a:hover,
a:active {
    color: #555;
    border-bottom: 1px solid transparent;
}

/* ----- BUTTONS ----- */
.btn:link,
.btn:visited,
input[type=submit] {
    display: inline-block;
    padding: 10px 30px;
    font-weight: 300;
    text-decoration: none;
    border-radius: 200px;
    -webkit-transition: background-color 0.2s, border 0.2s, color 0.2s;
    transition: background-color 0.2s, border 0.2s, color 0.2s;
}

.btn-full:link,
.btn-full:visited,
input[type=submit] {
    background-color: #2980b9;
    border: 1px solid #2980b9;
    color: #fff;
    margin-right: 15px;
}

.btn-ghost:link,
.btn-ghost:visited {
    border: 1px solid #2980b9;
    color: #2980b9;
}

.btn:hover,
.btn:active,
input[type=submit]:hover,
input[type=submit]:active {
    background-color: #2980b9;
}

.btn-full:hover,
.btn-full:active {
    border: 1px solid #2980b9;
    opacity: .8;
    transition: opacity .4s;
}

.btn-ghost:hover,
.btn-ghost:active {
    border: 1px solid #2980b9;
    color: #fff;
}
</style>
