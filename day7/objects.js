// object traversal using all for loops
let resume = {
    "name": "Sathish Gnanaprakasam",
    "contact": {
        "location": "Coimbatore",
        "email": "sathish.datascientist@gmail.com"
    },
    "summary": "Software Developer with extensive experience in ...",
    "workExperience": ["Developer @ Toptal", "Engineer @ Turing", "Associate @ Erulearning", "Mentor @ Guvi"],
    "education": ["PGDMLAI", "M.E.,CSE", "B.Tech.,IT"],
    "skills": ["C", "C++", "Java", "Python", "JS", "MERN", "FastAPI", "Android", "Git&GitHub"],
    "certifications": ["CCDSAP", "PYDS @ Emeritus"],
    "honors": ["Github Constellation India 2022", "DBS Hack2Hire"]
}

// use different for loops to iterate the above json object
// for...in loop
// for (let key in resume) {
//     console.log(key, ':', resume[key]);
// }

// for loop
// console.log(Object.entries(resume));

// let resumeEntries = Object.entries(resume);
// for (let index = 0; index < resumeEntries.length; index++){
//     console.log(resumeEntries[index][0], ':', resumeEntries[index][1]);
// }

// for...of loop
// let resumeEntries = Object.entries(resume);
// for (let entry of resumeEntries){
//     console.log(entry[0], ':', entry[1]);
// }

// for each loop
let resumeEntries = Object.entries(resume);
resumeEntries.forEach(entry => {
    console.log(entry[0], ':', entry[1]);
});