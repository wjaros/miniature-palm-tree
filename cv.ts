const candidate = {
    firstName: 'Wojciech',
    lastName: 'Jaros',
    role: 'Test Automation Engineer',
    address = {
        country: 'Poland',
        city: 'Warsaw',
        email: 'w.jaros@homtmail.com',
        mobile: '+48 889497238'
    }
}

type Company = {
    timeline: string,
    role: string,
    responsibilities: string[]
};

type School = {
    timeline: string,
    degree: string,
    major: string
    notes?: string
}

function experience() {
    const aleno_me: Company = {
        timeline: '01.05.2022 - present',
        role: 'Test Automation Engineer',
        responsibilities: ' Creating '
    },
    const adrendCode: Company = {
        timeline: ' 01.01.2020 - 30.04.2022',
        role: 'Test Automation Engineer',
        responsibilities: []
    },
    const CH_Robinson: Company = {
        timeline: '01.06.2019',
        role: 'Service Desk Analyst',
        responsibilities: []
    },
    const BibbyFinancialServices: Company = {
        timeline: '',
        role: '',
        responsibilities: []
    }
};

function education() {
    const JagiellonianUniversityOfCracow: School = {
        timeline: '',
        degree: 'Masters of Art',
        major: 'Film and New Media Studies'
    },
    const PedagogicalUniversityOfCracow: School = {
        timeline: '',
        degree: 'Bachelor',
        major: ' Political Science'
    },
    const UniversityOfDalarna: School = {
        timeline: '01.01.2012 - 30.06.2012',
        degree: 'Bachelor',
        major: 'Democract and Human Rights',
        notes: 'One semester as participant of the Erasmus Students Exchange program'
    }
},

const technnologies = [
    'JavaScript',
    'TypeScript',
    'node.js',
    'React',
    'python',
    'Postman',
    'CodeceptJS',
    'Playwright',
    'Protractor',
    'Cypress',
    'WebDriver',
    'GitHub',
    'Jira',
    'VSCode',
    'macOS',
    'Linux',
    'Windows',
]




