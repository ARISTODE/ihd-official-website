<template>
    <div>
        <app-header></app-header>
        <app-features></app-features>
        <app-projects></app-projects>
        <app-video></app-video>
        <app-testimonials></app-testimonials>
        <app-skills></app-skills>
        <app-companies></app-companies>
        <app-schedule></app-schedule>
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
import Schedule from './sections/Schedule.vue';
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
        'appSchedule': Schedule,
        'appFooter': Footer
    }
}
</script>

<style>

</style>
