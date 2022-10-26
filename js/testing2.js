makeTable();

/**
 * functie die een blok aanmaakt
 * @param {string} idForSubBlok id voor subBlokken
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
function makePeriod(idForSubBlok, blokNummer, rowSpan, courseID, courseName, courseNameRowSpan, courseEC, CourseTest, CourseGradeID, voltooidToetsID){
  // tr aanmaken
  idForSubBlok = document.createElement('tr');
  tableBody.appendChild(idForSubBlok);
  // th1 elementen aanmaken
  td1 = document.createElement('td');
  td1.innerHTML = blokNummer; // blokNummer variable
  td1.rowSpan = rowSpan; // rowSpan variable
  idForSubBlok.appendChild(td1);
  // th2 elementen aanmaken
  td2 = document.createElement('td');
  td2.setAttribute('id',courseID);
  td2.rowSpan = courseNameRowSpan;
  td2.innerHTML = courseName; // courseName variable
  idForSubBlok.appendChild(td2);
  // th3 elementen aanmaken
  td3 = document.createElement('td');
  td3.innerHTML = courseEC; // courseEC variable
  idForSubBlok.appendChild(td3);
  // th4 elementen aanmaken
  td4 = document.createElement('td');
  td4.innerHTML = CourseTest; // courseTest variable
  idForSubBlok.appendChild(td4);
  // th5 elementen aanmaken
  td5 = document.createElement('td');
  td5.setAttribute('id',CourseGradeID);
  td5.innerHTML = '-';
  idForSubBlok.appendChild(td5);
  // th6 elementen aanmaken
  td6 = document.createElement('td');
  td6.setAttribute('id',voltooidToetsID); // ID: voltooidToetsID
  idForSubBlok.appendChild(td6);
}
/**
 * functie die een subvak aanmaakt voor een blok
 * @param {*} idOfBlockAbove id for which it needs to appendchild to
 * @param {*} idForSubBlok id for if you want to add a sub block
 * @param {*} courseName 
 * @param {*} courseEC 
 * @param {*} CourseTest 
 * @param {*} CourseGradeID 
 * @param {*} voltooidToetsID 
 */
function makeSubCourse (idOfBlockAbove, idForSubBlok, idForSUbExam, courseName, courseEC, CourseTest, CourseGradeID, voltooidToetsID){
  // tr aanmaken
  idForSubBlok = document.createElement('tr');
  idOfBlockAbove.appendChild(idForSubBlok);
  // th6 elementen aanmaken
  td1 = document.createElement('td');
  td1.innerHTML = courseName; // courseName variable
  idForSubBlok.appendChild(td1);
  // th7 elementen aanmaken
  td2 = document.createElement('td');
  td2.innerHTML = courseEC; // courseEC variable
  idForSubBlok.appendChild(td2);
  // th8 elementen aanmaken
  td3 = document.createElement('td');
  td3.innerHTML = CourseTest; // courseTest variable
  idForSubBlok.appendChild(td3);
  // th9 elementen aanmaken
  idForSUbExam = document.createElement('td');
  idForSUbExam.setAttribute('id',CourseGradeID);
  idForSUbExam.innerHTML = '-';
  idForSubBlok.appendChild(idForSUbExam); // id sub exam
  // td11 element aanmaken
  td5 = document.createElement('td');
  td5.innerHTML = '';
  td5.setAttribute('id',voltooidToetsID); // ID: voltooidToetsID
  idForSubBlok.appendChild(td5);
}
/**
 * functie die een extra exam aan een course toevoegd
 * @param {*} courseID id van course die je eerder hebt assigd
 * @param {*} examEC ec die de exam waard is
 * @param {*} examTest manier van toetsen exam
 * @param {*} CourseGradeID id van het cijfer 
 * @param {*} voltooidToetsID id van de toets voor markering voltooid
 */
function makeSubExam (courseID, examEC, examTest, CourseGradeID, voltooidToetsID){
  // th3 elementen aanmaken
  td3 = document.createElement('td');
  src = document.getElementById(`${courseID}`);
  td3.innerHTML = examEC; // courseEC variable
  src.appendChild(td3);
  // th4 elementen aanmaken
  td4 = document.createElement('td');
  td4.innerHTML = examTest; // courseTest variable
  idForSubBlok.appendChild(td4);
  // th5 elementen aanmaken
  td5 = document.createElement('td');
  td5.setAttribute('id',CourseGradeID);
  td5.innerHTML = '-';
  idForSubBlok.appendChild(td5);
  // th6 elementen aanmaken
  td6 = document.createElement('td');
  td6.setAttribute('id',voltooidToetsID); // ID: voltooidToetsID
  idForSubBlok.appendChild(td6);
}