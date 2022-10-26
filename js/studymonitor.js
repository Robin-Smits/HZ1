// Prove that JavaScript is working in your browser. You may delete this.
console.log('JavaScript is working!');

let totalEC = 0;
let myTotalEC = 0;
let myEc = 0;
let TotaalEc = 0;
const laadbalkkleur = document.getElementById('laadbalk');
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
          uCode: 'CU75002V2',
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
      }
    ]
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
      }
    ]
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
];
console.log(schoolYearOne);

/**
 * functie die je cijfers en ec verzamelt
 * @param {array} array de array die gecontrolleerd moet worden voor de cijfers en ec punten
 * @returns 
 */
function calculateMyEc(array) {
  for (i = 0; i < schoolYearOne.length; i++) {
    for (j = 0; j < schoolYearOne[i].kwartaal.length; j++) {
      for (k = 0; k < schoolYearOne[i].kwartaal[j].course.length; k++) {
        for (l = 0; l < schoolYearOne[i].kwartaal[j].course[k].exam.length; l++) {
          totalEC += schoolYearOne[i].kwartaal[j].course[k].exam[l].weight;
          //console.log(`your Course= ${schoolYearOne[i].kwartaal[j].course[k].name}, your name= ${schoolYearOne[i].kwartaal[j].course[k].exam[l].name}& your weight =${schoolYearOne[i].kwartaal[j].course[k].exam[l].weight} & `);
          if (schoolYearOne[i].kwartaal[j].course[k].exam[l].grade >= 5.5) {
            myTotalEC += schoolYearOne[i].kwartaal[j].course[k].exam[l].weight;
          }
        }
      }
    }
  }
  //console.log(totalEC);
  //console.log(myTotalEC);
  return myTotalEC;
}
myTotalEC = calculateMyEc(schoolYearOne);
/**
 * Functie die de progressbar bijwerkt
 * @param {*} array array die waaruit je ec en cijfers gecontroleert worden
 */
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
      console.log(`Je hebt kwartaal ${i + 1} 100% voltooid`);
      // set color to green
    }
    
  }
  myProgress = (myEc / TotaalEc) * 100;
  if (myProgress >= 90) {
    // set progressbar to myProgress
    laadbalk = document.getElementById('laadbalk');
    laadbalk.value = myProgress;
    laadbalk.className = 'laadbalkSaveForNBSA';
  }else if (myProgress < 90 && myProgress >= 75) {
    // set progressbar to myProgress
    laadbalk = document.getElementById('laadbalk');
    laadbalk.value = myProgress;
    laadbalk.className = 'laadbalkJustAboveNBSA';
  }else if (myProgress < 75) {
    // set progressbar to myProgress
    laadbalk = document.getElementById('laadbalk');
    laadbalk.value = myProgress;
    laadbalk.className = 'laadbalkUnderNBSA';
    console.log(myProgress);
  }
  myEc = 0;
  TotaalEc = 0;
  myProgress = 0;
}
updateProgressBar(schoolYearOne);

/**
 * functie die tabel maakt
 */
function makeTableWithFunctions (){
  // table aanmaken
  table = document.createElement('table');
  src = document.getElementById('newTable');
  src.appendChild(table);
  // table body aanmaken
  tableBody = document.createElement('tbody');
  table.appendChild(tableBody);

  // kollomen aanmaken
  tr1 = document.createElement('tr');
  tableBody.appendChild(tr1);
  // th1 elementen aanmaken
  th1 = document.createElement('th');
  th1.innerHTML = 'Blok';
  tr1.appendChild(th1);
  // th2 elementen aanmaken
  th2 = document.createElement('th');
  th2.innerHTML = 'Cursus';
  tr1.appendChild(th2);
  // th3 elementen aanmaken
  th3 = document.createElement('th');
  th3.innerHTML = 'EC';
  tr1.appendChild(th3);
  // th4 elementen aanmaken
  th4 = document.createElement('th');
  th4.innerHTML = 'Toets';
  tr1.appendChild(th4);
  // th5 elementen aanmaken
  th5 = document.createElement('th');
  th5.innerHTML = 'Cijfer';
  tr1.appendChild(th5);
  // th6 elementen aanmaken
  th6 = document.createElement('th');
  th6.innerHTML = 'Voltooid';
  tr1.appendChild(th6);

  // blok 1
  makePeriod('1', 3, 'Program & carreer orientation', 1, 5, 'assessment', 'pcoGrade', 'pcoComplete');
  makeSubCourse ('Computer Science Basics', 1, 5, 'Written exam', 'csbGrade', 'csbComplete');
  makeSubCourse ('Programming Basics	', 1, 5, 'Case study', 'pbaGrade', 'pbaComplete');

  // blok 2
  makePeriod('2', 2, 'Object Orientated Programming', 2, 5, 'assessment', 'pcoGrade', 'pcoComplete');
  makeSubExam (5, 'Case Study', 'oopGrade', 'oopComplete');
  // blok 3
  makePeriod('3', 4, 'Framework Development 1', 1, 5, 'Case study', 'fd1Grade', 'fd1Complete');
  makeSubCourse ('Framework Project 1', 3, 2.5, 'Project', 'fp1ProjectGrade', 'fp1ProjectComplete');
  makeSubExam (2.5, 'Case study', 'fp1CaseStudyGrade', 'fp1CaseStudyComplete');
  makeSubExam (2.5, 'Report', 'fp1ReportGrade', 'fp1ReportComplete');
  // blok 4
  makePeriod('4', 3, 'Framework Project 2', 3, 5, 'Portfolio', 'fd2PortfolioGrade', 'fd2PortfolioComplete');
  makeSubExam (2.5, 'Project', 'fp2ProjectGrade', 'fp2ProjectComplete');
  makeSubExam (2.5, 'Assesment', 'fp2AssesmentGrade', 'fp2AssesmentComplete');
  // overig
  makePeriod('Overig', 3, 'Portfolio', 1, 5, 'Portfolio', 'portfolioGrade', 'portfolioComplete');
  makeSubCourse ('Personality 1', 1, 5, 'Portfolio', 'ITP1Grade', 'ITP1Complete');
  makeSubCourse ('Personality 2', 1, 5, 'Portfolio', 'ITP2Grade', 'ITP2Complete');
}
makeTableWithFunctions ();
/**
 * functie die een blok aanmaakt
 * @param {string} blokNummer nummer van het blok
 * @param {number} rowSpan lengte van de rij
 * @param {string} courseID id for course
 * @param {string} courseName naam van de course
 * @param {number} courseNameRowSpan rowspan van de course naam
 * @param {number} courseEC hoeveel ec de course waard is
 * @param {string} CourseTest toetsvorm van de test
 * @param {string} CourseGradeID id van het cijfer voor de course
 * @param {string} voltooidToetsID geeft id aan element om te kunnen markeren als voltooid
 */
function makePeriod(blokNummer, rowSpan, courseName, courseNameRowSpan, courseEC, CourseTest, CourseGradeID, voltooidToetsID){
  // tr aanmaken
  tr = document.createElement('tr');
  tableBody.appendChild(tr);
  // th1 elementen aanmaken
  td1 = document.createElement('td');
  td1.innerHTML = blokNummer; // blokNummer variable
  td1.rowSpan = rowSpan; // rowSpan variable
  tr.appendChild(td1);
  // th2 elementen aanmaken
  td2 = document.createElement('td');
  td2.rowSpan = courseNameRowSpan;
  td2.innerHTML = courseName; // courseName variable
  tr.appendChild(td2);
  // th3 elementen aanmaken
  td3 = document.createElement('td');
  td3.innerHTML = courseEC; // courseEC variable
  tr.appendChild(td3);
  // th4 elementen aanmaken
  td4 = document.createElement('td');
  td4.innerHTML = CourseTest; // courseTest variable
  tr.appendChild(td4);
  // th5 elementen aanmaken
  td5 = document.createElement('td');
  td5.setAttribute('id',CourseGradeID);
  td5.innerHTML = '-';
  tr.appendChild(td5);
  // th6 elementen aanmaken
  td6 = document.createElement('td');
  td6.setAttribute('id',voltooidToetsID); // ID: voltooidToetsID
  tr.appendChild(td6);
}
/**
 * functie die een subvak aanmaakt voor een blok
 * @param {string} courseName naam van de course
 * @param {number} courseNameRowSpan rowspan van de course naam
 * @param {number} courseEC hoeveel ec de course waard is
 * @param {string} CourseTest toetsvorm van de test
 * @param {string} CourseGradeID id van het cijfer voor de course
 * @param {string} voltooidToetsID geeft id aan element om te kunnen markeren als voltooid
 */
function makeSubCourse (courseName, courseNameRowSpan, courseEC, CourseTest, CourseGradeID, voltooidToetsID){
  // tr aanmaken
  tr = document.createElement('tr');
  tableBody.appendChild(tr);
  // th6 elementen aanmaken
  td1 = document.createElement('td');
  td1.innerHTML = courseName; // courseName variable
  td1.rowSpan = courseNameRowSpan;
  tr.appendChild(td1);
  // th7 elementen aanmaken
  td2 = document.createElement('td');
  td2.innerHTML = courseEC; // courseEC variable
  tr.appendChild(td2);
  // th8 elementen aanmaken
  td3 = document.createElement('td');
  td3.innerHTML = CourseTest; // courseTest variable
  tr.appendChild(td3);
  // th9 elementen aanmaken
  td4 = document.createElement('td');
  td4.setAttribute('id',CourseGradeID);
  td4.innerHTML = '-';
  tr.appendChild(td4);
  // td11 element aanmaken
  td5 = document.createElement('td');
  td5.innerHTML = '';
  td5.setAttribute('id',voltooidToetsID); // ID: voltooidToetsID
  tr.appendChild(td5);
}
/**
 * functie die een extra exam aan een course toevoegd
 * @param {number} examEC ec die de exam waard is
 * @param {string} examTest manier van toetsen exam
 * @param {string} CourseGradeID id van het cijfer 
 * @param {string} voltooidToetsID id van de toets voor markering voltooid
 */
function makeSubExam (examEC, examTest, CourseGradeID, voltooidToetsID){
  // tr aanmaken
  tr = document.createElement('tr');
  tableBody.appendChild(tr);
  // th3 elementen aanmaken
  td3 = document.createElement('td');
  td3.innerHTML = examEC; // courseEC variable
  tr.appendChild(td3);
  // th4 elementen aanmaken
  td4 = document.createElement('td');
  td4.innerHTML = examTest; // courseTest variable
  tr.appendChild(td4);
  // th5 elementen aanmaken
  td5 = document.createElement('td');
  td5.setAttribute('id',CourseGradeID); // ID: CourseGradeID
  td5.innerHTML = '-';
  tr.appendChild(td5);
  // th6 elementen aanmaken
  td6 = document.createElement('td');
  td6.setAttribute('id',voltooidToetsID); // ID: voltooidToetsID
  tr.appendChild(td6);
}

