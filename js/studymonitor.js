// Prove that JavaScript is working in your browser. You may delete this.
console.log('JavaScript is working!');

let totalEC = 0;
let myTotalEC = 0;
let myEc = 0
let TotaalEc = 0;
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
                            grade: 9,
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
                            grade: 8,
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

function calculateMyEc (array){
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
myTotalEC = calculateMyEc (schoolYearOne);

function updateProgressBar(array){
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
    if (myEc == TotaalEc){
    console.log(`Je hebt kwartaal ${i + 1} 100% voltooid`)
    //set color to green
    }
    myEc = 0;
    TotaalEc = 0;
}
whatsMyProgress = calculateMyEc (schoolYearOne);
myProgress = (whatsMyProgress / totalEC)*100;
if (myProgress >= 90){
// set progressbar to myProgress
laadbalkkleur = document.getElementById("laadbalk")
laadbalkkleur.classList.add("laadbalkSaveForNBSA");
}else if (myProgress < 90 && myProgress >= 75){
    // set progressbar to myProgress
laadbalkkleur = document.getElementById("laadbalk")
laadbalkkleur.classList.add("laadbalkJustAboveNBSA");
}else {
    // set progressbar to myProgress
laadbalkkleur = document.getElementById("laadbalk")
laadbalkkleur.classList.add("laadbalkUnderNBSA");
}
}
updateProgressBar(schoolYearOne);

