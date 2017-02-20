<template>
    <div id="app">
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {

        }
    },
    components: {

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

/*vue sliding effect*/

.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
    0%
    {
        transform: translateY(-30px);
        opacity: 0;
    }
    100%
    {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-out {
    0%
    {
        transform: translateY(0);
        opacity: 1;
    }
    100%
    {
        transform: translateY(-30px);
        opacity: 0;
    }
}

/* Sticky navi */
.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 2px #efefef;
    z-index: 9999;
}

.sticky .main-nav { margin-top: 18px; }

.sticky .main-nav li a:link,
.sticky .main-nav li a:visited {
    padding: 16px 0;
    color: #555;
}

.sticky .logo { display: none; }
.sticky .logo-black { display: block; }

</style>
