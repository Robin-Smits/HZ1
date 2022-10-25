// Prove that JavaScript is working in your browser. You may delete this.
console.log('JavaScript is working!');

let totalEC = 0;
let myTotalEC = 0;
let myEc = 0
let TotaalEc = 0;
const laadbalkkleur = document.getElementById("laadbalk");
const schoolYearOne = [
    {
        kwartaal: [
            {
                course: [{
                    name: 'Program & carreer orientation',
                    cuCode: 'CU75001V3',
                    exam: [
                        {
                            name: 'PCO Assesment',
                            grade: 7.8,
                            weight: 2.5,
                        }
                    ]
                },
                ]
            },
            {
                course: [{
                    name: 'Computer Science Basics',
                    cuCode: 'CU75002V2',
                    exam: [
                        {
                            name: 'Written exam',
                            grade: 0,
                            weight: 5,
                        }
                    ]
                },
                ]
            },
            {
                course: [{
                    name: 'Programming Basics',
                    cuCode: 'CU75003V1',
                    exam: [
                        {
                            name: 'Case study',
                            grade: 0,
                            weight: 5,
                        }
                    ]
                },
                ]
            }

        ]
    },
    {
        kwartaal: [
            {
                course: [{
                    name: 'Object Orientated Programming',
                    cuCode: 'CU75004V1',
                    totalWeight: 10,
                    exam: [
                        {
                            name: 'Case study',
                            grade: 0,
                            weight: 5,
                        },
                        {
                            name: 'Project',
                            grade: 0,
                            weight: 5,
                        }
                    ]
                },
                ]
            }]
    },
    {
        kwartaal: [
            {
                course: [{
                    name: 'Framework Development 1',
                    cuCode: 'CU7500',
                    exam: [
                        {
                            name: 'Case study',
                            grade: 0,
                            weight: 5,
                        }
                    ]
                },
                ]
            },
            {
                course: [{
                    name: 'Framework Project 1',
                    cuCode: 'CU7500',
                    totalWeight: 10,
                    exam: [
                        {
                            name: 'Project',
                            grade: 0,
                            weight: 2.5,
                        },
                        {
                            name: 'Case study',
                            grade: 0,
                            weight: 2.5,
                        },
                        {
                            name: 'Report',
                            grade: 0,
                            weight: 2.5,
                        }
                    ]
                },
                ]
            }
        ]
    },
    {
        kwartaal: [
            {
                course: [{
                    name: 'Framework Project 2',
                    cuCode: 'CU7500',
                    totalWeight: 10,
                    exam: [
                        {
                            name: 'Portfolio	',
                            grade: 0,
                            weight: 5,
                        },
                        {
                            name: 'Project',
                            grade: 0,
                            weight: 2.5,
                        },
                        {
                            name: 'Assessment',
                            grade: 0,
                            weight: 2.5,
                        }
                    ]
                }
                ]
            }]
    },
    {
        kwartaal: [
            {
                course: [{
                    name: 'Portfolio',
                    cuCode: 'CU7500',
                    exam: [
                        {
                            name: 'Portfolio',
                            grade: 0,
                            weight: 12.5,
                        },

                    ]
                }
                ]
            },
            {
                course: [{
                    name: 'Personality 1',
                    cuCode: 'CU7500',
                    exam: [
                        {
                            name: 'Portfolio',
                            grade: 0,
                            weight: 1.25,
                        },

                    ]
                }
                ]
            },
            {
                course: [{
                    name: 'Personality 2',
                    cuCode: 'CU7500',
                    exam: [
                        {
                            name: 'Portfolio',
                            grade: 0,
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

function makeProgressBarRed() {
    laadbalk = document.getElementById("laadbalk")
    laadbalk.classList.add("laadbalkUnderNBSA");
}
function makeProgressBarYellow() {
    laadbalk = document.getElementById("laadbalk")
    laadbalk.classList.add("laadbalkJustAboveNBSA");
}
function makeProgressBarBlue() {
    laadbalk = document.getElementById("laadbalk")
    laadbalk.classList.add("laadbalkSaveForNBSA");
}

function calculateMyEc(array) {
    for (i = 0; i < schoolYearOne.length; i++) {
        for (j = 0; j < schoolYearOne[i].kwartaal.length; j++) {
            for (k = 0; k < schoolYearOne[i].kwartaal[j].course.length; k++) {
                for (l = 0; l < schoolYearOne[i].kwartaal[j].course[k].exam.length; l++) {
                    totalEC += schoolYearOne[i].kwartaal[j].course[k].exam[l].weight;
                    console.log(`your Course= ${schoolYearOne[i].kwartaal[j].course[k].name}, your name= ${schoolYearOne[i].kwartaal[j].course[k].exam[l].name}& your weight =${schoolYearOne[i].kwartaal[j].course[k].exam[l].weight} & `);
                    if (schoolYearOne[i].kwartaal[j].course[k].exam[l].grade >= 5.5) {
                        myTotalEC += schoolYearOne[i].kwartaal[j].course[k].exam[l].weight;
                    }
                }
            }
        }
    }
    console.log(totalEC);
    console.log(myTotalEC);
    return myTotalEC;
}
myTotalEC = calculateMyEc(schoolYearOne);

function updateProgressBar(array) {
    for (i = 0; i < schoolYearOne.length; i++) {
        for (j = 0; j < schoolYearOne[i].kwartaal.length; j++) {
            for (k = 0; k < schoolYearOne[i].kwartaal[j].course.length; k++) {
                for (l = 0; l < schoolYearOne[i].kwartaal[j].course[k].exam.length; l++) {
                    TotaalEc += schoolYearOne[i].kwartaal[j].course[k].exam[l].weight;
                    if (schoolYearOne[i].kwartaal[j].course[k].exam[l].grade >= 5.5) {
                        myEc += schoolYearOne[i].kwartaal[j].course[k].exam[l].weight;
                    }
                }
            }
        }
        if (myEc == TotaalEc) {
            console.log(`Je hebt kwartaal ${i + 1} 100% voltooid`)
            //set color to green
        }
        myEc = 0;
        TotaalEc = 0;
    }

    myProgress = (myTotalEC / totalEC) * 100;
    if (myProgress >= 90) {
        // set progressbar to myProgress
        makeProgressBarBlue()
    } else if (myProgress < 90 && myProgress >= 75) {
        // set progressbar to myProgress
        makeProgressBarYellow()
    } else {
        // set progressbar to myProgress
        makeProgressBarRed()
    }
}
//updateProgressBar(schoolYearOne);

function makeTable() {
    //table aanmaken
    table = document.createElement("table");
    src = document.getElementById("newTable");
    src.appendChild(table);
    //tr1 aanmaken
    tr1 = document.createElement("tr");
    table.appendChild(table);
    //th1 elementen aanmaken
    th1 = document.createElement("th").innerHTML = 'Blok';
    tr1.appendChild(th1);
    //th2 elementen aanmaken
    th2 = document.createElement("th").innerHTML = 'Cursus';
    tr1.appendChild(th2);
    //th3 elementen aanmaken
    th3 = document.createElement("th").innerHTML = 'EC';
    tr1.appendChild(th3);
    //th4 elementen aanmaken
    th4 = document.createElement("th").innerHTML = 'Toets';
    tr1.appendChild(th4);
    //th5 elementen aanmaken
    th5 = document.createElement("th").innerHTML = 'Cijfer';
    tr1.appendChild(th5);
    //tr2 aanmaken
    tr2 = document.createElement("tr")
    tr2.appendChild(table);
    //th1 elementen aanmaken
    td1 = document.createElement("td").innerHTML = '1';
    td1.rowspan = 3
    tr2.appendChild(td1);
    //th2 elementen aanmaken
    td2 = document.createElement("td").innerHTML = 'Program & carreer orientation';
    tr2.appendChild(td2);
    //th3 elementen aanmaken
    td3 = document.createElement("td").innerHTML = '2,5';
    tr2.appendChild(td3);
    //th4 elementen aanmaken
    td4 = document.createElement("td").innerHTML = 'assessment';
    tr2.appendChild(td4);
    //th5 elementen aanmaken
    td5 = document.createElement("td").innerHTML = '-';
    tr2.appendChild(td5);

    //tr2 aanmaken
    tr3 = document.createElement("tr")
    tr3.appendChild(table);
    //th6 elementen aanmaken
    td6 = document.createElement("td").innerHTML = 'Program & carreer orientation';
    tr3.appendChild(td6);
    //th7 elementen aanmaken
    td7 = document.createElement("td").innerHTML = '2,5';
    tr3.appendChild(td7);
    //th8 elementen aanmaken
    td8 = document.createElement("td").innerHTML = 'assessment';
    tr3.appendChild(td8);
    //th9 elementen aanmaken
    td9 = document.createElement("td").innerHTML = '-';
    tr3.appendChild(td9);
}

makeTable()