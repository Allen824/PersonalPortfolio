import { createStore } from 'vuex'

export default createStore({
    state: {
        myProjects: {
            BetterHealth: [
                {
                    id: 1,
                    name: 'BetterHealth',
                    pictures: [
                        {id: 1, route: "/assets/BetterHealthSS1.jpeg"},
                        {id: 2, route: "/assets/BetterHealthSS2.jpeg"}
                    ],
                    description: `BetterHealth is a web application that creates quick meal plans using artificial intelligence. It works with
                    OpenAI to take user input and create a customized meal plan. The user preference data is 
                    gathered from a 7 question quiz the user takes. The quiz gives the user room to make their preferences as broad 
                    or specific as they choose. The answers from this quiz are put into a prompt, which is given to OpenAI and the
                    response is printed on the page. This application uses React, Javascript, and CSS for the frontend and Node.JS for the
                    backend. 
                    `,
                    repository: 'https://github.com/soniakhan7/bhealth-app',
                    technologies: [
                        {id: 1, name: 'react', hovered: false, hoverName: 'React'},
                        {id: 2, name: 'square-js', hovered: false, hoverName: 'JavaScript'},
                        {id: 3, name: 'css3-alt', hovered: false, hoverName: 'CSS'},
                        {id: 4, name: 'node-js', hovered: false, hoverName: 'Node.js'}
                    ]

                }
            ],
            PersonalPortfolio: [
                {
                    id: 2,
                    name: 'Personal Portfolio',
                    pictures: [
                        {id: 1, route: "/assets/PersonalPortfolioSS1.jpeg"},
                        {id: 2, route: "/assets/PersonalPortfolioSS2.jpeg"}
                    ],
                    description: `The personal portfolio website for myself. I created this portfolio as a way to better present my work as
                    my project list grows. I worked with technologies that I was most familiar with hoping to translate those skills into a 
                    portfolio that stands out. In the future I am hoping to add more projects here as well as expand on the ones that I already
                    have. This application uses Vue, JavaScript, and CSS. It was deployed using AWS.`,
                    repository: 'https://github.com/Allen824/PersonalPortfolio',
                    technologies: [
                        {id: 1, name: 'vuejs', hovered: false, hoverName: 'Vue'},
                        {id: 2, name: 'square-js', hovered: false, hoverName: 'JavaScript'},
                        {id: 3, name: 'css3-alt', hovered: false, hoverName: 'CSS'}
                    ]
                }
            ],
            EduTutorVA: [
                {
                    id: 3,
                    name: 'EduTutorVA',
                    pictures: [
                        {id: 1, route: "/assets/EduTutorVASS1.jpeg"},
                        {id: 2, route: "/assets/EduTutorVASS2.jpeg"}
                    ],
                    description: `EduTutorVA is a tutoring program that provides free individual and small-group tutoring
                    for k-12 students. As part of a group assignment for my senior design project class, our goal was to find an
                    organization and provide an IT solution to them. The requirements we received for this project were to: provide
                    a centralized and structured method of accessing and storing resources for tutors and staff, create a functional
                    contact form that encourages schools and tutors to partner with EduTutorVA, and redesign the website to be more
                    attractive. This project uses HTML, JavaScript, and CSS.`,
                    repository: 'https://github.com/jeffnguyenn/edututorva',
                    technologies: [
                        {id: 1, name: 'html5', hovered: false, hoverName: 'HTML'},
                        {id: 2, name: 'square-js', hovered: false, hoverName: 'JavaScript'},
                        {id: 3, name: 'css3-alt', hovered: false, hoverName: 'CSS'}

                    ]
                }
            ],
            VuexGame: [
                {
                    id: 4,
                    name: 'Vuex Game',
                    pictures: [
                        {id: 1, route: "/assets/VuexGameSS1.jpeg"},
                        {id: 2, route: "/assets/VuexGameSS2.jpeg"}
                    ],
                    description: `This application is a turn-based game where the user will take turns with the computer using moves.
                    The first player to reach 0 health loses. I used this this application to learn more about how state management
                    works with Vuex. This application uses Vue, JavaScript, and CSS.`,
                    repository: 'https://github.com/Allen824/VUE-GAME',
                    technologies: [
                        {id: 1, name: 'vuejs', hovered: false, hoverName: 'Vue'},
                        {id: 2, name: 'square-js', hovered: false, hoverName: 'JavaScript'},
                        {id: 3, name: 'css3-alt', hovered: false, hoverName: 'CSS'}
                    ]
                }
            ],
            MovieApp: [
                {
                    id: 5,
                    name: 'Movie App',
                    pictures: [
                        {id: 1, route: "/assets/MoviesSS1.jpeg"},
                        {id: 2, route: "/assets/MoviesSS2.jpeg"}
                    ],
                    description: `This is a movie application that allows user to both search and view information of 
                    their favorite movies. The application will give the user a list of movies based on their search. When the 
                    user selects a movie, they will be brought to a page where they can view the movie poster and description.
                    This application uses Vue, JavaScript, and CSS.`,
                    repository: 'https://github.com/Allen824/VUE-MOVIES',
                    technologies: [
                        {id: 1, name: 'vuejs', hovered: false, hoverName: 'Vue'},
                        {id: 2, name: 'square-js', hovered: false, hoverName: 'JavaScript'},
                        {id: 3, name: 'css3-alt', hovered: false, hoverName: 'CSS'}
                    ]
                }
            ],
            ReduxStore: [
                {
                    id: 6,
                    name: 'Redux Store',
                    pictures: [
                        {id: 1, route: "/assets/ReduxStoreSS1.jpeg"},
                        {id: 2, route: "/assets/ReduxStoreSS2.jpeg"}
                    ],
                    description: `This application simulates a website where the user can buy items using a set amount of money. 
                    Items are first added to the cart before they are purchased. The cart can be accessed  at any time where the user can either
                    remove items or choose to check out. The user is given a set amount of money and will not be allowed to add any more
                    items if they run out meaning they will have to remove items from their cart. This application uses React, JavaScript, and CSS.`,
                    repository: 'https://github.com/Allen824/REACT-STORE',
                    technologies: [
                        {id: 1, name: 'react', hovered: false, hoverName: 'React'},
                        {id: 2, name: 'square-js', hovered: false, hoverName: 'JavaScript'},
                        {id: 3, name: 'css3-alt', hovered: false, hoverName: 'CSS'}
                    ]
                }
            ]
        }
        
    }
})