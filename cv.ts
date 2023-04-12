// Curriculum vitae

import { Company, School } from types.ts

const candidate = {
    firstName: "Wojciech",
    lastName: "Jaros",
    expertise: "Test Automation Engineer",
    address = {
        country: "Poland",
        city: "Warsaw",
        email: "w.jaros@homtmail.com",
        mobile: "+48 889497238"
    }
};

function experience() {
    const Aleno_me: Company = {
        timeline: "01.05.2022 - present",
        role: "Test Automation Engineer",
        responsibilities: [
            "creating and maintenance of automated E2E tests",
            "updating and improving existing E2E tests",
            "verification of automated tests reports",
            "buiilding infrastructure for E2E tests",
            "API testing",
        ]
    };
    const AdrendCode: Company = {
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
            "game design",
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
    "Docker",
    "node.js",
    "React",
    "Python",
    "Postman",
    "GraphQL",
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

//I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).
