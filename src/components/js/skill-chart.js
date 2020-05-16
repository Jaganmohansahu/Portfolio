/**
 * Frontend Skill Chart
 */
Chart.defaults.global.defaultFontColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
var frontendChart = new Chart(document.getElementById("frontendSkillChart"), {
    "type": "horizontalBar",
    "data": {
        "labels": ["HTML", "Pug", "CSS", "Sass", "Bootstrap", "JavaScript", "jQuery", "TypeScript", "AngularJS", "ReactJS"],
        "datasets": [{
            "data": [5, 5, 4, 4, 4, 3, 3, 4, 1, 2],
            "fill": false,
            "backgroundColor": ['rgba(241, 101, 41, 0.7)', 'rgba(168, 100, 84, 0.7)', 'rgba(41, 101, 241, 0.7)', 'rgba(205, 103, 153, 0.7)', 'rgba(86, 61, 124, 0.7)', 'rgba(240, 219, 79, 0.7)', 'rgba(7, 105, 173, 0.7)', 'rgba(0, 122, 204, 0.7)', 'rgba(221, 27, 22, 0.7)', 'rgba(97, 219, 251, 0.7)'],
           /*  "borderColor": ['#ff0000', 'rgb(168, 100, 84)', 'rgb(41, 101, 241)', 'rgb(205, 103, 153)', 'rgb(86, 61, 124)', 'rgb(240, 219, 79)', 'rgb(7, 105, 173)', 'rgb(0, 122, 204)', 'rgb(221, 27, 22)', 'rgb(97, 219, 251)'],
            "borderWidth": 1, */
        }]
    },
    "options": {
        "legend": {
            "display": false
        },
        "responsive": true,
        "scales": {
            "xAxes": [{
                "gridLines": {
                    "display": false
                },
                "ticks": {
                    "beginAtZero": true,
                    "max": 5,
                    "stepSize": 1
                }
            }],
            "yAxes": [{
                "barThickness": 6,
                "maxBarThickness": 8,
                "gridLines": {
                    
                    "display": false
                },
            }]
        }
    }
});

/**
 * Backend Skill Chart
 */
var backendChart = new Chart(document.getElementById("backendSkillChart"), {
    "type": "horizontalBar",
    "data": {
        "labels": ["C & C++", "Java, Adv. Java, JavaFX", "Python", "NodeJS", "Android App Development", "OpenCV", "Tesseract", "Spring & Spring Boot", "Hibernate", "SQL"],
        "datasets": [{
            "data": [3, 4, 3, 1, 2, 3, 3, 3, 3, 3],
            "fill": false,
            "backgroundColor": ["rgb(0, 134, 212, 0.7)", "rgba(231, 111, 0, 0.7)",
                "rgba(55, 114, 162, 0.7)", "rgba(104, 159, 99, 0.7)", "rgba(152, 203, 0, 0.7)",
                "rgba(255, 0, 0, 0.7)", "rgba(81, 139, 212, 0.7)", "rgba(109, 179, 63, 0.7)", "rgba(188, 174, 121, 0.7)", "rgba(1, 97, 139, 0.7)"
            ],
            /*  "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
                 "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"
             ], */
            "borderWidth": 0
        }]
    },
    "options": {
        "legend": {
            "display": false
        },
        "responsive": true,
        "scales": {
            "xAxes": [{
                "gridLines": {
                    "display": false
                },
                "ticks": {
                    "beginAtZero": true,
                    "max": 5,
                    "stepSize": 1
                }
            }],
            "yAxes": [{
                "barThickness": 6,
                "maxBarThickness": 8,
                "gridLines": {
                    "display": false
                },
            }]
        }
    }
});