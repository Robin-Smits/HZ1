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
          
          if (schoolYearOne[i].kwartaal[j].course[k].exam[l].grade >= 5.5) {
            myTotalEC += schoolYearOne[i].kwartaal[j].course[k].exam[l].weight;
          }
        }
      }
    }
  }
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
  makePeriod('2', 2, 'Object Orientated Programming', 2, 5, 'assessment', 'oopAssessmentGrade', 'oopAssessmentComplete');
  makeSubExam (5, 'Case Study', 'oopCaseStudyGrade', 'oopCaseStudyComplete');
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
/**
 * Creates the button to change the table
 */
function createChangeButton(){
  inputButton = document.createElement('button');
  src = document.getElementById('changeButton');
  inputButton.setAttribute('id','popUpButton');
  inputButton.innerHTML = 'Change grades';
  src.appendChild(inputButton);
}
/**
 * creates the pop up where you can change the table
 */
function createPopUp(){
  popUp = document.createElement('div');
  src = document.getElementById('changeButton');
  popUp.setAttribute('id','openPopUp');
  popUp.classList.add('popUp');
  src.appendChild(popUp);

  popUpDiv = document.createElement('div');
  popUpDiv.classList.add('popUp-inhoud');
  popUpDiv.setAttribute('id','addQuestionsHere');
  popUp.appendChild(popUpDiv);
  popUpSpan = document.createElement('span');
  popUpSpan.innerHTML = '&times;';
  popUpSpan.classList.add('popUp-sluiten');
  popUpDiv.appendChild(popUpSpan);

  popUpP = document.createElement('p');
  popUpP.innerHTML = 'Kies uit welk blok u een cijfer wilt aanpassen';
  popUpDiv.appendChild(popUpP);

  question1Div = document.createElement('div');
  popUpDiv.appendChild(question1Div);

  question1Label = document.createElement('label');
  question1Div.appendChild(question1Label);

  question1Select = document.createElement('select');
  question1Select.name = 'blok';
  question1Select.classList.add('forms');
  question1Select.setAttribute('id', 'blokQuestion');
  question1Div.appendChild(question1Select);

  question1Option1 = document.createElement('option');
  question1Option1.value = 'blok1';
  question1Option1.innerHTML = 'Blok1';
  question1Select.appendChild(question1Option1);

  question1Option2 = document.createElement('option');
  question1Option2.value = 'blok2';
  question1Option2.innerHTML = 'Blok2';
  question1Select.appendChild(question1Option2);

  question1Option3 = document.createElement('option');
  question1Option3.value = 'blok3';
  question1Option3.innerHTML = 'Blok3';
  question1Select.appendChild(question1Option3);

  question1Option4 = document.createElement('option');
  question1Option4.value = 'blok4';
  question1Option4.innerHTML = 'Blok4';
  question1Select.appendChild(question1Option4);

  question1Option5 = document.createElement('option');
  question1Option5.value = 'blokOverig';
  question1Option5.innerHTML = 'Overig';
  question1Select.appendChild(question1Option5);

  verderButton = document.createElement('input');
  verderButton.type = 'button';
  verderButton.addEventListener('click', getNextQuestion);
  verderButton.value = 'verder';
  question1Div.appendChild(verderButton);

};
  
createChangeButton();
createPopUp();

popUpMenu = document.getElementById('openPopUp');
popUpButton = document.getElementById('popUpButton');
popUpMenuContent = document.getElementsByClassName('popUp-sluiten')[0];

popUpButton.onclick = function() {
  popUpMenu.style.display = 'block';
};

popUpMenuContent.onclick = function() {
  popUpMenu.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == popUpMenu) {
    popUpMenu.style.display = 'none';
  }
};
/**
 * functie die de input van de blok question ophaalt
 */
function getNextQuestion(){
  blokQuestion = document.getElementById('blokQuestion');
  blokQuestionOutput = blokQuestion.options[blokQuestion.selectedIndex].text;

  if (blokQuestionOutput == 'Blok1'){
    popUpP = document.createElement('p');
    src = document.getElementById('addQuestionsHere');
    popUpP.innerHTML = 'Kies welk voor welk vak u een cijfer wilt aanpassen';
    src.appendChild(popUpP);
  
    question2Div = document.createElement('div');
    src.appendChild(question2Div);
  
    question2Label = document.createElement('label');
    question2Div.appendChild(question2Label);
  
    question2Select = document.createElement('select');
    question2Select.name = 'blok';
    question2Select.classList.add('forms');
    question2Select.setAttribute('id', 'SubjectQuestion');
    question2Div.appendChild(question2Select);
  
    question2Option1 = document.createElement('option');
    question2Option1.value = 'PCO';
    question2Option1.innerHTML = 'PCO';
    question2Select.appendChild(question2Option1);
  
    question2Option2 = document.createElement('option');
    question2Option2.value = 'CSB';
    question2Option2.innerHTML = 'CSB';
    question2Select.appendChild(question2Option2);
  
    question2Option3 = document.createElement('option');
    question2Option3.value = 'PBA';
    question2Option3.innerHTML = 'PBA';
    question2Select.appendChild(question2Option3);
  
    verderButton = document.createElement('input');
    verderButton.type = 'button';
    verderButton.addEventListener('click', summonInputBar);
    verderButton.value = 'verder';
    question2Div.appendChild(verderButton);
  }else if (blokQuestionOutput == 'Blok2'){
    popUpP = document.createElement('p');
    src = document.getElementById('addQuestionsHere');
    popUpP.innerHTML = 'Kies welk voor welk vak u een cijfer wilt aanpassen';
    src.appendChild(popUpP);
  
    question2Div = document.createElement('div');
    src.appendChild(question2Div);
  
    question2Label = document.createElement('label');
    question2Div.appendChild(question2Label);
  
    question2Select = document.createElement('select');
    question2Select.name = 'blok';
    question2Select.classList.add('forms');
    question2Select.setAttribute('id', 'SubjectQuestion');
    question2Div.appendChild(question2Select);
  
    question2Option1 = document.createElement('option');
    question2Option1.value = 'oopAssesment';
    question2Option1.innerHTML = 'OOP-Assesment';
    question2Select.appendChild(question2Option1);
  
    question2Option2 = document.createElement('option');
    question2Option2.value = 'oopCaseStudy';
    question2Option2.innerHTML = 'OOP-Case-Study';
    question2Select.appendChild(question2Option2);
  
    verderButton = document.createElement('input');
    verderButton.type = 'button';
    verderButton.addEventListener('click', summonInputBar);
    verderButton.value = 'verder';
    question2Div.appendChild(verderButton);
  }else if (blokQuestionOutput == 'Blok3'){
    popUpP = document.createElement('p');
    src = document.getElementById('addQuestionsHere');
    popUpP.innerHTML = 'Kies welk voor welk vak u een cijfer wilt aanpassen';
    src.appendChild(popUpP);
  
    question2Div = document.createElement('div');
    src.appendChild(question2Div);
  
    question2Label = document.createElement('label');
    question2Div.appendChild(question2Label);
  
    question2Select = document.createElement('select');
    question2Select.name = 'blok';
    question2Select.classList.add('forms');
    question2Select.setAttribute('id', 'SubjectQuestion');
    question2Div.appendChild(question2Select);
  
    question2Option1 = document.createElement('option');
    question2Option1.value = 'fd1CaseStudy';
    question2Option1.innerHTML = 'FD1-Case-Study';
    question2Select.appendChild(question2Option1);
  
    question2Option2 = document.createElement('option');
    question2Option2.value = 'fp1Pproject';
    question2Option2.innerHTML = 'FP1-Project';
    question2Select.appendChild(question2Option2);

    question2Option3 = document.createElement('option');
    question2Option3.value = 'fp1CaseStudy';
    question2Option3.innerHTML = 'FP1-Case-Study';
    question2Select.appendChild(question2Option3);

    question2Option1 = document.createElement('option');
    question2Option1.value = 'fp1Assesment';
    question2Option1.innerHTML = 'FP1-Assessment';
    question2Select.appendChild(question2Option1);
  
    verderButton = document.createElement('input');
    verderButton.type = 'button';
    verderButton.addEventListener('click', summonInputBar);
    verderButton.value = 'verder';
    question2Div.appendChild(verderButton);
  }else if (blokQuestionOutput == 'Blok4'){
    popUpP = document.createElement('p');
    src = document.getElementById('addQuestionsHere');
    popUpP.innerHTML = 'Kies welk voor welk vak u een cijfer wilt aanpassen';
    src.appendChild(popUpP);
  
    question2Div = document.createElement('div');
    src.appendChild(question2Div);
  
    question2Label = document.createElement('label');
    question2Div.appendChild(question2Label);
  
    question2Select = document.createElement('select');
    question2Select.name = 'blok';
    question2Select.classList.add('forms');
    question2Select.setAttribute('id', 'SubjectQuestion');
    question2Div.appendChild(question2Select);
  
    question2Option1 = document.createElement('option');
    question2Option1.value = 'fp2Portfolio';
    question2Option1.innerHTML = 'FP2-Portfolio';
    question2Select.appendChild(question2Option1);
  
    question2Option2 = document.createElement('option');
    question2Option2.value = 'fp2Project';
    question2Option2.innerHTML = 'FP2-Project';
    question2Select.appendChild(question2Option2);

    question2Option3 = document.createElement('option');
    question2Option3.value = 'fp2Assessment';
    question2Option3.innerHTML = 'FP2-Assessment';
    question2Select.appendChild(question2Option3);
  
    verderButton = document.createElement('input');
    verderButton.type = 'button';
    verderButton.addEventListener('click', summonInputBar);
    verderButton.value = 'verder';
    question2Div.appendChild(verderButton);
  }else if (blokQuestionOutput == 'Overig'){
    popUpP = document.createElement('p');
    src = document.getElementById('addQuestionsHere');
    popUpP.innerHTML = 'Kies welk voor welk vak u een cijfer wilt aanpassen';
    src.appendChild(popUpP);
  
    question2Div = document.createElement('div');
    src.appendChild(question2Div);
  
    question2Label = document.createElement('label');
    question2Div.appendChild(question2Label);
  
    question2Select = document.createElement('select');
    question2Select.name = 'blok';
    question2Select.classList.add('forms');
    question2Select.setAttribute('id', 'SubjectQuestion');
    question2Div.appendChild(question2Select);
  
    question2Option1 = document.createElement('option');
    question2Option1.value = 'portfolio';
    question2Option1.innerHTML = 'Portfolio';
    question2Select.appendChild(question2Option1);
  
    question2Option2 = document.createElement('option');
    question2Option2.value = 'personality1';
    question2Option2.innerHTML = 'Personality1';
    question2Select.appendChild(question2Option2);

    question2Option3 = document.createElement('option');
    question2Option3.value = 'personality2';
    question2Option3.innerHTML = 'Personality2';
    question2Select.appendChild(question2Option3);
  
    verderButton = document.createElement('input');
    verderButton.type = 'button';
    verderButton.addEventListener('click', summonInputBar);
    verderButton.value = 'verder';
    question2Div.appendChild(verderButton);
  }
}

/**
 * functie die de input van de 2e vraag verwerkt
 */
function summonInputBar(){
  examQuestion = document.getElementById('SubjectQuestion');
  ExamQuestionOutput = examQuestion.options[examQuestion.selectedIndex].text;

  inputBarDiv = document.createElement('div');
  src = document.getElementById('addQuestionsHere');
  inputBarDiv.setAttribute('id','gradeInput');
  src.appendChild(inputBarDiv);

  inputBarP = document.createElement('p');
  inputBarP.innerHTML = 'Enter your Grade here';
  inputBarDiv.appendChild(inputBarP);

  inputBarForm = document.createElement('form');
  inputBarForm.setAttribute('id','userGradeInputForm');
  inputBarDiv.appendChild(inputBarForm);

  inputBarLabel = document.createElement('label');
  inputBarLabel.for = 'Grade';
  inputBarLabel.innerHTML = 'Grade:';
  inputBarForm.appendChild(inputBarLabel);

  inputBarInputElement = document.createElement('input');
  inputBarInputElement.setAttribute('id','UserInputElement');
  inputBarInputElement.name = 'UserInputElement';
  inputBarInputElement.type = 'text';
  inputBarForm.appendChild(inputBarInputElement);
  
  inputBarSubmitElement = document.createElement('input');
  inputBarSubmitElement.value = 'verzenden';
  inputBarSubmitElement.type = 'button';
  inputBarSubmitElement.onclick = returnUserGradeInput;
  inputBarForm.appendChild(inputBarSubmitElement);
  console.log(UserInputElement);
  ;}
/**
 * Inplements users input
 */
function returnUserGradeInput(){
  userGradeInput = 0;
  userGradeInput = document.getElementById('UserInputElement').value;
  console.log(userGradeInput);

  if (ExamQuestionOutput == 'PCO'){
    schoolYearOne[0].kwartaal[0].course[0].exam[0].grade = userGradeInput;
    console.log(schoolYearOne[0].kwartaal[0].course[0].exam[0].grade);
    gradePCO = document.getElementById('pcoGrade');
    gradePCO.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'CSB'){
    schoolYearOne[0].kwartaal[1].course[0].exam[0].grade = userGradeInput;
    console.log(schoolYearOne[0].kwartaal[1].course[0].exam[0].grade);
    gradeCSB = document.getElementById('csbGrade');
    gradeCSB.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'PBA'){
    schoolYearOne[0].kwartaal[2].course[0].exam[0].grade = userGradeInput;
    console.log(schoolYearOne[0].kwartaal[2].course[0].exam[0].grade);
    gradePBA = document.getElementById('pbaGrade');
    gradePBA.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'OOP-Assesment'){
    schoolYearOne[1].kwartaal[0].course[0].exam[0].grade = userGradeInput;
    console.log(schoolYearOne[1].kwartaal[0].course[0].exam[0].grade);
    gradeOopAssessment = document.getElementById('oopAssessmentGrade');
    gradeOopAssessment.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'OOP-Case-Study'){
    schoolYearOne[1].kwartaal[0].course[0].exam[1].grade = userGradeInput;
    console.log(schoolYearOne[1].kwartaal[0].course[0].exam[1].grade);
    gradeOopCaseStudy = document.getElementById('oopCaseStudyGrade');
    gradeOopCaseStudy.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'FD1-Case-Study'){
    schoolYearOne[2].kwartaal[0].course[0].exam[0].grade = userGradeInput;
    console.log(schoolYearOne[2].kwartaal[0].course[0].exam[0].grade);
    gradefd1 = document.getElementById('fd1Grade');
    gradefd1.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'FP1-Project'){
    schoolYearOne[2].kwartaal[1].course[0].exam[0].grade = userGradeInput;
    console.log(schoolYearOne[2].kwartaal[1].course[0].exam[0].grade);
    gradeFp1Project = document.getElementById('fp1ProjectGrade');
    gradeFd1Project.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'FP1-Case-Study'){
    schoolYearOne[2].kwartaal[1].course[0].exam[1].grade = userGradeInput;
    console.log(schoolYearOne[2].kwartaal[1].course[0].exam[1].grade);
    gradeFp1CaseStudy = document.getElementById('fp1CaseStudyGrade');
    gradeFp1CaseStudy.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'FP1-Assessment'){
    schoolYearOne[2].kwartaal[1].course[0].exam[2].grade = userGradeInput;
    console.log(schoolYearOne[2].kwartaal[1].course[0].exam[2].grade);
    gradeFp1Report = document.getElementById('fp1ReportGrade');
    gradeFp1Report.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'FP2-Portfolio'){
    schoolYearOne[3].kwartaal[0].course[0].exam[0].grade = userGradeInput;
    console.log(schoolYearOne[3].kwartaal[0].course[0].exam[0].grade);
    gradeFp2Portfolio = document.getElementById('fp2PortfolioGrade');
    gradeFp2Portfolio.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'FP2-Project'){
    schoolYearOne[3].kwartaal[0].course[0].exam[1].grade = userGradeInput;
    console.log(schoolYearOne[3].kwartaal[0].course[0].exam[1].grade);
    gradeFp2Project = document.getElementById('fp2ProjectGrade');
    gradeFp2Project.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'FP2-Assessment'){
    schoolYearOne[3].kwartaal[0].course[0].exam[2].grade = userGradeInput;
    console.log(schoolYearOne[3].kwartaal[0].course[0].exam[2].grade);
    gradeFp2Assessment = document.getElementById('fp2AssessmentGrade');
    gradeFp2Assessment.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'Portfolio'){
    schoolYearOne[4].kwartaal[0].course[0].exam[0].grade = userGradeInput;
    console.log(schoolYearOne[4].kwartaal[0].course[0].exam[0].grade);
    gradePortfolio = document.getElementById('portfolioGrade');
    gradePortfolio.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'Personality1'){
    schoolYearOne[4].kwartaal[1].course[0].exam[0].grade = userGradeInput;
    console.log(schoolYearOne[4].kwartaal[1].course[0].exam[0].grade);
    gradePersonality1 = document.getElementById('ITP1Grade');
    gradePersonality1.innerHTML = userGradeInput;
  }else if (ExamQuestionOutput == 'Personality2'){
    schoolYearOne[4].kwartaal[2].course[0].exam[0].grade = userGradeInput;
    console.log(schoolYearOne[4].kwartaal[2].course[0].exam[0].grade);
    gradePersonality2 = document.getElementById('ITP2Grade');
    gradePersonality2.innerHTML = userGradeInput;
  }
};
