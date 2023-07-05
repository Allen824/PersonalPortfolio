<template>
    <div class="home-page">
        <div class="welcome">
            <div class="welcome-section">
                <div class="introduction">
                    <div class="introduction-main">Hello, my name is Allen Kagle</div>
                    <div class="introduction-sub">Welcome to my personal portfolio website! 
                        I am a recent college graduate from George Mason University, equipped with a passion for technology and a knack for problem-solving. 
                        As a full stack developer, I bring a diverse skill set that allows me to create robust and user-friendly applications from front to back. 
                    </div>
                    
                </div>
            </div>
            <div class="welcome-section">
                <div class="hero-image-section">
                    <div class="hero-image-border">
                            <img class="hero-image" src="./assets/HeroImageGS.jpeg" alt="AllenKaglePhoto">
                    </div>
                </div>
            </div>
        </div>  
        <div class="welcome-project-divider" id="welcome-project-divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        <div class="projects-section-overview">
            <div class="title">My Projects</div>
            <div class="title-description">A list of both individual and collaborative projects</div>
            <div class="project-previews">
                <div class="preview">
                    <div class="preview-title">Personal Portfolio</div>
                    <div class="preview-picture-section"><img class="preview-picture"
                        src="./assets/PersonalPortfolioSS1.jpeg" alt="BetterHealth">
                    </div>
                    <div class="preview-description">My personal portfolio website</div>
                    <router-link :to="{ name: 'projectDetail', params: { id: 'PersonalPortfolio' } }">
                        <button class="go-to-project-button">See Full Description</button>
                    </router-link>
                </div>
                <div class="preview">
                    <div class="preview-title">BetterHealth</div>
                    <div class="preview-picture-section"><img class="preview-picture"
                        src="./assets/BetterHealthSS1.jpeg" alt="BetterHealth">
                    </div>
                    <div class="preview-description">A website that uses artificial intelligence to create meal plans for users </div>
                    <router-link :to="{ name: 'projectDetail', params: { id: 'BetterHealth' } }">
                        <button class="go-to-project-button">See Full Description</button>
                    </router-link>
                </div>
                <div class="preview">
                    <div class="preview-title">EduTutorVA</div>
                    <div class="preview-picture-section"><img class="preview-picture"
                        src="./assets/EduTutorVASS1.jpeg" alt="BetterHealth">
                    </div>
                    <div class="preview-description">A tutoring website for K-12 students</div>
                    <router-link :to="{ name: 'projectDetail', params: { id: 'EduTutorVA' } }">
                        <button class="go-to-project-button">See Full Description</button>
                    </router-link>
                </div>
                <div class="preview">
                    <div class="preview-title">Vuex Game</div>
                    <div class="preview-picture-section"><img class="preview-picture"
                        src="./assets/VuexGameSS1.jpeg" alt="VuexGame">
                    </div>
                    <div class="preview-description">A turn-based Vuex game</div>
                    <router-link :to="{ name: 'projectDetail', params: { id: 'VuexGame' } }">
                        <button class="go-to-project-button">See Full Description</button>
                    </router-link>
                </div>
                <div class="preview">
                    <div class="preview-title">Movie Application</div>
                    <div class="preview-picture-section"><img class="preview-picture"
                        src="./assets/MoviesSS1.jpeg" alt="BetterHealth"></div>
                    <div class="preview-description">A sample movie application where the user can search for movies</div>
                    <router-link :to="{ name: 'projectDetail', params: { id: 'MovieApp' } }">
                        <button class="go-to-project-button">See Full Description</button>
                    </router-link>
                </div>
                <div class="preview">
                    <div class="preview-title">Shopping Simulation</div>
                    <div class="preview-picture-section"><img class="preview-picture"
                        src="./assets/ReduxStoreSS1.jpeg" alt="BetterHealth"></div>
                    <div class="preview-description">A shopping application where the user can buy food items</div>
                    <router-link :to="{ name: 'projectDetail', params: { id: 'ReduxStore' } }">
                        <button class="go-to-project-button">See Full Description</button>
                    </router-link>
                </div>
            </div>
        </div>
        
        <!--
        <div class="contact" id="contact">
            <div class="contact-header">Contact</div>
                <form class="contact-form" action="/contact" method="post">
                    <input type="email" name="email" placeholder="E-mail">
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit" name="submit">SEND MAIL</button>
                </form>
        </div>
        -->
        <div class="progress" v-if="!isAtTop" @click="scrollToTop()">
            <font-awesome-icon :icon="['fas', 'arrow-up']" style="color: #000000; height: 20px;" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                isAtTop: true
            };
        },
        mounted() {
            // Add a scroll event listener to update the isAtTop property
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            // Remove the scroll event listener when the component is destroyed
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

            },
            handleScroll() {
                // Update the isAtTop property based on the scroll position
                this.isAtTop = window.scrollY === 0;
            },
        }
    }
</script>

<style>

    .progress {
        display: flex;  
        justify-content: center;
        background-color: #A239CA;
        position: fixed;
        bottom: 20px;
        right: 10px;
        height: 70px;
        width: 70px;
        align-items: center;
        border-radius: 50%;
        box-shadow: 0 0 5px #000000;
        cursor: pointer;
    } 

    /* Welcome section styling */

    .welcome {   
        height: 100svh;
        padding-top: 1vh;
        display: grid;
        grid-template-columns: 1fr 1fr; 
        background-color: #000000; 
        color: #E7DFDD;
    }

    @media screen and (max-width: 1000px) {
        .welcome {
            padding-top: 10vh;
            display: flex;
            flex-wrap: wrap;
        }

        .welcome-section {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .introduction {
            padding-right: 5vw;
        }


        .introduction-main {
            font-size: 1em;
        }

        .introduction-sub {
            font-size: 0.5em;
        }

        .hero-image-border {
            padding-left: 10px;
            padding-right: 10px;
        }
        
    }

    .welcome-section {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    :root {
        --d: 2500ms;
        --angle: 90deg;
        --gradX: 100%;
        --gradY: 50%;
        --c1: #A239CA;
        --c2: rgba(0, 0, 0, 0.1);
    }

    @property --angle {
        syntax: '<angle>';
        initial-value: 90deg;
        inherits: true;
    }

    @property --gradX {
        syntax: '<percentage>';
        initial-value: 50%;
        inherits: true;
    }

    @property --gradY {
        syntax: '<percentage>';
        initial-value: 0%;
        inherits: true;
    }

    .hero-image-border {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
        height: 50vh;
        background-color: #FFFFFF;
        border: 0.4rem solid;
        border-image: conic-gradient(from var(--angle), var(--c2), var(--c1) 0.1turn, var(--c1) 0.15turn, var(--c2) 0.25turn) 30;
        animation: borderRotate var(--d) linear infinite forwards;
    }

    .box:nth-child(2) {
        border-image: radial-gradient(ellipse at var(--gradX) var(--gradY), var(--c1), var(--c1) 10%, var(--c2) 40%) 30;
        animation: borderRadial var(--d) linear infinite forwards;
    }

    .hero-image {
        border: 1.5px solid #000000;
        height: 40vh;
    }

    @keyframes borderRotate {
    100% {
        --angle: 420deg;
    }
    }

    @keyframes borderRadial {
        20% {
            --gradX: 100%;
            --gradY: 50%;
        }
        40% {
            --gradX: 100%;
            --gradY: 100%;
        }
        60% {
            --gradX: 50%;
            --gradY: 100%;
        }
        80% {
            --gradX: 0%;
            --gradY: 50%;
        }
        100% {
            --gradX: 50%;
            --gradY: 0%;
        }
    }

    .introduction {
        font-size: 2rem;
        padding-left: 5vw;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .introduction-main {
        color: #A239CA;
        padding-bottom: 10px;
    }

    .introduction-sub {
        color: white;
        font-size: 1rem;
        padding: 10px;
        border: 1px solid #A239CA;
    }

    .email-contact {
        font-size: 1rem;
    }

    .welcome-project-divider {
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .welcome-project-divider svg {
        display: block;
        width: calc(284% + 1.3px);
        height: 15vh;
    }

    .welcome-project-divider .shape-fill {
        fill: #000000;
    }


    .gap  {
        height: 3vh;
    }
    
    .home-page {
        width: 100%;;
    }
    
    .welcome, .contact {
        margin: 0 auto;
        text-align: center;
    }

    /* Project overview section styling */

    .projects-section-overview {
        background-color: #FFFFFF ;
        height: 250vh;
        padding-top: 4.5vh;
        margin: 0 auto; 
        font-size: 2rem;
        text-align: center;
        align-items: center;
        
    }

    .projects-section-overview .title {
        font-weight: bold;
    }

    .title-description {
        padding-top: 2vh;
        font-size: 17px;
    }

    .project-previews {
        height: 90%;
        padding-top: 10vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        
    }

    .preview {
        padding: 10px;   
    }

    .preview-title {
        padding-bottom: 5vh;
        font-weight: bold;
    }
    
    .preview-picture-section {
        display: flex;
        justify-content: center;
    }

    .preview-picture {
        max-width: 70%;
        box-shadow: 0 0 7px #000000;
    }

    .preview-description {
        width: 70%;
        margin: 0 auto;
        padding-top: 5vh;
        font-size: 20px;
        padding-bottom: 2vh;
        
    }

    .go-to-project-button {
        background-color: #A239CA;
        color: #FFFFFF; 
        padding: 7px;
        cursor: pointer;
    }

    .go-to-project-button:hover {
        background-color: #bd26f9;
        transition: 1s ease all;
    }

    /* Project section styling */

    .projects {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        margin: 0 auto;
        padding-top: 1%;
        padding-bottom: 1%;
        text-align: center;
        background-color: #000000;
    }  

    

    /* Repository section styling */

    .project-repository {
        display: flex;
        align-items: center;
        justify-content: center;
    }


    /* Contact section */

    .contact {
        height: 75vh;
        display: grid;
        grid-template-rows: 1fr 1fr;
        padding-top: 1vh;
        padding-bottom: 10vh;
        background-color: #000000;
        color: white;
    }

    .contact-header {
        font-size: 2rem;
        display: flex;
        text-transform: uppercase;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }


    .contact-form {
        width: 50%;
        margin: 0 auto;
    }



    label {
        display: block;
        font-weight: bold;
    }

    input,
    textarea {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    button[type="submit"] {
        padding: 10px 20px;
        background-color: #A239CA;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button[type="submit"]:hover {
        background-color: #bd26f9;
        transition: 1s ease all;
    }


    
</style>