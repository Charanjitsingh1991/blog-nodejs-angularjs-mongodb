
/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("turtleFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be 
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has 
     * finished the quiz and would be used to mark the users answers against 
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data 
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or 
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected 
     *                          an answer yet.
     *                          - Whether the user got the question correct or 
     *                              not
     *
     * The final turtleData variable hold the information that will be 
     * displayed in the list view when the app loads. This includes the name 
     * and an image of each turtle as well as other information such as the 
     * location and the size of the turtles
     *
     */

    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];

    var quizQuestions  = [
        {
            type: "text",
            text: "How much can a loggerhead weight?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the typical lifespan of a Green Sea Turtle?",
            possibilities: [
                {
                    answer: "150 years"
                },
                {
                    answer: "10 years"
                },
                {
                    answer: "80 years"
                },
                {
                    answer: "40 years"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Alligator Snapping Turtle?",
            possibilities: [
                {
                    answer: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1"
                },
                {
                    answer: "https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Reptiles/reptile_kemps-ridley-sea-turtle_600x300.ashx"
                },
                {
                    answer: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Green Turtle?",
            possibilities: [
                {
                    answer: "data:image/jpeg;base64,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"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                },
                {
                    answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Where does the Kemp's Ridley Sea Turtle live?'",
            possibilities: [
                {
                    answer: "Tropical waters all around the world"
                },
                {
                    answer: "Eastern Australia"
                },
                {
                    answer: "Coastal North Atlantic"
                },
                {
                    answer: "South pacific islands"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the most common turtle in US waters?",
            possibilities: [
                {
                    answer: "Loggerhead turtle"
                },
                {
                    answer: "Leatherback turtle"
                },
                {
                    answer: "Hawksbill Turtle"
                },
                {
                    answer: "Alligator Snapping Turtle"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the largest sea turtle on earth?",
            possibilities: [
                {
                    answer: "Eastern Snake Necked Turtle"
                },
                {
                    answer: "Olive Ridley Sea Turtle"
                },
                {
                    answer: "Kemp's Ridley Sea Turtle'"
                },
                {
                    answer: "Leatherback"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Olive Ridley Turtle?",
            possibilities: [
                {
                    answer: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg"
                },
                {
                    answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                },
                {
                    answer: "https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Reptiles/reptile_kemps-ridley-sea-turtle_600x300.ashx"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How Heavy can a leatherback turtle be?",
            possibilities: [
                {
                    answer: "900kg"
                },
                {
                    answer: "40kg"
                },
                {
                    answer: "110kg"
                },
                {
                    answer: "300kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these turtles are herbivores?",
            possibilities: [
                {
                    answer: "Loggerhead Turtle"
                },
                {
                    answer: "Hawksbill Turtle"
                },
                {
                    answer: "Leatherback Turtle"
                },
                {
                    answer: "Green Turtle"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
        {
            type: "Green Turtle",
            image_url: "https://ichef.bbci.co.uk/news/660/cpsprodpb/116AB/production/_104893317_p05t96zg.jpg",
            locations: "Tropical and subtropical oceans worldwide",
            size: "Up to 1.5m and up to 300kg",
            lifespan: "Over 80 years",
            diet: "Herbivore",
            description: "The green turtle is a large, weighty sea turtle with a wide, smooth carapace, or shell. It inhabits tropical and subtropical coastal waters around the world and has been observed clambering onto land to sunbathe. It is named not for the color of its shell, which is normally brown or olive depending on its habitat, but for the greenish color of its skin. There are two types of green turtles—scientists are currently debating whether they are subspecies or separate species—including the Atlantic green turtle, normally found off the shores of Europe and North America, and the Eastern Pacific green turtle, which has been found in coastal waters from Alaska to Chile."
        },
        {
            type: "Loggerhead Turtle",
            image_url: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg",
            locations: "Tropical and subtropical oceans worldwide",
            size: "90cm, 115kg",
            lifespan: "More than 50 years",
            diet: "Carnivore",
            description: "Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
        },
        {
            type: "Leatherback Turtle",
            image_url: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg",
            locations: "All tropical and subtropical oceans",
            size: "Up to 2m, up to 900kg",
            lifespan: "45 years",
            diet: "Carnivore",
            description: "Leatherbacks are the largest turtles on Earth, growing up to seven feet (two meters) long and exceeding 2,000 pounds (900 kilograms). These reptilian relics are the only remaining representatives of a family of turtles that traces its evolutionary roots back more than 100 million years. Once prevalent in every ocean except the Arctic and Antarctic, the leatherback population is rapidly declining in many parts of the world. While all other sea turtles have hard, bony shells, the inky-blue carapace of the leatherback is somewhat flexible and almost rubbery to the touch. Ridges along the carapace help give it a more hydrodynamic structure. Leatherbacks can dive to depths of 4,200 feet (1,280 meters)—deeper than any other turtle—and can stay down for up to 85 minutes."
        },
        {
            type: "Hawksbill Sea Turtle",
            image_url: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532",
            locations: "Tropical Coastal areas around the world",
            size: "Over 1m, 45-68kg",
            lifespan: "30-50 Years",
            diet: "Carnivore",
            description: "Dolor possimus voluptas hic aliquam rem doloremque minus maiores accusantium? Laborum perferendis harum blanditiis quod quia? Aspernatur sunt et fuga delectus ab rem excepturi. Ipsa quibusdam facere consequuntur magnam vitae? Consectetur consectetur necessitatibus beatae delectus quibusdam in! Est nobis omnis iusto illum fugiat maxime! Neque fugiat reiciendis sequi corrupti minima facere distinctio aliquam est voluptatibus. Sint incidunt soluta atque ducimus."
        },
        {
            type: "Alligator Snapping Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg",
            locations: "Along the Atlantic Coast of USA",
            size: "around 60cm, up to 100kg",
            lifespan: "20-70 years",
            diet: "Carnivore",
            description: "The prehistoric-looking alligator snapping turtle is the largest freshwater turtle in North America and among the largest in the world. With its spiked shell, beaklike jaws, and thick, scaled tail, this species is often referred to as the 'dinosaur of the turtle world.' Found almost exclusively in the rivers, canals, and lakes of the southeastern United States, alligator snappers can live to be 50 to 100 years old. Males average 26 inches (66 centimeters) in shell length and weigh about 175 pounds (80 kilograms), although they have been known to exceed 220 pounds (100 kilograms). The much smaller females top out at around 50 pounds (23 kilograms)."
        },
        {
            type: "Kemp's Ridley Sea Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG",
            locations: "Coastal areas of the North Atlantic",
            size: "65cm, up to 45kg",
            lifespan: "Around 50 years",
            diet: "Omnivore",
            description: "The Kemp’s ridley turtle is the world’s most endangered sea turtle, and with a worldwide female nesting population roughly estimated at just 1,000 individuals, its survival truly hangs in the balance. Their perilous situation is attributed primarily to the over-harvesting of their eggs during the last century. And though their nesting grounds are protected and many commercial fishing fleets now use turtle excluder devices in their nets, these turtles have not been able to rebound. For this reason, their nesting processions, called arribadas, make for especially high drama. During an arribada, females take over entire portions of beaches, lugging their big bodies through the sand with their flippers until they find a satisfying spot to lay their eggs. Even more riveting is the later struggle to the ocean of each tiny, vulnerable hatchling. Beset by predators, hatchlings make this journey at night, breaking out of their shells using their caruncle, a single temporary tooth grown just for this purpose."
        },
        {
            type: "Olive Ridley Turtle",
            image_url: "https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Reptiles/reptile_kemps-ridley-sea-turtle_600x300.ashx",
            locations: "Tropical coastal areas around the world",
            size: "70cm, 45kg",
            lifespan: "50 years",
            diet: "Omnivore",
            description: "The olive ridley turtle is named for the generally greenish color of its skin and shell, or carapace. It is closely related to the Kemp’s ridley, with the primary distinction being that olive ridleys are found only in warmer waters, including the southern Atlantic, Pacific and Indian Oceans. Olive and Kemp’s ridleys are the smallest of the sea turtles, weighing up to 100 pounds (45 kilograms) and reaching only about 2 feet (65 centimeters) in shell length. The olive ridley has a slightly smaller head and smaller shell than the Kemp’s."
        },
        {
            type: "Eastern Snake Necked Turtle",
            image_url: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1",
            locations: "Eastern Australia",
            size: "Up to 30cm",
            lifespan: "25 years",
            diet: "Carnivore",
            description: "Snake-necked turtles, as the name suggests, have an unusually long neck. Their necks may be up to 60 percent of their carapace length. Their carapace is oval and flattened, usually dark-brown to black measuring up to 11 inches (27.5 cm) in length. Scutes are shed as the animals grow. The males have a longer, thicker tail than females and a concave plastron. They are excellent swimmers; they have large, webbed feet with sharp claws used to tear apart food."
        }
    ];

})();
