<template>
    <header>
        <nav>
            <div class="row">
                <img src="../assets/resources/img/ihd-logo-white.png" alt="ihd logo" class="logo">
                <ul class="main-nav">
                    <li><a href="#features">Projects</a></li>
                    <li><a href="#video">About us</a></li>
                    <li><a href="#companies">Cooperation</a></li>
                    <li><a href="#schedule">Schedule</a></li>
                    <li><a href="#plans">Sign up</a></li>
                </ul>
                <a class="mobile-nav-icon"><i class="ion-navicon-round"></i></a>
            </div>
        </nav>
        <div class="hero-text-box">
            <h1>Global team<br>Provide professional plans</h1>
            <a class="btn btn-full" href="#">JOIN US!</a>
            <a class="btn btn-ghost" href="#">Show me more</a>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>
/* ----------------------------------------------- */
/* HEADER */
/* ----------------------------------------------- */

header {
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/resources/img/background-img.jpg);
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/resources/img/background-img.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
}

.hero-text-box {
    position: absolute;
    width: 1140px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.logo {
    height: 130px;
    width: auto;
    float: left;
    margin-top: 20px;
}

.logo-black {
    display: none;
    height: 50px;
    width: auto;
    float: left;
    margin: 5px 0;
}

/* Main navi */
.main-nav {
    float: right;
    list-style: none;
    margin-top: 55px;
}

.main-nav li {
    display: inline-block;
    margin-left: 40px;
}

.main-nav li a:link,
.main-nav li a:visited {
    padding: 8px 0;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 90%;
    border-bottom: 2px solid transparent;
    -webkit-transition: border-bottom 0.2s;
    transition: border-bottom 0.2s;
}

.main-nav li a:hover,
.main-nav li a:active {
    border-bottom: 2px solid #2980b9;
}


/* Mobile navi */
.mobile-nav-icon {
    float: right;
    margin-top: 30px;
    cursor: pointer;
    display: none;
}

.mobile-nav-icon i {
    font-size: 200%;
    color: #fff;
}

</style>
