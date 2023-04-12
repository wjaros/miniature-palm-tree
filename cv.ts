import { Company, School } from types.ts

const candidate = {
    firstName: "Wojciech",
    lastName: "Jaros",
    role: "Test Automation Engineer",
    address = {
        country: "Poland",
        city: "Warsaw",
        email: "w.jaros@homtmail.com",
        mobile: "+48 889497238"
    }
};

function experience() {
    const aleno_me: Company = {
        timeline: "01.05.2022 - present",
        role: "Test Automation Engineer",
        responsibilities: [
            "creating and maintenance of automated E2E tests",
            "verification of automated tests reports",
            "buiilding infrastructure for E2E tests"
        ]
    };
    const adrendCode: Company = {
        timeline: " 01.01.2020 - 30.04.2022",
        role: "Test Automation Engineer",
        responsibilities: [
            "manual testing",
            "creating scenarios for manual testing",
            "creating and maintenance of automated E2E tests",
            "verification of automated tests reports"
        ]
    };
    const CH_Robinson: Company = {
        timeline: "2019 - 2020",
        role: "Service Desk Analyst",
        responsibilities: [
            "MS Exchange administration",
            "user support",
            "management of tickets",
            "network management"
        ]
    };
    const BibbyFinancialServices: Company = {
        timeline: "2018-2019",
        role: "IT Analyst",
        responsibilities: [
            "MS Exchange administration",
            "user support",
            "management of tickets",
            "network management"
        ]
    };
    const CI_Games_SA: Company = {
        timeline: "2016-2018",
        role: " Junior Level Designer",
        responsibilities: [
            "level degign",
            "game desgign",
            "video editing",
            "UI animation",
            "UI design",
            "QA",
            "bug fixing",
            "visual scripting",
            "version control"
        ]
    };
}
function education() {
    const JagiellonianUniversityOfCracow: School = {
        timeline: "2013-2016",
        degree: "Masters of Art",
        major: "Film and New Media Studies"
    };
    const PedagogicalUniversityOfCracow: School = {
        timeline: "2008-2012",
        degree: "Bachelor",
        major: " Political Science"
    };
    const UniversityOfDalarna: School = {
        timeline: "01.01.2012 - 30.06.2012",
        degree: "Bachelor",
        major: "Democract and Human Rights",
        notes:
            "One semester as participant of the Erasmus Students Exchange program"
    };
    const certicates: ['ISTQB Foundation Level', 'ISTQB Test Automation Engineer']
}
const technnologies = [
    "TDD",
    "Continuous testing",
    "Scrum",
    "Agile",
    "JavaScript",
    "TypeScript",
    "node.js",
    "React",
    "python",
    "Postman",
    "CodeceptJS",
    "Playwright",
    "Protractor",
    "Cypress",
    "WebDriver",
    "GitHub",
    "Jira",
    "VSCode",
    "macOS",
    "Linux",
    "Windows"
];

//I AGREE TO THE PROCESSING OF PERSONAL DATA PROVIDED IN THIS DOCUMENT FOR REALISING THE
// RECRUITMENT PROCESS PURSUANT TO THE PERSONAL DATA PROTECTION ACT OF 10 MAY 2018 (JOURNAL OF LAWS 2018, ITEM 1000)
// AND IN AGREEMENT WITH REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL OF 27 APRIL 2016
// ON THE PROTECTION OF NATURAL PERSONS WITH REGARD TO THE PROCESSING OF PERSONAL DATA AND ON THE FREE MOVEMENT OF SUCH DATA,
// AND REPEALING DIRECTIVE 95/46/EC (GENERAL DATA PROTECTION REGULATION).
