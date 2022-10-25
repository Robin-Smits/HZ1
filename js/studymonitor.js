// Prove that JavaScript is working in your browser. You may delete this.
console.log('JavaScript is working!');
const schoolYearOne = [
    {
        quartile: [
            {
                course: [{
                    name: 'Program & carreer orientation',
                    cuCode: '',
                    exam: [
                        {
                            name: 'PCO Assesment',
                            grade: '',
                            weight: 2.5,
                        }
                    ]
                },
                ]
            },
            {
                course: [{
                    name: 'Computer Science Basics',
                    cuCode: '',
                    exam: [
                        {
                            name: 'Written exam',
                            grade: '',
                            weight: 5,
                        }
                    ]
                },
                ]
            },
            {
                course: [{
                    name: 'Programming Basics',
                    cuCode: '',
                    exam: [
                        {
                            name: 'Case study',
                            grade: '',
                            weight: 5,
                        }
                    ]
                },
                ]
            }

        ]
    },
    {
        quartile: [
            {
                course: [{
                    name: 'Object Orientated Programming',
                    cuCode: '',
                    totalWeight: 10,
                    exam: [
                        {
                            name: 'Case study',
                            grade: '',
                            weight: 5,
                        },
                        {
                            name: 'Case study',
                            grade: '',
                            weight: 5,
                        }
                    ]
                },
                ]
            }]
    },
    {
        quartile: [
            {
                course: [{
                    name: 'Framework Development 1',
                    cuCode: '',
                    exam: [
                        {
                            name: 'PCO Assesment',
                            grade: '',
                            weight: 5,
                        }
                    ]
                },
                ]
            },
            {
                course: [{
                    name: 'Framework Project 1',
                    cuCode: '',
                    totalWeight: 10,
                    exam: [
                        {
                            name: 'Project',
                            grade: '',
                            weight: 2.5,
                        },
                        {
                            name: 'Case study',
                            grade: '',
                            weight: 2.5,
                        },
                        {
                            name: 'Report',
                            grade: '',
                            weight: 2.5,
                        }
                    ]
                },
                ]
            }
        ]
    },
    {
        quartile: [
            {
                course: [{
                    name: 'Framework Project 2',
                    cuCode: '',
                    totalWeight: 10,
                    exam: [
                        {
                            name: 'Portfolio	',
                            grade: '',
                            weight: 2.5,
                        },
                        {
                            name: 'Project',
                            grade: '',
                            weight: 2.5,
                        },
                        {
                            name: 'Assessment',
                            grade: '',
                            weight: 2.5,
                        }
                    ]
                }
                ]
            }]
    },
    {
        quartile: [
            {
                course: [{
                    name: 'Portfolio',
                    cuCode: '',
                    exam: [
                        {
                            name: 'Portfolio',
                            grade: '',
                            weight: 12.5,
                        },

                    ]
                }
                ]
            },
            {
                course: [{
                    name: 'Personality 1',
                    cuCode: '',
                    exam: [
                        {
                            name: 'Portfolio',
                            grade: '',
                            weight: 1.25,
                        },

                    ]
                }
                ]
            },
            {
                course: [{
                    name: 'Personality 2',
                    cuCode: '',
                    exam: [
                        {
                            name: 'Portfolio',
                            grade: '',
                            weight: 1.25,
                        },

                    ]
                }
                ]
            }
        ]
    }
]
console.log(schoolYearOne);

let totalEC = 0;
for (i = 0; i < schoolYearOne.length; i++) {
    for (j = 0; i < schoolYearOne.quartaal[i].length; j++) {
        for (k = 0; k < schoolYearOne.quartaal[i].length; k++) {
            totalEC += schoolYearOne.quartaal[i].course[j].ec;
        }
    }
}

function createGradeTable() {
    //table aanmaken
    table = document.createElement("table");
    src = document.getElementById("GradeTable");
    table.classList.add("border");
    src.appendChild(table);
    //tr1 aanmaken
    tr1 = document.createElement("tr");
    tr1.appendChild(table);
    //th1 elementen aanmaken
    th1 = document.createElement("th");
    tr1.appendChild(th1);
    //th2 elementen aanmaken
    th2 = document.createElement("th");
    tr1.appendChild(th2);
    //th3 elementen aanmaken
    th3 = document.createElement("th");
    tr1.appendChild(th3);
    //th4 elementen aanmaken
    th4 = document.createElement("th");
    tr1.appendChild(th4);
    //th5 elementen aanmaken
    th5 = document.createElement("th");
    tr1.appendChild(th5);
    //th6 elementen aanmaken
    th6 = document.createElement("th");
    tr1.appendChild(th6);
    for (i = 0; i < 6; i++) {
        tr2 = document.createElement("tr");
        table.appendChild(tr2);
        //td1 elementen aanmaken
        td1 = document.createElement("th");
        tr2.appendChild(td1);
        //th2 elementen aanmaken
        td2 = document.createElement("th");
        tr2.appendChild(td2);
        //th3 elementen aanmaken
        td3 = document.createElement("th");
        tr2.appendChild(td3);
        //th4 elementen aanmaken
        td4 = document.createElement("th");
        tr2.appendChild(td4);
        //th5 elementen aanmaken
        td5 = document.createElement("th");
        tr2.appendChild(td5);
        //th6 elementen aanmaken
        td6 = document.createElement("th");
        tr2.appendChild(td6);
    }
}
createGradeTable()

