<template>
    <div class="page">
        <div class="project">
            <div class="project-name">
                <div class="project-name-detail">{{ project[0].name }}</div>
            </div>
            <div class="project-pictures">
                <div v-for="picture in project[0].pictures" :key="picture.id">
                    <img class="display-picture" :src="picture.route" :alt="picture.route">
                </div>
            </div>
            <div class="project-description">{{ project[0].description }}</div>
            <div class="project-technologies">
                <div class="project-technologies-title">Technologies used:</div>
                <div class="technology-icons">        
                    <div class="icon" v-for="item in project[0].technologies" :key="item.id" 
                    @mouseover="item.hovered = true" @mouseleave="item.hovered = false">
                        <span class="icon-name" v-show="item.hovered">{{ item.hoverName }}</span>
                        <div><font-awesome-icon :icon="['fab', item.name]" style="color: #ffffff;" /></div>
                    </div>  
                </div>
            </div>
            <div class="project-repository">
                <a :href="project[0].repository" target="_blank"> <button class="Repo-button">Repository</button></a>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store/index.js';

    export default {
        name: 'projectDetail',
        components: {},
        props: ['id'],
        data() {
            return {
                project: [...store.state.myProjects[this.id]]
            }
        }
    }
</script>

<style scoped>
    .page {
        width: 100%;
        background-color: #6E387D;
    }
    

    .project {
        display: grid;
        grid-template-rows: 20% 40% 20% 10%;
        height: 140vh;
        padding-top: 15vh;
        width: 90%;
        margin: 0 auto;
        text-align: center;
        background-color: #6E387D;
    }

    .project-name {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #FFFFFF;
        text-transform: uppercase;
        font-size: 3rem;
        letter-spacing: 2px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .project-name-detail {
        padding: 10px;
    }

    .project-pictures {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .display-picture {
        height: 40vh;
        max-width: 100%;
        box-shadow: 0 0 7px #000000;
    }

    .project-description {
        text-align: left;
        font-size: 1em;
        height: 20vh;
        padding: 5px;
        background-color:  #FFFFFF;
        box-shadow: 0 0 5px #000000;
    }

    @media screen and (max-width: 950px) {
        .project-description {
            font-size: 0.7em;
        }

        .display-picture {
            height: 25vh;
            width: 90%;
        }
    }

    .project-technologies {
        height: 5vh;
        display: grid;
        grid-template-columns: 15% 90%;
        align-items: center;
        flex-direction: row;
        text-transform: uppercase;
        color: #E7DFDD;
        background-color: #000000;
        box-shadow: 0 0 5px #000000;
        
    } 

    .project-technologies-title {
        font-size: 1.2vw;
    }

    .technology-icons {
        display: flex;
        justify-content: space-around;
        width: 90%;
    }

    .icon {
        display: flex;
        width: 100%;
        justify-content: center ;
        align-items: center;
        filter: grayscale(100%) opacity(0.7);
        height: 5vh;
    }
    
    .icon-name {
        position: absolute;
        top: -32px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        background-color: #000;
        color: #fff;
        padding: 4px 8px;
        border-radius: 4px;
    }

    .icon:hover {
        background-color: rgb(46, 46, 46);
        filter: grayscale(0%);
        transition: 500ms ease;
    }


    .Repo-button {
        align-items: center;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
        box-sizing: border-box;
        color: #121212;
        cursor: pointer;
        display: inline-flex;
        flex: 1 1 auto;
        font-size: 1.2rem;
        font-weight: 700;
        justify-content: center;
        line-height: 1;
        margin: 0;
        outline: none;
        padding: 1rem 1.2rem;
        text-align: center;
        text-decoration: none;
        transition: box-shadow .2s,-webkit-box-shadow .2s;
        white-space: nowrap;
        border: 0;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    .Repo-button:hover {
        box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
    }

    
</style>