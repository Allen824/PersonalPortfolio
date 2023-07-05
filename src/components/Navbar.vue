<template>
    <header>
        <nav>
            <div class="navigation">
                <router-link to='/'><div class="name-section">AllenKagle</div></router-link>
                <div class="link-section">
                    <div class="nav-link" v-on:click="scrollToDiv('welcome-project-divider')">Projects</div>
                    
                    <a href="https://github.com/Allen824" target="_blank"><div><font-awesome-icon class="nav-icon" :icon="['fab', 'github']" 
                    /></div></a>
                    <a href="https://www.linkedin.com/in/allen-kagle-47250a217/" target="_blank"><div><font-awesome-icon class="nav-icon" :icon="['fab', 'linkedin']" 
                    /></div></a>
                    <a href="mailto:kagleallen@gmail.com"><button class="contact-button">Contact</button></a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
    components: {},
    methods: {
        // Scroll to the element of the page
        scrollToDiv(elementId) {
            if (window.location.pathname === '/') {
                var element = document.getElementById(elementId)
                if(element) {
                    element.scrollIntoView({ behavior: "smooth" })
                }
            }
            else {
                // User is not on the home page, redirect to the home page and scroll afterwards
                this.$router.push('/')
                //console.log('redirect successful');
                    setTimeout(() => {
                        //console.log('element found');
                        const element = document.getElementById(elementId);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 200);            
            }
        }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');

    header {
        background-color: #000000;
        width: 100%;        
    }

    .nav-icon {
        color: #E7DFDD;
        height: 2.8vh; 
        min-height: 10px;
    }

    .nav-icon:hover {
        color: #A239CA;
        transition: 1s ease all;
    }

    .navigation {
        position: static;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 93%;
        padding: 2vh;
    }

    .name-section {
        color: #E7DFDD;
        font-family: 'Rock Salt', cursive;
        font-size: 1.6em;
    }

    .link-section {
        width: 30%;
        font-size: 1em;
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 30px;
        align-items: center;
    }

    .nav-link {
        text-decoration: none;
        text-transform: uppercase;
        color: #E7DFDD;
        cursor: pointer;    
    }

    .nav-link:hover {
        color: #A239CA;  
        transition: 1s ease all ;
    }

    .contact-button {
        font-weight: bold;
        color: #E7DFDD;
        text-transform: uppercase;
        padding: 10px;
        text-decoration: none;
        border: none;
        background-color: #A239CA;
        cursor: pointer;
    }

    .contact-button:hover {
        background-color: #bd26f9;
        transition: 1s ease all;
    }

    @media screen and (max-width: 1000px){
        .name-section {
            font-size: 1em;
        }
    }


</style>