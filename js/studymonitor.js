// Prove that JavaScript is working in your browser. You may delete this.
console.log('JavaScript is working!');

const schoolYearOne = [];
const quartileOne = {};
const quartileTwo = {};
const quartileThree = {};
const quartileFour = {};
const Year1 = {};
const WanneerDanOok = {};

const pcoAssesment = {
    name:'PCO Assesment',
    grade:'',
};
const csbWrittenExam = {
    name:'CSB Written Exam',
    grade:'',
};
const pbaCaseStudy = {
    name:'PBA Case Study',
    grade:'',
};
const obpCaseStudy = {
    name:'OBP Case Study',
    grade:'',
};
const obpProject = {
    name:'OBP Project',
    grade:'',
};
const fd1CaseStudy = {
    name:'FD1 Case Study',
    grade:'',
};
const fp1Project = {
    name:'FP1 Project',
    grade:'',
};
const fp1CaseStudy = {
    name:'FP1 Case Study',
    grade:'',
};
const fp1Report = {
    name:'FP1 Report',
    grade:'',
};
const fp2Portfolio = {
    name:'FP2 Portfolio',
    grade:'',
};
const fp2Project = {
    name:'FP2 Project',
    grade:'',
};
const fp2Assessment = {
    name:'FP2 Assessment',
    grade:'',
};
const PortfolioPortfolio = {
    name:'Portfolio',
    grade:'',
};
const Personality1Portfolio = {
    name:'Personality 1 Portfolio',
    grade:'',
};
const Personality2Portfolio = {
    name:'Personality 2 Portfolio',
    grade:'',
};

const Q1PCO = {
    name:'',
    pcoAssesment,
    CUCode:''};
const Q1CSB = {
    name:'',
    csbWrittenExam,
    CUCode:''};
const Q1PBA = {
    name:'',
    pbaCaseStudy,
    CUCode:''
};
const Q2OBP = {
    name:'',
    obpCaseStudy,
    obpProject,
    CUCode:''
};
const Q3FD1 = {
    name:'',
    fd1CaseStudy,
    CUCode:''
};
const Q3FP1 = {
    name:'',
    fp1Project,
    fp1CaseStudy,
    fp1Report,
    CUCode:''
};
const Q4FP2 = {
    name:'',
    fp2Portfolio,
    fp2Project,
    fp2Assessment,
    CUCode:''
};
const portfolio = {
    name:'',
    PortfolioPortfolio,
    CUCode:''
}
const personality1 = {
    name:'',
    Personality1Portfolio,
    CUCode:''
}
const personality2 = {
    name:'',
    Personality2Portfolio,
    CUCode:''
}

//let totalEC = 0;
//for (i = 0; i < schoolYearOne.length; i++){
//    for (j = 0; i < schoolYearOne.quartaal[i].length; i++){
        totalEC += schoolYearOne.quartaal[i].course[j].ec;
//    }
//}

function createGradeTable (){
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
    for (i = 0; i < 6; i++){
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
createGradeTable ()

