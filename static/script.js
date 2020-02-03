const COMPANIES = {
    "reddit": {
        "size": "med",
        "industry": "tech",
        "fetched": false
    },
    "gitlab": {
        "size": "lg",
        "industry": "tech",
        "fetched": false
    },
    "betterment": {
        "size": "sm",
        "industry": "fin",
        "fetched": false
    },
    "birchbox": {
        "size": "med",
        "industry": "bty",
        "fetched": false
    },
    "thrillist": {
        "size": "med",
        "industry": "mda",
        "fetched": false
    }
};

var JOBS = [{
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Affiliate Marketing Manager ",
    "location": "New York, New York",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/1985674?gh_jid=1985674"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Broker/Dealer Operations Associate ",
    "location": "New York, New York",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2033122?gh_jid=2033122"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Compliance Associate ",
    "location": "Betterment HQ - New York City",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2015120?gh_jid=2015120"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Customer Experience Associate (Denver)",
    "location": "Betterment - Denver",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2006926?gh_jid=2006926"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Don’t see your dream job? Apply here to join our talent community!",
    "location": "Betterment HQ - NYC",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/1741642?gh_jid=1741642"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Engineering Manager - Backend",
    "location": "New York City",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/1725485?gh_jid=1725485"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Freelance Creative Project Coordinator ",
    "location": "New York, New York",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2035407?gh_jid=2035407"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Head of Sales",
    "location": "Betterment HQ - New York City",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2004366?gh_jid=2004366"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Lead Security Engineer",
    "location": "Betterment HQ - New York City",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2055995?gh_jid=2055995"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Legal Counsel",
    "location": "Betterment HQ - New York City",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2065087?gh_jid=2065087"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Mobile Engineer - Android ",
    "location": "Betterment HQ - New York City",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2061693?gh_jid=2061693"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Mobile Engineering Manager",
    "location": "New York, NY",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/1821512?gh_jid=1821512"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Retail Analytics Leader",
    "location": "Betterment HQ - New York City",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2014451?gh_jid=2014451"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Senior Product Designer",
    "location": "Betterment HQ - New York City",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2003772?gh_jid=2003772"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Senior Product Marketing Associate",
    "location": "Betterment HQ - New York City",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2036554?gh_jid=2036554"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Site Reliability Engineer",
    "location": "Betterment HQ - New York City",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2035452?gh_jid=2035452"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Social Media Designer ",
    "location": "New York, New York",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2031868?gh_jid=2031868"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Sr. Compliance Associate (Broker-Dealer)",
    "location": "New York, New York",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/1933710?gh_jid=1933710"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Strategic Operations Manager ",
    "location": "Betterment HQ - New York City",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2055916?gh_jid=2055916"
}, {
    "company": "betterment",
    "size": "sm",
    "industry": "fin",
    "title": "Talent & Development Program Intern - Spring 2020",
    "location": "Betterment HQ - New York City",
    "absolute_url": "https://boards.greenhouse.io/betterment/jobs/2001096?gh_jid=2001096"
}, {
    "company": "thrillist",
    "size": "med",
    "industry": "media",
    "title": "Commerce Editor",
    "location": "New York, NY",
    "absolute_url": "https://boards.greenhouse.io/thrillist/jobs/2061792"
}, {
    "company": "thrillist",
    "size": "med",
    "industry": "media",
    "title": "Director of Audience Development, Thrillist ",
    "location": "New York, NY",
    "absolute_url": "https://boards.greenhouse.io/thrillist/jobs/2006232"
}, {
    "company": "thrillist",
    "size": "med",
    "industry": "media",
    "title": "Office Production Assistant ",
    "location": "New York, NY",
    "absolute_url": "https://boards.greenhouse.io/thrillist/jobs/2002379"
}, {
    "company": "thrillist",
    "size": "med",
    "industry": "media",
    "title": "Senior Designer, Thrillist ",
    "location": "New York, NY",
    "absolute_url": "https://boards.greenhouse.io/thrillist/jobs/2006035"
}, {
    "company": "thrillist",
    "size": "med",
    "industry": "media",
    "title": "Staff Editor, Food & Travel",
    "location": "Los Angeles, CA",
    "absolute_url": "https://boards.greenhouse.io/thrillist/jobs/1273769"
}, {
    "company": "reddit",
    "size": "med",
    "industry": "tech",
    "title": "Ad Ops Specialist",
    "location": "New York",
    "absolute_url": "https://boards.greenhouse.io/reddit/jobs/2036084"
}, {
    "company": "reddit",
    "size": "med",
    "industry": "tech",
    "title": "Agency Development Lead",
    "location": "New York",
    "absolute_url": "https://boards.greenhouse.io/reddit/jobs/1629470"
}, {
    "company": "reddit",
    "size": "med",
    "industry": "tech",
    "title": "Agency Development Partnerships Manager",
    "location": "New York",
    "absolute_url": "https://boards.greenhouse.io/reddit/jobs/2008204"
}, {
    "company": "birchbox",
    "size": "med",
    "industry": "beauty",
    "title": "Data Analyst",
    "location": "New York, NY",
    "absolute_url": "http://www.birchbox.com/about/openings?gh_jid=2033786"
}, {
    "company": "birchbox",
    "size": "med",
    "industry": "beauty",
    "title": "Operations Intern - Birchbox UK",
    "location": "London",
    "absolute_url": "http://www.birchbox.com/about/openings?gh_jid=1968614"
}, {
    "company": "birchbox",
    "size": "med",
    "industry": "beauty",
    "title": "Part-Time Discovery Specialist (Temp)",
    "location": "New York",
    "absolute_url": "http://www.birchbox.com/about/openings?gh_jid=2049219"
}, {
    "company": "birchbox",
    "size": "med",
    "industry": "beauty",
    "title": "Senior Software Engineer (Frontend) ",
    "location": "New York",
    "absolute_url": "http://www.birchbox.com/about/openings?gh_jid=2027284"
}, {
    "company": "gitlab",
    "size": "lg",
    "industry": "tech",
    "title": "Area Sales Manager (Enterprise), Chicago, Houston, or Dallas",
    "location": "Remote - Chicago, Houston, or Dallas",
    "absolute_url": "https://boards.greenhouse.io/gitlab/jobs/4510056002"
}, {
    "company": "gitlab",
    "size": "lg",
    "industry": "tech",
    "title": "Area Sales Manager, Enterprise (Northern Europe)",
    "location": "Remote",
    "absolute_url": "https://boards.greenhouse.io/gitlab/jobs/4456264002"
}, {
    "company": "gitlab",
    "size": "lg",
    "industry": "tech",
    "title": "Area Sales Manager, Enterprise (Southern Europe)",
    "location": "Remote",
    "absolute_url": "https://boards.greenhouse.io/gitlab/jobs/4615919002"
}];


window.addEventListener('load', function () {
    new Vue({
        el: '#app',
        data: {
            search: null,
            search2: null,
            city: null,
            cities: ["San Francisco",
                "New York",
                "Chicago",
                "Remote"]
        },
        computed: {
            cols() {
                return JOBS.length >= 1 ? Object.keys(JOBS[0]) : []
            },
            colHeaders() {
                return this.cols.map(c => c.charAt(0).toUpperCase() + c.slice(1))
            },
            rows() {
                if (!JOBS.length) {
                    return []
                }
                if (!this.search && !this.search2) {
                    return JOBS
                }

                return JOBS.filter(job => {
                    var titleContains = !this.search || this.search && job['title'].toLowerCase().includes(this.search.toLowerCase())
                    var locationContains = !this.search2 || this.search2 && job['location'].toLowerCase().includes(this.search2.toLowerCase())
                    
                    return titleContains && locationContains
                })
            }
        }
    })
});

// window.addEventListener('load', function () {
//     getJobs();
// });

// function getJobs() {
//     Object.keys(COMPANIES).forEach(function (company) {
//         httpGetAsync("https://boards-api.greenhouse.io/v1/boards/" + company + "/jobs", company, collectData)
//     });
// }

// function insertJobsTable() {
//     var table = dataToTable(JOBS);
//     var tableElement = document.getElementById('jobs-table-div');
//     tableElement.style.display = 'none';
//     tableElement.innerHTML = table;
// }

// function filterJobs() {
//     document.getElementById('jobs-table-div').style.display = 'block';
//     var all = Array.prototype.slice.call(document.getElementsByTagName('tr'));
//     all.forEach(i => i.style.display = 'table-row');

//     selectorValues = [];
//     selectorValues.push(getSelectorValue('location-selector'));
//     selectorValues.push(hashString(getSelectorValue('size-selector')));
//     selectorValues.push(hashString(getSelectorValue('industry-selector')));
//     var toHide = getElementsWithoutText(selectorValues, 'tr');
//     toHide.forEach(i => i.style.display = 'none');
//     document.getElementById('header-row').style.display = 'table-row';
// }

// function getSelectorValue(selectorId) {
//     var element = document.getElementById(selectorId);
//     return element.options[element.selectedIndex].value;
// }

// function httpGetAsync(url, company, callback) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(company, JSON.parse(xmlHttp.responseText));
//     }
//     xmlHttp.open("GET", url, true);
//     xmlHttp.send(null);
// }

// function collectData(company, data) {
//     data['jobs'].forEach(function (item) {
//         var job = {};
//         job['company'] = company;
//         job['size'] = COMPANIES[company]['size'];
//         job['industry'] = COMPANIES[company]['industry'];
//         job['title'] = item['title'];
//         job['location'] = item['location']['name'];
//         job['absolute_url'] = item['absolute_url'];
//         JOBS.push(job);
//     });

//     COMPANIES[company]['fetched'] = true;
//     if (isDoneFetching()) insertJobsTable();
// }

// function isDoneFetching() {
//     var isDone = true;
//     Object.keys(COMPANIES).forEach(function (company) {
//         if (!COMPANIES[company]['fetched']) isDone = false;
//     });
//     return isDone;
// }

// function removeNestedKey(obj, parent, child) {
//     obj.forEach(function (item) {
//         item[parent] = item[parent][child];
//     });
//     return obj;
// }

// function dataToTable(data) {
//     var cols = Object.keys(data[0]);
//     var headerRow = '';
//     var bodyRows = '';

//     var ignoredHeaders = ['absolute_url', 'size', 'industry'];
//     cols.filter(col => !ignoredHeaders.includes(col)).map(function (col) {
//         headerRow += '<th class="border px-4 py-2">' + capitalizeFirstLetter(col) + '</th>';
//     });

//     data.map(function (row) {
//         bodyRows += '<tr>';
//         cols.filter(col => col !== 'absolute_url').map(function (colName) {
//             if (colName === 'title') {
//                 bodyRows += '<td class="border px-4 py-2"><a href="' + row['absolute_url'] + '">' + row[colName] + '</a></td>';
//             } else if (colName === 'size' || colName == 'industry') {
//                 bodyRows += '<td class="hidden">' + hashString(row[colName]) + '</td>'; // hash these values so they're more unique
//             } else {
//                 bodyRows += '<td class="border px-4 py-2">' + row[colName] + '</td>';
//             }
//         });
//         bodyRows += '</tr>';
//     });

//     return '<table class="m-auto">' +
//         '<thead><tr id="header-row">' +
//         headerRow +
//         '</tr></thead><tbody id="table-body">' +
//         bodyRows +
//         '</tbody></table>';
// }

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// function getElementsWithoutText(strs, tag) {
//     return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => strs.some(s => !el.textContent.trim().includes(s)));
// }

// // Java's hash function - https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
// function hashString(str) {
//     var hash = 0, i, chr;
//     if (str.length === 0) return hash;
//     for (i = 0; i < str.length; i++) {
//         chr = str.charCodeAt(i);
//         hash = ((hash << 5) - hash) + chr;
//         hash |= 0; // Convert to 32bit integer
//     }
//     return hash;
// };