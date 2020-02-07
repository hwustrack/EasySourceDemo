const COMPANIES = {
    "Reddit": {
        "size": "med",
        "industry": "tech"
    },
    "Gitlab": {
        "size": "lg",
        "industry": "tech"
    },
    "Betterment": {
        "size": "sm",
        "industry": "fin"
    },
    "Birchbox": {
        "size": "med",
        "industry": "bty"
    },
    "Thrillist": {
        "size": "med",
        "industry": "mda"
    }
};

const IGNORED_COLUMNS = [
    "size",
    "industry",
    "absolute_url"
];

var JOBS = []


window.addEventListener('load', function () {
    new Vue({
        el: '#app',
        data: {
            loading: true,
            location: null,
            locations: [
                "San Francisco",
                "New York",
                "Chicago",
                "Remote"],
            size: null,
            sizes: [
                { text: "Small", value: "sm" },
                { text: "Medium", value: "med" },
                { text: "Large", value: "lg" }
            ],
            industry: null,
            industries: [
                { text: "Tech", value: "tech" },
                { text: "Media", value: "mda" },
                { text: "Beauty", value: "bty" },
                { text: "Finance", value: "fin" }
            ],
            titleSearch: null,
        },
        computed: {
            cols() {
                return JOBS.length >= 1 ? Object.keys(JOBS[0]).filter(j => !IGNORED_COLUMNS.includes(j)) : []
            },
            colHeaders() {
                return this.cols.map(c => capitalizeFirstLetter(c))
            },
            rows() {
                if (!JOBS.length) {
                    return []
                }

                return JOBS.filter(job => {
                    var locationContains = !this.location || this.location && job['location'].toLowerCase().includes(this.location.toLowerCase())
                    var industryContains = !this.industry || this.industry && job['industry'].toLowerCase().includes(this.industry.toLowerCase())
                    var sizeContains = !this.size || this.size && job['size'].toLowerCase().includes(this.size.toLowerCase())
                    var titleContains = !this.titleSearch || this.titleSearch && job['title'].toLowerCase().includes(this.titleSearch.toLowerCase())

                    return titleContains && locationContains && industryContains && sizeContains
                })
            }
        },
        mounted() {
            getJobsFuncs = Object.keys(COMPANIES).map(c => getJobs(c))
            Promise.all(getJobsFuncs).then(_ => this.loading = false)
        }
    })
});

async function getJobs(company) {
    var response = await axios.get("https://boards-api.greenhouse.io/v1/boards/" + company + "/jobs")
    response['data']['jobs'].forEach(function (item) {
        var job = {};
        job['company'] = company;
        job['size'] = COMPANIES[company]['size'];
        job['industry'] = COMPANIES[company]['industry'];
        job['title'] = item['title'];
        job['location'] = item['location']['name'];
        job['absolute_url'] = item['absolute_url'];
        JOBS.push(job);
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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