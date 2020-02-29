function toggleNextDiv(clickedElement) {
    let div = clickedElement.nextElementSibling;
    div.classList.toggle("hidden");
}

function toggleIds(ids) {
    ids.forEach(id => document.getElementById(id).classList.toggle("hidden"));
}

function updateText(clickedElement, updatedText) {
    clickedElement.innerHTML = updatedText;
}

function toggleCareerPathModal() {
    document.getElementById('careerPathModal').classList.toggle("hidden");
}

function incrementJobCount() {
    let countElement = document.getElementById('myJobsCount');
    let count = parseInt(countElement.innerHTML);
    countElement.innerHTML = count + 1;
}